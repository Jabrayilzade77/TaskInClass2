import React, { createContext } from 'react'
import { useState } from 'react'

export const CounterContext =  createContext()

function MainProvider({children}) {

    let [count, setcount] = useState(0)

    function incDetail() {
        setcount(count++)
    }

    function decDetail() {
        setcount(count--)
    }

  return (
   <CounterContext.Provider value={{count,incDetail,decDetail}}>
   {children}
   </CounterContext.Provider>
  )
}

export default MainProvider