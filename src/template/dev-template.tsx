import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import { Row, Col, Typography } from "antd"
import SideBar from "../components/SideBar"

const { Text } = Typography
const DevTemplate = ({ data }) => {
  const {
    title,
    description: { description, childMarkdownRemark },
    start,
    slug,
    tags: { tags },
    images,
  } = data.dev
  const [mainImage, ...devImages] = images
  console.log('tt',tags)
  return (
    <Layout>
      <Row type="flex" justify="space-between">
        <Col span={24}>
          <Col  span={18} style={{ marginTop: "4rem", padding: "4.5rem" }}>
            <Row type="flex">
              <Col style={{ paddingTop: "2rem" }}>
                <Text strong style={{ fontSize: "20px" }}>
                  {title}
                </Text>
                <br />
                <Text style={{ fontSize: "15px" }}>{start}</Text>
              </Col>
            </Row>
            
            <img className="dev-template-img" src={mainImage.fluid.src} />
            <div
              style={{fontSize: '16px'}}
              dangerouslySetInnerHTML={{
                __html: childMarkdownRemark.html,
              }}
            />
          </Col>
          <Row type="flex" className="container">
            <SideBar title="Latest Post" />
          </Row>
          <Row type="flex" className="container">
            <SideBar tags={tags} title="Tags" />
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    dev: contentfulDevTour(slug: { eq: $slug }) {
      title
      tags {
        tags
      }
      description {
        description
        childMarkdownRemark {
          excerpt
          html
        }
      }
      start(formatString: "D MMMM ,YYYY")
      images {
        fluid {
          src
        }
      }
    }
  }
`
export default DevTemplate
