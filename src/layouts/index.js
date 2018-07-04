import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Footer from '../components/footer';
import Header from '../components/header';
import C from '../styling/layout-parameters.js';

import { rhythm } from "../utils/typography";

require("../styling/prism-theme.css");
require("../styling/prism-highlight-line.css");
require("../styling/content-style.css");

const mainContainerStyle = css({
  margin: `0 auto`,
  minHeight: '70vh',
  maxWidth: C.maxWidth,
  padding: rhythm(1/4),
  minHeight: '-webkit-calc(100vh - ' + C.footerHeight + ')',
  minHeight: '-moz-calc(100vh - ' + C.footerHeight + ')',
  minHeight: 'calc(100vh - ' + C.footerHeight + ')',
})

const outerContainer = css({
  padding: '0',
  margin: `0 auto`,
  width: '100%',
  display: 'block',
  boxSizing: 'border-box',
  backgroundColor: 'white',
});

const mainWrapper = css({
  width: '100vw',
  height: '100vh',
});

export default ({ children, data }) => (
  <div className={mainWrapper}>

    <div className={outerContainer}>
      <div className={mainContainerStyle}>
        <Header title={data.site.siteMetadata.title}/>
        {children()}
        <br/>
      </div>
    </div>

    <Footer text={'Copyright Karl Svensson ' + (new Date).getFullYear()} />
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
