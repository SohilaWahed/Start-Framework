import React, { useState } from 'react'
import style from "./Header.module.css";


export default function Header(props) {

  return (
    <>
      <h2 className={`${props.color} uppercase text-4xl font-bold`}>{props.header}</h2>
      <div className="decoration flex items-center py-3">
        <div className={`left-line me-4  h-[4px] w-16 ${props.bg}`}></div>
        <i className={`fa-solid fa-star ${props.color}`}></i>
        <div className={`right-line ms-4 h-[4px] w-16 ${props.bg}`}></div>
      </div>
    </>
  )
}
