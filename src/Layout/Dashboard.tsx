import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Admin/Navbar'


type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default Dashboard