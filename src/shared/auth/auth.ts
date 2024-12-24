import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAuthRedirect() {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('isAuth') === 'true'

  useEffect(() => {
    if (!isAuth) {
      navigate('/')
    }
  }, [])
}
