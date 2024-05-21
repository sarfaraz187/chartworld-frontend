import { SET_LAT, SET_LON, SET_ZOOM } from "../constants";

export const setLat = (lat: number) => {
  return {
    type: SET_LAT,
    payload: lat,
  };
};

export const setLon = (lon: number) => {
  return {
    type: SET_LON,
    payload: lon,
  };
};

export const setZoom = (zoom: number) => {
  return {
    type: SET_ZOOM,
    payload: zoom,
  };
};
