import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import { textColor, backgrounds, shadows, borders } from '../utils/colorsSetup';

const pageHeadingStyle = `
text-align: center;
color: ${textColor.primary};
`;

const categoryPageMainStyle = `
display: flex;
width: 100%;
color: ${textColor.primary};
flex-direction: column;
align-content: center;
padding: 32px;
& .gatsby-image-wrapper{
  margin-bottom: 8px;
}
`;

const articleContainerStyle = `
width: 100%;
display: flex;
flex-direction: row;
box-shadow: ${shadows.shadow2};
border: 1px solid ${borders.light};
border-radius: 6px;
margin: 12px 0 12px;
padding: 16px;
background-color:${backgrounds.default}

`;
const imagePartStyle = `
margin-right: 20px;
& h4{
  margin-bottom: 0;
  padding-left: 4px;
}
`;

const imgStyle = `
width: 600px;
height: 400px;
margin-bottom: 16px;
`;

const textPartStyle = `
  font-size: 16px;
  line-height: 1.35;
  spacing: normal;
`;

export const query = graphql`
  query($cat: String!) {
    allContentfulArticle(filter: { category: { eq: $cat } }) {
      edges {
        node {
          category
          title
          description {
            json
          }
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          orderNumber
        }
      }
    }
  }
`;

export default function CategoryPage({ data }) {
  const articles = data.allContentfulArticle.edges;
  const pageTitle = articles[0].node.category;
  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
      </Helmet>
      <section css={categoryPageMainStyle}>
        <h1 css={pageHeadingStyle}>{pageTitle}</h1>
        {articles?.map((article) => (
          <article css={articleContainerStyle} key={article.node.title}>
            <div css={imagePartStyle}>
              <Img css={imgStyle} fluid={article.node.image.fluid} objectFit='cover' objectPosition='50% 50%' />
              <h4>{article.node.title}</h4>
            </div>
            <div css={textPartStyle}>{documentToReactComponents(article.node.description.json)}</div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
