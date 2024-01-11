import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello {handleNameChange()} i see that the function uses ()</p>
        <p>{"this is javascript" + 1}</p>
        <p>this is html</p>
        {/* objects and booleans will Error */}
      </header>
    </div>
  );
}

export default App;
