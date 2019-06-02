import React from 'react'
import { graphql } from 'gatsby'
import PageTitle from '../components/pageTitle'
import PageSubtitle from '../components/pageSubtitle'
import Layout from '../components/layout'
import Card from '../components/card'
import SEO from '../components/seo'

const BlogPage = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <PageTitle title="Blog" />
      <PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio quidem culpa." />
      {posts.map((post, index) => (
        <Card
          key={index}
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          link={post.node.frontmatter.path}
          cover={post.node.frontmatter.cover.childImageSharp.fluid}
        />
      ))}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date
            path
            cover {
              publicURL
              childImageSharp {
                fluid(
                  maxWidth: 290
                  srcSetBreakpoints: [
                    290
                    330
                    380
                    435
                    495
                    570
                    610
                    660
                    725
                    780
                    825
                    880
                    950
                    1100
                    1160
                    1225
                    1320
                    1470
                    1560
                    1715
                    1830
                    1960
                    2135
                    2440
                  ]
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
