import React, { FC, useState } from "react"
import Rabbit from "../../images/rabbit.jpg"
import { Row, Col, Modal } from "antd"
import { graphql, useStaticQuery } from "gatsby"

const playIconQuery = graphql`
  query {
    file(relativePath: { eq: "custom-icons/play-icon.png" }) {
      publicURL
    }
  }
`
interface Props {
  withVid?: boolean
  image?: Array<object>
}
const CardThumb: FC<Props> = ({ withVid, image }) => {
  const {
    file: { publicURL },
  } = useStaticQuery(playIconQuery)
  // console.log('image', image?.map(m => console.log('hh', m.file)))
  const [isVisible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  }
  const cancelModal = () => {
    setVisible(false)
  }
  return (
    <Row type="flex">
      <Col>
        <div className="blog-item-thumb">
          <a>
            {image?.map((m: any) => (
              <img key={m.id} src={m.file.url} alt="blog thumb" />
            ))
            }
            {withVid && (
              <a
                onClick={showModal}
                className="exe-video-btn exe-video-btn-small video-play-trigger"
                data-video-id="YB4AvOsgL9o"
              >
                <span>
                  <img style={{ width: "30px" }} src={publicURL} alt="play icon" />
                </span>
              </a>
            )}
          </a>
          <Modal
            title="Title"
            visible={isVisible}
            // onOk={this.handleOk}
            // confirmLoading={confirmLoading}
            onCancel={cancelModal}
          >
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263796665&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </Modal>
        </div>
      </Col>
    </Row>
  )
}

export default CardThumb
