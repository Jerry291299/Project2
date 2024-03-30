import React from 'react'
import Header from '../Components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer'

type Props = {}

const CLients = (props: Props) => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default CLients