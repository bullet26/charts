import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { theme, GlobalStyle } from 'theme'
import { Router } from 'routes'
import { store } from 'store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
