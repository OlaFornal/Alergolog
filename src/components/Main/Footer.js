import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"

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
justify-content: space-between;
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
width: 29%;
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
background-color: #1d1f27;
`

const A = styled.a`
color: ${({ theme }) => theme.colors.specialColor};
font-size: 13px;
font-weight: bold;
text-decoration: none;

${({ theme }) => theme.media.phoneLandscape} {
margin-top: 3px;
}

${({ theme }) => theme.media.phone} {
margin-top: 5px;
}
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

const LearnMore = styled.div`
width: 100%;
font-size: 20px;
color: ${({ theme }) => theme.colors.white};
margin-top: 20px;
`

const Line = styled.div`
width: 40px;
height: 3px;
margin: 10px 0 15px 0;
border-bottom: 3px solid ${({ theme }) => theme.colors.specialColor};;
`

const SingleArticle = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 20px;
`

const StyledLink = styled(Link)`
width: 80px;
height: 80px;
margin: 0 15px 0 0;
`

const Image = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2020/06/dpa-dx-immunoblot_photos-640x480.jpg");
width: 80px;
height: 80px;
transition: .6s all;
transition-delay: .2s; 

&:hover {
opacity: 0.5;
transition-delay: 0s; 
}
`

const Image2 = styled(Image)`
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2020/06/vaccination-2722937_1920-640x480.jpg");
`

const TextBox2 = styled.div`
display: flex;
flex-direction: column;
height: 80px;
`

const P3 = styled.p`
font-size: 11px;
text-transform: uppercase;
color: rgba(255,255,255,.55);
margin: 0 0 3px 0;
`

const StyledLink2 = styled(Link)`
width: 100%;
margin: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.white};
transition: .6s all;
transition-delay: .2s; 

&:hover {
color: ${({ theme }) => theme.colors.specialColor};
transition-delay: 0s; 
}
`

const Title = styled.div`
font-weight: 600;
line-height: 1.35;
font-size: 14px;

${({ theme }) => theme.media.tabletPortrait} {
font-size: 12px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 12px;
}

${({ theme }) => theme.media.phone} {
font-size: 12px;
}
`

const Title2 = styled(Title)`
text-transform: none;
font-size: 13px;
margin-bottom: 10px;
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
        <Box>
          <LearnMore>Dowiedz się więcej</LearnMore>
          <Line/>
          <SingleArticle>
            <StyledLink to={"/do-poczytania/"}><Image/></StyledLink>
            <TextBox2>
              <P3>Czerwiec 18, 2020</P3>
              <StyledLink2 to={"/do-poczytania/"}><Title>Diagnostyka molekularna alergii IgE-zależnej</Title></StyledLink2>
            </TextBox2>
          </SingleArticle>
          <SingleArticle>
            <StyledLink to={"/do-poczytania/"}><Image2/></StyledLink>
            <TextBox2>
              <P3>Czerwiec 18, 2020</P3>
              <StyledLink2 to={"/do-poczytania"}><Title>Immunoterapia alergenowa (odczulanie)</Title></StyledLink2>
            </TextBox2>
          </SingleArticle>
        </Box>
        <Box>
          <LearnMore>Przygotowanie do badań</LearnMore>
          <Line/>
          <StyledLink2 to={"/przygotowanie-do-badan/"}><Title2>Prygotowanie do spirometrii</Title2></StyledLink2>
          <StyledLink2 to={"/przygotowanie-do-badan/"}><Title2>Przygotowanie do testów skórnych</Title2></StyledLink2>
        </Box>
      </Content>
    </MainDiv>
    <SecondDiv>
      <SecondContent>
        <P>&copy; 2017. Wszystkie prawa zastrzeżone</P>
        <A href="https://www.facebook.com/alergologkrosno"><FontAwesomeIcon icon={faFacebookF}/></A>
      </SecondContent>
    </SecondDiv>
  </>
)

export default Footer