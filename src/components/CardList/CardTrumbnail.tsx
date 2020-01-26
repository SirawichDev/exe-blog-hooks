import React from "react"
import Rabbit from "../../images/rabbit.jpg"
import { Row, Col } from "antd"

const CardThumb = () => {
  return (
    <Row type="flex">
      <Col>
        <div className="blog-item-thumb">
          <a>
            <img src={Rabbit} alt="blog thumb" />
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default CardThumb
