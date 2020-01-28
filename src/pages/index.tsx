import React, { FC } from "react"
import { Link } from "gatsby"

import Layouts from "../components/Layout/layout"
import "../sass/index.scss"
import SubList from "../components/SubList"
import { Row, Col, Layout } from "antd"
const { Content } = Layout
import CardList from "../components/CardList"
import HeaderText from "../components/HeaderText"
import CardAudio from "../components/CardList/CardAudio"

type Props = {
  location?: any
}
const IndexPage: FC<Props> = ({ location }) => {
  return (
    <Layouts>
      <Row type="flex" justify="center" style={{ backgroundColor: "#f6f6f6" }}>
        <Col span={24}>
          <Content>
            <HeaderText text="Welcome To My Home" />
          </Content>
        </Col>
        <SubList />
      </Row>
      <Row type="flex" gutter={2} justify="space-around">
        <CardList />
        <CardAudio/>
        <CardList withVid/>
      </Row>
    </Layouts>
  )
}

export default IndexPage
