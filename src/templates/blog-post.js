import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layout/Layout";
import Img from "gatsby-image"


const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { previous, next } = pageContext

    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.created}</p>
                    <p>{post.frontmatter.author}</p>
                    <div><Img fluid={post.frontmatter.image.childImageSharp.fluid} /></div>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>

            <nav>
                <ul>
                    <li>
                        {previous && (
                            <Link to={previous.frontmatter.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                created
                description
                author
                image {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`