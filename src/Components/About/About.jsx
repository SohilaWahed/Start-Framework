import React, { useState } from 'react'
import style from "./About.module.css";
import Header from '../Header/Header.jsx'


export default function About() {

  return (
    <>
      <div className="container py-4 bg-teal-500">
        <div className="w-9/12 m-auto flex flex-col justify-center items-center">
          <Header header={'about component'} />
          <div className="paraghraphs flex">
            <p className='pe-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='ps-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </>
  )
}
