import React, { useContext } from "react";
import Navbar from "../Layout/Navbar";
import MainProvider, { CounterContext } from "../context/MainProvider";

function Detail() {
  const { count, incDetail, decDetail } = useContext(CounterContext);
  return (
    <>
      <Navbar></Navbar>
      <div>Detail</div>
      <button onClick={decDetail}>-</button>
      <p>{count}</p>
      <button onClick={incDetail}>+</button>
    </>
  );
}

export default Detail;
