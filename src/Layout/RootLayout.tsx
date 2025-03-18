import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router'

const RootLayout :React.FC = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default RootLayout