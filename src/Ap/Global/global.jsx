import React, { createContext, useEffect, useState } from "react";
import { giornataClou, giornataNum } from "../../START/app/0SerieAMatches";

//----------------------------------------------
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

//----------------------------------------------

export const GiornataClouContext = createContext();
//setta la giornata Clou: //! SerieAMatches
export const GiornataClouProvider = ({ children }) => {
  const [giornataClouSelected, setGiornataClouSelected] = useState(giornataClou);

  return <GiornataClouContext.Provider value={{ giornataClouSelected, setGiornataClouSelected }}>{children}</GiornataClouContext.Provider>;
};
