import React from "react";
import "./App.css";
import Main from "./Main";
import { getInitialData } from "./service/getInitialData";
import { getPopVehicle } from "./service/getPopVehicle";
import { getPlanetsPop } from "./service/getPlanetsPop";
import { store } from "./store/store";
// getInitialData();
// getPopVehicle();
// getPlanetsPop();

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
