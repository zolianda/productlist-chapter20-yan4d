import React from 'react'

const ButtonComponent = (props) => {
    const { children='submit', classname="bg-blue-700" , onClick = () => {} , type = 'button' } = props
  return (
   <button 
   className={`rounded-md font-semibold px-6 h-10 ${classname} text-white `}
   type={type}
   onClick={onClick}>
    {children}
   </button>
  )
}

export default ButtonComponent
