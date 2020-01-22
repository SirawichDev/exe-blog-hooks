import React from "react"

import { Layout, Menu, Breadcrumb, Icon, Col, Row } from "antd"

import Navbar from "../NavBar"
import Footer from "../Footer"
import "./layout.scss"
const { Content } = Layout

interface Prop {
  children?: any
}
const Layouts = ({ children } : Prop) => {
  return (
    <>
    <Row>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Col span={24} offset={6}>
        <Content className="content">{children}</Content>
        </Col>
        <Footer />
      </Layout>
      </Row>
    </>
  )
}

export default Layouts
