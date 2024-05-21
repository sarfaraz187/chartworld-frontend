export type MapContextType = {
  map: Map | null;
  openStreetMapLayer: TileLayer<TileImage> | null;
  openStreetMapSource: TileImage | null;
  wmsLayer: IImageLayer<ImageWMSSource> | null;
  wmsSource: ImageWMSSource | null;
};

export type TileLayer<T> = {
  zIndex: number;
  source: T;
};

export type ImageLayer<T> = {
  zIndex: number;
  source: T;
};

export type TileImage = {
  url: string;
  wrapX: boolean;
};

export type ImageWMSSource = {
  ratio: number;
};
