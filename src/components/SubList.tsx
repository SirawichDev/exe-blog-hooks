import React from "react"
import { Col, Row, Radio, Button } from "antd"
import Text from "antd/lib/typography/Text"

const SubList = () => {
  return (
    <div>
      <Row>
        <Col offset={6}>
          <Col span={2} offset={2}>
            <Button type="primary">All</Button>
          </Col>
          <Col span={2} offset={3}>
            <Button type="primary">Blog</Button>
          </Col>
          <Col span={3} offset={2}>
            <Button type="primary" block>
              Life Style
            </Button>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default SubList
