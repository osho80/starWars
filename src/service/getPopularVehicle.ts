import {
  getPilotedVehicles,
  getRelatedPilots,
  getRelatedPlanets,
} from "./swapiService";
import { sortVehiclesByPopularity } from "./sortVehiclesByPopularity";

export const getPopularVehicle = async () => {
  const vehicles = await getPilotedVehicles();
  const pilots = await getRelatedPilots(vehicles);
  const planets = await getRelatedPlanets(pilots);
  const popularVehicle = sortVehiclesByPopularity(vehicles, pilots, planets);
  return popularVehicle;
};
