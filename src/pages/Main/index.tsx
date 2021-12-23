import React, { useEffect } from "react";
import { connect } from "react-redux";
import PopVehicleTable from "../../components/PopVehicleTable/index";
import Chart from "../../components/Chart/index";
import { planetsChartData, popVehicle } from "../../service/data";
import { init } from "../../service/init";

import { AppState } from "../../types/types";

const Main = (props: any) => {
  useEffect(() => {
    // console.log("vehicles:", props.vehicles);
    // console.log("pilots:", props.pilots);
    // console.log("planets:", props.planets);
    // console.log("planets:", props.popVehicle);
    // init();
  }, []);

  return (
    <div>
      {/* {popVehicle && <PopVehicleTable data={popVehicle} />} */}
      {/* {props.popVehicle && <PopVehicleTable data={props.popVehicle} />} */}
      <PopVehicleTable />
      {/* {props.planetsChartData.length && <Chart data={props.planetsChartData} />} */}
      {/* {planetsChartData.length && <Chart data={planetsChartData} />} */}
      {/* <Chart /> */}
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    vehicles: state.vehicles,
    pilots: state.pilots,
    planets: state.planets,
    popularVehicle: state.popularVehicle,
    planetsChartData: state.planetsPopulation,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
