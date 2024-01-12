import React from "react";
import "./styles/normalize.css";
import "./styles/index.css";

const InputBox = ({ color, setColor }) => {
  return (
    <form className="inputBox">
      <label htmlFor="inputBox">Input box</label>
      <input
        type="text"
        id="inputBox"
        placeholder="Add color name"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
    </form>
  );
};

export default InputBox;
