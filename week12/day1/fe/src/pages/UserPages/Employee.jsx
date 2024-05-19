import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'

function Employee() {
    const [products, setProducts] = useState([])



    useEffect(() => {
    getAllProducts()
     
    }, [])

    async function getAllProducts(){
        const res = await fetch("http://localhost:3000/yusif")
        const data = await res.json()

        setProducts(data)
    }
    
  return (
   <>
   <div className={styles.container}>

  
    {products.map(x=>(
        <div className={styles.card}>
            <img src={x.image} alt="" />
            <div className={styles.title}>{x.title}</div>
            <div className={styles.price}>{x.price} $</div>
            <button className={styles.basketBtn}>add basket</button>
        </div>
    ))}
     </div>
   </>
  )
}

export default Employee