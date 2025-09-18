import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {

    const {user, loading} = useAuth()

    if(loading) return <p>Loading...</p>

  return (

    <div>
      
     { user && user.role === "admin" ? children : <Navigate to = "loginn" replace />}

    </div>

  )
}

export default ProtectedRoutes
