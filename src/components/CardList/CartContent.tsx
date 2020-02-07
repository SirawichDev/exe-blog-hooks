import React from "react"
import { Icon, Row, Col } from "antd"
import ReadMoreArrow from "../../images/custom-icons/readmore-arrow.png"
import ReadMoreArrowBack from "../../images/custom-icons/readmore-arrow-black.png"
const CardContent = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="blog-item-content">
            <Col span={24}>
              <h6 className="blog-item-date">
                <span className="date">10</span> th{" "}
                <span className="month">March</span>
              </h6>
            </Col>
            <Col span={24}>
              <h4 className="blog-item-title">
                <a href="blog-details.html">
                  How To Install Flutter
                </a>
              </h4>
            </Col>
            <Col>
              <div className="post-tag-container">
                <a className="post-tag">
                  # dart
              </a>

                <a className="post-tag">
                  # flutter
              </a>
                <a className="post-tag">
                  # cross-platform
              </a>
              </div>
            </Col>
            {/* <div className="blog-item-share">
              <Col span={24}>
                <button className="blog-item-share-toggle">
                  <Icon type="share-alt" style={{ fontSize: '20px', marginRight: '1px' }} /> <p>Shared</p>
                </button>
              </Col>
            </div> */}
            <Col span={24}>
              <a href="blog-details.html" className="exe-readmore">
                Read More
                <span>
                  <img src={ReadMoreArrowBack} alt="Readmore Arrow" />
                  <img src={ReadMoreArrow} alt="Readmore Arrow" />
                </span>
              </a>
            </Col>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default CardContent
