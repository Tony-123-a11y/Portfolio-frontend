import React from 'react'
import Heading from './Heading'
import { motion } from 'motion/react'


const SideNav = () => {
  return (
    <div className="fixed top-[55px] left-0 w-full h-[calc(100vh-74px)] z-100 backdrop-blur-3xl ">
      <motion.div
      initial={{
       translateY:-100
      }
      }
      animate={{
       translateY:0
      
      }}
      transition={{
        duration:.5
        
      }}
      >
        <Heading heading={'projects'}/>
      </motion.div>
    </div>
  )
}

export default SideNav
