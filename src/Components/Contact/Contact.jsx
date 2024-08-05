import React, { useState, useEffect } from 'react'
import style from "./Contact.module.css";
import Header from '../Header/Header.jsx'

export default function Contact() {

    //know if input has content or empty
    const [inputs, setInputs] = useState({
      name:'',
      email:'',
      password:'',
      age:'',
    });
  
    //update inputs value
    const handleChange = (event) => {
      const { id, value } = event.target;
          
      setInputs((prevInputs) => ({
        ...prevInputs,
        [id]: value,
      }));
    }  

  return (
    <>
      <div className="py-10">
        <div className="flex flex-col justify-center items-center">

          <Header header={'contact section'} color={'text-blue-950'} bg={'bg-blue-950'} />

          <div className='w-1/2 flex flex-col pt-12'>

            <label htmlFor="name" className={`text-teal-500 text-start transform duration-[.5s] ${inputs.name ?'translate-y-[20%] block':'translate-y-[90%] hidden'} `} >userName :</label>
            <input id='name' type="text" placeholder='userName' onChange={handleChange} className="border-b-[1px] my-4 pb-2 text-black focus:outline-none focus:border-b-[1px]" />

           <label htmlFor="age" className={`text-teal-500 text-start transform duration-[.5s] ${inputs.name ?'translate-y-[20%] block':'translate-y-[90%] hidden'} `}>userAge :</label>
            <input id="age" type="text" placeholder='userAge' onChange={handleChange} className="border-b-[1px] my-4 pb-2 text-black focus:outline-none focus:border-b-[1px]" />

            <label htmlFor="email" className={`text-teal-500 text-start transform duration-[.5s] ${inputs.name ?'translate-y-[20%] block':'translate-y-[90%] hidden'} `} >userEmail :</label>
            <input id="email" type="text" placeholder='userEmail' onChange={handleChange} className="border-b-[1px] my-4 pb-2 text-black focus:outline-none focus:border-b-[1px]"/>

            <label htmlFor="password" className={`text-teal-500 text-start transform duration-[.5s] ${inputs.name ?'translate-y-[20%] block':'translate-y-[90%] hidden'} `}>userPassword :</label>
            <input id='password' type="text" placeholder='userPassword' onChange={handleChange} className="border-b-[1px] my-4 pb-2 text-black focus:outline-none focus:border-b-[1px]" />

            <div className='text-start my-4'>
              <button className='px-3 py-2 bg-teal-500 rounded-md'>send Message</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
