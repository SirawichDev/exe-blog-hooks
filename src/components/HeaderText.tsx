import React, { FC } from 'react'
import {Typography, Col, Row} from 'antd'

const { Text } = Typography

type HtextProps = {
    text: string
}
const HeaderText: FC<HtextProps> = ({text}) => {
    return (
        <div className="header-text">
          <Row type="flex" justify="center" align="middle">
        <Col sm={24} xs={15}>
          <Text strong className="big-text">
            - {text} -
          </Text>{" "}
        </Col>
        </Row>
      </div>
      
    )
}

export default HeaderText;