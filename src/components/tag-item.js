import React from 'react';
import g from "glamorous";
import Link from 'gatsby-link';
import C from '../styling/layout-parameters.js';
import { rhythm } from '../utils/typography';
const _ = require('lodash');

class TagItem extends React.Component {
  render() {
    const tag = this.props.tag;
    return (
        <g.Div
          float='right'
          marginLeft='5px'
        >
        <object>
          <Link
            to={`/tags/${_.kebabCase(tag)}/`}
            css={{ color: C.colors.infoDivColor }}
          >
            #{tag}
          </Link>
          </object>
        </g.Div>

    )
  }
}

export default TagItem;
