import React from 'react'
import FormRegister from '../Fragments/FormRegister'
import AuthLayouts from '../Layout/AuthLayouts'
const RegisterPage = () => {
    return (
        <AuthLayouts image="../src/assets/Register.png" type="register" description="Sign up to start your journey" judulHalaman="Register">
            <FormRegister/>
            {/* <p className='text-center my-2'>
          <span className='text-slate-600'>have an account? </span>
          <a ta="/Register" className='font-bold text-blue-500'>register</a>
        </p> */}
        </AuthLayouts>
    )
}
export default RegisterPage
