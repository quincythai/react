import React from "react";

const Button = ({ text, selection, setSelection }) => {
  return (
    <button
      type="button"
      onClick={() => {
        setSelection(text);
        console.log("clicked");
      }}
      className={selection === text ? "selected" : null}
    >
      {text}
    </button>
  );
};

export default Button;
