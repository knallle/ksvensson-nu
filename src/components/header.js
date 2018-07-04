import React from 'react';
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import C from '../styling/layout-parameters.js';

class HeaderLink extends React.Component {
  render() {
    return (
      <Link to={this.props.linksTo}>
        <g.H3
          float='left'
          margin='0'
          marginLeft='5px'
        >
          {this.props.text}
        </g.H3>
      </Link>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <g.Div
        top='0'
        height={C.headerHeight}
        backgroundColor='transparent'

      >
        <Link to={`/`}>
            <g.H3
              float='left'
              margin='0'
              backgroundColor='transparent'
            >
              {this.props.title}
            </g.H3>
        </Link>
        <g.Div
          float='right'
          backgroundColor='transparent'
        >
          <HeaderLink linksTo='/tags/' text='Tags' />
          <HeaderLink linksTo='/about/' text='About' />
        </g.Div>
      </g.Div>
    )
  }
}

export default Header;
