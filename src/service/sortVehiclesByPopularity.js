import { store } from "../store/store";
import { setPopVehicle } from "../store/actions";
import { Vehicle, Pilot, Planet } from "../types/types";

// import { planets, pilots, vehicles } from "./data";
export const sortVehiclesByPopularity = (vehicles, pilots, planets) => {
  const calcAggPop = (data) => {
    const sum = data.reduce((acc, item) => {
      const parsed = parseInt(item.planet.population, 10);
      const isnan = isNaN(parsed);
      const num = isnan ? 0 : parsed;
      return acc + num;
    }, 0);

    return sum;
  };

  const createVehicleObj = (vehicle) => {
    const data = vehicle.pilots.map((pilotUrl) => {
      const pilot = pilots.find((pilot) => pilot.url === pilotUrl);
      const planet = planets.find((planet) => planet.url === pilot.homeworld);
      const population = planet.population;
      return {
        pilot: pilot.name,
        planet: { name: planet.name, population: population },
      };
    });
    const compareObj = {
      name: vehicle.name,
      aggPopSum: calcAggPop(data),
      data,
    };

    return compareObj;
  };

  const vehiclesToComapre = vehicles.map((vehicle) => {
    return createVehicleObj(vehicle);
  });
  const sorted = vehiclesToComapre.sort((a, b) => {
    return b.aggPopSum - a.aggPopSum;
  });
  store.dispatch(setPopVehicle(sorted[0]));
  return sorted[0];
};
