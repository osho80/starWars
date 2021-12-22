export const setVehicles = (vehicles) => {
  return (dispatch) => {
    dispatch(_setVehicles(vehicles));
  };
};

export const setPilot = (pilot) => {
  return (dispatch) => {
    dispatch(_setPilot(pilot));
  };
};

export const setPlanet = (planet) => {
  return (dispatch) => {
    dispatch(_setPlanet(planet));
  };
};

export const setPopVehicle = (popVehicle) => {
  return (dispatch) => {
    dispatch(_setPopVehicle(popVehicle));
  };
};

export const setPlanetDisplay = (planet) => {
  return (dispatch) => {
    dispatch(_setPlanetDisplay(planet));
  };
};

const _setVehicles = (vehicles) => {
  return { type: "SET_VEHICLES", vehicles };
};

const _setPilot = (pilot) => {
  return { type: "SET_PILOT", pilot };
};

const _setPlanet = (planet) => {
  return { type: "SET_PLANET", planet };
};

const _setPopVehicle = (popVehicle) => {
  return { type: "SET_POP_VEHICLE", popVehicle };
};

const _setPlanetDisplay = (planet) => {
  return { type: "SET_PLANET_DISPLAY", planet };
};
