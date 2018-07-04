import React from 'react';
import g from "glamorous";
import { css } from "glamor";

import C from '../styling/layout-parameters.js';

const footerStyle = css({
  background: C.colors.darkBackgroundColor,
  width: '100%',
  height: C.footerHeight,
  margin: '0',
  padding: '0',
});

const innerFooterStyle = css({
  textAlign: 'center',
  padding: '0',
  margin: '0 auto',
  color: C.colors.brightTextColor,
  backgroundColor: 'transparent',
  width: '100%',
  maxWidth: '100%',
  overflow: 'auto',
});

class ContactRow extends React.Component {
  render() {
    const LinkItem = g.a({fontStyle: 'inherit', color: 'inherit', fontFamily: 'inherit'});
    const Separator = ' | ';
    return (
      <g.P
        margin='2px auto'
      >
        <LinkItem href='https://www.linkedin.com/in/karl-svensson/'> LinkedIn</LinkItem>
        {Separator}
        <LinkItem href='https://github.com/knallle'> Github</LinkItem>
        {Separator}
        <LinkItem href='https://500px.com/k_a_ll_e'> 500px</LinkItem>
        {Separator}
        <LinkItem href='https://t.me/knallle'> Telegram</LinkItem>
        {Separator}
        <LinkItem href='https://twitter.com/KarlKerl'> Twitter</LinkItem>
      </g.P>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className={footerStyle}>
        <div className={innerFooterStyle}>
          <ContactRow />
          <g.P margin='0' >{this.props.text}</g.P>
        </div>
      </div>
    )
  }
}

export default Footer;
