import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../sass/index.scss'
import SubList from "../components/SubList"
import { Row, Col } from "antd"
const IndexPage = () => (
  <Layout>
    <Row>
      <Col span={24}>
    <SEO title="Home" />
    <SubList/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/">Go to page 2</Link>
    </Col>
    </Row>
  </Layout>
)

export default IndexPage
