/* eslint-disable react/prop-types */
import {
  useState,
  useMemo,
  useReducer,
  useCallback,
  memo,
  useEffect,
} from "react";
import "./App.css";

function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

export function Counter() {
  // let [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [value, setValue] = useState("");
  // let handleIncrement = () => {
  //   setCount((prev) => {
  //     handleDisable(prev + 1);
  //     return prev + 1;
  //   });
  // };
  // let handleDecrement = () => {
  //   setCount((prev) => {
  //     handleDisable(prev - 1);
  //     return prev - 1;
  //   });
  // };

  function Header({ value }) {
    return <h1>{value}</h1>;
  }

  const MemoHeader = memo(Header);

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value + state.count);
    },
    [state.count]
  );

  const factorial = useMemo(
    () => calculateFactorial(state.count),
    [state.count]
  );

  function Input({ value, handleChange }) {
    return <input type="text" value={value} onChange={handleChange} />;
  }

  const MemoInput = memo(Input);

  useEffect(() => {
    console.log("UseEffect");
    return () => {
      console.log("CleanUp");
    };
  });

  return (
    <div>
      <div>
        <MemoHeader value={value} />
      </div>
      <div>
        <MemoInput value={value} handleChange={handleChange} />
      </div>
      <p>
        <button
          disabled={state.count >= 10}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        {state.count}
        <button
          disabled={state.count <= -10}
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </p>
      <p>
        Factorial of {state.count} is {factorial}
      </p>
    </div>
  );
}

export default Counter;
