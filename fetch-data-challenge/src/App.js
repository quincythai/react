import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [selection, setSelection] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${selection}`);
        if (!response.ok) throw Error("Failed to fetch data");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [selection]);

  return (
    <div className="App">
      <Form selection={selection} setSelection={setSelection} />
      <List items={items} />
    </div>
  );
};

export default App;
