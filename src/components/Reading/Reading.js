import React from "react"
import styled from "styled-components"
import ArticlePreview from "./ArticlePreview"


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

const ReadingContent = () => (
  <>
    <Header>
      <Content>
        <P>Do poczytania</P>
      </Content>
    </Header>
    <ArticlePreview/>
    <ArticlePreview/>
  </>
)

export default ReadingContent