import React, { FC } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layouts from "../components/Layout/layout"
import "../sass/index.scss"
import SubList from "../components/SubList"
import { Row, Col, Layout } from "antd"
const { Content } = Layout
import CardList from "../components/CardList"
import HeaderText from "../components/HeaderText"
import CardAudio from "../components/CardList/CardAudio"

const PostListQuery = graphql`
query{
  allContentfulDevTour{
    edges{
      node{
        id
        name
        start
        tags{
          tags
        }
        images {
          id
          file {
            url
          }
        }
        description{
          description
        }
      }
    }
  }
}

`

type Props = {
  location?: any
}
const IndexPage: FC<Props> = ({ location }) => {
  const { allContentfulDevTour: { edges } } = useStaticQuery(PostListQuery)
  const data = edges.map((item: any) => item.node)

  return (
    <Layouts>
      <Row type="flex" justify="center">
        <Col span={24}>
          <Content>
            <HeaderText text="Welcome To My Home" />
          </Content>
        </Col>
        <SubList />
      </Row>
      <Row type="flex" justify="space-around">
        {data.map((item: any) => (
          <CardList data={item} key={item.id} />
        ))}
      </Row>
    </Layouts>
  )
}

export default IndexPage
