import React, { useState } from 'react'
import style from "./About.module.css";
import Header from '../Header/Header.jsx'


export default function About() {

  return (
    <>
      <div className="py-28 bg-teal-500">
        <div className="w-9/12 m-auto flex flex-col justify-center items-center">
          <Header header={'about component'} color={'text-white'} bg={'bg-white'} />
          <div className="paraghraphs pt-2 md:flex">
            <p className='p-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='p-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </>
  )
}
