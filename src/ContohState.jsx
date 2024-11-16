import React, {useEffect, useRef, useState} from 'react'

const ContohState = () => {
    const [count ,setCount] = useState(0);

    const handleHitung = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        // isi kodenya
        document.title= ` anda menghklik sebanyak : ${count}`
        inputRef.current.focus()
    },[count])

    const [nama, setNama] = useState('learning-x');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setNama(e.target.value);
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen space-y-2 bg-gray-100'>
      {/* <div className='text-2xl font-bold'>hitung: {count}</div>
      <button className='py-2 px-6 bg-blue-500 rounded-md font-bold text-lg text-white hover:bg-blue-400' onClick={handleHitung}>hitung</button> */}
    <div className='w-full max-w-sm flex-col'>
        <h1 className='text-3xl font-bold my-5 text-blue-500'>selamat datang, {nama}</h1>
        <input type='text' className='text-sm rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50' name = "nama" ref={(inputRef)} onChange={handleChange}/>
    </div>
    </div>
  )
}

export default ContohState
