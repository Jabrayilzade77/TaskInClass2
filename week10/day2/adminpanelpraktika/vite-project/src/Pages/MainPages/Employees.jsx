import React from 'react'
import { useState } from 'react'
import "./Employee2.scss"

function Employees() {

  const [category1, setCategory1] = useState([])

  fetch("http://localhost:3000/myApi")
  .then(res=>res.json())
  .then(data=>setCategory1(data))
  return (
   <>
   {category1.map((x)=>(
        <div key={x.id} className='main_employee_container'>
          <img src={x.image} alt="" className='main_employee_img'/>
          <h2 style={{margin:"10px"}}>{x.title}</h2>
          <p>Price: {x.price} $</p>
        </div>
      ))} 
   </>
  )
}

export default Employees