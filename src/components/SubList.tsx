import React from "react"
import { Col, Row, Radio, Button } from "antd"
import Text from "antd/lib/typography/Text"

const SubList = () => {
  return (
    <Row type="flex" justify="space-around" style={{marginBottom: '1rem', marginTop: '1rem'}}>
      <Col span={10}>
        <Button type="primary">All</Button>
      </Col>
      <Col span={10}>
        <Button type="primary">Blog</Button>
      </Col>
      <Col span={2}>
        <Button type="primary">Life Style</Button>
      </Col>
    </Row>
  )
}

export default SubList
