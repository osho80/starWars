import { AppState } from "../types/types";

const initialState: AppState = {
  vehicles: [],
  pilots: [],
  planets: [],
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_VEHICLES":
      return {
        ...state,
        vehicles: [...state.vehicles, ...action.vehicles],
      };
    case "SET_PILOTS":
      return {
        ...state,
        pilots: [...state.pilots, ...action.pilots],
      };
    case "SET_PLANETS":
      return {
        ...state,
        planets: [...state.planets, ...action.planets],
      };
    case "SET_PLANET":
      return {
        ...state,
        planets: [...state.planets, action.planet],
      };

    default:
      return state;
  }
};

export default appReducer;
