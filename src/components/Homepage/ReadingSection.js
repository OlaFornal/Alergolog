import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"


const Content = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: column;
margin-top: 50px;
align-items: center;

${({ theme }) => theme.media.tabletPortrait} {
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 95%;
}
`
const P = styled.p`
font-family: Montserrat,Arial,sans-serif;
font-weight: 700;
font-size: 35px;
text-transform: uppercase;
margin: 0;

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

const Line = styled.div`
width: 75px;
border-bottom: 3px solid ${({ theme }) => theme.colors.specialColor};
margin: 10px 0;
`

const ArticleBox = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 30px;

${({ theme }) => theme.media.tabletPortrait} {
flex-direction: column;
}

${({ theme }) => theme.media.phoneLandscape} {
flex-direction: column;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
}
`

const Box = styled.div`
width: 32%;
height: 400px;
border: 2px solid green;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
}

${({ theme }) => theme.media.phone} {
width: 100%;
`



const ReadingSection = () => (
  <Content>
    <P>Do poczytania</P>
    <Line/>
    <ArticleBox>
      <Box/>
      <Box/>
      <Box/>
    </ArticleBox>
  </Content>
)

export default ReadingSection;