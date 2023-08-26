import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#242731',
    secondColor: '#8941FF',
    bgColor: '#111216',
    iconBgColor: '#191C23',
    text: '#FFFFFF',
    border: '#60677A',
  },
}

export const GlobalStyle = createGlobalStyle`
  body {   
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
