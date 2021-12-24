import Axios from "axios";
import { store } from "../store/store";
import { Planet } from "../types/types";

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
