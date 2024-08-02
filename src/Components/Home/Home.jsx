import React, { useState } from 'react'
import style from "./Home.module.css";
import avatar from '../../assets/avataaars.svg'
import Header from '../Header/Header.jsx'

export default function Home() {

  return (
    <>
      <div className="container py-4 bg-teal-500">
        <div className="flex flex-col justify-center items-center">
          <div className="image">
            <img src={avatar} alt=""/>
          </div>
          <Header header={'start framework'}/>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  )
}
