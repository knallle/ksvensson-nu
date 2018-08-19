import React from 'react';
import g from "glamorous";
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import C from '../styling/layout-parameters.js';

import TagItem from '../components/tag-item';
// import VisualDivider from '../components/visual-divider';

const InfoDiv = g.div({
  width: '100%',
  height: C.infoDivHeight,
  lineHeight: C.infoDivHeight,
  float: 'left',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'row',
  color: C.colors.infoDivColor,
  fontWeight: '300',

});

function Info(props) {
  const mode = props.mode;
  const node = props.node;

  const minuteString = (node.timeToRead === 1 ? 'minute': 'minutes');
  const sortedTags = node.frontmatter.tags.sort(function (a,b) {return a.localeCompare(b);}).reverse();

  switch(mode) {

    case 'compact':
      return (
        <g.Div
          height='100%'
          display='inline-block'
        >
          <InfoDiv>
            <g.Div float='right'>
              {node.frontmatter.tags.map( tag => <TagItem tag={tag} key={tag} /> )}
            </g.Div>
          </InfoDiv>
        </g.Div>
      );
      break;

    case 'normal':
      return (
        <div>
            <g.Div
              height='100%'
              display='inline-block'
            >
              <InfoDiv>
                {'Time to read: '}{node.timeToRead}{' '}{minuteString}
              </InfoDiv>
              <InfoDiv>
                {'Published '}{node.frontmatter.date}{' by '}{node.frontmatter.author}
              </InfoDiv>
              <InfoDiv>
                <g.Div float='right'>
                  {node.frontmatter.tags.map( tag => <TagItem tag={tag} key={tag} /> )}
                </g.Div>
              </InfoDiv>
            </g.Div>
        </div>
      );
      break;

    default:
      return (
        <p>Invalid mode</p>
      );
      break;
  }
}

class PostInfo extends React.Component {
  render() {
    const node = this.props.node;
    const mode = this.props.mode;

    return (
      <Info mode={mode} node={node} />
    )
  }
}

export default PostInfo;
