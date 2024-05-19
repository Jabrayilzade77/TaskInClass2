import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListProvider";

function WishList() {
  const {
    wishList,
    addwishList,
    isExistwishList,
  } = useContext(WishListContext);
  return (
    < >
      <div className="container">
        {wishList.map((x) => (
          <div key={x.id} className="card">
             <div onClick={() => addwishList(x)}>{isExistwishList(x) ? <i class="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}</div>
            <img src={x.image} alt="" />
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
            <div>
              count: {x.count}
            </div>
            <br />
            <br />
            <div>
              <button onClick={() => removeBasket(x)}>remove wishList</button>
              <button onClick={() => decBasket(x)}>-</button>
              <button onClick={() => addBasket(x)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WishList;
