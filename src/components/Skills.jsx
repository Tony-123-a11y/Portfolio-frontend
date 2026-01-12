import React, { useState } from 'react'
import Heading from './Heading'
import { MdCode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineTool } from "react-icons/ai";
import { motion } from 'motion/react';
import { CgPerformance } from "react-icons/cg";
import { FaConnectdevelop } from "react-icons/fa6";
import { GoStack } from "react-icons/go";

const Skills = () => {
    const [current, setcurrent] = useState(0);
    let arr=[
    
      {
          title:'frontend',
          logo:<MdCode fontSize={20} />
      },
      {
          title:'Backend',
          logo:<FaLaptopCode fontSize={20} />
      },
      {
          title:'tools',
          logo:<AiOutlineTool fontSize={20} />
      }
     
  ]
  const skills=[
    [
      {
        name:'Javascript',
        barWidth:'90'
      },
      {
        name:'HTML/CSS',
        barWidth:'95'
      },
      {
        name:'React.JS',
        barWidth:'85'
      },
      {
        name:'Tailwind CSS',
        barWidth:'80'
      }
    ],
    [
      {
        name:'Express.JS',
        barWidth:'86'
      },
      {
        name:'MongoDB',
        barWidth:'70'
      },
      {
        name:'Node.JS',
        barWidth:'87'
      },
      {
        name:'APIs',
        barWidth:'75'
      }
    ],
    [
      {
        name:'VS Code',
        barWidth:'95'
      },
      {
        name:'Webpack/Vite',
        barWidth:'95'
      },
      {
        name:'Chrome/Edge',
        barWidth:'86'
      },
      {
        name:'Git/GitHub',
        barWidth:'80'
      }
    ],
    
  ]
  const core=[
    {
      title:'responsive design',
      logo:<GoStack fontSize={30} />
    },
    {
      title:'performance optimization',
      logo:<CgPerformance fontSize={30}  />
    },
    {
      title:'API intergration',
      logo:<FaConnectdevelop fontSize={30}  />
    },
    {
      title:'clean code',
      logo:<MdCode fontSize={30} />
    },
  ]
  
  return (
    <div className='bg-gray-50' id='skill'>
    
          <div className="container xl:max-w-[1100px]  px-6 mx-auto max-sm:px-4 ">
          <div className='py-20 max-sm:py-15'>
            <Heading heading={'my skills'}/>
            {/* content container */}
            <div className="mt-15 max-sm:mt-10 font-primary">
              {/* toggle list */}
            <ul className='flex border border-gray-200  rounded-md bg-white relative max-sm:py-0.5'>
            <div className="absolute w-1/3 bg-black h-full rounded-md top-0 left-0 transition duration-300 ease-out" style={{translate:`${current*100}%`}}></div>
                {
                   
                arr.map((ele,i)=>{
                    return <li key={i} onClick={()=> setcurrent(i)} className={`${current==i ? ' text-white' : ''} w-full  flex items-center justify-center gap-2 relative bg-transparent z-20 text-center capitalize transition duration-300  py-1.5 cursor-pointer rounded-md max-sm:text-sm max-sm:gap-1`}><span>{ele.logo}</span> <span>{ele.title}</span></li>
                })
                  
                }
                  </ul>
                  {/* skills container */}
                  <div className="flex justify-center  rounded-md mt-8 gap-8 max-md:block max-md:mt-4">
                    {/* languages and frameworks */}
                    <div className='p-6  w-1/2 bg-white border border-gray-300 rounded-md max-md:w-full max-sm:px-4'>
                          <h2 className='text-xl font-semibold capitalize'>languages & frameworks</h2>
                         
                            <ul className='mt-6'>
                              {
                                skills[current].map((skill,i)=>{
                                 return <li key={i} className='mt-3'>
                                  <div className="flex justify-between "><h2 className='max-sm:text-sm text-lg max-sm:font-semibold'>{skill.name}</h2> <span>{`${skill.barWidth}%`}</span></div>
                                  <div className='h-2 bg-gray-300 rounded-lg mt-1'>
                                    <motion.div
                                    initial={{width:0}}
                                    animate={{
                                      width: `${skill.barWidth}%`
                                    }}
                                    className='bg-gradient-to-r from-blue-400  to-red-400 h-full rounded-lg' style={{width:`${skill.barWidth}%`}}></motion.div>
                                  </div>
                                 </li>
                                })
                              }
                            </ul>
                          
                    </div>
                    <div className="p-6  w-1/2 bg-white border border-gray-300 rounded-md max-md:w-full max-md:mt-4 max-sm:px-4">
                  <h2 className='text-xl font-semibold capitalize'>Core competencies</h2>
                         
                         <ul className='grid grid-cols-2 mt-6 gap-6 max-sm:gap-4'>
                           {
                            core.map((ele,i)=>{
                             return <li key={i} className=' rounded-md text-center p-4 border border-gray-300'>
                              <div className="flex items-center justify-center">{ele.logo}</div>
                                <h2 className=' capitalize mt-2 font-medium max-md:font-normal max-md:text-sm'>{ele.title}</h2>
                              </li>
                            })
                           }
                         </ul>
                  </div>
                  </div>
                 
            </div>
         
          </div>
          </div>
    </div>
  )
}

export default Skills
