import { Button, TextField, Typography } from '@mui/material'

interface Props {
  user: { id: string; password: string }
  setUser: (e: any) => void
  handleLogin: () => void
}

const LoginPageView = ({ user, setUser, handleLogin }: Props) => {
  return (
    <>
      <Typography variant="h4">Login Page</Typography>
      <TextField
        variant="outlined"
        sx={{ mt: 3, ml: 3 }}
        label="id"
        value={user.id}
        onChange={setUser}
        name="id"
      />
      <br />
      <TextField
        variant="outlined"
        sx={{ mt: 3, ml: 3 }}
        label="password"
        type="password"
        value={user.password}
        onChange={setUser}
        name="password"
      />
      <br />
      <Button variant="contained" sx={{ mt: 3, ml: 3 }} onClick={handleLogin}>
        LOGIN
      </Button>
    </>
  )
}

export default LoginPageView
