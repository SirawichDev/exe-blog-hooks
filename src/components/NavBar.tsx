import React from "react"
import "../sass/navbar.scss"
import { Layout, Menu, Icon, Row, Col, Breadcrumb, Typography } from "antd"
import { Link } from "gatsby"
import HeaderText from "./HeaderText"
const { Header, Content } = Layout
const { Text } = Typography
const NavBar = () => {
  return (
    <Row>
      <Col span={24}>
        <Header className="header" style={{ backgroundColor: "transparent" }}>
          <Col span={12}>
            <Text>LOGO</Text>
          </Col>
          <Col span={12}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Icon type="home" />
                Home
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="code" />
                Blog
              </Menu.Item>
              <Menu.Item>
                {" "}
                <Icon type="sync" spin />
                Lift Style
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="phone" />
                Contact
              </Menu.Item>
            </Menu>
          </Col>
        </Header>
        <Content>
          <HeaderText text="Welcome To My Blog"/>
        </Content>
      </Col>
    </Row>
  )
}

export default NavBar
