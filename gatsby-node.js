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
  data.devs.edges.forEach(({ node }) => {
    createPage({
      path: `blogs/${node.slug}`,
      component: path.resolve("./src/template/dev-template.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })
  const blogs = data.devs.edges
  const postPerPage = 4
  const numPage = Math.ceil(blogs.length / postPerPage)

   Array.from({ length: numPage }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/dev-blogs` : `/dev-blogs/${i + 1}`,
      component: path.resolve("./src/template/blog-list-template.tsx"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPage,
        currentPage: i + 1,
      },
    })
  })
}
