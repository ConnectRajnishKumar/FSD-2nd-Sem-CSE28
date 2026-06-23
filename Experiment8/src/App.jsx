import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <h1>React Counter Application</h1>

      <div className="counter">
        {count}
      </div>

      <div className="buttons">

        <button onClick={increment}>
          ➕ Increment
        </button>

        <button onClick={decrement}>
          ➖ Decrement
        </button>

        <button onClick={reset}>
          🔄 Reset
        </button>

      </div>

      <p className="status">
        Current Counter Value: {count}
      </p>

    </div>
  );
}

export default App;