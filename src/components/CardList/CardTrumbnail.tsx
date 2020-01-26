import React from "react"
import Rabbit from "../../images/rabbit.jpg"
import { Row, Col } from "antd"

const CardThumb = () => {
  return (
    <div className="blog-item-thumb">
      <a>
        <img src={Rabbit} alt="blog thumb" />
      </a>
    </div>
  )
}

export default CardThumb
