import React, { useState } from "react";
import "./index.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div class="Text">
      <h2>Count: {count}</h2>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p>_________________________________________________</p>
    </div>
  );
}

export default CounterApp;