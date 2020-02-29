import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import { Row, Col, Typography } from "antd"

const { Text } = Typography
const DevTemplate: FC<Props> = ({ data }) => {
  const {
    title,
    description: { description, childMarkdownRemark },
    start,
    slug,
    tags: { tags },
    images,
  } = data.dev
  const [mainImage, ...devImages] = images
  const date: String = String(new Date(start))
  console.log('date',date.split(" ")[0])
  console.log('date',date.split(" ")[1])
  return (
    <Layout>
      <Row type="flex" justify="center">
        <Col span={20} style={{ marginTop: "4rem" }} mt>
          <Row type="flex" justify="start">
            <Text strong style={{ fontSize: "20px" }}>
              {title}
            </Text>
          </Row>
          <Row type="flex" justify="start">
            <Text style={{ fontSize: "15px" }}>{date}</Text>
          </Row>
          <img className="dev-template-img" src={mainImage.fluid.src} />
          <div
            style={{ margin: "3rem" }}
            dangerouslySetInnerHTML={{
              __html: childMarkdownRemark.html,
            }}
          />
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
      start
      images {
        fluid {
          src
        }
      }
    }
  }
`
export default DevTemplate
