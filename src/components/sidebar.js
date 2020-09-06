import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { colors, backgrounds, borders,textColor } from '../utils/colorsSetup';

const sidebarMainStyle = `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    padding: 24px 8px 16px 8px;
    min-height: 100%;
    border: 0 1px 0 1px;
    border-color: ${borders.med};
    max-width: 324px;
    min-width: 200px;
    background-color: ${backgrounds.default}
`;

const navItem = `
    display: flex;
    align-items: center;
    margin: 0 1em 0 2em;
    padding: 0.5em 0 0.5em 1em;
    border-bottom: 0.05em solid ${colors.secondary.light};
    position: relative;
    color: ${textColor.primary};
    text-decoration: none;

    &:before {
      content: '';
      transition: 0.5s;
      width: 0.5em;
      height: 0.5em;
      position: absolute;
      left: 0;
      border-radius: 50%;
      display: block;
      background-color: ${colors.secondary.dark};
      transform: scale(0);
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      &:before {
        transform: scale(1);
      }
    }
  `

export default function Sidebar() {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulArticle {
            edges {
              node {
                category
              }
            }
          }
        }
      `}
      render={({ allContentfulArticle: { edges } }) => (
        <aside css={sidebarMainStyle}>
          {(() => {
            const nonUnicCategories = edges.map(({ node: { category } }) => category);
            const unicCategories = [...new Set(nonUnicCategories)];
            return unicCategories.map((item, id) => (
              <Link to={item} key={id} css={navItem}>
                {item}
              </Link>
            ));
          })()}
        </aside>
      )}
    />
  );
}
