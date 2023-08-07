// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Router Imports
import { Link, useLocation } from 'react-router-dom'
// ** Mui Imports
import {
  Divider,
  List,
  ListItemIcon,
  Drawer,
  styled,
  ListItemText,
  Box,
  Avatar,
  ListItem,
} from '@mui/material'

// ** Component Imports
import navListItem from '../nav'
import Hori from '../hori'
import SubMenu from '../subMenu'

const DrawerPaper = styled(Drawer)({
  width: 250,
})

const VerticalNavigation = () => {
  const { pathname } = useLocation()
  const [listItems, setListItems] = useState<any[]>(navListItem)

  const handleSubMenuToggle = (index: any) => {
    const updatedListItems = [...listItems]
    updatedListItems[index].isSubMenuOpen =
      !updatedListItems[index].isSubMenuOpen
    setListItems(updatedListItems)
  }

  useEffect(() => {
    const updatedListItems = listItems.map((item) => {
      if (item.href === '/' + pathname.split('/')[1]) {
        return { ...item, isSubMenuOpen: true }
      }

      return { ...item, isSubMenuOpen: false }
    })

    setListItems(updatedListItems)
  }, [pathname])

  return (
    <>
      <Hori />
      <DrawerPaper variant="permanent">
        <Box
          component="div"
          sx={{
            width: 250,
            backgroundColor: '#222222',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Link to="/">
              <img src="/image/logo.png" width={160} />
            </Link>
          </Box>
          <Divider />
          <List>
            {listItems.map((listItem, index) => (
              <Fragment key={index}>
                <ListItem
                  sx={{ color: 'white' }}
                  onClick={() => handleSubMenuToggle(index)}
                >
                  <ListItemIcon sx={{ color: 'white', ml: 3 }}>
                    {listItem.listIcon}
                  </ListItemIcon>
                  <ListItemText
                    primary={listItem.listText}
                    sx={{ color: 'white' }}
                  />
                </ListItem>
                {listItem.isSubMenuOpen && listItem.subMenuItems && (
                  <SubMenu listItems={listItem.subMenuItems} />
                )}
              </Fragment>
            ))}
          </List>
        </Box>
      </DrawerPaper>
    </>
  )
}

export default VerticalNavigation
