import React from 'react'

const Success = () => {
  return (
    <div className='absolute left-0 top-0 w-full h-full bg-black/40 rounded-md flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-center font-primary gap-2'>
      <span class="success"></span>
      <h2 className='text-white font-semibold capitalize'>Message sent!</h2>
      </div>
    </div>
  )
}

export default Success
