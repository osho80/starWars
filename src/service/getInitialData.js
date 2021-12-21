import Axios from "axios";
import { getPopVehicle } from "./getPopVehicle";
import { getPlanetsPop } from "./getPlanetsPop";
import { store } from "../store/store";
import { setVehicles, setPilot, setPlanet } from "../store/actions";
const BASE_URL = "https://swapi.dev/api/";

const pilotUrls = [];
const planetUrls = [];

export const getInitialData = async () => {
  const processPlanet = async (url) => {
    const response = await Axios.get(url);
    store.dispatch(setPlanet(response.data));
  };

  const handlePilotRes = (data) => {
    store.dispatch(setPilot(data));
    if (!planetUrls.includes(data.homeworld)) {
      planetUrls.push(data.homeworld);
    }
  };

  const processPilot = async (url) => {
    const response = await Axios.get(url);
    handlePilotRes(response.data);
  };

  const getAllPlanets = async () => {
    // return Promise.all(
    //   planetUrls.map(async (url, idx) => {
    //     try {
    //       await processPlanet(url);
    //       if (idx === planetUrls.length - 1) {
    //         getPopVehicle();
    //         getPlanetsPop();
    //       }
    //     } catch (err) {
    //       console.log("Error while processing planet url:", url);
    //     }
    //   })
    // );
    console.log("planetUrls:", planetUrls);
    planetUrls.map(async (url, idx) => {
      await processPlanet(url);
      if (idx === planetUrls.length - 1) {
        getPopVehicle();
        getPlanetsPop();
      }
    });
  };

  const getAllPilots = async () => {
    return Promise.all(
      pilotUrls.map(async (url, idx) => {
        try {
          await processPilot(url);
          if (idx === pilotUrls.length - 1) {
            getAllPlanets();
          }
        } catch (err) {
          console.log("Error while processing pilot url:", url);
        }
      })
    );
  };

  const setPilotUrls = () => {
    const state = store.getState();
    const vehicles = state.vehicles;
    vehicles.forEach((vehicle, idx) => {
      return vehicle.pilots.forEach((url) => {
        if (!pilotUrls.includes(url)) {
          pilotUrls.push(url);
        }
        if (idx === vehicles.length - 1) {
          getAllPilots();
        }
      });
    });
  };

  const handleVehiclesRes = (data) => {
    const filtered = data.results.filter((vehicle) => vehicle.pilots.length);
    store.dispatch(setVehicles(filtered));
    data.next ? processVehicles(data.next) : setPilotUrls();
  };

  const processVehicles = async (apiUrl) => {
    const response = await Axios.get(apiUrl);
    handleVehiclesRes(response.data);
  };

  processVehicles(`${BASE_URL}vehicles/`);
  //   pilotUrls.length && (await getAllPilots());

  // const allVehicles = await getVehicles(`${BASE_URL}vehicles/`);
  // handleVehiclesRes(allVehicles);
  //   return store.dispatch(setDataReady(true));
};
