import Axios from "axios";
import { store } from "../store/store";
import { Planet } from "../types/types";
// import { setPlanet } from "../store/actions";
// import { planets } from "./data";

export const getPlanet = async (name: string) => {
  const state = store.getState();
  const planets = state.planets;
  const planetFromData = planets.find((planet: Planet) => planet.name === name);

  const fetchPlanet = async (name: string) => {
    const baseUrl = "https://swapi.dev/api/planets/?search=";
    const { data } = await Axios.get(baseUrl + name);
    return data.results[0];
  };

  return planetFromData ? planetFromData : fetchPlanet(name);
};
