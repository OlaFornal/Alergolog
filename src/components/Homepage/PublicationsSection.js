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
margin: 50px 0;
align-items: center;

${({ theme }) => theme.media.tabletPortrait} {
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 95%;
justify-content: center;
margin: 30px 0;
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
align-self: center;
`
const OtherPublications = styled(Header)`
font-size: 20px;
margin: 30px 0 10px 0;
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
      <OtherPublications>Inne publikacje</OtherPublications>
      <Article/>
    </Content>
  </MainDiv>
)

export default PublicationsSection