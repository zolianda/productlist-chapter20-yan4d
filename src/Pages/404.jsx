import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <img src="../src/assets/error.png" alt="" className="w-1/4"/>
      <p className="text-3xl font-bold">Ooops!!</p>
      <p className="my-5 text-xl">sorry</p>
      <p className="text-lg border border-red-800 rounded p-2">{error.statusText || console.error.message};</p>
    </div>
  )
}

export default ErrorPage
