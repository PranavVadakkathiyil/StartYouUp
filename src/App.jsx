import React from 'react'
import Header from './layout/Header'
import './App.css'
import './utils/fonts.css'
import Banner from './components/Banner'
import PreviewCard from './components/PreviewCard'
import Home from './pages/Home'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddInfo from './components/AddInfo'
import ListingInfo from './components/ListingInfo'
import Chat from './components/Chat'
import Meet from './components/Meet'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>

      <Route path='/dashboard/*' element={<DashBoard/>}/>
      
    </Routes>
    
 
    </>
  )
}

export default App