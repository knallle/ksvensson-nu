import React from "react";

export default ({data}) => (
  <div>
    <h2>About Kalle</h2>
    <p>
      Kalle is a curious and tech savvy engineer who enjoy trying out new things.
    </p>
    <p>
      This web site is the result of a few weeks worth of self studies in the fiel of modern web development. After a few weeks of consuming tutorials, blog posts and other media arguing for this or that framework, Kalle chose to settle on React.js and Gatsby.
    </p>
    <p>
      The main structure of this site comes from an excellent tutorial at Gatsby's website (<a href="https://www.gatsbyjs.org/tutorial/">link</a>), which is stronly recommended for those who wish to do as Kalle did and learn how to develop a static web site.
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
