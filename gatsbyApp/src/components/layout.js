import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

const layoutContainer=`
display: flex;
min-height: 100vh;
flex-direction: column;
width: calc(100% - 24px);
margin : 0 auto;
justify-content: space-between;
align-items: center;
`;

const mainContainer=`
display: flex;
width: 100%;
flex-grow: 1;
box-sizing: border-box;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div css={layoutContainer}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main css={mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
