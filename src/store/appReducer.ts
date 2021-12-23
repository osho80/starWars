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

    default:
      return state;
  }
};

export default appReducer;
