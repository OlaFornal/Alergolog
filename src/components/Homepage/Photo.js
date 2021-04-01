import React from "react"
import styled from "styled-components"

const PhotoBox = styled.div`
width: 100%;
height: 75vh;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2015/11/hero-doctor-1.jpg");
background-position: 50% 5.0601px;

${({ theme }) => theme.media.phone} {
height: 50vh;
}
`

const RelativeBox = styled.div`
height: 100%;
width: 100%;
padding: 5%;
display: flex;
justify-content: flex-start;
align-items: flex-end;

${({ theme }) => theme.media.phoneLandscape} {
padding: 25px 2.5%;
}

${({ theme }) => theme.media.phone} {
padding: 25px 2.5%;
}
`

const TextBox = styled.div`
font-family: Montserrat, sans-serif;
font-weight: 700;
letter-spacing: 0;
font-size: 30px;

${({ theme }) => theme.media.phoneLandscape} {
font-size: 20px;
}

${({ theme }) => theme.media.phone} {
font-size: 20px;
}


span {
text-transform: uppercase;
line-height: 1.15;

&.color {
color: ${({ theme }) => theme.colors.specialColor};
font-weight: 800;
}

&.small {
font-size: 20px;

${({ theme }) => theme.media.phoneLandscape} {
font-size: 15px;
}

${({ theme }) => theme.media.phone} {
font-size: 15px;
}

}

&.superSmall {
font-weight: 400;
font-size: 11px;
text-transform: lowercase;
}
}
`

const Photo = () => (
  <PhotoBox>
    <RelativeBox>
      <TextBox>
        <span> Prywatna poradnia </span>
        <br/>
        <span className={"color"}> alergologiczna </span>
        <br/>
        <span> oraz </span>
        <span className={"color"}> pediatryczna </span>
        <br/>
        <span className={"small"}> dr n. med. rafał fornal </span>
        <br/>
        <span className={"superSmall"}>alergolog, specjalita chorób dziecięcych </span>
      </TextBox>
    </RelativeBox>
  </PhotoBox>
)

export default Photo