import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {

   const { user, loading } = useAuth()
   const navigate = useNavigate()

   if(loading) {

    return <p>Loading.....</p>

   }

   if(!user) {
    
    navigate('/loginn')

   }

  return (
    <>
       
          <pre>
                name:  {user.name},
                role : {user.role}
          </pre>
        
    </>
  )
}

export default AdminDashboard
