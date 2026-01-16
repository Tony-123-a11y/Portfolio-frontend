import { useState } from 'react'
import SideNav from './SideNav';


const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  let arr=[
{
title:'Home',
id:'home'
},
{
title:'About',
id:'about'
},
{
title:'Skills',
id:'skill'
},
// {
// title:'Achievements',
// id:'achievement'
// },
{
title:'Projects',
id:'project'
},
{
title:'contact',
id:'contact'
},
  ]


  function goToSection(id){
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
  
    <div 
    className='sticky left-0 top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm'>
      {
        (showNav &&  <SideNav setshowNav={setshowNav}/>)
      }
       
        <nav className='py-3  border-b-gray-300 font-primary  '>
      <div className="container xl:max-w-[1100px]  px-6 mx-auto max-sm:px-4 ">
         <div className="flex justify-between items-center text-black ">
             <h1 className='font-extrabold uppercase text-2xl'>portfo<span className='text-red-400 italic'>lio</span></h1>
             <div onClick={()=> setshowNav(!showNav)} className='flex cursor-pointer flex-col items-center justify-center gap-1.5  w-8 h-8 lg:hidden'>
              <span style={{transform:(showNav && 'rotate(45deg) translate(11px)')}} className=' transition duration-300 w-full h-[1.5px] bg-black '></span>
              <span style={{transform:(showNav && 'translateX(50px)')}} className=' transition duration-150 w-full h-[1.5px] bg-black '></span>
              <span style={{transform:(showNav && 'rotate(-45deg) translate(9px')}} className=' transition duration-300 w-full h-[1.5px] bg-black '></span>
             </div>
             <ul className='flex justify-center  items-center font-normal max-lg:hidden'>
              {
              arr.map((ele,i)=>{
               return  <li key={i} onClick={()=>goToSection(ele.id)} className='px-5 py-3 cursor-pointer relative capitalize 
               after:content-[""] after:w-0 after:h-0.5 after:absolute  after:bottom-[10px] after:left-5 after:bg-black after:transition-all after:duration-300 hover:after:w-[60%]
               '>{ele.title}</li>
              })
            }
              
             </ul>
         </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
