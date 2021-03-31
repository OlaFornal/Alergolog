import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import Hamburger from "./HamburgerMenu"

const Content = styled.div`
width: 90%;
height: 6.3rem;
display: flex;
flex-direction: row;
justify-content: space-between;

${({ theme }) => theme.media.tabletPortrait} {
height: 5.3rem;
justify-content: left;
padding-left: 4rem;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
height: 5.3rem;
justify-content: left;
padding-left: 4rem;
}

${({ theme }) => theme.media.phone} {
width: 98%;
height: 5.3rem;
justify-content: left;
padding-left: 4rem;
}
`

const Logo = styled.div`
width: 270px;
height: 100%;
background-image: url(https://www.alergologkrosno.pl/wp-content/uploads/2017/10/logo-1.png);
background-repeat: no-repeat;
background-size: contain;
background-position: center;


${({ theme }) => theme.media.tabletPortrait} {
width: 185px;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 185px;
}

${({ theme }) => theme.media.phone} {
width: 185px;
}
`

const NavigationBox = styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

${({ theme }) => theme.media.tabletPortrait} {
display: none;
}

${({ theme }) => theme.media.phoneLandscape} {
display: none;
}

${({ theme }) => theme.media.phone} {
display: none;
}
`


const Header = () => (
  <Content>
    <Hamburger/>
    <Link to={"/"}>
      <Logo/>
    </Link>
    <NavigationBox>
      <Navigation/>
    </NavigationBox>
  </Content>
)

export default Header