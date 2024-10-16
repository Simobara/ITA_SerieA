import React, { useContext, useEffect, useRef, useState } from "react";
import { CompleteDataContext, GiornataClouContext, GiornataNContext } from "../../../../Ap/Global/global";
import { fetchGiornataClou, giornataClou } from "../../../../START/app/0SerieAMatches";
import { ButtonResetContext, IndexSelectedContext, PartiteDefinNoModContext, TestingContext } from "../../../Global/global";
import "./calGiorn.css";

const CalGiorn = ({ onReset }) => {
  const scrollContainer = useRef(null); // scrollContainer è una ref utilizzata per gestire lo scorrimento orizzontale delle giornate, assicurandosi che la casella selezionata sia sempre visibile. */

  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const { testingClouSelected, setTestingClouSelected } = useContext(TestingContext);
  const [indexSelected, setIndexSelected] = useState(null);
  const [matches, setMatches] = useState([]);
  const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);
  const { completeClouSelected, setCompleteClouSelected } = useContext(CompleteDataContext);
  const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);
  const { giornataN, setGiornataN } = useContext(GiornataNContext);
  const totaleGiornate = 38;

  const boxRefs = useRef([]); // const singleBoxRef = useRef(null); // Aggiunto ref per la larghezza della casella//Crea un ref per ciascuna casella
  if (boxRefs.current.length !== totaleGiornate) {
    boxRefs.current = Array(totaleGiornate)
      .fill()
      .map((_, i) => boxRefs.current[i] || React.createRef());
  }

  const handleSelectNumber = async (number) => {
    console.log(`Giornata selezionata: ${number}`);
    if (number && number <= totaleGiornate) {
      if (number !== indexSelected) {
        setButtonResetIsResetting(true);
        setIndexSelected(number);
        setIndexSel(number);
      }
      if (number === 38 && completeClouSelected[`giornata${number}`].length === 0) {
        const data = await fetchGiornataClou(number);
        setTestingClouSelected(
          JSON.parse(
            JSON.stringify({
              ...testingClouSelected,
              [`giornata${number}`]: data,
            }),
          ),
        );
        setCompleteClouSelected(
          JSON.parse(
            JSON.stringify({
              ...completeClouSelected,
              [`giornata${number}`]: data,
            }),
          ),
        );
        setGiornataClouSelected(Array.isArray(data) ? data : []);
        setMatches(Array.isArray(data) ? data : []);
      } else {
        setMatches(completeClouSelected[`giornata${number}`]);
        setGiornataClouSelected(completeClouSelected[`giornata${number}`]);
      }
      scrollIntoView(number);
    }
  };

  const scroll = (direction) => {
    let newSelected = indexSelected;
    if (direction === "left" && indexSelected > 1) {
      newSelected = indexSelected - 3;
    } else if (direction === "right" && indexSelected < totaleGiornate) {
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
      start = start - (end - totaleGiornate);
      end = totaleGiornate;
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // -------------------------------------------------------------------------------------------------------------
  console.log("Valore di indexSelected:", indexSelected);

  //Verifica il Contenuto di completeClouSelected:
  // useEffect(() => {
  //   console.log(`Dati per giornata ${indexSelected}:`, completeClouSelected[`giornata${indexSelected}`]);
  // }, [indexSelected, completeClouSelected]);

  //QUESTO USE EFFECT TROVA LA CASELLA DELLA GIORNATA CLOU INIZIALMENTE
  useEffect(() => {
    setButtonResetIsResetting(false);
    const giornataClouIndex = Object.keys(completeClouSelected).findIndex((giornata) => completeClouSelected[giornata] === giornataClou) + 1;
    if (giornataClouIndex) {
      setIndexSelected(giornataClouIndex);
      scrollIntoView(giornataClouIndex);
      setButtonResetIsResetting(false);
      // console.log("giornataClouIndex", giornataClouIndex);
      // console.log("giornataClouSelected", giornataClouSelected)
    }
  }, [completeClouSelected]);

  // QUESTO USE EFFECT REIMPOSTA LO STATO E LE PARTITE ALLO STADIO ORIGINALE
  useEffect(() => {
    setButtonResetIsResetting(false);
    if (onReset) {
      const giornataClouIndex = Object.keys(completeClouSelected).findIndex((giornata) => completeClouSelected[giornata] === giornataClou) + 1;
      if (indexSelected === giornataClouIndex) {
        // Se sei nella giornata clou, mantieni la selezione corrente
        // Esempio: potresti voler aggiornare solo parte dello stato
        setMatches(completeClouSelected[`giornata${indexSelected}`]);
        setGiornataClouSelected(completeClouSelected[`giornata${indexSelected}`]);
      } else {
        // Se sei in una giornata diversa dalla clou, reimposta tutto
        setIndexSelected(null);
        setMatches([]);
        setGiornataClouSelected(giornataClou);
      }
    }
  }, []);
  useEffect(() => {
    if (giornataN === 38 && !buttonResetIsResetting) {
      handleSelectNumber(giornataN);
    }
  }, [giornataN, buttonResetIsResetting]);
  console.log(completeClouSelected, "completeClouSelectedcompleteClouSelected");
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
  }, [giornataClouSelected, indexSel, giornataN]); //resetAll

  useEffect(() => {
    setIndexSelected(giornataN); // Aggiorna indexSelected quando giornataN cambia
  }, [giornataN]);

  useEffect(() => {
    console.log("Index Selected:", indexSelected);
    console.log("Giornata Clou Selected:", giornataClouSelected);
    // rest of the code
  }, [indexSelected, giornataClouSelected]);

  // Questo useEffect gestisce il caricamento dei dati quando cambia la giornata
  useEffect(() => {
    const fetchMatches = async () => {
      if (indexSelected >= 1) {
        console.log(`Caricamento dati da fetch per giornata 38`);
        // const data = await fetchGiornataClou(indexSelected);
        // setGiornataClouSelected(Array.isArray(data) ? data : []);
        // setMatches(Array.isArray(data) ? data : []);
      } else {
        console.log(`Caricamento dati locali per giornata ${indexSelected}`);
        // Carica i dati locali dalla variabile `completeClouSelected`
        const data = completeClouSelected[`giornata${indexSelected}`];
        setGiornataClouSelected(Array.isArray(data) ? data : []);
        setMatches(Array.isArray(data) ? data : []);
      }
    };

    fetchMatches();
  }, [indexSelected]);
  console.log(completeClouSelected, "completeClouSelected");
  // -------------------------------------------------------------------------------------------------------------
  return (
    <div className="unselectable flex items-center justify-center bg-black my-[-0.8rem] sm:mt-[0rem] sm:mb-[0.5rem]">
      <button
        onClick={() => scroll("left")}
        disabled={indexSelected === 1} // Disabilita se selected è 1
        className={`overflow-hidden text-gray-900 p-2 hover:bg-sky-800 hover:text-white focus:outline-none ${indexSelected === 1 ? "opacity-10 cursor-not-allowed" : ""}`}
      >
        {"<<<"}
      </button>

      <div ref={scrollContainer} className="flex overflow-x-auto scrollbar-hide">
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
        disabled={indexSelected === totaleGiornate} // Disabilita se selected è totaleGiornate
        className={`overflow-hidden text-gray-900 hover:bg-sky-800 hover:text-white focus:outline-none ${indexSelected === 38 ? "opacity-20 cursor-not-allowed" : ""}`}
      >
        {">>>"}
      </button>
    </div>
  );
};

export default CalGiorn;
