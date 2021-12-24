import { Vehicle, Pilot, Planet } from "../types/types";

export const setVehicles = (vehicles: Vehicle[]) => {
  return { type: "SET_VEHICLES", vehicles };
};
export const setPilot = (pilot: Pilot) => {
  return { type: "SET_PILOT", pilot };
};
export const setPlanet = (planet: Planet) => {
  return { type: "SET_PLANET", planet };
};
