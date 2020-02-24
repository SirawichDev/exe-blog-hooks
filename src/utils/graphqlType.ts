import { graphql } from 'gatsby'

namespace Query {
export const LogoQuery = graphql`
  query{
    file(relativePath: {eq:"exe-blog-x.png"}) {
      publicURL
    }
  }
`
}


export { Query }