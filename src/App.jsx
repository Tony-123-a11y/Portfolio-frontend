
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom'






function App() {



  return (
    <>
  <BrowserRouter>
  
 <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </BrowserRouter>
      
    </>
  )
}

export default App
