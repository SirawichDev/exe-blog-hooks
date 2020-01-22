import React from "react"
import "../sass/navbar.scss"
import { Layout, Menu, Icon, Row, Col } from "antd"
import { Link } from "gatsby"
const { Header } = Layout
const NavBar = () => {
  return (
    <Row>
      <Header className="header">
        <div className="logo" />
        <Col span={12} offset={6}>
          <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Col span={6} offset={2}>
              <Menu.Item key="1" className="with-icon">
                {" "}
                <Link to="/">
                  <Col span={4}>
                    <Icon type="home" />
                  </Col>
                  Home
                </Link>
              </Menu.Item>
            </Col>
            <Col span={6} offset={2}>
              <Menu.Item key="2" className="with-icon">
                {" "}
                <Link to="/blog/">
                  {" "}
                  <Col span={4}>
                    <Icon type="fire" />
                  </Col>
                  Blog
                </Link>
              </Menu.Item>
            </Col>
            <Col span={6} offset={2}>
              <Menu.Item key="3" className="with-icon">
                {" "}
                <Col span={4}>
                  <Icon type="inbox" />
                </Col>
                Contact
              </Menu.Item>
            </Col>
          </Menu>
        </Col>
      </Header>
    </Row>
  )
}

export default NavBar
