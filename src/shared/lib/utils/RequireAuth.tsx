import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation()
  const isAuth = localStorage.getItem('isAuth') === 'true'

  if (!isAuth) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
      />
    )
  }
  return (
    children
  )
}
