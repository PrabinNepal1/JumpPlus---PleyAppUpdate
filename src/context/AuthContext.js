import React, {useContext, useState, useEffect} from "react";
import {signup, login, logout, getCurrentUser} from "../service/authService";


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
  }

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

async function signup(username, password, email, displayName){
  return await signup(username, password,  email, displayName)
}

async function login(email, password){
  return await login(email, password)
}

function logout(){
   return logout()
}

useEffect(() =>{
    const unsubscribe = sessionStorage.getItem("user")

    if(sessionStorage.getItem("user") != null ){
    setCurrentUser(sessionStorage.getItem("user"))
    }
    else{
    setCurrentUser(null);
    }
    setLoading(false)
    
    return [unsubscribe]

  },[])

  const value = {
    currentUser,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}



