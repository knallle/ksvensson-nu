const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve("src/templates/content-page.js");
  const tagTemplate = path.resolve("src/templates/tags.js");

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                published
              }
            }
          }
        }
      }
    `
    ).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      // Create pages for the blog posts
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })

        // Tag pages
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {          
          if (_.get(edge, "node.frontmatter.published") == true) {
            if (_.get(edge, "node.frontmatter.tags")) {
              tags = tags.concat(edge.node.frontmatter.tags);
            }
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });


      })
      resolve()
    })
  })
};
