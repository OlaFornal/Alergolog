import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'

const MainBox = styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Nav = styled.ul`
width: 100%;
list-style: none;
display: flex;
flex-direction: row;
padding: 0;
justify-content: space-between;
align-items: center;

${({ theme }) => theme.media.tabletPortrait} {
height: 300px;
flex-direction: column;
justify-content: center;
background-color: yellow;
}

${({ theme }) => theme.media.phoneLandscape} {
flex-direction: column;
justify-content: center;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
justify-content: center;
}
`

const Li = styled.li`
`
const StyledLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
color: ${({theme}) => theme.colors.fontColor};
font-weight: bold;
font-size: 1rem;
cursor: pointer;

&:hover {
color: ${({theme}) => theme.colors.specialColor};
transition: .6s all;   
}

`
const A = styled.a`
color: ${({theme}) => theme.colors.specialColor};
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;

`
const Navigation = () => (
  <MainBox>
    <Nav>
      <Li><StyledLink to={"/visits/"}>e-wizyty</StyledLink></Li>
      <Li><StyledLink to={"/preparation/"}>przygotowanie do badań</StyledLink></Li>
      <Li><StyledLink to={"/reading/"}>do poczytania</StyledLink></Li>
      <Li><A href="https://www.facebook.com/alergologkrosno">f</A></Li>
    </Nav>
  </MainBox>
)

export default Navigation;