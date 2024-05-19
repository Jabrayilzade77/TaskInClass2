import React, { useEffect, useState } from "react";
import styles from "./Employees.module.scss";
import { Link } from "react-router-dom";

function Employees() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch(
      "https://6634ce589bb0df2359a2cd82.mockapi.io/yusif"
    );

    const data = await res.json();

    setProducts(data);
  }

  async function deleteProduct(id) {
    const res = await fetch(
      "https://6634ce589bb0df2359a2cd82.mockapi.io/yusif/" + id,
      { method: "delete" }
    );

    const data = await res.json();

    getAllProducts();
  }

  function sortAsc(item) {
    setProducts([...products].sort((a, b) =>
    a[item] > b[item] ? 1 : b[item] > a[item] ? -1 : 0  
  ))
  }

  function sortDec(item) {
    setProducts([...products].sort((a, b) =>
    a[item] < b[item] ? 1 : b[item] < a[item] ? -1 : 0
  ))
  }

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name=""
        id=""
        placeholder="search"
      />
      <button>add</button>

      <button onClick={() => sortAsc("title")}>a-z</button>
      <button onClick={() => sortDec("title")}>z-a</button>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>
                  <img src={x.img} alt="" className={styles.admin_imgs} />
                </td>
                <td>{x.title}</td>
                <td>{x.price} $ </td>
                <td>
                  <button onClick={() => deleteProduct(x.id)}>delete</button>
                 <Link to={"/admin/update/"+x.id}>update</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Employees;
