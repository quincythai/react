import { useEffect, useState } from "react";
import "./index.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [selection, setSelection] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${selection}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [selection]);

  return (
    <div className="App">
      <Form selection={selection} setSelection={setSelection} />
      <Table items={items}/>
    </div>
  );
}

export default App;
