import Axios from "axios";
import { store } from "../store/store";
import { setVehicles, setPlanets, setPilots } from "../store/actions";
import { Vehicle, Pilot, Planet } from "../types/types";

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

export const getRelatedPilots = async (vehicles: Vehicle[]) => {
  const getPilotUrls = () => {
    const pilotUrls: string[] = [];
    vehicles.map((vehicle) => {
      return vehicle.pilots.forEach((url) => {
        if (!pilotUrls.includes(url)) {
          pilotUrls.push(url);
        }
      });
    });
    return pilotUrls;
  };

  const getPilots = async (pilotUrls: string[]) => {
    const pilots = await Promise.all(
      pilotUrls.map(async (url) => {
        try {
          const { data } = await Axios.get(url);
          return data;
        } catch (error) {
          console.log(`Error while getting pilot url: ${url}`);
        }
      })
    );
    const filtered = pilots.filter((pilot) => pilot !== undefined);
    store.dispatch(setPilots(filtered));
    return filtered;
  };
  const pilotUrls = getPilotUrls();
  const pilots = await getPilots(pilotUrls);
  return pilots;
};

export const getRelatedPlanets = async (pilots: Pilot[]) => {
  const getPlanetUrls = () => {
    const planetUrls: string[] = [];
    pilots.forEach((pilot) => {
      if (!planetUrls.includes(pilot.homeworld)) {
        planetUrls.push(pilot.homeworld);
      }
    });
    return planetUrls;
  };

  const getPlanets = async (planetUrls: string[]) => {
    const planets = await Promise.all(
      planetUrls.map(async (url) => {
        try {
          const { data } = await Axios.get(url);
          return data;
        } catch (error) {
          console.log(`Error while getting planet url: ${url}`);
        }
      })
    );
    const filtered = planets.filter((planet) => planet !== undefined);
    store.dispatch(setPlanets(filtered));
    return filtered;
  };
  const planetUrls = getPlanetUrls();
  const planets = await getPlanets(planetUrls);
  return planets;
};

export const getPlanet = async (name: string) => {
  const state = store.getState();
  const planets = state.planets;
  const planetFromData = planets.find((planet: Planet) => planet.name === name);

  const fetchPlanet = async (name: string) => {
    const baseUrl = "https://swapi.dev/api/planets/?search=";
    try {
      const { data } = await Axios.get(baseUrl + name);
      return data.results[0];
    } catch (err) {
      console.log(`Error while getting planet by name: ${name}`);
    }
  };

  return planetFromData ? planetFromData : fetchPlanet(name);
};
