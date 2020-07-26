import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';

import API from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('auth-jwt');
      if (token) {
        API.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: data } = await API.get('usuarios/eu');
        if (data) {
          setUser(data);
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (cpf, senha) => {
    const { token } = await API.post('session',  { cpf, senha });
    if (token) {
      Cookies.set('auth-jwt', token);
      API.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: data } = await API.get('usuarios/eu');
      setUser(data);
    }
  };

  const logout = () => {
    Cookies.remove('auth-jwt');
    setUser(null);
    window.location.pathname = '/login';
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      isAdmin: user && user.funcao === 'admin',
      user,
      login,
      loading,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )

};

export default function useAuth() {
    const authContext = useContext(AuthContext);
    return authContext;
}

export function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        router.push('/login');
      }
    }, [loading, isAuthenticated]);

    return (<Component {...arguments} />)
  }
}

export function ProtectAdminRoute(Component) {
  return () => {
    const { isAuthenticated, loading, isAdmin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        router.push('/login');
      } else if (!isAdmin) {
        router.push('/');
      }
    }, [loading, isAuthenticated, isAdmin]);

    return (<Component {...arguments} />)
  }
}
