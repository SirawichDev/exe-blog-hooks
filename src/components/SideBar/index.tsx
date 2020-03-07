import React, { FC } from "react"

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
