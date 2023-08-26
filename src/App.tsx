import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { theme, GlobalStyle } from 'theme'
import { DashboardPage } from 'pages'
import { store } from 'store/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DashboardPage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
