import React from "react"
import LoginPage from "./Pages/loginPage"


class Button extends React.Component{
    render(){
      return(
        <button className="bg-blue-500 text-white text-lg font-bold
        rounded px-6">Button</button>
      )
    }
}

const ButtonWithArrowFunction = () => {
  return (
    <button className="bg-green-800 text-white text-lg font-bold rounded px-6 py-2">Button Arrow Function</button>
  )
}

function Buttonfunction(){
    return(
      <button className="bg-black text-white text-lg font-bold rounded px-6 y-2">Button function</button>
    )
}


function Buttonfunction1(){
    return(
      <button className="bg-black text-white text-lg font-bold rounded px-6 y-2">Button function</button>
    )
}



class paragraphClass extends React.Component{
  render(){
    return(
      <p className="text-3x1 text-slate-300 font-bold bg-green-800">{this.props.children}</p>
    )
  }
}

function App() {
  return (
    <div className="px-6 py-4 py-space-y-4">
      {/* <p className="text-3x1 text-slate-300 font-bold">Button function</p> */}
      {/* <Button />
      <Button />
      <Button />
      <Button />
      <p>Button function</p>
      <Buttonfunction />
      <paragraphClass>ini adalah implemental prps dengan ajack</paragraphClass>
      <paragraphClass>sudahh kak</paragraphClass>
      <Buttonfunction1>test
      </Buttonfunction1>
      <Label>username</Label>
      <InputFrom 
        typeInput = "email"
        placeholderInput=";>"
        nameInput="password"
        judulInput="password"
      />
      <ButtonComponent classname="bg-red-700">
        test
      </ButtonComponent>
      <FormLogin />
      // <FormRegister /> */}
      <LoginPage />
    </div>
    )
  }



export default App
