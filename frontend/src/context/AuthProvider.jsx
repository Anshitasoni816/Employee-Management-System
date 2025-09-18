import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const AuthContext = createContext()


const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect (() => {
          
        const verifyUser = async () => {

          try {
            
            const token = localStorage.getItem('token')
            
            if(token) {

              const response = await axios.get("http://localhost:3000/api/auth/verify",{
                headers: {
                  "Authorization" : `Bearer ${token}`
                }
              })

              if(response.data.success) {

                setUser(response.data.user)

              }

            }
            
            else {
 
                setUser(null)
                setLoading(false)

            }

          } catch (error) {
            
                if(error.response && !error.response.data.success) {

                  setUser(null)

                }

          } finally {

            setLoading(false)
            
          }

        }
        verifyUser()

    }, [])

     const logIn = (user) => {

     setUser(user)

     }

     const logOut = () => {
 
     setUser(null)
     localStorage.removeItem('token')

     }

  return (

    <AuthContext.Provider value = {{user, logIn, logOut, loading}}>
      
    {children}

    </AuthContext.Provider>

  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
