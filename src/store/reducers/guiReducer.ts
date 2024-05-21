import { IGUIState } from "../../types/gui";
import { SET_MAP_POSITION } from "../constants";

const initialState: IGUIState = {
  zoom: 12,
  lon: -122.45,
  lat: 37.82,
};

const guiReducer = (state = initialState, action: { payload: IGUIState; type: string }) => {
  switch (action.type) {
    case SET_MAP_POSITION:
      return {
        ...state,
        zoom: action.payload.zoom,
        lon: action.payload.lon,
        lat: action.payload.lat,
      };
    default:
      return state;
  }
};

export default guiReducer;
