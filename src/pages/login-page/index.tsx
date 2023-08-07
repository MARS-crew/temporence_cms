// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Other View Import
import LoginPageView from './login-page'

// ** Otheer Imports
import useInput from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../store/app/auth'

const LoginPage = () => {
  const [user, setUser] = useInput({ username: 'admin', password: '1234' })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const login = () => {
    if (user.username === '') {
      alert('아이디를 입력해주세요.')

      return
    }

    if (user.password === '') {
      alert('패스워드를 입력해주세요.')

      return
    }

    if (user.username === 'admin' && user.password === '1234') {
      dispatch(
        updateUser({
          username: 'admin',
          grade: '123123',
          accessToken: '123123',
          refreshToken: '123123',
        }),
      )
      navigate('/user')

      return
    }

    alert('아이디와 패스워드가 일치하지 않습니다.')
  }

  return (
    <LoginPageView
      user={user}
      setUser={setUser}
      login={login}
      handleOnKeyPress={handleOnKeyPress}
    />
  )
}

export default LoginPage
