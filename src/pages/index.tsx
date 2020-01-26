import React, { FC } from "react"
import { Link } from "gatsby"

import Layouts from "../components/Layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import "../sass/index.scss"
import SubList from "../components/SubList"
import { Row, Col, Layout } from "antd"
const { Content } = Layout
import CardList from "../components/CardList"
import HeaderText from "../components/HeaderText"

type Props = {
  location?: any
}
const IndexPage: FC<Props> = ({ location }) => {
  // console.log('in',location.state.pathName)
  return (
    <Layouts>
      <Row type="flex" justify="center" style={{ backgroundColor: "#f6f6f6" }}>
        <SEO title="Home" />
        <Col span={24}>
          <Content>
            <HeaderText text="Welcome To My Home" />
          </Content>
        </Col>
        <SubList />
      </Row>
      <Row type="flex" gutter={2} justify="space-around">
        <CardList />
        <CardList />
      </Row>
    </Layouts>
  )
}

export default IndexPage
