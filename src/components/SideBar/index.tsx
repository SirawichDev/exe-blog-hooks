import React, { FC } from "react"
import Col from 'antd/es/col'
type Props = {
  tags?: string[]
  title: string
}
const SideBar: FC<Props> = ({ title, tags }) => {
  return (
    <div className="center">
      <h1>{title}</h1>
      {tags?.map(t => (
        <p className="post-tag">#{t}</p>
      ))}
    </div>
  )
}

export default SideBar
