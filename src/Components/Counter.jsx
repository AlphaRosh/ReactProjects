import React, { useReducer } from "react";

const initialCount = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      <h3> Count : {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {state.count >= 0 ? (
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      ) : null}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
