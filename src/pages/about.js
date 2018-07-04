import React from "react";

export default ({data}) => (
  <div>
    <h2>About Kalle</h2>
    <p>
      Kalle is a curious and tech savvy engineer who enjoy trying out new things.
    </p>
    <p>
      This web site is the result of a few weeks worth of self studies in the field of modern web development. Its purpose is twofold: i) by creating the site, Kalle got to learn a lot about modern web development and ii) the site will be a natural place for Kalle to document thoughts, projects, and discoveries.
    </p>
    <p>
      The main structure of the site comes from an excellent tutorial at Gatsby's website (<a href="https://www.gatsbyjs.org/tutorial/">link</a>), which is strongly recommended for those who wish to do as Kalle did and learn how to develop a static web site.
    </p>
    <p>
      If you wish to learn more about Kalle and/or get in touch with him, please refer to the contact links at the bottom of the page.
    </p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
