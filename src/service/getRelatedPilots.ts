import Axios from "axios";
import { store } from "../store/store";
import { setPilot } from "../store/actions";
import { Vehicle } from "../types/types";
// import { vehicles } from "./data";

export const getRelatedPilots = async (vehicles: Vehicle[]) => {
  // export const getRelatedPilots = async () => {
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
    return Promise.all(
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
  };
  const pilotUrls = getPilotUrls();
  const pilots = await getPilots(pilotUrls);
  return pilots;
};
