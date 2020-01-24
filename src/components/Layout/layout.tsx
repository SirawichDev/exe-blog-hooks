import React, { FC } from "react"

import { Layout, Menu, Breadcrumb, Icon, Col, Row } from "antd"

import Navbar from "../NavBar"
import Footer from "../Footer"
import "./layout.scss"
const { Content } = Layout

interface Prop {
  children?: any
}
const Layouts : FC<Prop> = ({children}) => {
  return (
    <>
    <Row>
      <Col span={24}>
      <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Navbar />
  
        <Content className="content">{children}</Content>
 
        <Footer />
      </Layout>
      </Col>
      </Row>
    </>
  )
}

export default Layouts
