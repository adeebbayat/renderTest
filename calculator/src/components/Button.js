import React from "react";

const Button = ({number,type}) => {
  const handleClick = (e) => {
    type(number);  // Pass `number` to the `type` function
  };

  return (
    <button onClick={handleClick}>{number}</button>
  );
}

export default Button