import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayouts = (props) => {
    const {children, image, description, judulhalaman, type} = props
  return (
    <div className='min-h-screen w-full flex flex-row'>
        <div className=' hiden w-full md:w-1/2 bg-[#065] flex flex-col justify-center items-center space-y-4'>
            <img src={image} alt="" className='h-30'/>
            <p className='font-bold text-4xl text-white'>hello</p>
            <p className='font-light text-2xl text-white'>{description}</p>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text text-3xl font-bold text-blue-700 mb-2'>{judulhalaman}</h1>
                <p className='font-medium text-slate-600 mb-8'>welcome, please enter your details</p>
                {children}
                <p className='text-center my-2'>
                        {type === 'login' ? "Don't have an account? "
                            : "Already have an account?"}
                        {
                            type === 'login' && (
                                <Link to="/register" className='font-bold text-blue-500'>Register</Link>
                            )
                        }
                        {
                            type === 'register' && (
                                <Link to="/login" className='font-bold text-blue-500'>Login</Link>
                            )
                        }
                    </p>
                
            </div>

        </div>
    </div>
  )
}

export default AuthLayouts
