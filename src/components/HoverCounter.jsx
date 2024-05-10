import React from "react";

function HoverCounter(props) {
  return (
    <div>
      <h1>HoverCounter={props.count} </h1>
      <button onMouseOver={props.handleClick}>Hover me</button>
    </div>
  );
}

export default HoverCounter;
