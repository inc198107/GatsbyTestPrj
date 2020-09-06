import React from 'react';
import { colors, backgrounds } from '../utils/colorsSetup';

const footerStyle = `
min-height: 60px;
width: 100%;
display: flex;
padding: 16px;
align-items: center;
justify-content: space-between;
font-size: 16px;
color: ${colors.white};
background: ${backgrounds.greyGradient1};
`;

const linkStyle=`
font-size: 16px;
color: ${colors.white};
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <span>© {new Date().getFullYear()}</span> 
      <a css={linkStyle} href='https://www.gatsbyjs.org'>Built with Gatsby</a>
    </footer>
  );
};

export default Footer;
