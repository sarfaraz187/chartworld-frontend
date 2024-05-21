import { IGUIState } from "../../types/gui";
import { GET_GUI } from "../contants";

const initialState: IGUIState = {
  zoom: 12,
  lon: -122.45,
  lat: 37.82,
};

const guiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GUI:
      return {
        ...state,
        zoom: action.payload,
      };
    default:
      return state;
  }
};

export default guiReducer;
