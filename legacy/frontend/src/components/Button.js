import React from "react";

const Button = ({ text, icon, classes, clickHandler, type }) => {
  return (
    <button type={type} onClick={clickHandler} className={`button ${classes}`}>
      {icon} {text}
    </button>
  );
};

export default Button;
