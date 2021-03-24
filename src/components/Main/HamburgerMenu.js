import React, { useState } from "react"
import styled from "styled-components"
import Nav from "./Navigation"

const MainBox = styled.div`
display: none;

${({ theme }) => theme.media.tabletPortrait} {
display: flex;
}

${({ theme }) => theme.media.phoneLandscape} {
display: flex;
}

${({ theme }) => theme.media.phone} {
display: flex;
}
`
const MenuIcon = styled.button`
position: fixed;
top: 2rem;
//left: 2rem;
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
left: ${({ nav }) => nav ? "50%" : "2rem"};

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
transform: ${({ nav }) => nav ? "rotate(45deg)" : "rotate(0)"};
}

:nth-child(2) {
opacity: ${({ nav }) => nav ? "0" : "1"}
}

:nth-child(3) {
transform: ${({ nav }) => nav ? "rotate(-45deg)" : "rotate(0)"};
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
width: 60%;
background-color: white;
box-shadow: 0 0 30px 0 rgba(0,0,0,0.08);
position: absolute;
top: 0;
left: 0;
transition: transform 400ms;
transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(-100%)")};

ul {
list-style: none;
}

li {
margin-top: 1rem;
}
`


const Hamburger = () => {
  const [nav, showNav] = useState(false)
  return (
    <MainBox>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div/>
        <div/>
        <div/>
      </MenuIcon>
      <MenuLinks nav={nav}>
        <Nav/>
      </MenuLinks>
    </MainBox>
  )
}

export default Hamburger