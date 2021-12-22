import { compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type Vehicle = {
  name: string;
  pilots: string[];
};

export type Pilot = {
  name: string;
  homeworld: string;
  url: string;
  id?: string;
};

export type Planet = {
  name: string;
  population: string;
  url?: string;
};

export type PopVehicle = {
  name: string;
  aggPopSum: number;
  data: { pilot: string; planet: Planet }[];
};

export type VehicleResponse = {
  count: string;
  next: string | null;
  previous: string | null;
  results: Vehicle[];
};

export interface AppState {
  vehicles: Vehicle[];
  pilots: Pilot[];
  planets: Planet[];
  popVehicle: PopVehicle | null;
  planetsPop: Planet[];
}
