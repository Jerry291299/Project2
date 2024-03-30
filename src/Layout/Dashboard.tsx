import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Dashboard