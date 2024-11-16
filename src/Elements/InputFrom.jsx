import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = (props) => {
    const {judulInput, typeInput, placeholderInput, nameInput } = props
  return (
    <div className='mb-6'>
      <Label name={nameInput}>{judulInput}</Label>
      <Input type={typeInput} placeholder={placeholderInput} name={nameInput} />
    </div>
  )
}

export default InputForm