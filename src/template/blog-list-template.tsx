import React, { FC, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Layouts from "../components/Layout/layout"
import CardList from '../components/CardList'
import { Row, Col, Layout, Pagination } from "antd"
import HeaderText from '../components/HeaderText'
import SubList from '../components/SubList'
import { ArchivePageContext } from '../context/context'
import { PostDTO } from 'shared/PostDTO'
import { PostPagination } from 'shared/PostPagination'
const { Content } = Layout
interface Props {
    readonly data: PostPagination
    readonly pageContext: ArchivePageContext
    readonly uri: ArchivePageContext
}
const BlogListTemplate: FC<Props> = ({ uri, data, pageContext }) => { //Math auto with props
    // let numPage = pageContext.numPage * 10
    // let currentPage = pageContext.currentPage
    console.log('r', uri)
    const [typeBlog, setTypeBlog] = useState<string>("")
    const getTypeFromClick = (id: string) => {
        setTypeBlog(id)
    }
    const onShowSizeChange = (current: number, pageSize: number) => {
        let x = 1
        if (x < current) {
            navigate(`/dev-blogs/${current - x}`)
            console.log('x')
        } else {
            navigate(`/dev-blogs/${x - current}`)
        }
    }
    return (
        <Layouts>
            <Row type="flex" justify="center">
                <Col span={24}>
                    <Content>
                        <HeaderText data-cy="header" text="Welcome To My Devs" />
                    </Content>
                </Col>
                <SubList filterType={getTypeFromClick} />
            </Row>

            <Row type="flex" justify="space-around">
                {data.posts.edges.map((data: any) => (
                    <CardList data={data.node} key={data.id} />
                ))}
            </Row>
            <Row type="flex" justify="center">
                <Pagination
                    onChange={() => onShowSizeChange(pageContext.currentPage, pageContext.numPage)}
                    defaultCurrent={pageContext.currentPage}
                    total={pageContext.numPage * 10}
                />
            </Row>
        </Layouts>

    )
}

export const query = graphql`
query getPost($skip:Int!,$limit:Int!) {
  posts: allContentfulDevTour(skip:$skip,limit:$limit,filter:{blogtype:{type:{eq:"dev-blog"}}},sort: {fields:createdAt,order:DESC }) {
    edges {
      node {
        id
        slug
        title
        description {
          description
        }
        tags{
          tags
        }
        start
        images{
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
}



`

export default BlogListTemplate