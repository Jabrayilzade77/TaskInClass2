import React from 'react'
import { useState } from 'react'
import "./Employee.scss"
import { Link } from 'react-router-dom'

function Employee() {

  const [category, setCategory] = useState([])

  async function getAllProducts() {
    const res =await fetch("http://localhost:3000/myApi")
    const data = await res.json()
    setCategory(data)
  }

  getAllProducts()

  // async function generateUI() {
    
  // }
  // fetch("http://localhost:3000/myApi")
  // .then(res=>res.json())
  // .then(data=>setCategory(data))

  async function deleteProduct(id) {
    const res =await fetch("http://localhost:3000/myApi/"+id,{method:"delete"})
  }

  return (
    <>
     
<table>
  <thead>
  <tr>
    <th>id</th>
    <th>img</th>
    <th>title</th>
    <th>price</th>
    <th>category</th>
    <th>option</th>
  </tr>
  </thead>
      {
        category.map((x)=>(

<tbody key={x.id}>
<tr >
    <td>{x.id}</td>
    <td><img src={x.image} alt="" className='admin_img'/></td>
    <td>{x.title}</td>
    <td>{x.price}$</td>
    <td>{x.category}</td>
    <td>
      <Link to={`/admin/update/${x.id}`}>edit</Link>
      <button onClick={()=>deleteProduct(x.id)}>delete</button>
    </td>
  </tr>
</tbody>
  
        ))
      }
</table>


    </>
  )
}

export default Employee