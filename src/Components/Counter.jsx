import React from 'react';
import { useState } from 'react';
import '../App.css'

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <>
      <h1 className='count'>Example of HOC</h1>
      <h1 className='count'>{count}</h1>
      <button type='button' onClick={()=>{setCount(count+1)}}>Increase</button> <br/>
      <button type='button' onClick={()=>{setCount(count-1)}}>Decrease</button> <br/>
      <button type='button' onClick={()=>{setCount(0)}}>Reset</button>
    </>
  )
}
