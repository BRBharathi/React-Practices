import React, { useState } from "react";

function WithCounterComponent(WrappedComponent) {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} handleClick={handleClick} />;
  };
}

export default WithCounterComponent;
