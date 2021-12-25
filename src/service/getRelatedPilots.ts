import Axios from "axios";
import { store } from "../store/store";
import { setPilot } from "../store/actions";
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
          store.dispatch(setPilot(data));
          return data;
        } catch (error) {
          console.log(`Error while getting pilot url: ${url}`);
        }
      })
    );
    return pilots.filter((pilot) => pilot !== undefined);
  };
  const pilotUrls = getPilotUrls();
  const pilots = await getPilots(pilotUrls);
  return pilots;
};
