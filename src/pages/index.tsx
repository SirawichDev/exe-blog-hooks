import React, { FC, ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layouts from "../components/Layout/layout"
import "../sass/index.scss"
import SubList from "../components/SubList"
import { Row, Col, Layout } from "antd"
const { Content } = Layout
import CardList from "../components/CardList"
import HeaderText from "../components/HeaderText"
import CardAudio from "../components/CardList/CardAudio"

type IndexProp = {
  allContentfulDevTour: {
    edges: {
      node: {
        id: number
        title: string
        start: string
        tags: {
          tags: string[]
        }
        slug: string
        images: {
          id: number
          file: {
            url: string
          }
        }
        description: {
          description: string
        }
      }
    }
  }
}

const IndexPage = () => {
  const PostListQuery = useStaticQuery<IndexProp>(graphql`
    query {
      allContentfulDevTour {
        edges {
          node {
            id
            title
            start
            tags {
              tags
            }
            slug
            images {
              id
              file {
                url
              }
            }
            description {
              description
            }
          }
        }
      }
    }
  `)
 
  const data = PostListQuery.allContentfulDevTour.edges.map((head: any) => head.node )

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
