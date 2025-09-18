import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth()

    if(loading) return <p>Loading</p>

  return (

    <div>

        { user? children : <Navigate to = "/loginn" replace/>}
      
    </div>
    
  )
}

export default PrivateRoutes
