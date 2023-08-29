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
    formSubtitleColor: '#9496A6',
    linkColor: '#78B4ED',
    border: '#60677A',
    hoverTable: '#31343D',
    tableSettings: '#76b2ea',
    inputColor: '#7D7F8E',
    diagramBlue: '#18A0FB',
    diagramGreen: '#3CDC86',
    diagramRed: '#ED2D95',
    diagramOrange: '#F4A732',
    diagramViolet: '#9B53F8',
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
