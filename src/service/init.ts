import { getPilotedVehicles } from "./getPilotedVehicles";
import { getRelatedPilots } from "./getRelatedPilots";
import { getRelatedPlanets } from "./getRelatedPlanets";
import { sortVehiclesByPopularity } from "./sortVehiclesByPopularity";
import { getPlanetsPop } from "./getPlanetsPop";

// import { Vehicle, Pilot } from "../types/types";
export const init = async () => {
  const vehicles = await getPilotedVehicles();
  console.log("Vehicles are set:", vehicles);
  const pilots = await getRelatedPilots(vehicles);
  console.log("Pilots are set:", pilots);
  const planets = await getRelatedPlanets(pilots);
  console.log("Planets are set:", planets);
  const popVehicle = sortVehiclesByPopularity(vehicles, pilots, planets);
  console.log("Pop vehicle is set:", popVehicle);
  const planetsForChart = await getPlanetsPop(planets);
  console.log("Planets for Chart:", planetsForChart);
};
