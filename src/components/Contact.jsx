import React, { useRef } from 'react'
import Heading from './Heading'
import { MdOutlineLocationOn, MdOutlineEmail, MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import { useState } from 'react'
import Loader from './Loader'
import Toast from './Toast'
import Success from './Success'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const [loader, setloader] = useState(false);
  const [success, setsuccess] = useState(false);
  const [toast, settoast] = useState(false);
  const formTag=useRef()
  let obj={
 name:'',
 senderAddr:'',
 message:''
  }
  const [sender, setsender] = useState(obj);
 async function handleSubmit(e){
  e.preventDefault()
 

if(!sender.name){
  return alert('All fields are compulsory')
}

if(!sender.senderAddr){
  
  return alert('All fields are compulsory')
}
if(sender.name.length<4){
  return alert('Name length should be greater than 3 characters')
}
if(!sender.senderAddr.includes('@gmail.com')){
 return alert('Enter a valid email adderess')
}
if(!sender.message){
  return alert('All fields are compulsory')
}
setloader(true)

try{
  let res= await fetch('https://portfolio-backend-i7rl.onrender.com/send',{
    method:'POST',
    headers:{
     'Content-Type':'application/json'
    },
    body:JSON.stringify(sender)

  })
  setloader(false)
  let data=await res.json()
  console.log(data)
  if(data.status==200){
       setsuccess(true)
       formTag.current.reset()
       setTimeout(() => {
        setsuccess(false)
       }, 5000);
  }
  else{
    settoast(true)
    setTimeout(() => {
      settoast(false)
    }, 5000);
  }
}
catch(error){
  console.log(error)
}
 }
  const arr=[
    {
      logo:<MdOutlineEmail/>,
      heading:'email',
      value:'ayushsinghatschool@gmail.com'
    },
    {
      logo:<BiPhone/>,
      heading:'phone',
      value:'+91 7985388675'
    },
    {
      logo:<MdOutlineLocationOn/>,
      heading:'location',
      value:'Lucknow, Uttar Pradesh, India'
    },
  ]
  return (
    <div id='contact' className='bg-gray-50 font-primary'>
      
      <div className="container xl:max-w-[1100px]   px-6 mx-auto max-sm:px-4 ">
        <div className="py-20 pb-10 max-sm:py-15 max-sm:pb-5">
            <Heading heading={'get in touch'}/>
         <div className="flex justify-between mt-15 max-md:block max-sm:mt-10">
         {/* information */}
         <div className='w-1/2 max-md:w-full max-sm:text-center'>
         <h2 className='text-2xl font-semibold capitalize '>contact information</h2>
         <p className='text-gray-500 my-5 max-sm:mt-3'>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
         <ul className='space-y-6'>
          {
             arr.map((ele,i)=>{
              return <li key={i} className=' flex justify-start gap-4 items-center max-sm:block'>
                <span className='w-15 h-15 text-3xl rounded-full bg-gray-200  flex items-center max-sm:m-auto justify-center'>{ele.logo}</span>
                <div>
                  <h5 className='capitalize font-medium py-1'>{ele.heading}</h5>
                  <p className='text-gray-500 '>{ele.value}</p>
                </div>
              </li>
             })
          } 
         </ul>
         </div>
         {/* form */}
         <div className='w-1/2 border relative bg-white border-gray-200 p-8 overflow-hidden rounded-lg max-md:w-full max-md:mt-12 max-lg:p-6'>
         {
              toast ? <Toast message={'Message not sent!'}/> :  ''
             
            }
         {
              loader ? <Loader/> :  ''
             
            }
            {
            success ? <Success/> : ''
            }
         <h2 className='text-2xl font-semibold capitalize'>Send message</h2>
         <p className='text-sm text-gray-500 mt-2'> Fill out the form below and I'll get back to you as soon as possible</p>
          <form action="" ref={formTag}>
           
         <div className='mt-6'>
         <label htmlFor="first">Name</label>
         <input onChange={(e)=> setsender({...sender,[e.target.name]:e.target.value})} name='name' required type="text" className='p-2.5  w-full mt-2 border border-gray-200 rounded-md placeholder:transition placeholder:text-sm focus:placeholder:-translate-y-2.5 focus:placeholder:scale-80 placeholder:origin-left' placeholder='Your name' id='first' />
         </div>
         <div className='mt-6'>
         <label htmlFor="second">Email</label>
         <input onChange={(e)=> setsender({...sender,[e.target.name]:e.target.value})} name='senderAddr' required type="text" className='p-2.5  w-full mt-2 border border-gray-200 rounded-md placeholder:transition placeholder:text-sm focus:placeholder:-translate-y-2.5 focus:placeholder:scale-80 placeholder:origin-left' placeholder='Your email' id='second' />
         </div>
         <div className='mt-6'>
         <label htmlFor="third">Message</label>
         <textarea onChange={(e)=> setsender({...sender,[e.target.name]:e.target.value})} name='message' required type="text" className='p-2.5 w-full  mt-2 border border-gray-200 rounded-md placeholder:text-sm ' placeholder='Your message' id='third' rows={4} />
         </div>
         <input onClick={handleSubmit} type="submit" className='w-full py-2 border bg-black capitalize text-white rounded-md mt-4 cursor-pointer hover:bg-white transition duration-300 hover:text-black ' rows='30' cols='30' value={'send message'} />
          </form>
         </div>
         </div>
         
            </div>
            </div>
            <ul className='flex items-center
             justify-start text-3xl  px-10 pb-10 max-sm:pb-7 gap-4'>
              <li className='transition duration-300 hover:bg-red-400 rounded-md'><a href="https://www.instagram.com/ayush_ayh876/"><FaInstagram /></a></li>
              <li className='transition duration-300 hover:bg-blue-400 rounded-md'><a href="https://www.linkedin.com/in/ayush-singh-b3b131202/"><CiLinkedin/></a></li>
              <li className='transition duration-300 hover:bg-yellow-400 rounded-md'><a href="https://github.com/Tony-123-a11y"><FaGithub/></a></li>
              {/* <li className='transition duration-300 hover:bg-green-400 rounded-md'><a href=""><MdEmail/></a></li> */}
            </ul>

    </div>
  )
}

export default Contact
