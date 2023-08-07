// ** React Imports
import ReactDOM from 'react-dom/client'

// ** Style Imports
import './style/global.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline'

// ** Component Imports
import App from './App'
import UseLayout from './layouts'

// ** Redux Imports
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UseLayout children={<App />} />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
)
