
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProjects from './pages/AllProjects'
import AllPages from './pages/AllPages'
import { useState } from 'react'






function App() {

const [showNav, setshowNav] = useState(true); 

  return (
    <>
  <BrowserRouter>

{
  (showNav &&  <Navbar/>)
}

      
      <Routes>
        <Route path='/' element={<AllPages setshowNav={setshowNav}/>}></Route>
        <Route path='/allprojects' element={<AllProjects setshowNav={setshowNav}/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
