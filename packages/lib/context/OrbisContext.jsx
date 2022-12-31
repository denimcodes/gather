import {Orbis} from "@orbisclub/orbis-sdk";
import React, { useState, useEffect, useContext } from "react";

const OrbisContext = React.createContext();

export function useOrbis() {
  return useContext(OrbisContext);
}

const OrbisProvider = ({children}) => {
  const [orbis, setOrbis] = useState(); 

  useEffect(() => {
    const orbis = new Orbis();
    setOrbis(orbis);
  }, [])

  return (
    <OrbisContext.Provider value={orbis}>{children}</OrbisContext.Provider>
  )
}

export default OrbisProvider;