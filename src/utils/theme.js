import { colors } from "./colors"

export const theme = {
  colors,
  font: {
    thin: 300,
    regular: 400,
    bold: 800,
  },
  // fontFamily: {
  //   main: Montserrat, sans-serif,
  // },
  media: {
    phone: "@media (min-width: 200px) and (max-width: 480px)",
    phoneLandscape: "@media (min-width: 481px) and (max-width: 767px)",
    tabletPortrait: "@media (min-width: 481px) and (max-width: 1023px)",
    tabletLandscape: "@media (min-width: 1024px) and (max-width: 1250px)",
    desktop: "@media (min-width: 1251px)",
    largeDesktop: "@media (min-width: 1281px)",
  },

}