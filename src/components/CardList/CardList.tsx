import React, { FC } from "react"
import { Row, Col } from "antd"
import CardContent from "./CartContent"
import CardThumb from "./CardTrumbnail"
import "../../sass/cardList.scss"
import { useStaticQuery, graphql } from "gatsby"
import Item from "antd/lib/list/Item"
import CardVid from "./CardWithVideo"

interface Props {
  withVid?: boolean
  data?: object
}

const CardList: FC<Props> = ({ withVid, data }) => {
  // console.log('data', data.name)
  return (
    <Row type="flex" justify="space-between">
      <div className={`exe-blog-item`}>
        {" "}
        <Col span={24}>
          <CardContent name={data?.name} description={data?.description} date={data?.start} image={data?.images} />
        </Col>
      </div>
    </Row>
  )
}

export default CardList
