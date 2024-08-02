import React, { useState } from 'react'
import style from "./Header.module.css";


export default function Header({header}) {
  
    return (
    <>
    <h2 className='uppercase text-3xl font-bold'>{header}</h2>
          <div className="decoration flex items-center">
            <div className="left-line me-4  h-[4px] w-16 bg-white"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="right-line ms-4 h-[4px] w-16 bg-white"></div>
          </div>
    </>
  )
}
