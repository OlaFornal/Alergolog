import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layout/Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faUser, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Article = styled.article`
width: 90%;
height: auto;
display: flex;
flex-direction: column;

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 95%;
}
`

const H1 = styled.h1`
font-size: 60px;
color: ${({ theme }) => theme.colors.specialColor};
margin: 0;

${({ theme }) => theme.media.tabletPortrait} {
font-size: 48px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 35px;
}

${({ theme }) => theme.media.phone} {
font-size: 35px;
}
`
const Line = styled.div`
width: 75px;
border-bottom: 2px solid red;
margin: 10px 0;
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
font-size: 17px;
margin: 5px 0 15px 0;


${({ theme }) => theme.media.tabletLandscape} {
font-size: 15px;
}

${({ theme }) => theme.media.phone} {
font-size: 15px;
}
`

const P3 = styled.p`
margin: 0 5px;
`

const ArticleText = styled.div`
font-size: 15px;
color: ${({ theme }) => theme.colors.articleColor};

${({ theme }) => theme.media.tabletLandscape} {
font-size: 14px;
}

${({ theme }) => theme.media.phone} {
font-size: 14px;
}
`

const ImgBox = styled.div`
width: 50%;
margin: 0 0 5px 5px;
float: right;

${({ theme }) => theme.media.tabletLandscape} {
width: 100%;
float: none;
margin: 0 0 5px 0;
}

${({ theme }) => theme.media.phone} {
width: 100%;
float: none;
margin: 0 0 5px 0;
}
`

const Nav = styled.nav`
width: 90%;
border-top: 0.5px solid rgb(211, 211, 211);
border-bottom: 0.5px solid rgb(211, 211, 211);
margin-bottom: 20px;


${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 95%;
}
`


const Ul = styled.ul`
width: 100%;
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0;

${({ theme }) => theme.media.phoneLandscape} {
flex-direction: column;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
}
`

const Li = styled.li`
margin: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.articleColor};

&.next {
${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
}

${({ theme }) => theme.media.phone} {
width: 100%;
display: flex;
justify-content: flex-end;
}
}
`

const StyledLink = styled(Link)`
height: 60px;
text-decoration: none;
color: ${({ theme }) => theme.colors.articleColor};
display: flex;
flex-direction: row;
padding: 0;
transition: .6s all;
transition-delay: .2s; 
margin: 5px 0;

&:hover {
color: ${({ theme }) => theme.colors.specialColor};
transition-delay: 0s; 
}
`

const ArrowBox = styled.div`
width: 40px;
height: 100%;
display: flex;
justify-content: center;
background-color: rgba(0,0,0,.07);
margin: 0;
align-items: center;
`

const Title = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 10px;

&.next {
align-items: flex-end;
text-align: end;
}
`


const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <header>
          <H1>{post.frontmatter.title}</H1>
          <Line/>
          <TimeAndAuthor>
            <Div>
              <FontAwesomeIcon icon={faPaperPlane}/>
              <P3>{post.frontmatter.created} /</P3>
            </Div>
            <Div>
              <FontAwesomeIcon icon={faUser}/>
              <P3>by {post.frontmatter.author}</P3>
            </Div>
          </TimeAndAuthor>
        </header>
        <section>
          <ImgBox><Img fluid={post.frontmatter.image.childImageSharp.fluid}/></ImgBox>
          <ArticleText dangerouslySetInnerHTML={{ __html: post.html }}/>
        </section>
      </Article>

      <Nav>
        <Ul>
          <Li>
            {previous && (
              <StyledLink to={previous.frontmatter.slug} rel="prev">
                <ArrowBox><FontAwesomeIcon icon={faChevronLeft}/></ArrowBox>
                <Title>
                  <strong>POPRZEDNI </strong>
                  {previous.frontmatter.title}
                </Title>
              </StyledLink>
            )}
          </Li>
          {/*<li>*/}
          {/*  {next && (*/}
          {/*    <Link to={next.fields.slug} rel="next">*/}
          {/*      {next.frontmatter.title} →*/}
          {/*    </Link>*/}
          {/*  )}*/}
          {/*</li>*/}
          <Li className='next'>
            {next && (
              <StyledLink className='next' to={next.fields.slug} rel="next">
                <Title className='next'>
                  <strong>NASTĘPNY</strong>
                  {next.frontmatter.title}
                </Title>
                <ArrowBox><FontAwesomeIcon icon={faChevronRight}/></ArrowBox>
              </StyledLink>
            )}
          </Li>
        </Ul>
      </Nav>
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