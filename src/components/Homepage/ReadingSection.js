import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faUser, faFolder } from "@fortawesome/free-solid-svg-icons"


const Content = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: column;
margin: 50px 0;
align-items: center;

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
height: auto;
display: flex;
flex-direction: column;

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
`

const StyledLink = styled(Link)`
width: 100%;
height: 275px;
margin: 0;
`

const Image = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2020/06/dpa-dx-immunoblot_photos-640x480.jpg");
width: 100%;
height: 275px;
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

const Image3 = styled(Image)`
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2017/10/alergia-640x480.jpg");
`

const Text = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
border-left: 1px solid rgba(0,0,0,.1);
border-right: 1px solid rgba(0,0,0,.1);
border-bottom: 1px solid rgba(0,0,0,.1);
background-color: rgba(0,0,0,.07);
padding: 30px 20px 20px 20px;
color: ${({ theme }) => theme.colors.articleColor};
justify-content: space-between;
`

const Title = styled.div`
font-size: 25px;
font-weight: 700;
line-height: 1.15;
margin: 20px 0;

${({ theme }) => theme.media.tabletPortrait} {
font-size: 20px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 20px;
}

${({ theme }) => theme.media.phone} {
font-size: 20px;
}
`

const Description = styled.div`
font-size: 13px;
font-weight: 400;
line-height: 1.7;
margin-bottom: 20px;
`

const TimeAndAuthor = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;

${({ theme }) => theme.media.tabletLandscape} {
flex-direction: column;
align-items: flex-start;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
align-items: flex-start;
}
`

const P = styled.p`
margin: 0 5px;
`

const Div = styled.div`
width: auto;
display: flex;
flex-direction: row;
`

const StyledLink2 = styled(Link)`
width: 100%;
margin: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.articleColor};
transition: .6s all;
transition-delay: .2s; 

&:hover {
color: ${({ theme }) => theme.colors.specialColor};
transition-delay: 0s; 
}
`

const Reading = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
`

const ReadingSection = () => (
  <Content>
    <Header>Do poczytania</Header>
    <Line/>
    <ArticleBox>
      <Box>
        <StyledLink to={"/reading/"}><Image/></StyledLink>
        <Text>
          <TimeAndAuthor>
            <Div>
              <FontAwesomeIcon icon={faPaperPlane}/>
              <P>Czerwiec 18, 2020 /</P>
            </Div>
            <Div>
              <FontAwesomeIcon icon={faUser}/>
              <P>by Rafał Fornal</P>
            </Div>
          </TimeAndAuthor>
          <StyledLink2 to={"/reading/"}><Title>Diagnostyka molekularna alergii IgE-zależnej</Title></StyledLink2>
          <Description>Gdy pacjent zgłasza się do lekarza z objawami alergii najczęściej
            pierwszymi wykonywanymi testami są wszystkim dobrze znane punktowe
            testy skórne lub oznaczane z krwi panele alergenowoswoistych IgE
            (wziewne, pokarmowe, pediatryczny itp). Są jednak sytuacje, gdy
            potrzebne są nam dokładniejsze metody diagnostyczne – z pomocą
            przychodzi diagnostyka molekularna. Ta forma badań ma najczęściej
            formę małych „celowanych” […]</Description>
          <StyledLink2 to={"/reading/"}>
            <Reading>
              <FontAwesomeIcon icon={faFolder}/>
              <P>Do poczytania</P>
            </Reading>
          </StyledLink2>
        </Text>
      </Box>
      <Box>
        <StyledLink to={"/reading/"}><Image2/></StyledLink>
        <Text>
          <TimeAndAuthor>
            <Div>
              <FontAwesomeIcon icon={faPaperPlane}/>
              <P>Październik 16, 2017 /</P>
            </Div>
            <Div>
              <FontAwesomeIcon icon={faUser}/>
              <P>by Rafał Fornal</P>
            </Div>
          </TimeAndAuthor>
          <StyledLink2 to={"/reading/"}><Title>Immunoterapia alergenowa (odczulanie)</Title></StyledLink2>
          <Description>Immunoterapia alergenowa, jako jedyna metoda leczenia przyczynowego
            chorób alergicznych zależnych od immunoglobulin E (IgE), jest jednym
            z najważniejszych osiągnięć w alergologii. Poza łagodzeniem objawów
            alergii w trakcie jej stosowania, zapewnia długotrwałą redukcję
            objawów także po jej zakończeniu. Zapobiega także rozwojowi uczuleń
            na nowe alergeny oraz zmniejsza ryzyko rozwoju astmy u chorych z
            alergicznym nieżytem nosa.</Description>
          <StyledLink2 to={"/reading/"}>
            <Reading>
              <FontAwesomeIcon icon={faFolder}/>
              <P>Do poczytania</P>
            </Reading>
          </StyledLink2>
        </Text>
      </Box>
      <Box>
        <StyledLink to={"/reading/"}><Image3/></StyledLink>
        <Text>
          <TimeAndAuthor>
            <Div>
              <FontAwesomeIcon icon={faPaperPlane}/>
              <P>Październik 16, 2017 /</P>
            </Div>
            <Div>
              <FontAwesomeIcon icon={faUser}/>
              <P>by Rafał Fornal</P>
            </Div>
          </TimeAndAuthor>
          <StyledLink2 to={"/reading/"}><Title>Alergia</Title></StyledLink2>
          <Description>Choroby alergiczne są jednymi z najczęściej występujących schorzeń
            współczesnej cywilizacji. Większość chorób z tej grupy ma charakter
            przewlekły, wymaga systematycznego leczenia. Alergia – czym jest?
            Nazwa alergia, wywodzi się z języka greckiego: allos – odmienny,
            ergos – reakcja. Alergia jest spowodowana nieprawidłową reakcją
            układu odpornościowego na pewne czynniki. Ta nieprawidłowość polega
            na nadmiernej reakcji na […]</Description>
          <StyledLink2 to={"/reading/"}>
            <Reading>
              <FontAwesomeIcon icon={faFolder}/>
              <P>Do poczytania</P>
            </Reading>
          </StyledLink2>
        </Text>
      </Box>
    </ArticleBox>
  </Content>
)

export default ReadingSection