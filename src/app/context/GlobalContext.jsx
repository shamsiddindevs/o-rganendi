import {createContext} from "react";

export let LangContext = createContext();
const GlobalContext = ({children}) => {
  return <LangContext.Provider value={"light"}>{children}</LangContext.Provider>;
};

export default GlobalContext;
