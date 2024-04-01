import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let textColor = "black";

  if (count > 0) {
    textColor = "green";
  }
  if (count < 0) {
    textColor = "red";
  }
  return (
    <div className="container">
      <h1>Counter</h1>
      <h1 style={{ color: textColor }}>{count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>To Null</button>
      </div>
    </div>
  );
}

export default App;
