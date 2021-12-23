import Axios from "axios";
import { store } from "../store/store";
import { setVehicles } from "../store/actions";

const BASE_URL = "https://swapi.dev/api/";

const handleVehiclesRes = (data) => {
  const filtered = data.results.filter((vehicle) => vehicle.pilots.length);
  store.dispatch(setVehicles(filtered));
  if (data.next) {
    return processVehicles(data.next);
  } else {
    const state = store.getState();
    const vehicles = state.vehicles;
    return vehicles;
  }
};

const processVehicles = async (apiUrl) => {
  const response = await Axios.get(apiUrl);
  return handleVehiclesRes(response.data);
};

export const getPilotedVehicles = async () => {
  return processVehicles(`${BASE_URL}vehicles/`);
};
