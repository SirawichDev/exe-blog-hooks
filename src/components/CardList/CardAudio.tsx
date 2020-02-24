import React from "react"
import "../../sass/cardList.scss"
import { Row, Col } from "antd"

const CardAudio = () => {
  return (

    <Col xs={12} sm={10} style={{ marginTop: '20px' }}>
      <div className="blog-item blog-item-audio">
        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264859122&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
    </Col>

  )
}

export default CardAudio
