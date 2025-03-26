import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold capitalize max-md:text-4xl max-sm:text-3xl'>{heading}</h1>
    </div>
  )
}

export default Heading
