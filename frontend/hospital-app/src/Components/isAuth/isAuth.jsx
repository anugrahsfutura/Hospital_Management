import React, { createContext, useContext, useState } from 'react'
const authContext = createContext();
function useAuth() {
    const [auth,setauth]=useState(false)
  return {
    auth,
    login(){
    return new Promise((res)=>{
        setauth(true)
        res()
    })
  },
  logout(){
    return new Promise((res)=>{
        setauth(false)
        res()
    })
  }
  }
}

export function AuthProvider({ children }) {
    const auth = useAuth();
  
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }

  export default function AuthConsumer() {
    return useContext(authContext);
  }
