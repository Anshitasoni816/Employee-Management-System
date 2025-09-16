import React, { useState } from 'react'
import axios from 'axios'
import loginImage from '../assets/A dynamic and minimalistic vector illustration….jpg'
const Login = () => {
  
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleSubmit = async() => {

    try {

      const response = await axios.post("http://localhost:3000/api/auth/login",{email,password})

      console.log(response)
      
    } catch (error) {

      console.log(error)

    }

  }

  return (
    <>

      <main className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200'>

        <div className='flex justify-center items-center border-2 border-gray-200 bg-white shadow-lg shadow-blue-300 rounded-xl'>

          <div className='flex justify-center items-center h-120 w-100'>

            <div className='flex justify-center items-center bg-white p-10'>

              <form onSubmit={handleSubmit}>

                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold text-center '>SIGN IN</h2>
                  <p className='text-sm text-center text-gray-600'>Welcome employees,enter your details</p>
                </div>

                <div className='mt-6 border-b-1 pb-1 group focus-within:border-b-blue-700 focus-within:border-b-2'>
                  <input className='text-sm outline-none' type="email" placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='mt-4 border-b-1 pb-1 group focus-within:border-b-blue-700 focus-within:border-b-2'>
                  <input className='text-sm outline-none' type="password" placeholder='password' 
                  onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className='mt-8 text-center font-medium border rounded bg-amber-400 hover:bg-amber-500 transition duration-500 hover:scale-103 hover:cursor-pointer'>
                  <button type='submit' className='hover:cursor-pointer'>Sign in</button>
                </div>

                <div className='mt-4 text-center'>
                  <a href="#" className='text-xs hover:text-blue-700 hover:underline hover:font-medium'>Forgot password ?</a>
                </div>

              </form>

            </div>

          </div>

          <div>
            <img src={loginImage} alt="" className='h-120 w-100 object-contain rounded-xl' />
          </div>

        </div>

      </main>



    </>
  )
}

export default Login
