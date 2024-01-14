import React from "react";

const Button = ({ text, selection, setSelection }) => {
  return (
    <button
      type="button"
      className={selection === text ? "active" : null}
      onClick={() => {
        setSelection(text);
        console.log(`clicked ${text} button`);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
