type MapContextType = {
  map: Map | null;
  openStreetMapLayer: TileLayer<TileImage> | null;
  openStreetMapSource: TileImage | null;
  wmsLayer: ImageLayer<ImageWMSSource> | null;
  wmsSource: ImageWMSSource | null;
};
