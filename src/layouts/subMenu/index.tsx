// ** MUI Imports
import { ListItemText, List, ListItem, ListItemIcon } from '@mui/material'
import { useMemo } from 'react'

// ** Router Imports
import { Link, useLocation } from 'react-router-dom'
import navListItem from '../nav'

interface Props {
  listItems: {
    listIcon: any
    listText: string
    href: string
  }[]
}

const SubMenu = ({ listItems }: Props) => {
  const { pathname } = useLocation()

  const currentPath = useMemo(() => {
    return navListItem
      .map((item) => item.subMenuItems)
      .flat()
      .filter((item) => item.href === pathname)[0].href
  }, [pathname])

  return (
    <List>
      {listItems.map((listItem, index) => (
        <Link
          to={listItem.href}
          key={index}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem sx={{ color: 'white', ml: 5 }}>
            <ListItemIcon
              sx={{
                color: currentPath === listItem.href ? '#4892FF' : 'white',
              }}
            >
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={listItem.listText}
              sx={{
                color: currentPath === listItem.href ? '#4892FF' : 'white',
              }}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default SubMenu
