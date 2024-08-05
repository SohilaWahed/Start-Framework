import React, { useState } from 'react'
import style from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <nav className="bg-blue-950 py-5 fixed top-0 inset-x-0 flex flex-wrap items-center z-10">
        <h2 className={`w-1/2 uppercase text-start ps-10 text-2xl font-bold`}>start framework</h2>
      
        <div className='w-1/2 text-end my-3 pe-10 lg:hidden' onClick={()=>toggleVisibility()} >
          <i className="fa-solid fa-bars text-3xl py-2 px-3 border-[1px] border-[#1A252F] rounded-md text-[#1A252F] transition-all duration-[.5s] hover:text-white hover:border-white"></i>
        </div>
        {isVisible && <div className={`links w-1/2 lg:hidden text-end transition-all duration-[.2s] ease-in-out`}>
          <ul className={`ps-10 text-start lg:flex lg:space-x-4 lg:justify-end lg:pe-10 transition-all duration-[.3s]`} >
            <li className='my-6 font-bold uppercase'><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Start-Framework/about">about</NavLink></li>
            <li className='my-6 font-bold uppercase'><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Start-Framework/portfolio">portfolio</NavLink></li>
            <li className='my-6 font-bold uppercase'><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Start-Framework/contact">contact</NavLink></li>
          </ul>
        </div>}
        
        <div className={`links w-1/2 hidden lg:block text-end transition-all duration-[.2s] ease-in-out`}>
          <ul className={`ps-10 text-start lg:flex lg:space-x-4 lg:justify-end lg:pe-10 transition-all duration-[.3s]`} >
            <li className='my-6 font-bold uppercase'><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Start-Framework/about">about</NavLink></li>
            <li className='my-6 font-bold uppercase'><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Start-Framework/portfolio">portfolio</NavLink></li>
            <li className='my-6 font-bold uppercase'><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Start-Framework/contact">contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
