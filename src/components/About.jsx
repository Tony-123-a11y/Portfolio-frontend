
import React from 'react'
import Heading from './Heading'
let arr=[
'React,js',
'Express.js',
'MongoDB',
'Tailwind CSS',
'Node.JS'
]

const About = () => {
  return (
    <div id='about'>
      <div className="container xl:max-w-[1100px]  px-6 mx-auto max-sm:px-4 ">
        <div className='py-20 max-sm:py-15'>
      <Heading heading={'about me'}/>
        <div className="flex items-center font-primary  justify-between gap-15 mt-15  max-md:flex-col max-sm:gap-10 max-sm:mt-10">
            {/* text content */}
            <div className='w-1/2 max-md:order-1 max-md:w-full max-md:text-justify'>
            <p className=' tracking-wide leading-7'>
            I am a passionate and detail-oriented front-end web developer eager to kickstart my career in crafting visually appealing and user-friendly websites. 
               </p>
                <p className=' tracking-wide leading-7 mt-5'>
                As a recent graduate (or self-taught enthusiast), I’ve worked on personal projects to hone my skills in modern frameworks like React and Tailwind CSS, while staying updated with the latest web development trends.
            </p>
            <div className='flex items-center justify-start gap-3 flex-wrap mt-6'>
                {
                arr.map((ele,i)=>{
                return <span key={i} className='px-5 py-1 border capitalize  text-white rounded-full font-medium bg-gradient-to-r from-blue-400  to-purple-400'>{ele}</span>
                })
            }
            </div>
            <p className=' tracking-wide leading-7 mt-5'>
            When I'm not coding, you can find me exploring, reading, or listening to music.
            </p>
            </div>
            {/* image content */}
            <div>
                <div className='w-110 h-110 rounded-full border shadow-2xl border-gray-300 max-lg:w-80 max-lg:h-80'>
                  <img src="dp.jpg" alt=""  className='h-full w-full rounded-full'/>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
