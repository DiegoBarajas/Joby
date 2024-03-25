import React from 'react'
import { Navigate } from 'react-router-dom'

const LoggedRoute = ({ children }) => {
  const session = JSON.parse(localStorage.getItem('session'));
  
  return session === null ? <Navigate to='/login'/> : children
}

export default LoggedRoute