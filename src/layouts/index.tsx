// ** Router Imports
import { useLocation } from 'react-router-dom'

// ** Mui Imports
import { styled } from '@mui/material'

// ** Component Imports
import VerticalNavigation from './vertical'
import { useMemo } from 'react'

const LayoutWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
})

const Header = styled('div')({
  color: '#fff',
  flexShrink: 0,
})

const MainContentWrapper = styled('div')({
  flexGrow: 1,
  display: 'flex',
})

const Content = styled('div')({
  flexGrow: 1,
  padding: '1rem',
})

const hiddenList = ['/']

const UseLayout = ({ children }: any) => {
  const { pathname } = useLocation()

  const isHidden = useMemo(
    () => (hiddenList.includes(pathname) ? true : false),
    [pathname],
  )

  if (isHidden) {
    return <>{children}</>
  }

  return (
    <LayoutWrapper>
      <Header>
        <h1>My Website</h1>
      </Header>
      <MainContentWrapper>
        <VerticalNavigation />
        <Content>{children}</Content>
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout
