import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, DatePicker } from "antd";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("I am in UseEffect");
  }, [count]);

  const decreaseCount = () => {
    setCount(parseInt(count - 1));
  };

  const increaseCount = () => {
    setCount(parseInt(count + 1));
  };

  return (
    <div className="App">
      <div className="counter" id="myCount">
        {count}
      </div>
      <Button onClick={() => increaseCount()}>Increase</Button>
      <Button type="primary" danger ghost onClick={() => decreaseCount()}>
        Decrease
      </Button>
      <DatePicker></DatePicker>
    </div>
  );
}

export default App;
