import { getPilotedVehicles } from "./getPilotedVehicles";
import { getRelatedPilots } from "./getRelatedPilots";
import { getRelatedPlanets } from "./getRelatedPlanets";
import { sortVehiclesByPopularity } from "./sortVehiclesByPopularity";

export const getPopularVehicle = async () => {
  const vehicles = await getPilotedVehicles();
  const pilots = await getRelatedPilots(vehicles);
  const planets = await getRelatedPlanets(pilots);
  const popularVehicle = sortVehiclesByPopularity(vehicles, pilots, planets);
  return popularVehicle;
};
