import React, { FC } from "react"
import "../sass/navbar.scss"
import { Layout, Menu, Icon, Row, Col, Affix, Typography } from "antd"
import { Link, useStaticQuery, graphql } from "gatsby"
const { Header, Content } = Layout
const { Text } = Typography

const logoQuery = graphql`
  query{
    file(relativePath: {eq:"exe-blog-x.png"}) {
      publicURL
    }
  }
`
interface Props {
  location?: any
}
const NavBar: FC<Props> = ({ location }) => {
  const {
    file: { publicURL },
  } = useStaticQuery(logoQuery)
  console.log("relativePath", publicURL)
  const logoFixed = publicURL;
  return (
    <Affix offsetTop={0}>
      <Row type="flex" justify="end">
        <Header className="header" style={{ backgroundColor: "transparent" }}>
          <Col span={12} offset={1}>
            <a><img style={{ width: '120px', height: '100px' }} src={`${logoFixed}`} /></a>
          </Col>
          <Row type="flex" justify="end">
            <Col sm={23} xs={10} lg={18}>
              <Menu
                className="nav"
                theme="light"
                mode="horizontal"
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
                  <Link to="/lifestyle" state={{ pathName: "life_style" }}>
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
    </Affix>
  )
}

export default NavBar
