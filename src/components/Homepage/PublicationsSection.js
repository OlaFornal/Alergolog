import React from "react"
import styled from "styled-components"

const MainDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 100vh;
background-image: url('https://www.alergologkrosno.pl/wp-content/uploads/2015/12/bgn-grad-1.png');
background-color: ${({ theme }) => theme.colors.specialColor};

`

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

const PublicationsSection = () => (
  <MainDiv>
    <Content>

    </Content>
  </MainDiv>
)

export default PublicationsSection