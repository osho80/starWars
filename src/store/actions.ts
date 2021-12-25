import { Vehicle, Pilot, Planet } from "../types/types";

export const setVehicles = (vehicles: Vehicle[]) => {
  return { type: "SET_VEHICLES", vehicles };
};
export const setPilots = (pilots: Pilot[]) => {
  return { type: "SET_PILOTS", pilots };
};
export const setPlanets = (planets: Planet[]) => {
  return { type: "SET_PLANETS", planets };
};
export const setPlanet = (planet: Planet) => {
  return { type: "SET_PLANET", planet };
};
