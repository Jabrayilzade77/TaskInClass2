import useCounter from "../../hooks/useCounter";

function Counter() {
   const [count,inc,dec] = useCounter()

  return (
    <>
      <button onClick={inc}>+</button>
      <button>count : {count}</button>
      <button onClick={dec}>-</button>
    </>
  );
}

export default Counter;
