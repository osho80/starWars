import React from "react";
import "./App.css";
import Main from "./pages/Main/index";
import { init } from "./service/init";
// init();

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
