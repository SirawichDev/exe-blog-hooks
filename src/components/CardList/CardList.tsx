import React from "react"
import { Row, Col } from "antd"
import CardContent from "./CartContent"
import CardThumb from "./CardTrumbnail"
import "../../sass/cardList.scss"
const CardList = () => {
  return (
    <Row type="flex" justify="space-around">
      <div className="exe-blog-item">
        {" "}
        <Col span={12}>
          <CardContent />
        </Col>
        <Col span={10}>
          <CardThumb />
        </Col>
      </div>
    </Row>
  )
}

export default CardList
