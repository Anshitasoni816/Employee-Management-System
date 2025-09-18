import React, { useState } from 'react'
import loginImage from '../assets/employee.jpg'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast } from "react-toastify";
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Loginn = () => {

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const { logIn } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await axios.post("http://localhost:3000/api/auth/login", { email, password })


            const { token, user } = response.data
            
            if (response.data.success) {

                toast.success("Login Successful");

                logIn(user)

                localStorage.setItem("token", token)

                if(user.role === "admin") {
                    navigate('/admin-dashboard')
                }
                else {
                    navigate('/employee-dashboard')
                }

                console.log("Login Success:", response.data);

            }

        } catch (error) {

            if (error.response && !error.response.data.success) {

                toast.error(error.response.data.error)
                console.log(error.response.data.error)

            }

            else {

                toast.error("Server Error")
                console.log("Server Error")

            }

        }

    }

    return (
        <>

            <div className='flex justify-center items-center h-screen w-full'>

                <div className='hidden md:block w-[400px] relative shrink-0 shadow-lg shadow-cyan-900'
                >
                    <div className='absolute top-12 left-14  font-extrabold text-5xl italic tracking-widest text-white'>


                    </div>

                    <img src={loginImage} alt="" className='object-cover h-screen w-full' />

                </div>


                <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200'>

                    <div className='size-105 p-4'>

                        <form onSubmit={handleSubmit}>

                            <div className='space-y-2'>
                                <p className='md:text-4xl text-gray-500'>Sign in</p>
                                <p className='md:text-sm text-gray-800'>Enter your details below</p>
                            </div>

                            <div className='mt-10 border-b-1 pb-1 focus-within:border-b-blue-800 focus-within:border-b-2 focus-within:text-sm'>
                                <input type="email" placeholder='Enter your email'
                                    className='outline-none text-md'
                                    onChange={(e) => setemail(e.target.value)}
                                    required
                                    value={email} />
                            </div>

                            <div className='mt-5 border-b-1 pb-1 focus-within:border-b-blue-800  focus-within:border-b-2 focus-within:text-sm'>
                                <input type="password" placeholder='Enter your password'
                                    className='outline-none text-md'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    value={password} />
                            </div>

                            <div className='mt-3 md:text-sm text-right'>
                                <a href="" className='text-blue-500 underline'>Forgot password?</a>
                            </div>

                            <div className='mt-5 text-center border-2 rounded p-1.5 bg-cyan-500 transition duration-500 hover:bg-cyan-600 hover:scale-102'>

                                <button type='submit'
                                    className='font-medium'>
                                    Login
                                </button>

                            </div>


                            <div className="flex items-center my-6">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="px-4 text-gray-500 text-sm">Or continue</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>


                            <div className='mt-5 text-center border-2 transition duration-500 rounded hover:scale-102 p-2'>

                                <button type='submit'
                                    className='font-medium'>
                                    <div className='flex justify-center items-center'>
                                        <FcGoogle />
                                        <p className='ms-2'>Log in with google</p>

                                    </div>
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Loginn
