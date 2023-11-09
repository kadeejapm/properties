import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)
  
  const display =()=>{
    setCount(count+1)
  }
  const displays =()=>{
    if(count===0){
      stop
    }else{
      setCount(count=0)
    }
   
  }

  const reset =()=>{
    setCount(0)
  }





  const myfun=()=>{
    console.log("gudmrng");
  } 

  
  return (
    <>
  
    <Home data="welcome" temp={myfun()} display={display} displays={displays} count={count} reset={reset}/>
     
    </>
  )
}

export default App
