import { createContext } from "react";
import { ContextType } from "../types/common";

const Context = createContext<ContextType | undefined>(undefined);
export default Context;
