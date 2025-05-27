import { createContext, useContext, useState, useEffect } from 'react'
import {Api} from '../services.js/api'
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState(true)
    const [loading, setLoading] = useState(true)
    const [userType, setUserType] = useState('')
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      const recoveredUser = localStorage.getItem('user')
      if (!recoveredUser) {
        Api.defaults.headers.Authorization = `Bearer ${token}` 
        setAuthenticated(false);
      }
      setLoading(false)
    }, []);
    console.log(authenticated)


  const login = (token, user) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token);
    

    Api.defaults.headers.Authorization = `Bearer ${token}` 

    setAuthenticated(true)
    
    navigate('/')
  };

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
   
    Api.defaults.headers.Authorization = null 

    setAuthenticated(false)
    navigate('/login')
  };

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado pra facilitar o uso do contexto
export const useAuth = () => useContext(AuthContext)

