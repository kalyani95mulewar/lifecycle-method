import React from 'react'

const Heading = (props) => {
  return (
    <>
        <div className='text-center mb-4'>
            <h6 className='bg-warning mx-auto' style={{width:props.size}}>{props.title}</h6>
            <h1>{props.desp}</h1>
        </div>
    </>
  )
}

export default Heading