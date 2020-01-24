import React, { FC } from 'react'
import {Typography, Col} from 'antd'

const { Text } = Typography

type HtextProps = {
    text: string
}
const HeaderText: FC<HtextProps> = ({text}) => {
    return (
        <div className="header-text">
        <Col>
          <Text strong className="big-text">
            - {text} -
          </Text>{" "}
        </Col>
      </div>
    )
}

export default HeaderText;