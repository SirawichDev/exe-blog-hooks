const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      devs: allContentfulDevTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  console.log("backend", data)
  data.devs.edges.forEach(({ node }) => {
    createPage({
      path: `blogs/${node.slug}`,
      component: path.resolve("./src/template/dev-template.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}
