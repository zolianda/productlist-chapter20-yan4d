import React from 'react'

const Input = (props) => {
    const {type, placeholder, name} = props
  return (
    <input 
        className='rounded w-full border border-slate-300 p-2 text-slate-700 placeholder:opacity-50 text-sm'
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
    />
  )
}

export default Input
