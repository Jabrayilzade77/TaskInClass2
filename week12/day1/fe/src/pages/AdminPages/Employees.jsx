import React, { useEffect, useState } from "react";
import styles from "./Employees.module.scss";
import { Link } from "react-router-dom";

function Employees() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/yusif");
    const data = await res.json();

    setProducts(data);
  }

  async function deleteProduct(id) {
    const res = await fetch("http://localhost:3000/yusif/"+id,{method:"delete"});
    const data = await res.json();

    getAllProducts()
  }

  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>image</th>
          <th>title</th>
          <th>price</th>
          <th>option</th>
        </tr>

        {products.map((x) => (
          <>
            <tr>
              <td>{x._id}</td>
              <td>
                <img src={x.image} alt="" />
              </td>
              <td>{x.title}</td>
              <td>{x.price}</td>
              <td>
                <div className={styles.btn_container}>
                  <button className={styles.btn1}><Link to={`/admin/edit/${x._id}`}>edit</Link></button>
                  <button className={styles.btn2} onClick={()=>deleteProduct(x._id)}>delete</button>
                </div>
              </td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}

export default Employees;
