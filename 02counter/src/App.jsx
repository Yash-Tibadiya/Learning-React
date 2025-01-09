import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    if (counter >= 20) {
      return setCounter(20);
    }
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    if (counter <= 0) {
      return setCounter(0);
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello 👋</h1>
      <h2>Counter value is: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
