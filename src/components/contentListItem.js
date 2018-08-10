import React from 'react';
import g from "glamorous";
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import C from '../styling/layout-parameters.js';



import PostInfo from '../components/post-info';

const Title = g.h3({
  marginBottom: rhythm(1 / 8),
});

const InfoRow = g.h4({
  marginBottom: rhythm(1 / 4),
  color: 'black',
  float: 'left'
});

const Excerpt = g.p({});

class ContentListItem extends React.Component {
  render() {
    const node = this.props.node;
    const mode = this.props.mode;
    return (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Title>{node.frontmatter.title}</Title>
          <PostInfo node={node} mode={mode} />
          <Excerpt>{node.excerpt}</Excerpt>
        </Link>
      </div>
    )
  }
}

export default ContentListItem;
