import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import HeaderText from "../components/HeaderText"

type Props = {
  location?: any
}
const Blog: FC<Props> = ({ location }) => (
  <Layout>
    { location.state.pathName !== undefined ? 
    <HeaderText text={`Welcome To My ${location.state.pathName}`} /> :
    <HeaderText text={`Welcome To My Home`} />
    }
  </Layout>
)

export default Blog
