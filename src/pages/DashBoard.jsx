import React from 'react'
import Navigation from '../components/Navigation'
import UserDashboard from '../components/UserDashboard'

const DashBoard = () => {
  return (
    <>
    <div className='flex'>
    <Navigation/>
    <UserDashboard/>
    </div>
    
    </>
  )
}

export default DashBoard