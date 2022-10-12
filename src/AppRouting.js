import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'

import React from 'react'
import DashBoard from './pages/dashboard/DashBoard'

function AppRouting() {
    let loggedIn = true
  return (
    <Router>
        <Routes>
            <Route exact path='/' element=
                {
                    loggedIn 
                    ? <Navigate from='/' to='/dashboard'></Navigate>
                    : <Navigate to='/login'></Navigate>
                }>
            </Route>
            <Route exact path='/login' element={<LoginPage></LoginPage>}></Route>
            <Route exact path='/dashboard' element={
                    loggedIn 
                    ? <DashBoard></DashBoard>
                    : <Navigate to='/login'></Navigate>
            }>
               
            </Route>
            <Route element={NotFoundPage}></Route>
        </Routes>
    </Router>
  )
}

export default AppRouting