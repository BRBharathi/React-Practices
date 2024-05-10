import React from "react";
import WithCounterComponent from "./WithCounterComponent";
function ClickCounter(props) {
  return (
    <div>
      <h1>Click Counter ={props.count}</h1>
      <button onClick={props.handleClick}>Clickme</button>
    </div>
  );
}

export default ClickCounter;
