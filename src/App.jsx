import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";


function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const exponent = document.querySelector("#exponent")

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount} increment={increment} decrement={decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <input type="number" id="exponent"/>
        <Exponent num={count} exponent= {exponent}/>
        <ExponentTwo count={count} setCount={setCount}/>
        <ExponentThree count={count} setCount={setCount}/>
        <ExponentFour count={count} setCount={setCount}/>
        <ExponentFive count={count} setCount={setCount}/>
        <ExponentSix count={count} setCount={setCount}/>
      </div>
    </div>
  );
}

export default App;
