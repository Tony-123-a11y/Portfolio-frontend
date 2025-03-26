import { motion } from 'motion/react'
import React from 'react'

const Toast = ({message}) => {
  return (
    <motion.div
    initial={{
        translateX:200
    }}
    animate={{
        translateX:0
    }}
    transition={{
        duration:.4
    }}
    className='absolute top-0 right-0 text-red-600 border rounded-md bg-red-50 font-medium font-primary text-sm w-full max-w-80 py-2 shadow-sm text-center'>
        <span>{message}</span>
    </motion.div>
  )
}

export default Toast
