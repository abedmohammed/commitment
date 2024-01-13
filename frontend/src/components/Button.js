import React from "react";

const Button = ({ text, icon, classes, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={`button ${classes}`}>
      {icon} {text}
    </button>
  );
};

export default Button;
