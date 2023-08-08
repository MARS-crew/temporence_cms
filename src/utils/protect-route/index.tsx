// ** React Imports
import { useMemo } from 'react'

// ** Router Imports
import { Navigate, Outlet } from 'react-router-dom'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { getAccessToken } from '@/store/app/auth'

// ** Other Imports
import { isNull } from 'lodash'

export function ProtectRoute() {
  const token = useSelector(getAccessToken)

  const isAuthorization = useMemo(() => isNull(token), [])

  return isAuthorization ? <Outlet /> : <Navigate to="/" />
}

export function PublicRoute() {
  const token = useSelector(getAccessToken)
  const isAuthorization = useMemo(() => isNull(token), [])

  return isAuthorization ? <Navigate to="/" /> : <Outlet />
}
