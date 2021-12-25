import Axios from "axios";
import { store } from "../store/store";
import { setPlanets } from "../store/actions";
import { Pilot } from "../types/types";

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
