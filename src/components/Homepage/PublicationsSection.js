import React from "react"
import styled from "styled-components"
import Article from "./Article"

const MainDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: auto;
background-image: url('https://www.alergologkrosno.pl/wp-content/uploads/2015/12/bgn-grad-1.png');
background-color: ${({ theme }) => theme.colors.specialColor};
color: ${({ theme }) => theme.white};
`

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

const Header = styled.p`
font-family: Montserrat,Arial,sans-serif;
font-weight: 700;
font-size: 35px;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.white};
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

const P = styled.p`
color: ${({ theme }) => theme.colors.white};
font-weight: 400;
font-size: 16px;
margin-bottom: 40px;
`


const PublicationsSection = () => (
  <MainDiv>
    <Content>
      <Header>Do poczytania</Header>
      <P>Ostatnie, wybrane publikacje z zakresu alergologii i pedatrii w czasopismach dla lekarzy</P>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
    </Content>
  </MainDiv>
)

export default PublicationsSection