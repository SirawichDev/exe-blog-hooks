import React, { FC } from "react"
import { Row, Col, Card } from "antd"
import CardContent from "./CartContent"
import CardThumb from "./CardTrumbnail"
import { useStaticQuery, graphql } from "gatsby"
import Item from "antd/lib/list/Item"
import CardVid from "./CardWithVideo"

interface Props {
  withVid?: boolean
  data?: object
}

const { Meta } = Card

const CardList: FC<Props> = ({ withVid, data }) => {
  const { tags } = data.tags;
  const date: String = String(new Date(data?.start))
  return (
    <Col xs={20} sm={20} md={10} lg={10}>
      <Card
        hoverable
        style={{ border: 'none' }}
        cover={data?.images.map((m: any) => (<img className="xImg" src={`https://${m?.file.url}`} />))}
      >
        <div className="post-date">
          {date.split(" ")[2]}
          <span className="month">
            {date.split(" ")[1]}
          </span>
        </div>
        <Row type="flex" justify="start" >
          {tags.map(tag => <p className="post-tag">#{tag}</p>)}
        </Row>
        <h2 className="post-title">{data?.name}</h2>
        <p className="meta">{data?.description.description}</p>
      </Card>
    </Col>



  )
}

export default CardList
