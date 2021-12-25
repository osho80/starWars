import Axios from "axios";
import { store } from "../store/store";
import { setPilots } from "../store/actions";
import { Vehicle } from "../types/types";

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
