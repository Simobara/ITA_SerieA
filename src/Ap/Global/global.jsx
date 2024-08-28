import React, { createContext, useContext, useEffect, useState } from "react";
import { calendario, fetchGiornataClou, giornataNum } from "../../START/app/0SerieAMatches";
//----------------------------------------------
export const GiornataNContext = createContext();

export const GiornataNProvider = ({ children }) => {
  const [giornataN, setGiornataN] = useState(() => {
    const storedGiornata = localStorage.getItem("giornataN");
    return storedGiornata ? JSON.parse(storedGiornata) : giornataNum;
  });

  useEffect(() => {
    localStorage.setItem("giornataN", JSON.stringify(giornataN));
    console.log("global.jsx => DatiNelloStorage => giornataN", giornataN);
  }, [giornataN]);

  return <GiornataNContext.Provider value={{ giornataN, setGiornataN }}>{children}</GiornataNContext.Provider>;
};

//----------------------------------------------
export const GiornataClouContext = createContext();

export const GiornataClouProvider = ({ children }) => {
  const { giornataN } = useContext(GiornataNContext); // Ottieni giornataN dal contesto
  const [giornataClouSelected, setGiornataClouSelected] = useState([]);

  useEffect(() => {
    const updateGiornataClou = async () => {
      let data;
      if (giornataN === 38) {
        data = await fetchGiornataClou(giornataN);
      } else {
        data = calendario[`giornata${giornataN}`];
      }
      setGiornataClouSelected(data); // Imposta come array vuoto in caso di errore
    };

    updateGiornataClou();
  }, [giornataN]);

  return <GiornataClouContext.Provider value={{ giornataClouSelected, setGiornataClouSelected }}>{children}</GiornataClouContext.Provider>;
};
