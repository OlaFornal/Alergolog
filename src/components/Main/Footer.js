import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const MainDiv = styled.div`
width: 100%;
height: auto;
background-color: ${({ theme }) => theme.colors.fontColor};
display: flex;
justify-content: center;
`

const Content = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: row;
background-color: transparent;
padding: 20px 0;

${({ theme }) => theme.media.tabletPortrait} {
justify-content: left;
flex-direction: column;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
flex-direction: column;
}

${({ theme }) => theme.media.phone} {
width: 95%;
flex-direction: column;
}
`

const Logo = styled.div`
width: 100%;
height: 100%;
min-height: 100px;
background-image: url(https://www.alergologkrosno.pl/wp-content/uploads/2017/10/logo-biale.png);
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`

const Box = styled.div`
width: 32%;
height: 100%;
display: flex;
flex-direction: column;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
}

${({ theme }) => theme.media.phone} {
width: 100%;
}
`

const TextBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 20px;
`

const P = styled.p`
font-size: 13px;
font-weight: 400;
color: ${({ theme }) => theme.colors.white};
margin: 0;
line-height: 1.7;
`

const P2 = styled(P)`
text-transform: uppercase;
`

const SecondDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #262626;
`

const A = styled.a`
color: ${({ theme }) => theme.colors.specialColor};
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
`

const SecondContent = styled(Content)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

${({ theme }) => theme.media.phoneLandscape} {
flex-direction: column;
justify-content: center;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
justify-content: center;
}
`

const Footer = () => (
  <>
    <MainDiv>
      <Content>
        <Box>
          <Link to={"/"}>
            <Logo/>
          </Link>
          <TextBox>
            <P2>Prywatna poradnia alergologiczna</P2>
            <P>Krosno / Dukla</P>
          </TextBox>
          <TextBox>
            <P2>Dr n. med. Rafal Fornal</P2>
            <P>alergolog, specjalista chorób dziecięcych</P>
          </TextBox>
        </Box>
        <Box></Box>
        <Box></Box>
      </Content>
    </MainDiv>
    <SecondDiv>
      <SecondContent>
        <P>&copy; 2017. Wszystkie prawa zastrzeżone</P>
        <A href="https://www.facebook.com/alergologkrosno">f</A>
      </SecondContent>
    </SecondDiv>
  </>
)

export default Footer