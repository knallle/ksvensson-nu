import React from "react";
import PropTypes from "prop-types";
import g from "glamorous";

// Components
import Link from "gatsby-link";
import ContentListItem from '../components/contentListItem';

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges } = data.allMarkdownRemark;


  const tagHeader = `Posts about #${tag}:`
  return (
    <div>
      <g.H2 fontStyle='normal'>{tagHeader}</g.H2>
      {edges.map(({ node }) => (
        <ContentListItem node={node} key={node.id} />
      ))}
      <Link to="/tags">All tags</Link>
    </div>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              type: PropTypes.string.isRequired,
            }),
            excerpt: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: {
          published: { eq: true }
          tags: { in: [$tag] }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            type
            tags
          }
          excerpt
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;
