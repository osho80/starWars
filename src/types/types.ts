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
};

export type DetailedPilotObject = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type DetailedPlanetObject = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export type PilotsPlanet = {
  pilot: DetailedPilotObject | null;
  planet: DetailedPlanetObject | null;
};

export type Planet = {
  name: string;
  population: string;
  url?: string;
};

export type PopularVehicle = {
  name: string;
  aggPopSum: number;
  data: {
    pilot: DetailedPilotObject | null;
    planet: DetailedPlanetObject | null;
  }[];
};

export interface AppState {
  vehicles: Vehicle[];
  pilots: Pilot[];
  planets: Planet[];
}
