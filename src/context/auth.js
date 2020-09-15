import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'

import API from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const redirectAfterLogin = () => {
    Router.push('/');
  };
  const redirectAfterLogout = () => {
    Router.push('/home');
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('auth-jwt')
      if (token) {
        API.defaults.headers.Authorization = `Bearer ${token}`
        const { data } = await API.get('usuarios/eu')
        if (data) {
          setUser(data)
        }
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (cpf, senha) => {
    const token = (await API.post('session', { cpf, senha })).data;

    if (token) {
      Cookies.set('auth-jwt', token)
      API.defaults.headers.Authorization = `Bearer ${token}`
      const { data } = await API.get('usuarios/eu')
      setUser(data)
      redirectAfterLogin();
    }
  }

  const logout = () => {
    Cookies.remove('auth-jwt')
    setUser(null)
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isAdmin: user && user.funcao === 'admin',
        user,
        login,
        loading,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  const authContext = useContext(AuthContext)
  return authContext
}

export function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        router.push('/home')
      }
    }, [loading, isAuthenticated])

    return <Component {...arguments} />
  }
}
