import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Usuario {
  id: string
  nome: string
  email: string
}

export function useAuth() {
  const [token, setToken] = useState<string | null>(null)
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUsuario = localStorage.getItem('usuario')
    
    if (storedToken) {
      setToken(storedToken)
      setUsuario(storedUsuario ? JSON.parse(storedUsuario) : null)
    }
    
    setLoading(false)
  }, [])

  const login = (newToken: string, userData: Usuario) => {
    localStorage.setItem('token', newToken)
    localStorage.setItem('usuario', JSON.stringify(userData))
    setToken(newToken)
    setUsuario(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    setToken(null)
    setUsuario(null)
    router.push('/login')
  }

  return {
    token,
    usuario,
    loading,
    isAuthenticated: !!token,
    login,
    logout
  }
} 