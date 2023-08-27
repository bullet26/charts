import { DefaultTheme, createGlobalStyle } from 'styled-components'
import '@fontsource/metropolis' // Defaults to weight 400
import '@fontsource/metropolis/400.css' // Specify weight
import '@fontsource/metropolis/400-italic.css' // Specify weight and style

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#242731',
    secondColor: '#8941FF',
    bgColor: '#111216',
    iconBgColor: '#191C23',
    text: '#FFFFFF',
    textAdditionl: '#A2A4A8',
    border: '#60677A',
    tableSettings: '#76b2ea',
    inputColor: '#7D7F8E',
  },
}

export const GlobalStyle = createGlobalStyle`
  body {   
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Metropolis", sans-serif;
    user-select: none;
  }
`
