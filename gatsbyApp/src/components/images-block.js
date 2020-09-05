import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const imgStyle = `
width: 200px;
height: 200px
`;

export default function ImagesBlock() {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulArticle {
            edges {
              node {
                image {
                  fluid(quality: 100) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulArticle: { edges } }) => (
        <div>
          {edges.map(({ node: { image:{ fluid} } }) => (
            <Img css={imgStyle} fluid={fluid} objectFit='cover' objectPosition='50% 50%' />
          ))}
        </div>
      )}
    />
  );
}
