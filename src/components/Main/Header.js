import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'
import Navigation from "./Navigation"

const Content= styled.div`
width: 70%;
height: 6.5rem;
display: flex;
flex-direction: row;
justify-content: space-between;

${({ theme }) => theme.media.tabletLandscape} {
width: 80%;
}

${({ theme }) => theme.media.tabletPortrait} {
width: 90%;
height: 5.3rem;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 98%;
}
`;

const Logo = styled.div`
width: 270px;
height: 100%;
background-image: url(https://www.alergologkrosno.pl/wp-content/uploads/2017/10/logo-1.png);
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`


const Header = () => (
  <Content>
      <Link to={'/'}>
        <Logo/>
      </Link>
    <Navigation/>
  </Content>
)

export default Header