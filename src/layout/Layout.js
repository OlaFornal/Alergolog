import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
body {
padding: 0;
margin: 0;
font-family: Montserrat,Arial,sans-serif;
${({theme}) => theme.colors.fontColor};
font-size: 13px;
}
*, *::before, *::after {
box-sizing: border-box;
}
`;

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout