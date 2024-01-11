import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  // Note: count's value is whatever was brought into it
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (event) => {
    console.log(event.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={() => handleClick2("gilgamesh")}>Click it</button>
      <button onClick={(event) => handleClick3(event)}>Click it</button>
      <button onClick={handleClick}>Check the console for count</button>
    </main>
  );
};

export default Content;
