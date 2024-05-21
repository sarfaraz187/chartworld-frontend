export interface IGUIState {
  zoom: number;
  lon: number;
  lat: number;
}

export interface IAction {
  type: string;
  payload: number;
}
