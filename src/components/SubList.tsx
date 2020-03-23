import React, { useEffect, useState, FC, Props } from "react"
import { Col, Row, Radio, Button } from "antd"
import Text from "antd/lib/typography/Text"
import "../sass/sublist.scss"

type SubListProps = { filterType: (b:string) => void }
const SubList: FC<SubListProps> = ({ filterType }) => {
  const [id, setId] = useState("1")

  const ToggleSetting = (id: string) => {
    setId(id)
    switch (id) {
      case "1":
        filterType("ALL")
        break
      case "2":
        filterType("blog")
        break
      case "3":
        filterType("lifestyle")
        break
    }
  }

  return (
    <Row
      type="flex"
      justify="space-around"
      style={{ marginBottom: "1rem", marginTop: "1rem" }}
    >
      <Col span={10}>
        <Button
          id="1"
          onClick={e => ToggleSetting(e.currentTarget.id)}
          className={`sub-list-link ${id === "1" && "selected"}`}
        >
          All
        </Button>
      </Col>
      <Col span={10}>
        <Button
          id="2"
          onClick={e => ToggleSetting(e.currentTarget.id)}
          className={`sub-list-link ${id === "2" && "selected"}`}
        >
          Blog
        </Button>
      </Col>
      <Col span={2}>
        <Button
          id="3"
          onClick={e => ToggleSetting(e.currentTarget.id)}
          className={`sub-list-link ${id === "3" && "selected"}`}
        >
          Life Style
        </Button>
      </Col>
    </Row>
  )
}

export default SubList
