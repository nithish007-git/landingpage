import React from 'react'

const Button1 = ({label ,iconRel}) => {
  return (
    <button className='flex justify-start item-center px-7 py-3.5 border font-montserrat text-lg leading:none
    text-white bg-coral-red rounded-full'>
        {label}
        {iconRel&& <img
        src={iconRel}
        alt="arrow right"
        className='rounded-full w-5 h-5 relative left-2'
        ></img>}

    </button>
  
  )
}       

export default Button1