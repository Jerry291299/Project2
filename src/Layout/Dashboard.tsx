import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Admin/Navbar'


type Props = {
}

const Dashboard = (props:Props) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    alert('logout')
    sessionStorage.removeItem('user')
    navigate('/')
  }
  return (
    <>
    <div className='flex'>
    <Navbar handleLogout={handleLogout}/>
    <Outlet/>
    </div>
    </>
  )
}

export default Dashboard