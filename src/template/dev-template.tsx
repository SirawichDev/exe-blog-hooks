import React, { FC } from "react"
import { graphql } from "gatsby"
import { Layout } from "antd"

const DevTemplate: FC<Props> = ({ data }) => {
  const {
    title,
    description: { description },
    start,
    slug,
    tags: { tags },
    images,
  } = data.dev
  const [mainImage, ...devImages] = images
  return (
    <Layout>
      <img src={mainImage.fluid.src} />
      <h1>{title}</h1>
      <p>
          {description}
      </p>
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
