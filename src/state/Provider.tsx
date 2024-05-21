import { ReactNode, useState } from "react";
import Context from "./Context";
import { MapContextType } from "../types/map";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [mapContext, setMapContext] = useState<MapContextType>();

  const value = { mapContext, setMapContext };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
