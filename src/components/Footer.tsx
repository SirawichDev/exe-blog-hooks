import React from 'react'
import {Layout, Row} from 'antd'
import { useStaticQuery, graphql } from 'gatsby'

const siteQuery = graphql`{

    site {
        siteMetadata{
            author
            title
        }
    }
}
`

const {Footer} = Layout
const Footers = () => {
    const {site: {siteMetadata},} = useStaticQuery(siteQuery)

    console.log('ss',siteMetadata)

    return (
    <Footer>
        <Row type="flex" justify="end">
        Created By {siteMetadata.author}</Row></Footer>
    )
}

export default Footers