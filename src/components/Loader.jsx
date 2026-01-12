import React from 'react'

const Loader = () => {
  return (
    <div className='absolute left-0 top-0 w-full h-full bg-black/40 rounded-md flex justify-center items-center'>
      <span class="loader relative z-10"></span>
    </div>
  )
}

export default Loader
