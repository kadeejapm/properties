import { useState } from "react"


function Home(props){
    const [count, setCount] = useState()
    const [color, setColor] =useState('')
    const change=()=>{
        setColor('red')
    }
     const increment=()=>{
        props.display()
     }

     const decrement=()=>{
        
     }

     const reset =()=>{
        props.reset()
     }





    return(
    <>
    <h1>{props.data}</h1>
    <h1 onClick={change}>{count}</h1>
    <h3 onClick={increment}>{props.display}set +</h3>{props.count}
    <h3 onClick={decrement}>{props.displays}set -</h3>
    <button onClick={reset}>reset</button>
   


    </>
    )
}
export default Home