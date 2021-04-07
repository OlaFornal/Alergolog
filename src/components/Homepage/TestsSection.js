import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const Content = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: column;
margin-top: 50px;

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

const P2 = styled.p`
font-weight: 600;
font-size: 14px;
margin: 0;

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

const Line = styled.div`
width: 75px;
border-bottom: 3px solid black;
margin: 10px 0;
`

const Links = styled.div`
width: 100%;
height: auto;
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Box = styled.div`
width: 32%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

const Image = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2015/11/spirometria-320x320.jpg");
width: 100%;
height: 400px;
transition: .6s all;
transition-delay: .2s; 

&:hover {
opacity: 0.5;
transition-delay: 0s; 
}
`

const Image2 = styled(Image)`
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2015/11/testy-alergiczne-1-320x320.jpg");
`
const CircleBig = styled.div`
width: 100px;
height: 100px;
background-color: ${({ theme }) => theme.colors.white};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
transition: .6s all;
transition-delay: .2s; 

&:hover {
opacity: 0.9;
transition-delay: 0s; 
}
`

const Circle = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.specialColor};
`

const StyledLink = styled(Link)`
width: 100%;
height: 400px;
margin: 0;
`

const StyledLink2 = styled(Link)`
width: 100px;
height: 100px;
border-radius: 50%;
position: relative;
top: -50px;
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;
top: -30px;
`

const P3 = styled.div`
font-size: 25px;
font-weight: 700;
line-height: 1.15;
text-transform: uppercase;
margin-bottom: 20px;

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

const P4 = styled.div`
font-size: 13px;
font-weight: 400;
line-height: 1.7;
`
const TimeBox = styled.div`
width: 100%;
height: 400px;
border: 1px solid rgba(0,0,0,.1);
border-bottom: 2px solid rgba(0,0,0,.1);
background-color: rgba(0,0,0,.07);
`


const TestsSection = () => (
  <Content>
    <P>Badania wykonywane na miejscu</P>
    <Line/>
    <P2>Kliknij i zobacz jak przygotować się do badań</P2>
    <Links>
      <Box>
        <StyledLink to={"/preparation/"}><Image/></StyledLink>
        <StyledLink2 to={"/preparation/"}><CircleBig><Circle/></CircleBig></StyledLink2>
        <Text>
          <P3>Spirometria</P3>
          <P4>Badanie spirometryczne jest podstawowym badaniem czynnościowym w diagnostyce układu
            oddechowego i najprostszą metodą oceny właściwości mechanicznych układu oddechowego…</P4>
        </Text>
      </Box>
      <Box>
        <StyledLink to={"/preparation/"}><Image2/></StyledLink>
        <StyledLink2 to={"/preparation/"}><CircleBig><Circle/></CircleBig></StyledLink2>
        <Text>
          <P3>Testy skórne</P3>
          <P4>Punktowe testy skórne polegają na nałożeniu kropli roztworów kontrolnych i badanych alergenów
            na wewnętrzną stronę przedramienia lub w wybranych przypadkach na plecy.</P4>
        </Text>
      </Box>
      <Box><TimeBox/></Box>
    </Links>
  </Content>
)

export default TestsSection