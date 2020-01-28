import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import HeaderText from "../components/HeaderText"

type Props = {
  location?: any
}

export const queryPath = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`
const Blog = (queryPath : any) => {
  console.log("ss", queryPath.path.split("/")[1])
  // const pathName = !location.state.pathName
  return (
    <Layout>
      <HeaderText text={`Welcome To My ${queryPath.path.split("/")[1]}`} />
    </Layout>
  )
}

export default Blog
