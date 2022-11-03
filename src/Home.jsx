import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "./App";
// const Home = () => {
//   const [a, setA] = useState(0);
//   const increment = () => {
//     setA(a + 1);
//   };
//   const decrement = () => {
//     setA(a - 1);
//   };
//   useEffect(() => {
//     console.log("showing effect");
//   }, [a]);
//   return (
//     <div>
//       <button onClick={increment}>Add</button>
//       <p>{a}</p>
//       <button onClick={decrement}>Minus</button>
//     </div>
//   );
// };
const Row = () => {
  const data = useContext(context);
  const customElement = useRef(null);
  //   console.log(customElement);
  useEffect(() => {
    console.log(customElement);
  }, []);
  return <div ref={customElement}>{data}</div>;
};
const Home = () => {
  //   return <div>{data}</div>;
  return (
    <div>
      <Row />
    </div>
  );
};

export default Home;
