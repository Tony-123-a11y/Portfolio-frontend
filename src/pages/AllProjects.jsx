import React, { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

const AllProjects = ({setshowNav}) => {
     useEffect(() => {
          setshowNav(false)
        }, [])
        const projects=[
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
              thumbnail:'clock.png',
              title:'Alarm Clock',
              description:' Alarm clock built with HTML, CSS and Javascript. Features includes digital clock, analogue clock and a alarm input',
              technology:['HTML','Javascript','CSS'],
              liveLink:'https://clock-chi-coral.vercel.app/',
              gitLink:'https://github.com/Tony-123-a11y/Clock'
            },
            {
              thumbnail:'CandyTable.png',
              title:'Candy Table',
              description:'Stoing data of candies with the help of table using HTML, CSS, and Javacript',
              technology:['HTML','Javascript','CSS'],
              liveLink:'https://candy-table.vercel.app/',
              gitLink:'https://github.com/Tony-123-a11y/CandyTable'
            },
          ]
      
  return (
    <div>
                  <div className="container mt-10 px-10 mx-auto max-sm:px-4 font-primary">
                    <h1 className='text-5xl font-bold bg-gray-50 py-5 text-center'>All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {projects.map((project,i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default AllProjects
