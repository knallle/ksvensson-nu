import React from "react";
import g from 'glamorous';
import Link from 'gatsby-link';
import ContentListItem from '../components/contentListItem';
import { rhythm } from '../utils/typography';

export default ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <div>
      <h2>All posts</h2>
      {edges.map(({ node }) => (
        <ContentListItem node={node} key={node.id} />
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
        }
      }
    ) {
      totalCount
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
`
