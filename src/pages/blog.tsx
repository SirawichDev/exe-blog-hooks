import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import HeaderText from "../components/HeaderText"

type Props = {
  location?: any
}
const Blog: FC<Props> = ({ location }) => {
  // const pathName = !location.state.pathName
  return (
    <Layout>
      {/* {pathName ? (
        <HeaderText text={`Welcome To My ${pathName}`} />
      ) : (
        <HeaderText text={`Welcome To My Home`} />
      )} */}
      <HeaderText text={`Welcome To My Home`} />
    </Layout>
  )
}

export default Blog
