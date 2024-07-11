import React, { useContext, useEffect, useRef, useState } from "react";
import { giornataClou, giornataN } from "../../../../START/app/0SerieAMatches";
import {
  ButtonResetContext,
  CompleteDataContext,
  IndexSelectedContext,
  PartiteDefinNoModContext,
} from "../../../Glob/global";
import { GiornataClouContext } from "../../../Glob/global/";
import "./calGiorn.css";

const CalGiorn = ({ onReset }) => {
  const scrollContainer = useRef(null);
  const singleBoxRef = useRef(null); // Aggiunto ref per la larghezza della casella
  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const [indexSelected, setIndexSelected] = useState(null);
  const [matches, setMatches] = useState([]);
  const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext( PartiteDefinNoModContext  );
  const { completeClouSelected, setCompleteClouSelected } = useContext(CompleteDataContext);
  const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);

  //Crea un ref per ciascuna casella
  const boxRefs = useRef([]);
  if (boxRefs.current.length !== 38) {
    // Inizializza l'array di refs con 38 elementi (numero delle caselle)
    boxRefs.current = Array(38)
      .fill()
      .map((_, i) => boxRefs.current[i] || React.createRef());
  }

  const handleSelectNumber = (number) => {
    if (number >= 1 && number <= 38) {
      // Seleziona la nuova giornata e controlla se è diversa dalla corrente
      if (number !== indexSelected) {
        setButtonResetIsResetting(true);
        setIndexSelected(number);
        setIndexSel(number);
        // console.log("CAL GIORNO/number", number)
      }

      setMatches(completeClouSelected[`giornata${number}`]);
      setGiornataClouSelected(completeClouSelected[`giornata${number}`]);
      scrollIntoView(number);
    }
  };
  const scroll = (direction) => {
    let newSelected = indexSelected;
    if (direction === "left" && indexSelected > 1) {
      newSelected = indexSelected - 3;
    } else if (direction === "right" && indexSelected < 38) {
      newSelected = indexSelected + 3;
    }
    handleSelectNumber(newSelected);
  };

  const scrollIntoView = (number) => {
    const selectedBoxRef = boxRefs.current[number - 1];
    if (scrollContainer.current && selectedBoxRef.current) {
      const scrollPosition = selectedBoxRef.current.offsetLeft; // Usa la posizione left del ref selezionato
      scrollContainer.current.scrollLeft = scrollPosition;
    }
  };

  const getVisibleMatches = () => {
    let start = indexSelected - 1;
    let end = indexSelected + 1;
    if (start < 1) {
      end = end + (1 - start);
      start = 1;
    } else if (end > 38) {
      start = start - (end - 38);
      end = 38;
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // -------------------------------------------------------------------------------------------------------------
  //QUESTO USE EFFECT TROVA LA CASELLA DELLA GIORNATA CLOU INIZIALMENTE
  useEffect(() => {
    setButtonResetIsResetting(false);
    const giornataClouIndex =
      Object.keys(completeClouSelected).findIndex(
        (giornata) => completeClouSelected[giornata] === giornataClou
      ) + 1;
    if (giornataClouIndex) {
      setIndexSelected(giornataClouIndex);
      scrollIntoView(giornataClouIndex);
      setButtonResetIsResetting(false);
      // console.log("giornataClouIndex", giornataClouIndex);
      // console.log("giornataClouSelected", giornataClouSelected)
    }
  }, []);

  // QUESTO USE EFFECT REIMPOSTA LO STATO E LE PARTITE ALLO STADIO ORIGINALE
  useEffect(() => {
    setButtonResetIsResetting(false);
    if (onReset) {
      const giornataClouIndex =
        Object.keys(completeClouSelected).findIndex(
          (giornata) => completeClouSelected[giornata] === giornataClou
        ) + 1;
      if (indexSelected === giornataClouIndex) {
        // Se sei nella giornata clou, mantieni la selezione corrente
        // Esempio: potresti voler aggiornare solo parte dello stato
        setMatches(completeClouSelected[`giornata${indexSelected}`]);
        setGiornataClouSelected(
          completeClouSelected[`giornata${indexSelected}`]
        );
      } else {
        // Se sei in una giornata diversa dalla clou, reimposta tutto
        setIndexSelected(null);
        setMatches([]);
        setGiornataClouSelected(giornataClou);
      }
    }
  }, []);

  //QUESTO USE EFFECT REIMPOSTA LA GIORNATA CLOU DOPO CHE CI SONO SCORRIMENTI NEL completeClouSelected
  useEffect(() => {
    if (giornataClouSelected) {
      // const nuovaGiornataClou =
      //   Object.keys(completeClouSelected).findIndex(
      //     (key) => completeClouSelected[key] === giornataClouSelected
      //   ) + 1;

      // console.log(
      //   completeClouSelected,
      //   giornataClouSelected,
      //   nuovaGiornataClou,
      //   "giornataClouSelected"
      // );
      // console.log(nuovaGiornataClou, "nuovaGiornataClou");

      const nuovaGiornataClou = indexSel ? indexSel : giornataN;
      setMatches(giornataClouSelected);
      setIndexSelected(nuovaGiornataClou);
      scrollIntoView(nuovaGiornataClou);
      // if (nuovaGiornataClou !== selected) {
      //     setButtonResetIsResetting(true);
      // }
    }
  }, [giornataClouSelected]); //resetAll

  // -------------------------------------------------------------------------------------------------------------
  return (
    <div className="flex items-center justify-center bg-black">
      <button
        onClick={() => scroll("left")}
        disabled={indexSelected === 1} // Disabilita se selected è 1
        className={`text-gray-900 p-2 hover:bg-sky-800 hover:text-white focus:outline-none ${indexSelected === 1 ? "opacity-10 cursor-not-allowed" : ""}`}
      >
        &#9664;
      </button>
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto scrollbar-hide"
      >
        <div className="flex flex-nowrap">
          {getVisibleMatches().map((number, index) => (
            <div
              key={number}
              ref={boxRefs.current[number - 1]} // Assegna il ref corrispondente
              onClick={() => handleSelectNumber(number)}
              className={`w-12 h-12 flex items-center justify-center m-1 cursor-pointer 
                            ${indexSelected === number ? "bg-black" : "bg-black"} 
                            ${Math.abs(indexSelected - number) <= 3 && indexSelected !== number ? "hover:bg-sky-800" : ""}`}
            >
              <span
                className={`text-md font-semibold 
                            ${indexSelected === number ? "text-sky-800 font-bold text-4xl" : "text-gray-800"}`}
              >
                {number}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll("right")}
        disabled={indexSelected === 38} // Disabilita se selected è 38
        className={`text-gray-900 p-2 hover:bg-sky-800 hover:text-white focus:outline-none ${indexSelected === 38 ? "opacity-20 cursor-not-allowed" : ""}`}
      >
        &#9654;
      </button>
    </div>
  );
};

export default CalGiorn;
