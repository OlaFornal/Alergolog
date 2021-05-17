// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layout/Layout"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"


const Header = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-image: url('https://www.alergologkrosno.pl/wp-content/uploads/2015/12/bgn-grad-1.png');
background-color: ${({ theme }) => theme.colors.specialColor};
background-position: 50% 70%;
background-size: cover;
padding: 10px 0;
`

const Content = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: row;

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 95%;
}
`

const P = styled.p`
font-weight: 700;
line-height: 1.15;
font-size: 35px;
color: ${({ theme }) => theme.colors.white};

${({ theme }) => theme.media.tabletPortrait} {
font-size: 30px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 27px;
}

${({ theme }) => theme.media.phone} {
font-size: 27px;
}
`

const Article = styled.article`
width: 90%;
height: auto;
display: flex;
flex-direction: row;
padding: 50px 0;
border-bottom: 0.5px solid rgb(211, 211, 211);

${({ theme }) => theme.media.tabletPortrait} {
padding: 20px 0;
flex-direction: column;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
padding: 20px 0;
flex-direction: column;
}

${({ theme }) => theme.media.phone} {
width: 95%;
padding: 20px 0;
flex-direction: column;
}

&:last-of-type {
border-bottom: none;
}
`

const PhotoBox = styled.div`
width: 40%;
height: 420px;
display: flex;
justify-content: flex-start;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
margin-bottom: 20px;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
margin-bottom: 20px;
}

${({ theme }) => theme.media.phone} {
width: 100%;
margin-bottom: 20px;
}
`

const Text = styled.div`
width: 60%;
padding-left: 20px;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
padding-left: 0;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
padding-left: 0;
}

${({ theme }) => theme.media.phone} {
width: 100%;
padding-left: 0;
}
`

const StyledLink = styled(Link)`
width: 100%;
text-decoration: none;
color: ${({ theme }) => theme.colors.specialColor};
font-weight: 700;
line-height: 1.15;
font-size: 35px;
cursor: pointer;
transition: .6s all;
transition-delay: .2s; 

${({ theme }) => theme.media.tabletPortrait} {
font-size: 30px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 27px;
}

${({ theme }) => theme.media.phone} {
font-size: 27px;
}


&:hover {
color: ${({ theme }) => theme.colors.articleColor};
transition-delay: 0s; 
}
`

const Image = styled(Img)`
transition: .6s all;
transition-delay: .2s;

&:hover {
opacity: 0.5;
transition-delay: 0s;
}
`

const P2 = styled.p`
font-size: 14px;
color: #444;
`

const TimeAndAuthor = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
margin-top: 10px;

${({ theme }) => theme.media.tabletLandscape} {
flex-direction: column;
align-items: flex-start;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
align-items: flex-start;
}
`

const Div = styled.div`
width: auto;
display: flex;
flex-direction: row;
align-items: center;
color: #444;
font-size: 13px;
`

const P3 = styled.p`
margin: 0 5px;
`

const Button = styled.button`
outline: 0;
cursor: pointer;
font-weight: 700;
letter-spacing: 1px;
line-height: 1;
font-size: 12px;
padding: 13px 26px;
text-transform: uppercase;
background-color: transparent;
border: 1px solid ${({ theme }) => theme.colors.specialColor};
color: ${({ theme }) => theme.colors.specialColor};
border-radius: 25px;
margin-top: 10px;
transition: .6s all;
transition-delay: .2s; 

&:hover {
background-color: ${({ theme }) => theme.colors.specialColor};
color: ${({ theme }) => theme.colors.white};
transition-delay: 0s; 
}
`

const Ul = styled.ul`
list-style: none;
`


const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  return (
    <Layout title={siteTitle}>
      <SEO title="Do poczytania"/>
      <Header>
        <Content>
          <P>Do poczytania</P>
        </Content>
      </Header>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Article key={node.fields.slug}>
            <PhotoBox>
              <StyledLink to={node.frontmatter.slug}><Image
                fluid={node.frontmatter.image.childImageSharp.fluid}/></StyledLink>
            </PhotoBox>
            <Text>
              <StyledLink to={node.frontmatter.slug}>{title}</StyledLink>
              <TimeAndAuthor>
                <Div>
                  <FontAwesomeIcon icon={faPaperPlane}/>
                  <P3>{node.frontmatter.created} /</P3>
                </Div>
                <Div>
                  <FontAwesomeIcon icon={faUser}/>
                  <P3>by {node.frontmatter.author}</P3>
                </Div>
              </TimeAndAuthor>
              <P2
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
              <StyledLink to={node.frontmatter.slug}><Button>Czytaj dalej</Button></StyledLink>
            </Text>
          </Article>
        )
      })}

      <nav>
        <Ul>
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
        </Ul>
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
                        author
                        title
                        description
                        slug
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
        }
    }
`