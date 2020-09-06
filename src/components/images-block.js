import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const imgStyle = `
width: 400px;
height: 300px
`;

const imagesBlockMainStyle = `
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 32px;
`;

const imageCardStyle = `
display:flex;
flex-direction: column;
max-width: 450px;
width: 100%;
align-items: center;
justify-content: center;
padding: 8px;
margin:0 12px 24px 12px;
& h4{
    margin-bottom: 0.5em;
}
`;

export default function ImagesBlock() {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulArticle {
            edges {
              node {
                title
                image {
                  fluid(quality: 100) {
                   ...GatsbyContentfulFluid
                  }
                  description
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulArticle: { edges } }) => (
        <div css={imagesBlockMainStyle}>
          {edges.map(({ node: { image: { fluid, description }, title } }) => (
            <div css={imageCardStyle} key={description}>
              <div>
                <h4>{`${title}, ${description}`}</h4>
              </div>
              <Img css={imgStyle} fluid={fluid} objectFit='cover' objectPosition='50% 50%' />
            </div>
          ))}
        </div>
      )}
    />
  );
}
