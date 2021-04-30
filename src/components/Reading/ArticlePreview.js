import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons"


const Content = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: row;
padding: 50px 0;
border-bottom: 0.5px solid rgb(211, 211, 211) ;

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

const Image = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2020/06/dpa-dx-immunoblot_photos-640x480.jpg");
width: 100%;
height: 100%;
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

const ArticlePreveiew = () => (
  <Content>
    <PhotoBox>
      <StyledLink to={"/reading/"}><Image/></StyledLink>
    </PhotoBox>
    <Text>
      <StyledLink to={"/visits/"}>Diagnostyka molekularna alergii IgE-zależnej</StyledLink>
      <TimeAndAuthor>
        <Div>
          <FontAwesomeIcon icon={faPaperPlane}/>
          <P3>Czerwiec 18, 2020 /</P3>
        </Div>
        <Div>
          <FontAwesomeIcon icon={faUser}/>
          <P3>by Rafał Fornal</P3>
        </Div>
      </TimeAndAuthor>
      <P2>Gdy pacjent zgłasza się do lekarza z objawami alergii najczęściej pierwszymi wykonywanymi testami są
        wszystkim dobrze znane punktowe testy skórne lub oznaczane z krwi panele alergenowoswoistych IgE
        (wziewne, pokarmowe, pediatryczny itp). Są jednak sytuacje, gdy potrzebne są nam dokładniejsze metody
        diagnostyczne – z pomocą przychodzi diagnostyka molekularna. Ta forma badań ma najczęściej formę małych
        „celowanych” paneli np. panel mleko, panel jajko, panel roztocze, panel pyłki. Są też dostępne droższe
        obejmujące bardzo szeroko różne alergeny zarówno pokarmowe jak i wziewne testy: Faber, ALEX, ISAC –
        ograniczeniem powszechności wykonywania tych szerszych testów są jednak wciąż stosunkowo wysokie koszty
        badania.</P2>
      <P2>Diagnostyka molekularna alergii IgE-zależnej jest nowym narzędziem diagnostycznym w rozpoznawaniu chorób
        alergicznych. Daje ona możliwości, by oznaczać IgE swoiste nie tylko wobec całych alergenów takich jak
        brzoza, orzech ziemny, białko jaja kurzego, mleko, czy roztocze kurzu domowego, ale dzięki tym testom nowej
        generacji można także badać poszczególne białka jak np. Bet v1 czy Bet v2 w alergenie pyłku brzozy.</P2>
      <Button>Czytaj dalej</Button>
    </Text>
  </Content>
)

export default ArticlePreveiew