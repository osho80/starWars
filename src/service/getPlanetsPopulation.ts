import Axios from "axios";
import { store } from "../store/store";
import { setPlanetDisplay } from "../store/actions";
import { Planet } from "../types/types";
// import { planets } from "./data";

export const getPlanetsPopulation = async (planets: Planet[]) => {
  // const state = store.getState();
  // const planets = state.planets;
  const required = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  const getPlanet = async (name: string) => {
    const baseUrl = "https://swapi.dev/api/planets/?search=";
    const response = await Axios.get(baseUrl + name);
    return response.data;
  };
  const getPlanetsFromData = required.map((name) => {
    const planetFromData = planets.find(
      (planet: Planet) => planet.name === name
    );
    return planetFromData ? planetFromData : name;
  });
  const getPlanetsToDisplay = async (planetsOrNames: (Planet | string)[]) => {
    return Promise.all(
      planetsOrNames.map(async (item) => {
        if (typeof item === "string") {
          try {
            const res = await getPlanet(item);
            store.dispatch(setPlanetDisplay(res.results[0]));
            return res.results[0];
          } catch (err) {
            console.log(`Error while getting planet ${item}'s data`);
          }
        } else {
          store.dispatch(setPlanetDisplay(item));
          return item;
        }
      })
    );
  };
  const planetsToDisplay = getPlanetsToDisplay(getPlanetsFromData);
  return planetsToDisplay;
};
