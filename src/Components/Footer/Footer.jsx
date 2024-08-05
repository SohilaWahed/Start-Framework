import React, { useState } from 'react'
import style from "./Footer.module.css";


export default function Footer() {

  return (
    <>
      <footer className="pt-4 bg-blue-950">
        <div className="contact py-24 flex flex-col justify-center items-center sm:flex-row">
          <div className="location sm:w-1/3 text-center py-4">
            <h2 className='uppercase text-3xl font-medium'>location</h2>
            <p className="p-2">2215 John Daniel Drive</p>
            <p className="p-2">Clark, MO 65243</p>
          </div>
          <div className="web sm:w-1/3 text-center py-4">
            <h2 className='uppercase text-3xl font-medium'>around the web</h2>
            <div className="icons p-2">
              <i className="fa-brands fa-facebook mx-1 p-2 rounded-[50%] border-[1px]"></i>
              <i className="fa-brands fa-twitter mx-1 p-2 rounded-[50%] border-[1px]"></i>
              <i className="fa-brands fa-linkedin-in mx-1 p-2 rounded-[50%] border-[1px]"></i>
              <i className="fa-solid fa-globe mx-1 p-2 rounded-[50%] border-[1px]"></i>
            </div>
          </div>
          <div className="about sm:w-1/3 text-center py-4">
            <h2 className='uppercase text-3xl font-medium'>about freelancer</h2>
            <p className="p-2">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        <div className="copyright bg-[#1A252F] text-center py-4">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  )
}
