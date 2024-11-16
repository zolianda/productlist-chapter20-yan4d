import React from 'react'
import FormLogin from '../Fragments/FormLogin'

import AuthLayouts from '../Layout/AuthLayouts'


const LoginPage = () => {
  return (
    <AuthLayouts image="../src/assets/login.png" type="login" description="sign up to your journey" >
        <FormLogin/>
     {/* <p className='text-center my-2'>
          <span className='text-slate-600'>Don't have an account? </span>
          <Link ta="/login" className='font-bold text-blue-500'>login</Link>
        </p> */}
    </AuthLayouts>
  )
}

export default LoginPage
