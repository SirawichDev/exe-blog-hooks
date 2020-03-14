import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import Col from "antd/es/col"
import Row from 'antd/es/row'
import Typography from 'antd/es/typography'
import SideBar from "../components/SideBar"
import { UseResolution } from '../utils/useResolutuon'
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
  const [width, height] = UseResolution()
  console.log('www', width)
  return (
    <Layout>
      <Row type="flex" justify="space-between">
        <Col xs={24}>
          <Col style={{ marginTop: "4rem", padding: `${width <= 425 ? '.5rem' : '4.5rem'}` }}>
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
            <Col>
              <div
                style={{ fontSize: '16px' }}
                dangerouslySetInnerHTML={{
                  __html: childMarkdownRemark.html,
                }}
              />
            </Col>
          </Col>
          <Col sm={0}>
            <Row type="flex" className="container">
              <SideBar title="Latest Post" />
            </Row>
            <Row type="flex" className="container">
              <SideBar tags={tags} title="Tags" />
            </Row>
          </Col>
        </Col>
      </Row>
    </Layout >
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
