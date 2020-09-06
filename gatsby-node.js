const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContentfulArticle(sort: { fields: category }) {
        edges {
          node {
            category
          }
        }
      }
    }
  `);
  const duplicatedCategories = results.data.allContentfulArticle.edges.map((edge) => {
    return edge.node.category;
  });
  const pagesToCreate = [...new Set(duplicatedCategories)];
  pagesToCreate.forEach((pageName)=>{
      createPage({
          path: `${pageName}`,
          component: path.resolve('src/templates/category-page.js'),
          context: {
            cat: pageName
          },
      })
  })
};
