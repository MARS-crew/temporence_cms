// ** React Imports
import ReactDOM from 'react-dom/client'

// ** Components Imports
import App from './App'
import UseLayout from './layouts'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from '@/store'

// ** Style Imports
import '@/style/global.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ backgroundColor: 'blue' }} />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
)
