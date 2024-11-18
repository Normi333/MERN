import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  const handleIncrement = () =>{
    alert("+ clicked!");
    // setCount(count + 1);
    setCount((prev)=>{ 
     return prev + 1;
    });
  };
  const handleDecrement = () =>{
    alert("- clicked!");
    // setCount(count - 1);
    setCount((prev)=>{
     return prev - 1;
    });
  };

  console.log("App Function Called.");
  return(
    <div>
      <p>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </p>
    </div>
  );
}

export default App;
