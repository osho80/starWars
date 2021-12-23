import React, { useEffect } from "react";
import { connect } from "react-redux";
import PopVehicleTable from "../../components/PopVehicleTable/index";
import Chart from "../../components/Chart/index";
import {
  pilots,
  planets,
  planetsChartData,
  popVehicle,
  vehicles,
} from "../../service/data";
import { AppState } from "../../types/types";

const Main = (props: any) => {
  useEffect(() => {
    // console.log("vehicles:", props.vehicles);
    // console.log("pilots:", props.pilots);
    // console.log("planets:", props.planets);
    console.log("planets:", props.popVehicle);
  }, [props]);

  return (
    <div>
      {popVehicle && <PopVehicleTable data={popVehicle} />}
      {/* {props.popVehicle && <PopVehicleTable data={props.popVehicle} />} */}
      {/* {props.planetsChartData.length && <Chart data={props.planetsChartData} />} */}
      {planetsChartData.length && <Chart data={planetsChartData} />}
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    vehicles: state.vehicles,
    pilots: state.pilots,
    planets: state.planets,
    popVehicle: state.popVehicle,
    planetsChartData: state.planetsPop,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
