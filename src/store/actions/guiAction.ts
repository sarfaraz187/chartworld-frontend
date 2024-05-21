import { SET_MAP_POSITION } from "../constants";

export const setMapPosition = (lat: number, lon: number, zoom: number) => {
  return {
    type: SET_MAP_POSITION,
    payload: { lat, lon, zoom },
  };
};
