import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Title from "./components/Title/index";
import Main from "./pages/Main/index";
// import { init } from "./service/init";
// init();
function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Main />
    </div>
  );
}

export default App;
