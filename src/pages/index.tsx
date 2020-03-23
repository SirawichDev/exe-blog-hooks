import React, { FC, ReactElement, useState, useEffect } from "react"
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
        blogtype: {
          type: string[]
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
            blogtype {
              type
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

  let data = PostListQuery.allContentfulDevTour.edges.map(
    (head: any) => head.node
  )

  const [typeBlog, setTypeBlog] = useState<string>("")
  const [filteredData, setfilteredData] = useState<Array<object>>(data)
  const getTypeFromClick = (id: string) => {
    setTypeBlog(id)
  }
  useEffect(() => {
    if (typeBlog !== "ALL") {
      setfilteredData(data.filter((dt: any) => dt.blogtype.type === typeBlog))
    } else setfilteredData(data)
  }, [typeBlog])
  return (
    <Layouts>
      <Row type="flex" justify="center">
        <Col span={24}>
          <Content>
            <HeaderText text="Welcome To My Home" />
          </Content>
        </Col>
        <SubList filterType={getTypeFromClick} />
      </Row>
      <Row type="flex" justify="space-around">
        {filteredData.map((item: any) => (
          <CardList data={item} key={item.id} />
        ))}
      </Row>
    </Layouts>
  )
}

export default IndexPage
