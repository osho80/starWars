import React, { useEffect } from "react";
import { connect } from "react-redux";
import Chart from "./components/Chart";
import { pilots, planets, planetsChartData, vehicles } from "./service/data";

const Main = (props: any) => {
  useEffect(() => {
    // console.log("vehicles:", props.vehicles);
    // console.log("pilots:", props.pilots);
    // console.log("planets:", props.planets);
  }, [props]);

  return (
    <div>
      <h1>Star Wars</h1>
      {props.planetsChartData.length && <Chart data={props.planetsChartData} />}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    vehicles: state.vehicles,
    pilots: state.pilots,
    planets: state.planets,
    sorted: state.sortedVehiclesData,
    planetsChartData: state.planetsPop,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
