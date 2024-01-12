import React from "react";
import "./styles/normalize.css";
import "./styles/index.css";

const ColorBox = ({ color }) => {
  const style = { backgroundColor: color };
  return (
    <div className="colorBox" style={style}>
      {color ? color : "Empty value"}
    </div>
  );
};

ColorBox.defaultProps = {
  color: "white",
};

export default ColorBox;
