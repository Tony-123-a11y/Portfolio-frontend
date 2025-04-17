import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { GrShare } from "react-icons/gr";
import Heading from './Heading';
import { Link } from 'react-router-dom';
const Projects = ({setshowNav}) => {
  let arr=[
    {
      thumbnail:'Evara.png',
      title:'Luxury Jwellery Website',
      description:'A fully responsive jwellery online platform built with React.JS and Tailwind CSS. Features include product filtering, cart functionality, and user authentication.',
      technology:['HTML','Javascript','CSS','React.JS','Tailwindcss','Redux','Vite'],
      liveLink:'',
      gitLink:''
    },
    {
      thumbnail:'calc.png',
      title:'Calculator',
      description:'A fully responsive calculator web app built with HTML and CSS and Javascript. This calculator can perform various arithmetic operations with a click!',
      technology:['HTML','CSS','Javascript'],
      liveLink:'https://calculator-rho-rose-52.vercel.app/',
      gitLink:'https://github.com/Tony-123-a11y/calculator'
    },
    {
      thumbnail:'lifeTracker.png',
      title:'Life Tracker',
      description:'A fully responsive website built with React.js and Tailwind CSS. Project includes a task list with features like adding , completing and deleting tasks and a expense tracker for adding, deleting and updating expenses.',
      technology:['HTML','Javascript','Tailwind CSS','React.JS','Tailwindcss'],
      liveLink:'https://life-tracker-one.vercel.app/',
      gitLink:'https://github.com/Tony-123-a11y/Life-tracker'
    },
    {
      thumbnail:'e-commerce.png',
      title:'E-commerce Platform',
      description:'A fully responsive E-commerce  platform built with React.JS and Tailwind CSS and Vite. Features include product filtering, cart functionality, and search functionality,wishlist, data pagination.',
      technology:['HTML','Javascript','CSS','React.JS','Tailwindcss','Redux','Framer motion','react-slick'],
      liveLink:'https://e-commerce-plum-ten-99.vercel.app/',
      gitLink:'https://github.com/Tony-123-a11y/e-commerce'
    },
    {
      thumbnail:'weather.png',
      title:'Weather App',
      description:'A  responsive weather app built with React.JS and Tailwind CSS and Vite , based on entered city it can give you data of sea level, humidity, wind speed, pressure, sunrise, etc. Bulid with dark and light mode feauture with smooth animations',
      technology:['HTML','Javascript','CSS','React.JS','Tailwindcss','API','Framer motion'],
      liveLink:'https://weather-app-nine-gilt-52.vercel.app/',
      gitLink:'https://github.com/Tony-123-a11y/Weather-app'
    },
  ]

  const ArrowLeft=({onClick})=>{
    return(
      <div className="text-black  absolute -left-7 max-md:hidden top-1/2 text-xl cursor-pointer max-sm:text-base -translate-y-1/2 z-10" onClick={onClick}>
      <FaChevronCircleLeft color='black'/>
        </div>
    )
   
  }
  const ArrowRight=({onClick})=>{
    return(
      <div className="text-black absolute -right-7 max-md:hidden text-xl cursor-pointer max-sm:text-base  top-1/2 -translate-y-1/2"  onClick={onClick}>
        <FaChevronCircleRight />
        </div>
      )
}
  
  const settings={
        autoplay:true,
        prevArrow:<ArrowLeft/>,
        nextArrow:<ArrowRight/>,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        infinite:true,

  };
  return (
    <div id='project'>
       
        <div className="container xl:max-w-[1100px]   px-6 mx-auto max-sm:px-4 ">
        <div className="py-20 max-sm:py-15">
            <Heading heading={'my projects'}/>
            <div className='relative'>
            <Slider {...settings}>
            {
              arr.map((project,i)=>{
              return  <div key={i} className=' font-primary mt-15 max-sm:mt-10 bg-gray-50 border border-gray-300 rounded-md h-170 max-md:h-175 max-sm:h-182'>
                {/* image content */}
                <div className='h-100 rounded-t-md max-md:h-90 max-sm:h-70'>
                    <img src={project.thumbnail} alt="" className='bg-black w-full h-full rounded-t-md object-cover object-top max-sm:object-contain max-sm:object-center' />
                </div>
                {/* text content */}
                <div className="p-6 mt-2 max-sm:p-3 tracking-wide">
                <h1 className='text-2xl font-semibold capitalize'>{project.title}</h1>
                <ul className='flex gap-2 mt-4 flex-wrap'>
                     {
                      project.technology.map((tech,i)=>{
                        return <li key={i} className='px-5 py-1 border border-gray-300 rounded-full font-medium text-sm bg-white'>{tech}</li>
                      })
                     }    
                     </ul>   
                <p className='text-gray-500 my-5'>{project.description}</p>
                   
                <div className="flex items-center justify-between">
                <a href={project.gitLink} className='flex px-4 py-2 justify-center items-center rounded-md gap-2 border bg-white border-gray-300'> 
                <LuGithub />
                <span>Code</span>
                </a>
                <a href={project.liveLink} className='flex px-4 py-2 justify-center bg-black text-white rounded-md items-center gap-2 relative overflow-hidden'>
                 <div className="absolute left-0 top-0 w-5 h-full -skew-12 bg-gradient-to-r from-transparent via-white opacity-50 to-transparent animate-shine"></div>
                <GrShare />
                <span >Live demo</span>
                </a>
            </div>
            </div>
            </div>
              })
            }
         
         </Slider>
           
        </div>
        <Link to='/allprojects' className='px-4 py-2  capitalize bg-black border text-white rounded-md mt-15 block text-center hover:bg-white transition duration-200 hover:text-black max-sm:max-w-full max-w-40 m-auto'>View all projects</Link>
        </div>
        </div>
    </div>
  )
}

export default Projects
