import React, { FC } from "react"

import { Layout, Menu, Breadcrumb, Icon, Col, Row } from "antd"

import Navbar from "../NavBar"
import Footer from "../Footer"
import "./layout.scss"
const { Content } = Layout

interface Prop {
  children?: any
  location?:any
}
const Layouts : FC<Prop> = ({children, location}) => {
  console.log('prop', location)
  return (
    <>
    <Row>
      <Col span={24}>
      <Layout style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: 'white'}}>
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
