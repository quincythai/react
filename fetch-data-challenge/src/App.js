import { useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  const [selection, setSelection] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

// users posts comments
