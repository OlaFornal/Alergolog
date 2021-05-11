// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layout/Layout";

const BlogIndex = ( {data, location, pageContext,} ) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const {currentPage, numPages} = pageContext

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    return (
        <Layout title={siteTitle}>
            <SEO title="Do poczytania"/>
            {posts.map( ( {node} ) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <article key={node.fields.slug}>
                        <header>
                            <h3>
                                <Link to={node.frontmatter.slug}>{title}</Link>
                            </h3>
                            <small>{node.frontmatter.created}</small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                        </section>
                    </article>
                )
            } )}

            <nav>
                <ul>
                    <li>
                        {!isFirst && (
                            <Link to={prevPage} rel="prev">
                                ← Previous Page
                            </Link>
                        )}
                    </li>
                    <li>
                        {!isLast && (
                            <Link to={nextPage} rel="next">
                                Next Page →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query blogPageQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___created], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        created
                        title
                        description
                        slug
                    }
                }
            }
        }
    }
`