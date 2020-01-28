import React, { FC } from "react"
import { Row, Col } from "antd"
import CardContent from "./CartContent"
import CardThumb from "./CardTrumbnail"
import "../../sass/cardList.scss"

interface Props {
  withVid?:boolean
}
const CardList: FC<Props> = ({withVid}) => {
  return (
    <Row type="flex" justify="space-around">
      <div className={`exe-blog-item  ${withVid && 'blog-item-video'}`}>
        {" "}
        <Col span={12}>
          <CardContent />
        </Col>
        <Col span={10}>
          <CardThumb withVid={withVid} />
        </Col>
      </div>
    </Row>
  )
}

export default CardList
