import React, { FC } from "react"
import { Row, Col, Card } from "antd"
import { useStaticQuery, graphql, Link } from "gatsby"
import CardVid from "./CardWithVideo"
import { PostDTO } from "shared/PostDTO"

interface Props {
  withVid?: boolean
  data: PostDTO
}

const CardList: FC<Props> = ({ data }) => {
  const date: String = String(new Date(data?.start))
  return (
    <Col xs={20} sm={20} md={10} lg={10}>
      <Link to={`/blogs/${data?.slug}`}>
        <Card
          hoverable={false}
          style={{ border: "none" }}
          cover={data?.images.map((m: any) => (
            <img className="xImg" src={`https://${m?.file.url}`} />
          ))}
        >
          <div className="post-date">
            {date.split(" ")[2]}
            <span className="month">{date.split(" ")[1]}</span>
          </div>
          <Row type="flex" justify="start">
            {data.tags.tags.map((tag: string) => (
              <p className="post-tag">#{tag}</p>
            ))}
          </Row>
          <h2 className="post-title">{data?.title}</h2>
          <p className="meta">{data.description.description}</p>
        </Card>
      </Link>
    </Col>
  )
}

export default CardList
