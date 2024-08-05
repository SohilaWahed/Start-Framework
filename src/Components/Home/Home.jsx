import React, { useState } from 'react'
import style from "./Home.module.css";
import avatar from '../../assets/avataaars.svg'
import Header from '../Header/Header.jsx'

export default function Home() {

  return (
    <>
      <div className="py-4 bg-teal-500">
        <div className="flex flex-col justify-center items-center">
          <div className="image pb-4">
            <img src={avatar} alt="" className='w-full'/>
          </div>
          <Header header={'start framework'} color={'white'}/>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  )
}
