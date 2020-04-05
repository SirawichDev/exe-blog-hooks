import React, { useEffect, useState, FC, Props } from "react"
import { Col, Row, Button } from "antd"
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
  useEffect(() => {
    filterType("ALL")
  },[])

  return (
    <Row
      type="flex"
      cy-test="type-menu-test"
      justify="space-around"
      style={{ marginBottom: "1rem", marginTop: "1rem" }}
    >
      <Col span={10}>
        <Button
          cy-test="all-click-test"
          id="1"
          onClick={e => ToggleSetting(e.currentTarget.id)}
          className={`sub-list-link ${id === "1" && "selected"}`}
        >
          All
        </Button>
      </Col>
      <Col span={10}>
        <Button
          cy-test="blog-click-test"
          id="2"
          onClick={e => ToggleSetting(e.currentTarget.id)}
          className={`sub-list-link ${id === "2" && "selected"}`}
        >
          Blog
        </Button>
      </Col>
      <Col span={2}>
        <Button
          cy-test="lifeStyle-click-test"
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
