import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const Content = styled.div`
width: 90%;
height: 240px;
display: flex;
flex-direction: row;
position: relative;
top: -20px;

${({ theme }) => theme.media.tabletPortrait} {
flex-direction: column;
height: auto;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
height: auto;
flex-direction: column;
}

${({ theme }) => theme.media.phone} {
width: 95%;
height: auto;
flex-direction: column;
}
`

const Box = styled.div`
width: 33.33%;
height: 100%;
padding: 40px 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
color: ${({ theme }) => theme.colors.white};

&:nth-of-type(1) {
background-color: rgba(12, 184, 182, 1);
}

&:nth-of-type(2) {
background-color: rgba(9, 171, 169, 1);
}

&:nth-of-type(3) {
background-color: rgba(2, 157, 155, 1);
}

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
const Title= styled.div`
font-size: 16px;
font-family: Source Serif Pro,Arial,sans-serif;
line-height: 1.55;
`

const Info = styled.div`
font-size: 13px;
line-height: 1.7;
margin: 5px 0 20px 0;
`

const Button = styled.button`
//text-decoration: none;
outline: 0;
cursor: pointer;
font-weight: 700;
letter-spacing: 1px;
line-height: 1;
font-size: 12px;
padding: 13px 26px;
text-transform: uppercase;
background-color: transparent;
border: 2px solid ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.white};

&:hover {
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.fontColor};
transition: all 500ms ease;
}
`

const PhotoInfo = () => (
  <Content>
    <Box>
      <Title> Przygotowanie do badań </Title>
      <Info> Aby wyniki badań nie były przekłamane i leczenie było skuteczne. zapoznaj się z poniższymi
        wytycznymi... </Info>
      <Button> <Link to={"/reading/"}/> Dowiedz się więcej </Button>
    </Box>
    <Box>
      <Title> Konsultacje telefoniczne </Title>
      <Info> Dla pacjentów już objętych opieką poradni. Odpłatne porady telefoniczne z możliwością wysyłania
        e-recept. </Info>
      <Button> <Link to={"/visits/"}/> Umów e-wizytę </Button>
    </Box>
    <Box>
      <Title> Umów się na wizytę </Title>
      <Info> Krosno ul. Żółkiewskiego 1A
        <br/>
        Wtorki 16:00 - 20:00 | Czwartki 10:00 - 15:00
        <br/>
        Rejestracja 13 432 40 21
      </Info>
      <Button> Godziny przyjęć </Button>
    </Box>
  </Content>
)

export default PhotoInfo