import { styled } from '@mui/material'
import VerticalNavigation from './vertical'

const LayoutWrapper = styled('div')({
  display: 'flex',
})

const Header = styled('div')({
  background: '#333',
  color: '#fff',
  padding: '1rem',
  flexShrink: 0,
})

const MainContentWrapper = styled('div')({
  flexGrow: 1,
})

const UseLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <h1>My Website</h1>
      </Header>
      <VerticalNavigation />
      <MainContentWrapper>{children}</MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout
