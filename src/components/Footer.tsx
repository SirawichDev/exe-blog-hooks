import React from "react"
import { Layout, Row, Icon, Col } from "antd"
import { useStaticQuery, graphql } from "gatsby"

const siteQuery = graphql`
  {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`

const { Footer } = Layout
const Footers = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(siteQuery)

  console.log("ss", siteMetadata)

  return (
    <Footer>
      <Row type="flex" justify="center">
        <Col> Created By {siteMetadata.author}</Col>
      </Row>
      <Row type="flex" justify="center" style={{ marginTop: "20px" }}>
        <Col span={2}>
          {" "}
          <a href="https://github.com/SirawichDev">
            <Icon type="github" style={{ fontSize: "30px" }} />
          </a>
        </Col>
        <Col span={2}>
          {" "}
          <a href="https://www.facebook.com/mrbad.manex">  <Icon type="facebook" style={{ fontSize: "30px" }} /> </a>
        </Col>
        <Col>
          {" "}
          <a href="https://www.instagram.com/sirawichexe/"> <Icon type="instagram" style={{ fontSize: "30px" }} /></a>
        </Col>
      </Row>
    </Footer>
  )
}

export default Footers
