import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map } from "ol";
import { transform } from "ol/proj";
import { IGUIState } from "../types/gui";
import View from "ol/View.js";

const Home = () => {
  const guiState = useSelector((state: { gui: IGUIState }) => state.gui);

  console.log("🚀 ~ Home ~ guiState:", guiState);

  function initializeMap() {
    new Map({
      target: "map",
      view: new View({
        projection: "EPSG:3857",
        center: transform([guiState.lon, guiState.lat], "EPSG:4326", "EPSG:3857"),
        zoom: guiState.zoom,
        minZoom: 3,
        maxZoom: 18,
      }),
      controls: [],
    });
  }
  useEffect(() => {
    initializeMap();
  }, []);

  const mapContainer = {
    height: "800px",
    width: "600px",
  };

  return (
    <>
      <div id="map" className="map" style={mapContainer}></div>
    </>
  );
};

export default Home;
