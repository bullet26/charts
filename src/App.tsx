import { ThemeProvider } from 'styled-components'
import { ToggleButton, Checkbox, IconWrapper, Button } from 'UI'
import { Icon } from 'assets'
import { theme, GlobalStyle } from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleButton labelText="circle" />
      <Checkbox mode="circle" />
      <IconWrapper mode="avatar" icon={<Icon.User />} color="#F4A732" />
      <Button>Log in</Button>
    </ThemeProvider>
  )
}

export default App
