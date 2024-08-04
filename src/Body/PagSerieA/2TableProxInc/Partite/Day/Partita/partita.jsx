import { useContext, useEffect, useState } from "react";
// import { useDrag, useDrop } from "react-dnd";
import { giornataN } from "../../../../../../START/app/0SerieAMatches";
import { ts } from "../../../../../../START/styles/0CssMainStyle";
import {
  ButtonResetContext,
  CompleteDataContext,
  CoppiaPartitaContext,
  CoppiaPartitaRegistrataContext,
  GiornataClouContext,
  IndexSelectedContext,
  PartiteDefinNoModContext,
  SquadraContext,
} from "../../../../../Global/global";
import "./partita.css";
import { handleCoppiaSelectTeamm } from "./zExternal/handleCoppiaSelectTeam";
import { handleResetColorss } from "./zExternal/handleResetColors";
import { handleSelectionn } from "./zExternal/handleSelection";
import { isBigTeamm } from "./zExternal/isBigTeam";
import { getTextTeam } from "./zExternal/isQTeam";
import { toggleEyee } from "./zExternal/toggleEye";
import { toggleSymboll } from "./zExternal/toggleSymbol";
import { underlineTeamm } from "./zExternal/underlineTeam";

const Partita = ({ partita, resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  const [isButtonClickable, setIsButtonClickable] = useState(false);
  const [isKQBtnActive, setIsKQBtnActive] = useState(false);
  const [isSignOk, setIsSignOk] = useState(false);
  const [selection, setSelection] = useState("");
  const [isTablet, setIsTablet] = useState(window.matchMedia("(max-width: 768px)").matches);

  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  const { sqSelected, setSqSelected } = useContext(SquadraContext);
  const { coppiaSelected, setCoppiaSelected } = useContext(CoppiaPartitaContext);
  const { coppiaRegSelected, setCoppiaRegSelected } = useContext(CoppiaPartitaRegistrataContext);
  const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);
  const { completeClouSelected, setCompleteClouSelected } = useContext(CompleteDataContext);
  const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);

  //   const isPartitaModificabile = giornataClouSelected.some(
  //     (p) => p.numero === partita.numero && !p.results
  //   );
  // console.log(giornataClouSelected, "giornataClouSelected");
  const isPartitaModificabile = giornataClouSelected.some((p) => p.numero === partita.numero && (!p.results || p.rank));
  const isPartitaInCoppiaRegSelected = coppiaRegSelected.some((coppia) => coppia.team1 === partita.team1 && coppia.team2 === partita.team2 && !partita.rank);
  const toggleSymbol = () => toggleSymboll(partita, isPartitaModificabile, setButtonResetIsResetting, setIsKQBtnActive, setIsSignOk);
  const toggleEye = () => toggleEyee(partita, occhioApertoPartita, setOcchioApertoPartita, setButtonResetIsResetting, handleCoppiaSelectTeam);
  const isEyeOpen = occhioApertoPartita === partita.numero;
  const handleSelection = (selectedTeam, selectionType, numeroPartita) =>
    handleSelectionn(
      selectedTeam,
      selectionType,
      numeroPartita,
      partita,
      setButtonResetIsResetting,
      setSelection,
      setIsButtonClickable,
      setSqSelected,
      setCompleteClouSelected,
      completeClouSelected,
      indexSel,
      giornataN,
      isKQBtnActive,
    );
  const underlineTeam = (team) => underlineTeamm(team, selection);
  const handleCoppiaSelectTeam = (partita) => handleCoppiaSelectTeamm(partita, coppiaSelected, setCoppiaSelected);
  const handleResetColors = (t1, t2) =>
    handleResetColorss(
      t1,
      t2,
      partita,
      selection,
      setSelection,
      setButtonResetIsResetting,
      setIsKQBtnActive,
      setIsSignOk,
      setIsButtonClickable,
      occhioApertoPartita,
      setOcchioApertoPartita,
      handleCoppiaSelectTeam,
      sqSelected,
      setSqSelected,
      completeClouSelected,
      setCompleteClouSelected,
      indexSel,
      giornataN,
    );
  const isBigTeam = (teamName) => isBigTeamm(teamName);
  // ------------------------------------------------------------------------------------------------
  // console.log(sqSelected, "sqSelected");
  // const nonSelectable = partita.results ? "unselectable" : "";
  // const [, drag] = useDrag({
  //     type: "PARTITA",
  //     // eslint-disable-next-line
  //     item: { numero: partita.numero, day: partita.day },
  // });
  // const [, drop] = useDrop({
  //     accept: "PARTITA",
  //     hover: (draggedItem) => {
  //         // eslint-disable-next-line
  //         if (draggedItem.day === partita.day && draggedItem.numero !== partita.numero) {
  //             // eslint-disable-next-line
  //             movePartita(draggedItem.day, partita.day, draggedItem.numero, partita.numero);
  //         }
  //     },
  //     drop: (draggedItem) => {
  //         // eslint-disable-next-line
  //         if (draggedItem.day !== partita.day) {
  //             // eslint-disable-next-line
  //             movePartita(draggedItem.day, partita.day, draggedItem.numero);
  //         }
  //     },
  // });

  // ------------------------------------------------------------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.matchMedia("(max-width: 768px)").matches);
    }; // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //Quando la finestra viene ridimensionata, la funzione handleResize aggiorna lo stato isTablet.

  //Filtra e aggiorna sqSelected e coppiaSelected rimuovendo le squadre e coppie legate alla partita corrente se i risultati non sono già definiti.
  useEffect(() => {
    setCoppiaSelected({});
    if (resetAll) {
      // Chiudi l'occhio per tutte le partite
      setOcchioApertoPartita(null);
      setIsKQBtnActive(false);
      setIsSignOk(false);
      setIsButtonClickable(false);
      const numeriPartiteConRisultati = giornataClouSelected.filter((partita) => partita.results !== "").map((partita) => partita.numero);
      giornataClouSelected.forEach((partitaClou) => {
        if (!numeriPartiteConRisultati.includes(partitaClou.numero)) {
          if (partita.numero === partitaClou.numero) {
            setSelection("");
            setSqSelected((currentSelected) => {
              if (!Array.isArray(currentSelected)) {
                // console.error("currentSelected is not an array:", currentSelected);
                return [];
              }
              return currentSelected.filter(
                (squadra) => squadra !== partita.team1 && squadra !== partita.team2 && !squadra.includes(partita.team1) && !squadra.includes(partita.team2),
              );
            });
            setCoppiaSelected((currentSelected) => {
              if (!Array.isArray(currentSelected)) {
                return [];
              }
              return currentSelected.filter((coppia) => coppia.numeroPartita !== partitaClou.numero);
            });
          }
        }
      });
    }
  }, [resetAll, giornataClouSelected, partita]);
  //Crea un nuovo Set chiamato newPartiteDefinNoMod contenente i numeri delle partite con risultati definiti.
  useEffect(() => {
    // Aggiorna partiteDefinNoMod quando cambia giornataClouSelected
    const newPartiteDefinNoMod = new Set();
    giornataClouSelected.forEach((partita) => {
      if (partita.results) newPartiteDefinNoMod.add(partita.numero);
    });
    setPartiteDefinNoMod(newPartiteDefinNoMod);
  }, [giornataClouSelected, setPartiteDefinNoMod]);
  //Scorre giornataClouSelected e per ogni partita con un risultato nel formato "X-X", determina il tipo di selezione (1, 2 o X).
  useEffect(() => {
    const partiteRegistrata = []; // Array temporaneo per le partite registrate
    giornataClouSelected.forEach((partitaGiornataClou) => {
      if (/^\d+-\d+$/.test(partitaGiornataClou.results)) {
        const score = partitaGiornataClou.results.split("-").map(Number);
        let selectionType;

        if (score[0] > score[1]) {
          selectionType = "1";
        } else if (score[0] < score[1]) {
          selectionType = "2";
        } else {
          selectionType = "X";
        }

        handleSelection(partitaGiornataClou.team1, selectionType, partitaGiornataClou.numero);
        partiteRegistrata.push({
          team1: partitaGiornataClou.team1,
          team2: partitaGiornataClou.team2,
          numeroPartita: partitaGiornataClou.numero,
          risultato: partitaGiornataClou.results,
        });
      }
    });
    setCoppiaRegSelected(partiteRegistrata);
  }, [giornataClouSelected, completeClouSelected]);
  //Se partita.results è definito, determina il tipo di selezione (1, 2 o X) in base al punteggio.
  //Aggiorna lo stato selection e rende il pulsante cliccabile (setIsButtonClickable(true)).
  useEffect(() => {
    //determina i colori se la squadra vince perde pareggia
    if (partita.results) {
      const score = partita.results.split("-").map(Number);
      let selectionType;
      if (score[0] > score[1]) {
        selectionType = "1";
      } else if (score[0] < score[1]) {
        selectionType = "2";
      } else {
        selectionType = "X";
      }
      setSelection(selectionType);
      //   setIsKQBtnActive(true);
      setIsButtonClickable(true);
    }
  }, []);

  // ------------------------------------------------------------------------------------------------
  return (
    <>
      <div
        className={`font-bold flex items-center justify-center mx-[1rem] 
                ${isPartitaModificabile ? "" : "unselectable"}`}
      >
        <div className="flex items-center justify-center xs:text-xs sm:text-sm relative">
          <div className="ml-[5%] sm:ml-0 sm:mr-1 p-[0.354rem] w-30 text-gray-800">
            {/* <span role="img" aria-label="Menu">☰</span> */}
            <span>{partita.time}</span>
          </div>
          <div className="w-15 ml-[2px] text-gray-600 font-normal"> </div>
          {/* <div className="p-2 w-15">
                        <span role="img" aria-label="Calendario">📅</span>
                    </div> */}
          {/* <div className="absolute ml-[4rem]">
                        <div className="text-xl font-bold"></div>
                    </div> */}
          {!isPartitaInCoppiaRegSelected && (
            <div className={`{flex sm:pl-0 hover:cursor-context-menu z-10 select-none }`}>
              <div className={`{sm:pr-1 pl-0 ${!isPartitaInCoppiaRegSelected} ? ml-[-0.5rem] mr-[-2rem] : 'pl-4'}`}>
                <span className="hover:bg-sky-900 text-gray-700 z-20" role="img" aria-label="" onClick={() => handleResetColors(partita.team1, partita.team2)}>
                  ---
                  {/* ,,, */}
                  {/* 〰️ */}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col sm:ml-[2rem] justify-start w-[90rem] max-w-[70%] sm:mx-2">
          <div className="relative flex flex-row items-center ml-[1rem] xs:text-xs sm:text-xl">
            {isButtonClickable && !isPartitaInCoppiaRegSelected && (
              <div className={`absolute ml-[2%] sm:pl-[10%] sm:ml-[-1.5rem] z-[20] bg-black ${!isPartitaModificabile ? "unselectable" : ""}`}>
                <div className="hover:cursor-pointer" onClick={toggleSymbol}>
                  {" "}
                  {isKQBtnActive ? "📍" : "✔️"}{" "}
                </div>
              </div>
            )}
            <div className={`{absolute flex flex-row ml-[10%] {!isPartitaModificabile ? "hover:cursor-not-allowed unselectable" : "hover:cursor-pointer"}`}>
              <div
                className={`max-w-[9rem] whitespace-nowrap overflow-hidden z-[1]
                                ${getTextTeam(partita.team1)} 
                                ${isKQBtnActive ? "hover:cursor-not-allowed unselectable" : "hover:cursor-pointer"}
                                ${isBigTeam(partita.team1) ? `my-1 ${ts.ATeamText} ${ts.ATeamBg} font-bold` : ""} 
                                ${underlineTeam("1")}`}
                onClick={() => {
                  // console.log(
                  //   partita.team1,
                  //   isKQBtnActive,
                  //   /!isSignOk && isPartitaModificabile,
                  //   "abcdefghijkl"
                  // );
                  !isSignOk && isPartitaModificabile ? handleSelection(partita.team1, "1") : undefined;
                }}
              >
                {isTablet ? partita.team1.slice(0, 3) : partita.team1}
              </div>
            </div>
            <div
              className={`absolute flex flex-row sm:ml-[4rem] md:ml-[8rem] lg:ml-[42%] ml-[40%] rounded-lg bg-gray-900 mt-3 w-6 pt-[0.7rem] z-[4] 
                                ${isKQBtnActive || !isPartitaModificabile ? "hover:cursor-not-allowed unselectable" : "hover:cursor-pointer"} 
                                ${selection === "X" ? "text-yellow-500/50" : ""}`}
              onClick={() => (!isSignOk && isPartitaModificabile ? handleSelection(partita.team1, "X") : undefined)}
            >
              {/* Contenuto del div */}
            </div>
            <div
              className={`absolute flex flex-row sm:ml-[5rem] md:ml-[55%] ml-[55%] z-[2] ${!isPartitaModificabile ? "hover:cursor-not-allowed unselectable" : "hover:cursor-pointer"}`}
            >
              <div
                className={`max-w-[9rem] whitespace-nowrap overflow-hidden ml-[1rem] 
                                ${getTextTeam(partita.team2)} 
                                ${isKQBtnActive ? "hover:cursor-not-allowed unselectable" : ""}
                                ${isBigTeam(partita.team2) ? "font-bold" : ""} 
                                ${underlineTeam("2")}`}
                onClick={() => (!isSignOk && isPartitaModificabile ? handleSelection(partita.team2, "2") : undefined)}
              >
                {isTablet == true ? partita.team2.slice(0, 3) : partita.team2}
                {/* {partita.team2} */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sm:pl-1 sm: mr-[0.5rem] z-[20] bg-black">
                    <div className="sm:pr-1 cursor-pointer" onClick={toggleSymbol} >
                        {isActive ? '❗' : '❔'}
                    </div>
                </div> */}
        <button
          className="bg-black text-gray-800 hover:bg-sky-600  mr-[0] sm:mr-[1rem] md:mr-[2rem] lg:mr-[0] xl:mr-[0] font-bold z-[10] hover:cursor-pointer select-none"
          onClick={() => toggleEye()}
          data-partita-numero={partita.numero}
        >
          {/* 🗨️ ‍‍*/}
          {isEyeOpen ? "👁️" : "..."}
          {/* // */}
        </button>
      </div>
    </>
  );
};
export default Partita;
