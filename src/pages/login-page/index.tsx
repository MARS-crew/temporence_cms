// ** Components Imports
import LoginPageView from './login-page'
import useInput from '@/hooks/useInput'

const LoginPage = () => {
  const [user, setUser] = useInput({ id: '', password: '' })

  const handleLogin = () => {
    console.log(user)
  }

  return (
    <LoginPageView handleLogin={handleLogin} user={user} setUser={setUser} />
  )
}

export default LoginPage
