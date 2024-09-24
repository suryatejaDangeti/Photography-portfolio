import React from 'react'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import OurPartners from './components/testing/OurPartners/OurPartners'

export default function App() {

  function fib(n){
    if (n === 0) return 0
    if (n === 1) return 1
    if(n === 1000) return "timeout"
    return fib(n - 1) + fib(n - 2)
  }
  console.log(fib(10)) // 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144
  console.log(fib(1000))

  return (
    <div>
      <Header />
      <LandingPage /> 
      {/* <OurPartners /> */}
    </div>
  )
}
