import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGUIState } from "../types/gui";
import View from "ol/View.js";
import Map from "ol/Map.js";
import { transform } from "ol/proj";
import { TileLayer, ImageLayer, TileImage, ImageWMSSource } from "../types/map";

const MapComp = () => {
  const guiState = useSelector((state: { gui: IGUIState }) => state.gui);

  const [openStreetMapLayer] = useState<TileLayer<TileImage>>(new TileLayer({ zIndex: 1 }));
  const [openStreetMapSource] = useState<TileImage>(
    new TileImage({
      url: "//a.tile.openstreetmap.org/{z}/{x}/{y}.png",
      wrapX: true,
    })
  );
  const [wmsLayer] = useState<ImageLayer<ImageWMSSource>>(new ImageLayer({ zIndex: 2 }));
  const [wmsSource] = useState<ImageWMSSource>(
    new ImageWMSSource({
      ratio: 1,
      url: "https://wms.sevencs.com/",
      params: { LAYERS: "GIS-ENC-OFFSHORE", CSBOOL: "181", CSVALUE: ",,,,,2" },
    })
  );

  console.log("🚀 ~ Home ~ guiState:", guiState);

  useEffect(() => {
    initializeMap();
  }, []);

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

export default MapComp;
