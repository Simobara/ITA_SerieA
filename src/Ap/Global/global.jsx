import React, { createContext, useEffect, useState } from "react";
import { giornataNum } from "../../START/app/0SerieAMatches";

export const GiornataNContext = createContext();

export const GiornataNProvider = ({ children }) => {
  const [giornataN, setGiornataN] = useState(() => {
    const storedGiornata = localStorage.getItem("giornataN");
    return storedGiornata ? JSON.parse(storedGiornata) : giornataNum;
  });

  useEffect(() => {
    localStorage.setItem("giornataN", JSON.stringify(giornataN));
  }, [giornataN]);

  return <GiornataNContext.Provider value={{ giornataN, setGiornataN }}>{children}</GiornataNContext.Provider>;
};