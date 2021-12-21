import { AppState } from "../types/types";

const initialState: AppState = {
  vehicles: [],
  pilots: [],
  planets: [],
  sortedVehiclesData: null,
  planetsPop: [],
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_VEHICLES":
      return {
        ...state,
        vehicles: [...state.vehicles, ...action.vehicles],
      };
    case "SET_PILOT":
      return {
        ...state,
        pilots: [...state.pilots, action.pilot],
      };
    case "SET_PLANET":
      return {
        ...state,
        planets: [...state.planets, action.planet],
      };
    case "SET_SORTED":
      return { ...state, sortedVehiclesData: action.popVehicle };
    case "SET_PLANET_DISPLAY":
      return {
        ...state,
        planetsPop: [...state.planetsPop, action.planet],
      };

    default:
      return state;
  }
};

export default appReducer;
