import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Loginn from './pages/Loginn'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeDashboard from './pages/EmployeeDashboard'
import ProtectedRoutes from './utils/ProtectedRoutes'
import PrivateRoutes from './utils/PrivateRoutes'

const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={
          <Navigate to="/admin-dashboard" />
          }> </Route>

        <Route path="/login" element={
          <Login />
        }></Route>

        <Route path="/loginn" element={<Loginn />}></Route>

        <Route path="/admin-dashboard" element={
          <ProtectedRoutes>
            <AdminDashboard />
          </ProtectedRoutes>
        }></Route>

        <Route path="/employee-dashboard" element={
          <PrivateRoutes>
            <EmployeeDashboard />
          </PrivateRoutes>
        }></Route>

      </Routes>

      {/* Toast container must be inside the BrowserRouter */}
      <ToastContainer position="top-right" autoClose={3000} />

    </BrowserRouter>

  )

}

export default App
