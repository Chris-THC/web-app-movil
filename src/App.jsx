import { useState } from "react";
import ContPricipal from "./components/ContPrincipal";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ContPricipal />
    </div>
  );
}

export default App;
