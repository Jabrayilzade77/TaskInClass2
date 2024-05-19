import React, { useContext } from 'react'
import Navbar from '../Layout/Navbar'
import { CounterContext } from '../context/MainProvider'

function HomePage() {
    const {count,incDetail,decDetail} = useContext(CounterContext)

  return (
   <>
    <Navbar></Navbar>
    <button onClick={decDetail}>-</button> 
   <p>{count}</p> 
   <button onClick={incDetail}>+</button>
   </>
  )
}

export default HomePage