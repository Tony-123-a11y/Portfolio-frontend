import React, { useEffect } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const AllPages = ({setshowNav}) => {
    useEffect(() => {
      setshowNav(true)
    }, [])
    
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Projects setshowNav={setshowNav}/>
      <Contact/>
    </>
  )
}

export default AllPages
