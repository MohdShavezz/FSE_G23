import React, { useState } from 'react'
import Child from '../components/Child'

const Counter:React.FC = () => {
    
    const [count,setCount]=useState<number>(0)

    function handleINC(){
        // setCount(count+1)
        setCount(val=>val+1)  //better
    }
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        // setCount(Number(e.target.value))
        setCount(+e.target.value)
    }
  return (
    <div>
      <h2>Count: {count}</h2>
      <Child handleINC={handleINC}/>
      <input type="text" placeholder='enter number' onChange={handleChange}/>
    </div>
  )
}

export default Counter

