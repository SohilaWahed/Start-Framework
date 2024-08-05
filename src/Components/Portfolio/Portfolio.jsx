import React, { useState, useRef, useEffect } from 'react'
import style from "./Portfolio.module.css";
import Header from '../Header/Header.jsx'
import poert1 from '../../assets/poert1.png'
import poert2 from '../../assets/port2.png'
import poert3 from '../../assets/port3.png'

export default function Portfolio() {

  const [selectedImage, setSelectedImage] = useState('null');
  const dispalyImage = (src) => {
    // console.log(src);
    setSelectedImage(src)
    // console.log(selectedImage);
  }
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-black'>{selectedImage}</h1>
          <Header header={'portfolio component'} color={'text-blue-950'} bg={'bg-blue-950'} />
          <div className="gallery flex flex-col md:flex-row flex-wrap justify-center items-center">
            <div className="image md:w-1/2 lg:w-1/3 p-4 relative">
              <img className='rounded-md' src={poert1} alt="img-1" onClick={dispalyImage(poert1)} />
              <div className="rounded-md absolute top-0 right-0 left-0 bottom-0 m-4 bg-teal-500 opacity-0 hover:opacity-85 duration-[0.6s] ease-in flex justify-center items-center">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

            {selectedImage && <div onClick={setSelectedImage(null)} className='fixed inset-y-0 inset-x-0 z-30 flex justify-center items-center bg-teal-500 bg-opacity-25'>
                <div className="image w-[50%] h-[50%]">
                  <img src={selectedImage} alt="selectedImage" className='w-full' />
                </div>
              </div>}


            <div className="image md:w-1/2 lg:w-1/3 p-4 relative">
              <img className='rounded-md' src={poert2} alt="img-2" />
              <div className="rounded-md absolute top-0 right-0 left-0 bottom-0 m-4 bg-teal-500 opacity-0 hover:opacity-85 duration-[0.6s] ease-in flex justify-center items-center">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="image md:w-1/2 lg:w-1/3 p-4 relative">
              <img className='rounded-md' src={poert3} alt="img-3" />
              <div className="rounded-md absolute top-0 right-0 left-0 bottom-0 m-4 bg-teal-500 opacity-0 hover:opacity-85 duration-[0.6s] ease-in flex justify-center items-center">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="image md:w-1/2 lg:w-1/3 p-4 relative">
              <img className='rounded-md' src={poert1} alt="img-4" />
              <div className="rounded-md absolute top-0 right-0 left-0 bottom-0 m-4 bg-teal-500 opacity-0 hover:opacity-85 duration-[0.6s] ease-in flex justify-center items-center">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="image md:w-1/2 lg:w-1/3 p-4 relative">
              <img className='rounded-md' src={poert2} alt="img-5" />
              <div className="rounded-md absolute top-0 right-0 left-0 bottom-0 m-4 bg-teal-500 opacity-0 hover:opacity-85 duration-[0.6s] ease-in flex justify-center items-center">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="image md:w-1/2 lg:w-1/3 p-4 relative">
              <img className='rounded-md' src={poert3} alt="img-6" />
              <div className="rounded-md absolute top-0 right-0 left-0 bottom-0 m-4 bg-teal-500 opacity-0 hover:opacity-85 duration-[0.6s] ease-in flex justify-center items-center">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
