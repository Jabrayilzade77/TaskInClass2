import React, { useContext } from "react";
import { MainContext } from "../../context/MainProvider";

function BasketPage() {
  const { basket, addBasket, decBasket,removeBasket, getTotal } = useContext(MainContext);

  return (
    <>
      <div className="container">
        {basket.map((x) => (
          <div key={x.id} className="card">
            <img src={x.image} alt="" />
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
            <div>
              count: {x.count}
            </div>
            <br />
            <br />
            <div>
              <button onClick={() => removeBasket(x)}>remove basket</button>
              <button onClick={() => decBasket(x)}>-</button>
              <button onClick={() => addBasket(x)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div>Total : {getTotal()} $</div>
    </>
  );
}

export default BasketPage;
