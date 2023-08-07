// ** React Imports
import { useMemo, useState } from 'react'

// ** MUI Imports
import {
  styled,
  AppBar,
  Toolbar as MuiToolbar,
  Menu,
  MenuItem,
  Grid,
  Avatar,
  Button,
  Typography,
} from '@mui/material'

// ** Router Imports
import { useNavigate, useLocation } from 'react-router-dom'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { logout } from '../../store/app/auth'
import { Theme } from '@material-ui/core'
import navListItem from '../nav'

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  boxShadow: 'none',
}))

const AppBarWrapper = styled(AppBar)({
  Index: (theme: Theme) => theme.zIndex.drawer + 1,
  boxShadow: 'none',
  height: 30,
})

const Hori = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState<any | null>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const title = useMemo(() => {
    return navListItem
      .map((item) => item.subMenuItems)
      .flat()
      .filter((item) => item.href === pathname)[0].listText
  }, [pathname])

  return (
    <AppBarWrapper position="fixed">
      <Toolbar sx={{ backgroundColor: '#FFFAFA' }}>
        <Grid container spacing={6}>
          <Grid item xs={1.8} />
          <Grid item xs={8.2} sx={{ mt: 5 }}>
            <Typography variant="h3" sx={{ color: 'black' }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ mt: 3, textAlign: 'right' }}>
            <Button onClick={handleClick}>
              <Avatar src="/image/avatar.png" sx={{ width: 50, height: 50 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarWrapper>
  )
}

export default Hori
