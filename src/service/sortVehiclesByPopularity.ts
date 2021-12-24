import { Vehicle, Pilot, Planet } from "../types/types";

type Data = {
  pilot: string | null;
  planet: Planet | null;
}[];

export const sortVehiclesByPopularity = (
  vehicles: Vehicle[],
  pilots: Pilot[],
  planets: Planet[]
) => {
  const calcAggPop = (data: Data) => {
    const sum = data.reduce((acc, item) => {
      const parsed = item.planet ? parseInt(item.planet.population, 10) : 0;
      const isnan = isNaN(parsed);
      const num = isnan ? 0 : parsed;
      return acc + num;
    }, 0);

    return sum;
  };

  const createVehicleObj = (vehicle: Vehicle) => {
    const data = vehicle.pilots.map((pilotUrl: string) => {
      const pilot = pilots.find((pilot) => pilot.url === pilotUrl);
      const planet = !pilot
        ? null
        : planets.find((planet) => planet.url === pilot.homeworld);
      const population = !planet ? "0" : planet.population;
      return {
        pilot: pilot ? pilot.name : null,
        planet: planet ? { name: planet.name, population: population } : null,
      };
    });
    const compareObj = {
      name: vehicle.name,
      aggPopSum: data ? calcAggPop(data) : 0,
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
  return sorted[0];
};
