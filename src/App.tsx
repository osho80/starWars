import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Title from "./components/Title/index";
import PopVehicleTable from "./components/PopVehicleTable/index";
import Chart from "./components/Chart/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <PopVehicleTable />
      <Chart />
    </div>
  );
}

export default App;
