import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import {Outlet} from "react-router-dom"
import LoginPopup from './LoginPopup/LoginPopup';

function OutLet() {
  const[showLogin, setShowlogin] = useState(false);
  return (
   <>
   {
    showLogin ? <LoginPopup setShowlogin={setShowlogin}/> :  <></>
   }
    <NavBar setShowlogin={setShowlogin}/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default OutLet