import { useState } from "react"
import ButtonComponent from "../Elements/Button"
import InputForm from "../Elements/InputFrom"
import { login } from "../services/auth.service"


const FormLogin = () => {
    // const handleclick = (e) => {
    //     e.preventDefault()
    //     console.log('click')
    // }

    const [loginFailed, setLoginFailed] = useState('')
    const handleLogin = (e) => {
        e.preventDefault() //mencegah reload halaman
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res)
                window.location.href = '/product'
            } else {
                setLoginFailed(res.response.data)
                console.log(res.response.data)
            }
        })
    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm
                typeInput="text"
                placeholderInput="enter your username"
                nameInput="username"
                judulInput="Email"
            />
            <InputForm
                typeInput="password"
                placeholderInput="****"
                nameInput="password"
                judulInput="Password"
            />
            <ButtonComponent classname="bg-blue-500 w-full" type='submit'>Login</ButtonComponent>
            {loginFailed}
        </form>
    )
}
export default FormLogin