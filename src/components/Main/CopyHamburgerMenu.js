import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const MenuIcon = styled.button`
position: fixed;
top: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 1.5rem;
height: 1.5rem;
background-color: transparent;
cursor: pointer;
border: none;
outline: none;
z-index: 5;
left: ${({nav}) => nav ? "21%" : "2rem" };

&:hover, &:active {
border: none;
}


div {
width: 1.5rem;
height: 0.2rem;
background-color: black;
transform-origin: 1px;
position: relative;
transition: opacity 300ms, transform 300ms;

:first-child {
transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0)" };
}

:nth-child(2) {
opacity: ${({nav}) => nav ? "0" : "1" }
}

:nth-child(3) {
transform: ${({nav}) => nav ? "rotate(-45deg)" : "rotate(0)" };
}
}
`

const MenuLinks = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
width: 25%;
background-color: gainsboro;
position: absolute;
top: 0;
left: 0;
transition: transform 400ms;
transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(-100%)")};

ul {
list-style: none;
}

li {
margin-top: 1rem;
}
`

const StyledLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.fontColor};
font-weight: bold;
font-size: 1rem;
cursor: pointer;

&:hover {
color: ${({ theme }) => theme.colors.specialColor};
transition: color 300ms;   
}
`

const A = styled.a`
color: ${({ theme }) => theme.colors.specialColor};
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
`

const Hamburger = () => {
  const [nav, showNav] = useState(false)
  return (
    <>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div/>
        <div/>
        <div/>
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li><StyledLink to={"/visits/"}>e-wizyty</StyledLink></li>
          <li><StyledLink to={"/preparation/"}>przygotowanie do badań</StyledLink></li>
          <li><StyledLink to={"/reading/"}>do poczytania</StyledLink></li>
          <li><A href="https://www.facebook.com/alergologkrosno">f</A></li>
        </ul>
      </MenuLinks>
    </>
  )
}

export default Hamburger;