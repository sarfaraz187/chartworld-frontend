import { IAction, IGUIState } from "../../types/gui";
import { SET_LAT, SET_LON, SET_ZOOM } from "../constants";

const initialState: IGUIState = {
  zoom: 12,
  lon: -122.45,
  lat: 37.82,
};

const guiReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_LAT:
      return {
        ...state,
        lat: action.payload,
      };
    case SET_LON:
      return {
        ...state,
        lat: action.payload,
      };
    case SET_ZOOM:
      return {
        ...state,
        lat: action.payload,
      };
    default:
      return state;
  }
};

export default guiReducer;
