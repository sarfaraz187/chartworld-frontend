import { ReactNode, useState } from "react";
import Context from "./Context";
import { ToggleBtnType } from "../types/common";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [toggleBtnState, setToggleBtnState] = useState<ToggleBtnType>({
    title: "WMS Layer on",
    isActive: false,
  });

  const value = { toggleBtnState, setToggleBtnState };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
