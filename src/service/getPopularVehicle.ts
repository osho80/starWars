import {
  getPilotedVehicles,
  getRelatedPilots,
  getRelatedPlanets,
} from "./swapiService";
import { setCookie, getCookieValues } from "./cookieService";
import { store } from "../store/store";
import { sortVehiclesByPopularity } from "./sortVehiclesByPopularity";

const popularVehicleLastUpdate = "popularVehicleLastUpdate";

const checkShuoldUpdate = () => {
  const lastUpdate = parseInt(getCookieValues().popularVehicleLastUpdate, 10);
  if (isNaN(lastUpdate)) return true;
  const miliSecPerDay = 1000 * 60 * 60 * 24;
  return lastUpdate + miliSecPerDay < Date.now() ? true : false;
};
export const getPopularVehicle = async () => {
  const shouldUpdate = checkShuoldUpdate();
  const { vehicles, pilots, planets } = store.getState();
  const currVehicles =
    !shouldUpdate && vehicles.length ? vehicles : await getPilotedVehicles();
  const currPilots =
    !shouldUpdate && pilots.length
      ? pilots
      : await getRelatedPilots(currVehicles);
  const currPlanets =
    !shouldUpdate && planets.length
      ? planets
      : await getRelatedPlanets(currPilots);
  const popularVehicle = sortVehiclesByPopularity(
    currVehicles,
    currPilots,
    currPlanets
  );
  setCookie(popularVehicleLastUpdate, Date.now(), 30);
  return popularVehicle;
};
