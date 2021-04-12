import React from "react"
import styled from "styled-components"


const Content = styled.div`
width: 100%;
height: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
`

const P2 = styled.p`
font-weight: 600;
font-size: 14px;
margin: 0;

${({ theme }) => theme.media.tabletPortrait} {
font-size: 12px;
}
`

const Line = styled.div`
width: 75px;
border-bottom: 3px solid white;
margin: 10px 0;
`

const P4 = styled.div`
font-size: 13px;
font-weight: 400;
line-height: 1.7;
`

const P3 = styled.div`
font-size: 12px;
padding: 0;
margin: 0;
font-weight: 800;
`


const P1 = styled.div`
margin-bottom: 0;
font-size: 25px;
font-weight: 700;
line-height: 1.15;
text-transform: uppercase;

${({ theme }) => theme.media.tabletPortrait} {
font-size: 20px;
}
`

const P5 = styled(P1)`
margin: 15px 0;
`

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 15px;
`

const Div2 = styled(Div)`
padding: 10px 0;
`


const ReceptionHours = () => (
  <Content>
    <Div>
      <P1>Godziny przyjęć</P1>
      <Line/>
      <P1>Krosno</P1>
    </Div>
    <P2>ul. Żółkiewskiego 1A</P2>
    <P2>(pierwsze piętro, wejśćie od tyłu budynku)</P2>
    <Div2>
      <P3>Wtorki od 16:00 do 20:00</P3>
      <P3>Czwartki od 10:00 dp 15:00</P3>
    </Div2>
    <P4>Rejestracja pacjentów</P4>
    <P5>13 432 40 21</P5>
  </Content>
)

export default ReceptionHours;