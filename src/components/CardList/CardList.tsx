import React, { FC } from "react"
import { Row, Col, Card } from "antd"
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

const { Meta } = Card

const CardList: FC<Props> = ({ withVid, data }) => {
  const { tags } = data.tags;
  console.log('dataxx', data?.images.map(m => console.log('bb', m.file)))

  const date: String = String(new Date(data?.start))
  console.log('date', date.split(" "))
  return (
    <Row type="flex" justify="space-between">
      <div className={`exe-blog-item`}>
        {" "}
        <Col span={24}>
          <Card
            hoverable
            style={{ width: 400, height: 300, border: 'none' }}
            cover={data?.images.map((m: any) => (<img className="xImg" src={`https://${m?.file.url}`} />))}
          >
            <div className="post-date">
              {date.split(" ")[2]}
              <span>
                {date.split(" ")[1]}
              </span>
            </div>
            <Row type="flex" justify="start" >
              {tags.map(tag => <p className="post-tag">#{tag}</p>)}
            </Row>
            <h2 className="post-title">{data?.name}</h2>
            <p className="meta">{data?.description.description}</p>
          </Card>
          {/* <CardContent name={data?.name} description={data?.description} date={data?.start} image={data?.images} /> */}
        </Col>
      </div>
    </Row>
  )
}

export default CardList
