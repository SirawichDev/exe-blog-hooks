import React, { FC } from "react"
import "../sass/navbar.scss"
import { Layout, Menu, Icon, Row, Col, Breadcrumb, Typography } from "antd"
import { Link } from "gatsby"
import HeaderText from "./HeaderText"
const { Header, Content } = Layout
const { Text } = Typography

interface Props {
  location?: any
}
const NavBar: FC<Props> = ({ location }) => {
  return (
    <Row type="flex" justify="end">
      <Header className="header" style={{ backgroundColor: "transparent" }}>
        <Col span={12}>
          <Text>LOGO</Text>
        </Col>
        <Row type="flex" justify="end">
          <Col sm={23} xs={10} lg={18}>
            <Menu
              className="nav-transparent"
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px", border: "none" }}
            >
              <Menu.Item key="1">
                <Link state={{ pathName: "home" }} to="/">
                  <Icon type="home" />
                  Home{" "}
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link state={{ pathName: "blog" }} to="/blog">
                  <Icon type="code" />
                  Blog{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                {" "}
                <Link to="/lifeStyle" state={{ pathName: "life_style" }}>
                  <Icon type="sync" spin />
                  Lift Style
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact">
                  <Icon type="phone" />
                  Contact
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </Row>
  )
}

export default NavBar
