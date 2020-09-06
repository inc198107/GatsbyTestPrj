import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { colors, backgrounds } from '../utils/colorsSetup';

const headerMainStyle = `
min-height: 60px;
width: 100%;
display: flex;
padding: 16px;
align-items: center;
justify-content: space-between;
font-size: 16px;
color: ${colors.white};
background: ${backgrounds.greyGradient50};
`;

const logoContainerStyle = `
width:46px;
height: 46px;
background-color: ${backgrounds.default};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;

const logoImageStyle = `
margin: 0;
object-fit: fill;
`;

const pageHeadingLink = `
  color: ${colors.white};
  text-decoration: none;
  font-family: 'Roboto';
  font-weight: bold;
`;

export default function Header({ siteTitle }) {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { name: { eq: "mountain-icon" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL },
            },
          ],
        },
      }) => (
        <header css={headerMainStyle}>
          <div>
            <h1 >
              <Link css={pageHeadingLink} to='/'>{siteTitle}</Link>
            </h1>
          </div>
          <div css={logoContainerStyle}>
            <img css={logoImageStyle} src={publicURL} alt={`mountain logo`} />
          </div>
        </header>
      )}
    />
  );
}
