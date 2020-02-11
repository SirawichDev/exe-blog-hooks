import React, { FC, useEffect, useState } from "react"
import { Row, Col } from "antd"


interface Props {
  name?: string
  description?: string
  date?: string
  image?: any
}
const CardContent: FC<Props> = ({ name, description, date, image }) => {
  const [images, setImages] = useState(undefined)
  useEffect(() => {
    setImages(image)
  }, [image])
  return (
    <>
      <Row type="flex">
        <Col>
          <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
              <div className="blog-slider__item swiper-slide">

                <Col>
                  <div className="blog-slider__img">
                    {
                      images?.map((m: any) => <img src={`https://${m?.file.url}`} alt="" />)
                    }
                  </div>
                </Col>
                <div className="blog-slider__content">
                  <span className="blog-slider__code">{date}</span>
                  <div className="blog-slider__title">{name}</div>
                  <div className="blog-slider__text crop">{description?.description}</div>
                  <a href="#" className="blog-slider__button">READ MORE</a>
                </div>
              </div>
            </div>
            <div className="blog-slider__pagination"></div>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default CardContent
