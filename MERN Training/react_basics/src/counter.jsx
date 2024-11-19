import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [overflow, setOverflow] = useState(false);
  let [underflow, setUnderflow] = useState(false);
  let handleIncrement =()=>{
    setCount((prev)=>{
      handleDisable(prev+1);
      return prev+1;    
    })
    
  }
  let handleDecrement =()=>{
    setCount((prev)=>{
      handleDisable(prev-1);
      return prev-1;
    })
  }

  let handleDisable = (value)=>{
    setOverflow(value===10);
    setUnderflow(value===-10);
  }

  return(
  <div>
    <p>
    <button disabled={underflow} onClick={handleDecrement}>-</button>
    {count}
    <button disabled={overflow} onClick={handleIncrement}>+</button>
    </p>
  </div>
  );
}

export default App;
