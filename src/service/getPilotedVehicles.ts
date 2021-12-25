import Axios from "axios";
import { store } from "../store/store";
import { setVehicles } from "../store/actions";
import { Vehicle } from "../types/types";
const BASE_URL = "https://swapi.dev/api/";

const processVehicles = async (apiUrl: string): Promise<Vehicle[]> => {
  const { data } = await Axios.get(apiUrl);
  const filtered = data.results.filter(
    (vehicle: Vehicle) => vehicle.pilots.length
  );
  store.dispatch(setVehicles(filtered));
  if (data.next) {
    return processVehicles(data.next);
  }
  const state = store.getState();
  const vehicles = state.vehicles;
  return vehicles;
};

export const getPilotedVehicles = async () => {
  return processVehicles(`${BASE_URL}vehicles/`);
};
