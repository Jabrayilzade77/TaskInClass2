import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss';


function Employee() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
      getAllProducts();
     
    }, []);
  
    async function getAllProducts() {
      // const res =await fetch("http://localhost:3000/fakeApi");
      const res =await fetch("https://6634ce589bb0df2359a2cd82.mockapi.io/yusif");
  
      const data =await res.json();
  
      setProduct(data);
    }
  return (
    <div className={styles.container}>
        {product.map(x=>(
            <div className={styles.card}>
                <div className="id">{x.id}</div>
                <img src={x.img} alt="" className={styles.main_imgs}/>
                <div className="title">{x.title}</div>
                <div className="price">{x.price}</div>
                <button >delete</button>
                <button>edit</button>

            </div>
        ))}
    </div>
  )
}

export default Employee