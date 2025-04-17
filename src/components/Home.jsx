import { motion } from 'motion/react';
import React from 'react'
import { MdDownload,MdOutlineArrowDownward } from "react-icons/md";


const Home = () => {
  
  function goToSection(id){
      document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'})            
  }
  return (
    <div id='home' className='home bg-fixed   bg-cover relative flex items-center bg-black justify-center h-[calc(92vh-74px)] '>
       <svg className=" h-20 w-[100%] max-sm:h-10 absolute  left-0 bottom-0 z-40 " xmlns="http://www.w3.org/2000/svg" xmlns:href="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
  <defs>
    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <motion.g
animate={{
  translateX:200
}}
transition={{
  duration:10,
  repeat:Infinity
}}
  className="wave1 fill-white ">
    <use href="#wave-path" x={50} y={9} />
  </motion.g>
  <motion.g
  animate={{
    translateX:-200
  }}
  transition={{
    duration:7,
    repeat:Infinity
  }}
  className="wave2 fill-white opacity-[.8] ">
    <use href="#wave-path" x={50} y={9} />
  </motion.g>
  <motion.g
  animate={{
    translateX:200
  }}
  transition={{
    duration:4,
    repeat:Infinity
  }}
  className="wave3 fill-white opacity-[.4] ">
    <use href="#wave-path" x={50} y={9} />
  </motion.g>
</svg>

      <button onClick={()=>goToSection('about')} className=' arrow absolute bottom-20 left-1/2 -translate-x-1/2 p-2 hover:bg-gray-300 cursor-pointer transition duration-200 rounded-md z-20'><MdOutlineArrowDownward fontSize={25} /></button>
      <div className="conic absolute w-full h-full left-0 top-0 max-sm:hidden"></div>
      <div className="conicSmall absolute w-full h-full left-0 top-0 sm:hidden"></div>
      <div className="container xl:max-w-[1200px]  px-6 mx-auto max-sm:px-4">
    <div className='relative z-10  text-center  max-sm:text-start'>
    <h1 className='font-bold text-6xl text-black tracking-tight max-lg:text-5xl  max-sm:text-4xl leading-12'>Hello, I'm Ayush <br className='sm:hidden'/> Singh</h1>
    <h4 className='font-medium text-4xl text-gray-800 my-5 max-lg:text-3xl max-sm:text-2xl max-sm:my-4'>Full-Stack Developer</h4>
    <p className='text-2xl font-normal text-gray-900 max-lg:text-xl max-sm:text-lg'>I build responsive, accessible, and performant web experiences</p>
    <div className="flex justify-center  gap-4 mt-8 max-sm:justify-start">
      <a href="AyushResume.pdf"  download className='text-base flex items-center justify-center gap-2 text-black cursor-pointer px-7 py-3 bg-white capitalize font-medium tracking-wide rounded-md hover:bg-white/80  transition duration-200 max-sm:text-sm'><MdDownload fontSize={20}/> <span>resume</span> </a>
      <button onClick={()=>goToSection('contact')} className='text-base text-white cursor-pointer px-7 py-3  bg-gradient-to-br from-pink-500 to-blue-500 capitalize font-medium tracking-wide rounded-md  duration-200 relative group max-sm:text-sm
      after:content-[""] after:w-full after:h-full after:absolute  after:rounded-md after:left-0 after:top-0 after:bg-gradient-to-l after:from-pink-500 after:to-blue-500 after:animate-touch after:hover:animate-none
      '> <span className='relative z-10'>get in touch</span> </button>
    </div>
   
    </div>
   
    </div>
    </div>
  )
}

export default Home
