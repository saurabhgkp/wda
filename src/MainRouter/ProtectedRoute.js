import React from 'react'
import { Navigate } from 'react-router-dom'



const ProtectedRoute = ({ children}) => {

const aaa = localStorage.getItem('pwd')
  return aaa ? children : <Navigate to="/"/>
};

export default ProtectedRoute;