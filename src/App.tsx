import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Main from "./pages/Main/index";
// import Title from "./components/Title/index";
// import PopularVehicleTable from "./components/PopularVehicleTable/index";
// import Chart from "./components/Chart/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
