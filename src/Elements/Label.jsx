import React from 'react'

const Label = (props) => {
    const {children, name} = props;
  return (
    <label className='text-md font-bold bg-slate-600 mb-2 block text-slate-900 '
    htmlFor={name}
    >{children}</label>
  )
}

export default Label