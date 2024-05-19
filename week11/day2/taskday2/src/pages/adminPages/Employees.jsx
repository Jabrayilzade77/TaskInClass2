import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainProvider";
import { WishListContext } from "../../context/WishListProvider";

function Employees() {
  const { basket, addBasket, isExistBasket, removeBasket, decBasket,getCountFromBasket } =
    useContext(MainContext);

    const {
      wishList,
      addwishList,
      isExistwishList,
    }=
    useContext(WishListContext);
  const [products, setProducts] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myApi");
    const data = await res.json();
    setProducts(data);
  }

  async function deleteProduct(id) {
    const res = await fetch("http://localhost:3000/myApi/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllProducts();
  }

  function ascSorted(item) {
    setProducts(
      [...products].sort((a, b) =>
        a[item] > b[item] ? 1 : b[item] > a[item] ? -1 : 0
      )
    );
  }
  function decSorted(item) {
    setProducts(
      [...products].sort((a, b) =>
        a[item] < b[item] ? 1 : b[item] < a[item] ? -1 : 0
      )
    );
  }

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        name=""
        id=""
        placeholder="search"
      />
      <button onClick={() => ascSorted("title")}>a-z</button>
      <button onClick={() => decSorted("title")}>z-a</button>
      <div className="container">
        {products
          .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <div key={x.id} className="card">
              
              
              <div onClick={() => addwishList(x)}>{isExistwishList(x) ? <i class="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}</div>
              <img src={x.image} alt="" />
              <div className="title">{x.title}</div>
              <div className="price">{x.price} $</div>
              <button>
                <Link to={"/detail/" + x.id}>go detail</Link>
              </button>
              <br />
              <br />
              {isExistBasket(x) ? (
                <div>
                  <button>count:  {getCountFromBasket(x)}</button>
                  <button onClick={() => removeBasket(x)}>remove basket</button>
                  <button onClick={() => decBasket(x)}>-</button>
                  <button onClick={() => addBasket(x)}>+</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => addBasket(x)}>add basket</button>
                  
                  <button onClick={() => deleteProduct(x.id)}>delete</button>
                  <button>
                    <Link to={"/edit/" + x.id}>edit</Link>
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default Employees;
