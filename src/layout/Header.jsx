import React from "react";
import logo from '../assets/StartupLogo.png'
const Header = () => {
  return (
    <header>
      <nav className="w-full flex items-center justify-between sm:px-18 sm:py-4 px-3 py-3 ">
       
         <div>
          <img src={logo} alt="imd" width={40} className="cursor-pointer"/>
         </div>
         <div>
          <button title="Login to your account" className=" px-4 py-2 rounded-lg bg-black text-white font-semibold cursor-pointer">Login</button>
         </div>
        
      </nav>
    </header>
  );
};

export default Header;
