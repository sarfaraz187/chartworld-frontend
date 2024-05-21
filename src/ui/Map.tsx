import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMapPosition } from "../store/actions/guiAction";
import { IGUIState } from "../types/gui";
import View from "ol/View.js";
import Map from "ol/Map.js";
import TileImage from "ol/source/TileImage.js";
import TileLayer from "ol/layer/Tile";
import ImageLayer from "ol/layer/Image";
import ImageWMS from "ol/source/ImageWMS.js";
import { transform } from "ol/proj";
import Context from "../state/Context";

const MapComp = () => {
  const context = useContext(Context);
  const dispatch = useDispatch();
  const guiState = useSelector((state: { gui: IGUIState }) => state.gui);

  const imageLayerRef = useRef<ImageLayer<ImageWMS> | null>(null);

  useEffect(() => {
    console.log("Initialize Map Triggered", context?.toggleBtnState);
    initializeMap();
  }, []);

  useEffect(() => {
    if (imageLayerRef.current) {
      imageLayerRef.current.setZIndex(context?.toggleBtnState.isActive ? 2 : 0);
    }
  }, [context?.toggleBtnState.isActive]);

  function initializeMap() {
    const tileLayer = new TileLayer({
      zIndex: 1,
      source: new TileImage({
        url: "//a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        wrapX: true,
      }),
    });

    const imageLayer = new ImageLayer({
      zIndex: 2,
      source: new ImageWMS({
        ratio: 1,
        url: "https://wms.sevencs.com/",
        params: { LAYERS: "GIS-ENC-OFFSHORE", CSBOOL: "181", CSVALUE: ",,,,,2" },
      }),
    });

    imageLayerRef.current = imageLayer;

    const map = new Map({
      target: "map",
      view: new View({
        projection: "EPSG:3857",
        center: transform([guiState.lon, guiState.lat], "EPSG:4326", "EPSG:3857"),
        zoom: guiState.zoom,
        minZoom: 3,
        maxZoom: 18,
      }),
      layers: [tileLayer, imageLayer],
      controls: [],
    });

    onMapMove(map);
  }

  const onMapMove = (map: Map) => {
    map.on("moveend", () => {
      const view = map.getView();
      const center: any = view.getCenter();
      const zoom = view.getZoom();
      const [lon, lat] = transform(center, "EPSG:3857", "EPSG:4326");

      dispatch(setMapPosition(lat, lon, zoom ?? 0));
    });
  };

  return <div id="map" className="map" style={{ width: "800px", height: "600px" }}></div>;
};

export default MapComp;
