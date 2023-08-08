// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
