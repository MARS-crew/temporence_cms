import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Drawer,
  styled,
} from '@material-ui/core'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AdbIcon from '@mui/icons-material/Adb'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import ApprovalIcon from '@mui/icons-material/Approval'

import { ListItemText, Toolbar as MuiToolbar, Typography } from '@mui/material'
import Hori from '@/layouts/hori'

const DrawerPaper = styled(Drawer)({
  width: 1000,
})

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#C63327',
    height: '100%',
  },
  avatar: {
    margin: '0.5rem auto',
    padding: '1rem',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'white',
    marginLeft: 10,
  },
}))

const SidebarWrapper = styled('div')(({ theme }) => ({
  width: 400,
  flexShrink: 0,
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const HeaderTypography = styled(Typography)({
  flexGrow: 1,
})

const VerticalNavigation = () => {
  const classes = useStyles()
  return (
    <SidebarWrapper>
      <Hori />
      <DrawerPaper variant="permanent">
        <Box className={classes.menuSliderContainer} component="div">
          <Avatar
            className={classes.avatar}
            src="https://i.ibb.co/rx5DFbs/avatar.png"
            alt="Juaneme8"
          />
          <Divider />
          <List>
            {listItems.map((listItem, index) => (
              <ListItem className={classes.listItem} button key={index}>
                <ListItemIcon className={classes.listItem}>
                  {listItem.listIcon}
                </ListItemIcon>
                <ListItemText
                  primary={listItem.listText}
                  sx={{ color: 'white' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </DrawerPaper>
    </SidebarWrapper>
  )
}

export default VerticalNavigation

const listItems = [
  {
    listIcon: <AccessibilityNewIcon />,
    listText: 'Home',
  },
  {
    listIcon: <AdbIcon />,
    listText: 'Resume',
  },
  {
    listIcon: <AirportShuttleIcon />,
    listText: 'Portfolio',
  },
  {
    listIcon: <ApprovalIcon />,
    listText: 'Contacts',
  },
]
