import React from 'react'
import { useAuth } from '../context/AuthProvider'

const AdminDashboard = () => {

   const { user } = useAuth()

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
