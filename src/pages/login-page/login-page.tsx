// ** MUI Components
import { Grid, Button, TextField, Box, Typography } from '@mui/material'

interface Props {
  user: { username: string; password: string }
  setUser: () => void
  login: () => void
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const LoginPageView = ({ user, setUser, login, handleOnKeyPress }: Props) => {
  return (
    <Box
      className="content-center"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 20,
      }}
    >
      <Box
        sx={{
          p: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper',
          maxWidth: 600,
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <img src="/image/logo.png" width={400} />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">Temporence 관리자 페이지</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ID"
              fullWidth
              value={user.username}
              name="username"
              onChange={setUser}
              onKeyDown={handleOnKeyPress}
              placeholder="아이디를 입력하세요"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={user.password}
              name="password"
              onChange={setUser}
              onKeyDown={handleOnKeyPress}
              placeholder="비밀번호를 입력하세요"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={login}
              color="error"
            >
              로그인
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LoginPageView
