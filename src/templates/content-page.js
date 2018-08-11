import React from 'react';
import g from 'glamorous';
import { rhythm } from '../utils/typography';

import '../styling/content-style.css';

import PostInfo from '../components/post-info';

const Title = g.h3({
  marginBottom: rhythm(1 / 8),
});

export default ( { data }) => {
  const node = data.markdownRemark;
  return (
    <div>
      <Title>{node.frontmatter.title}</Title>
      <PostInfo node={node} mode={'normal'} />
      <div dangerouslySetInnerHTML={{ __html: node.html }} className={"main-content"} />
      </div>
  );
};

export const query = graphql`
  query ContentQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date
        author
        type
        tags
      }
      timeToRead
    }
  }
`
