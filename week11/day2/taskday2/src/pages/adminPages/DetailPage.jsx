import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  let { detailId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await fetch("http://localhost:3000/myApi/" + detailId);
    const data = await res.json();
    setProducts(data);
  }

  return (
    <div>
      {
        <div>
          <img src={products.image} alt="" />
          <div className="title">{products.title}</div>
        </div>
      }
    </div>
  );
}

export default DetailPage;
