import axios from 'axios';
import { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });
  axios.defaults.headers.common['Authorization'] = auth?.token
  useEffect(()=>{
   const data = localStorage.getItem('auth')
   if(data){
    const parseData = JSON.parse(data)
    setAuth({
        ...auth,
        user:parseData.user,
        token:parseData.token,
    })
   }
   //eslint-disable-next-line
  },[])
  
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
