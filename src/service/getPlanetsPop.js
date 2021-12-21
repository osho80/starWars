import Axios from "axios";
import { store } from "../store/store";
import { setPlanetDisplay } from "../store/actions";
// import { planets } from "./data";

export const getPlanetsPop = async () => {
  const state = store.getState();
  const planets = state.planets;
  const required = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  const getPlanet = async (name) => {
    const baseUrl = "https://swapi.dev/api/planets/?search=";
    const response = await Axios.get(baseUrl + name);
    // console.log("res:", response.data.results[0]);
    // return response.data.results[0];
    return response.data;
  };
  const getPlanetsFromData = required.map((name) => {
    const planetFromData = planets.find((planet) => planet.name === name);
    // console.log("inData:", inData);
    return planetFromData ? planetFromData : name;
  });
  getPlanetsFromData.map(async (planet) => {
    if (typeof planet === "string") {
      const res = await getPlanet(planet);
      store.dispatch(setPlanetDisplay(res.results[0]));
    } else {
      store.dispatch(setPlanetDisplay(planet));
    }
  });
};
