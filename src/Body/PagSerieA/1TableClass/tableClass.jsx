import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { giornataN } from "../../../START/app/0SerieAMatches";
import { ATeams, BTeams } from "../../../START/funct/FilterTeamByCat";
import {
  CompleteDataContext,
  CoppiaPartitaContext,
  CoppiaPartitaRegistrataContext,
  GiornataClouContext,
  IndexSelectedContext,
  SquadraContext,
} from "../../Glob/global";
// import { squadrePunt } from '../../../START/app/main';
import { nomiSquadre } from "../../../START/app/1main";
import { s, ts } from "../../../START/styles/0CssMainStyle";
import { calcPntSq } from "./function/calcPuntiSq";
import { creaRisSq } from "./function/creaRisSq";
import "./tableClass.css";

const TableClass = () => {
  const [indiciDiffPts, setIndiciDiffPts] = useState([]);
  const [indiciDiffQ, setIndiciDiffQ] = useState([]);
  const [numeriIndiciBorderWhite, setNumeriIndiciBorderWhite] = useState({});
  const [differenzePunti, setDifferenzePunti] = useState({});
  const [punteggiAggiornati, setPunteggiAggiornati] = useState([]);
  const [giornataClouSelected, setGiornataClouSelected] =
    useState(GiornataClouContext);
  const { sqSelected } = useContext(SquadraContext);
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const { coppiaRegSelected } = useContext(CoppiaPartitaRegistrataContext);
  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const { completeClouSelected, setCompleteClouSelected } =
    useContext(CompleteDataContext);
  const ArrayNomiSquadre = Object.values(nomiSquadre);

  const isATeam = (teamName) => {
    if (typeof teamName === "string") {
      return ATeams.includes(teamName.toUpperCase());
    }
    return false;
  };
  const isBTeam = (teamName) => {
    if (typeof teamName === "string") {
      return BTeams.includes(teamName.toUpperCase());
    }
    return false;
  };

  const getTextTeam = (teamName) => {
    // console.log('teamName:', teamName); // Aggiungi per vedere cosa ricevi effettivamente come input
    if (isATeam(teamName)) {
      return `font-black ${ts.ATeamBg} ${ts.ATeamText} my-[-2rem] py-1`;
    } else if (isBTeam(teamName)) {
      return `font-light ${ts.BTeamText}`;
    } else {
      return `text-medium ${ts.ABTeamText}`;
    }
  };

  const getPunteggioVirtuale = useCallback(
    (squadra) => {
      let aggiuntaPunti = 0;

      // if (sqSelected.includes(squadra.name + "Z")) aggiuntaPunti = 3;
      // else if (sqSelected.includes(squadra.name + "X")) aggiuntaPunti = 1;
      // console.log(
      //   squadra.name,
      //   squadra.punteggio,
      //   aggiuntaPunti,
      //   "aggiuntaPunti"
      // );
      return squadra.punteggio + aggiuntaPunti;
    },
    [sqSelected, completeClouSelected]
  );

  const getPunteggioVisualizzato = useCallback(
    (squadra) => {
      if (
        sqSelected.includes(squadra.name + "Z") ||
        sqSelected.includes(squadra.name + "X")
      )
        return getPunteggioVirtuale(squadra);
      else if (sqSelected.includes(squadra.name + "Y"))
        return squadra.punteggio;
      return "";
    },
    [sqSelected, getPunteggioVirtuale, completeClouSelected]
  );

  const squadreConPunteggioVirtuale = useMemo(() => {
    // console.log(squadrePunt);
    return ArrayNomiSquadre.map((squadra) => ({
      ...squadra,
      punteggioVirtuale: getPunteggioVirtuale(squadra),
    }));
  }, [ArrayNomiSquadre, sqSelected, getPunteggioVirtuale]);

  useEffect(() => {
    Object.keys(nomiSquadre).forEach((key) => {
      const squadra = nomiSquadre[key];
      let number = indexSel ? indexSel : giornataN;
      // console.log(completeClouSelected, "qwertyuiop");
      const risultatiSquadra = creaRisSq(
        completeClouSelected,
        squadra.name,
        number
      );
      // Log per vedere i risultati della squadra corrente

      console.log(squadra.name, calcPntSq(risultatiSquadra), "nommiiiii");
      const punteggio = calcPntSq(risultatiSquadra);

      squadra.punteggio = punteggio; // Aggiunge il punteggio direttamente all'oggetto della squadra
      console.log(squadra.name, squadra.punteggio, "punteggioInizialeSquadra");
    });

    // Forza un aggiornamento dello stato per riflettere i nuovi punteggi nel rendering del componente
    setPunteggiAggiornati((prevPunteggi) => [...prevPunteggi]); // Assicurati che questa logica abbia senso nel tuo contesto
  }, [indexSel, completeClouSelected]);

  const squadreOrdinate = useMemo(() => {
    // alert("");
    console.log(nomiSquadre, "nomiSquadre");
    return Object.values(nomiSquadre)
      .map((squadra) => ({
        ...squadra,
        punteggioVirtuale: getPunteggioVirtuale(squadra),
        punteggioVisualizzato: getPunteggioVisualizzato(squadra),
      }))
      .sort((a, b) => b.punteggioVirtuale - a.punteggioVirtuale);
  }, [nomiSquadre, sqSelected, completeClouSelected, punteggiAggiornati]);

  const getColoriColonna0 = (index) => {
    if (index < 4) {
      return "bg-sky-950 text-white font-extrabold";
    } else if (index >= 4 && index < 6) {
      return "bg-sky-800 text-white font-extrabold";
    } else if (index === 6) {
      return "bg-cyan-700 text-white font-extrabold";
    } else if (index >= ArrayNomiSquadre.length - 3) {
      return "bg-gray-500 text-black font-extrabold";
    } else {
      return "bg-black";
    }
  };

  const isTeamMarkedWithX = useCallback(
    (teamName) => {
      try {
        return (
          typeof teamName === "string" &&
          (teamName.endsWith("X") || sqSelected.includes(teamName + "X"))
        );
      } catch (error) {
        console.error("Error processing teamName:", teamName, error);
        return false;
      }
    },
    [sqSelected, completeClouSelected]
  );

  const isPureNumber = (str) => /^\d+$/.test(str);
  const isCoppiaSelected = useCallback(
    (nomeSquadra) => {
      return (
        coppiaSelected &&
        (nomeSquadra === coppiaSelected.team1 ||
          nomeSquadra === coppiaSelected.team2)
      );
    },
    [coppiaSelected]
  );

  // ---------------------------------------------------------------(CoppiaPartitaRegistrataContext);

  const aggPunteggioSqReg = () => {
    if (coppiaRegSelected) {
      coppiaRegSelected.forEach((match) => {
        const scores = match.risultato.split("-").map(Number);
        const scoreTeam1 = scores[0];
        const scoreTeam2 = scores[1];
        let winningTeam;
        if (scoreTeam1 > scoreTeam2) {
          winningTeam = match.team1;
        } else if (scoreTeam2 > scoreTeam1) {
          winningTeam = match.team2;
        }
        if (winningTeam) {
          aggiungiPunti(winningTeam, 0);
        }
      });
    }
  };

  const aggiungiPunti = (nomeSquadra, punti) => {
    const squadra = ArrayNomiSquadre.find((s) => s.name === nomeSquadra);
    if (squadra) {
      squadra.punteggio += punti;
    }
  };
  //   const getPunteggioColonnaDomanda = (squadra) => {
  //     console.log("squadra===>", squadra);
  //     const isPartOfSelectedMatch = matchIndexValue[
  //       `giornata${
  //         localStorage.getItem("number")
  //           ? localStorage.getItem("number")
  //           : giornataNumber
  //       }`
  //     ]?.find(
  //       (match) => match.team1 === squadra.nome || match.team2 === squadra.nome
  //     );
  //     console.log(isPartOfSelectedMatch, "isPartOfSelectedMatch");
  //     return isPartOfSelectedMatch?.results !== undefined &&
  //       isPartOfSelectedMatch &&
  //       isPartOfSelectedMatch?.results.length
  //       ? squadra.punteggio
  //       : "";
  //   };
  const getPunteggioColonnaDomanda = (squadra) => {
    // console.log(coppiaRegSelected, "coppiaRegSelected");
    // Check if the squadra is part of any selected match
    const isPartOfSelectedMatch = completeClouSelected[
      `giornata${indexSel ? indexSel : giornataN}`
    ]?.find(
      (match) => match.team1 === squadra.name || match.team2 === squadra.name
    );
    return isPartOfSelectedMatch?.results !== undefined &&
      isPartOfSelectedMatch &&
      isPartOfSelectedMatch?.results.length
      ? squadra.punteggio
      : "";
    // return isPartOfSelectedMatch
    //   ? squadra.punteggio
    //   : getPunteggioVisualizzato(squadra);
  };

  const isTeamInCoppiaRegSelected = useCallback(
    (teamName) => {
      return completeClouSelected[
        `giornata${indexSel ? indexSel : giornataN}`
      ]?.find((match) => match.team1 === teamName || match.team2 === teamName);
    },
    [coppiaRegSelected]
  );

  const getPunteggioColonnaPTS = useCallback(
    (squadra) => {
      let punteggioFinale = squadra.punteggio;
      if (isTeamInCoppiaRegSelected(squadra.name)) {
        completeClouSelected[
          `giornata${indexSel ? indexSel : giornataN}`
        ].forEach((match) => {
          const [team1, team2] = match.results.split("-").map(Number);
          if (team1 === team2) {
            if (match.team1 === squadra.name || match.team2 === squadra.name) {
              punteggioFinale -= 1;
            }
          } else {
            if (
              (match.team1 === squadra.name && team1 > team2) ||
              (match.team2 === squadra.name && team2 > team1)
            ) {
              punteggioFinale -= 3;
            }
          }
        });
      }
      return punteggioFinale;
    },
    [coppiaRegSelected, completeClouSelected]
  ); // Aggiungi tutte le dipendenze esterne utilizzate nella funzione

  const isWinningTeamInCoppiaRegSelected = (teamName) => {
    return completeClouSelected[
      `giornata${indexSel ? indexSel : giornataN}`
    ]?.some((match) => {
      const [team1, team2] = match.results.split("-").map(Number);
      return (
        (match.team1 === teamName && team1 > team2) ||
        (match.team2 === teamName && team2 > team1)
      );
    });
  };

  const isLosingTeamInCoppiaRegSelected = (teamName) => {
    return completeClouSelected[
      `giornata${indexSel ? indexSel : giornataN}`
    ]?.some((match) => {
      const [team1, team2] = match.results.split("-").map(Number);
      return (
        (match.team1 === teamName && team1 < team2) ||
        (match.team2 === teamName && team2 < team1)
      );
    });
  };

  const isDrawingTeamInCoppiaRegSelected = (teamName) => {
    return completeClouSelected[
      `giornata${indexSel ? indexSel : giornataN}`
    ]?.some((match) => {
      const [team1, team2] = match.results.split("-").map(Number);
      return (
        (match.team1 === teamName || match.team2 === teamName) &&
        team1 === team2
      );
    });
  };

  const getTeamName = (squadr) => {
    if (typeof squadr === "object" && squadr !== null) {
      squadr = squadr.name; // Assumi che l'oggetto abbia una proprietà 'name' e usala
    }
    if (typeof squadr === "string") {
      return squadr.replace("X", "").replace("Y", "").replace("Z", "");
    }
    // console.error('Expected a string but received:', nome);
    return ""; // Gestisci il caso in cui l'input non è né un oggetto né una stringa
  };
  // ------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------
  useEffect(() => {
    // console.log("Squadre ordinate:", squadreOrdinate); // Stampa per debug
  }, [squadreOrdinate]);

  // Dipendenze vuote per eseguire solo al montaggio del componente
  // ------------------------------------------------------------------------------------------------------

  useEffect(() => {
    let nuoviIndici = [];
    let numeriCorrispondenti = {};
    for (let i = 1; i < squadreOrdinate.length; i++) {
      const punteggioAttuale = getPunteggioColonnaDomanda(squadreOrdinate[i]);
      const punteggioPrecedente = getPunteggioColonnaDomanda(
        squadreOrdinate[i - 1]
      );
      if (isPureNumber(punteggioAttuale) && isPureNumber(punteggioPrecedente)) {
        const differenzaPunteggio = Math.abs(
          punteggioAttuale - punteggioPrecedente
        );
        if (differenzaPunteggio >= 3) {
          nuoviIndici.push(i);
          numeriCorrispondenti[i] = differenzaPunteggio;
        }
      }
    }
    setIndiciDiffQ(nuoviIndici);
    setNumeriIndiciBorderWhite(numeriCorrispondenti);
  }, [squadreOrdinate, coppiaRegSelected, completeClouSelected]);

  useEffect(() => {
    let nuoviIndici = [];
    let nuoveDifferenze = {};

    // Assicurati che punteggiAggiornati sia un array ordinato
    const punteggiOrdinati = [...punteggiAggiornati].sort(
      (a, b) => b.punteggioAggiornato - a.punteggioAggiornato
    );

    for (let i = 1; i < punteggiOrdinati.length; i++) {
      const differenza = Math.abs(
        punteggiOrdinati[i].punteggioAggiornato -
          punteggiOrdinati[i - 1].punteggioAggiornato
      );
      if (differenza >= 3) {
        nuoviIndici.push(i);
        nuoveDifferenze[i] = differenza;
      }
    }
    setIndiciDiffPts(nuoviIndici);
    setDifferenzePunti(nuoveDifferenze);
  }, [punteggiAggiornati, completeClouSelected]);

  useEffect(() => {
    if (coppiaRegSelected) {
      // console.log("COMP TABLECLASS/coppiaRegSelected", coppiaRegSelected)
    }
    aggPunteggioSqReg();
  }, [coppiaRegSelected, completeClouSelected]);

  useEffect(() => {
    // console.log(squadreOrdinate, "squadreOrdinate");
    // Calcola i nuovi punteggi basandoti su getPunteggioColonnaPTS
    const nuoviPunteggi = squadreOrdinate.map((squadra) => ({
      ...squadra,
      punteggioAggiornato: getPunteggioColonnaPTS(squadra),
    }));
    setPunteggiAggiornati(nuoviPunteggi);
    // console.log(nuoviPunteggi, "nuoviPunteggi");
    // Calcola le differenze di punteggio tra le squadre adiacenti basandoti sui nuovi punteggi
    let nuoveDifferenze = {};
    for (let i = 1; i < nuoviPunteggi.length; i++) {
      const differenza = Math.abs(
        nuoviPunteggi[i].punteggioAggiornato -
          nuoviPunteggi[i - 1].punteggioAggiornato
      );
      if (differenza >= 3) {
        nuoveDifferenze[i] = differenza;
      }
    }
    // console.log(nuoveDifferenze, "nuoveDifferenze");
    setDifferenzePunti(nuoveDifferenze);
  }, [coppiaRegSelected, completeClouSelected]); // Aggiungi le dipendenze necessarie qui
  // console.log(differenzePunti, "coppiaRegSelected");
  // -------------------------------------------------------------------------------------------------
  // console.log(squadreOrdinate, "squadreOrdinate");
  return (
    <table className="relative overflow-auto min-h-[57rem]">
      <thead>
        <tr className="bg-black text-gray-600 text-center">
          <th className=" w-[0.5rem]" style={{ whiteSpace: "nowrap" }}></th>
          <th className=" w-[1rem] sm:pl-[1rem] md:pl-[0] lg:pl-[1rem] lg:pr-[1rem]">
            --- SQUADRA ---
          </th>
          <th className=" w-[1rem] sm:pl-[1rem] md:pl-[2rem] lg:pl-[1rem] lg:pr-[1rem] ">
            ?
          </th>
          <th className=" w-[1rem] sm:pl-[1rem] md:pl-[0] md:text-center lg:pl-[0] text-right">
            PTS
          </th>
          {/* <th className=" w-[2%]"> </th> */}
          {/* Altre colonne commentate */}
        </tr>
      </thead>
      <tbody className="bg-black text-cyan-800">
        {squadreOrdinate.map((squadra, index) => (
          // console.log('Rendering squadra:', squadra.name);
          <tr key={index}>
            <td className={`text-center relative ${getColoriColonna0(index)}`}>
              <div className="w-full h-full flex items-center justify-center ">
                {/* {index + 1} */}
              </div>
            </td>
            {/* { COLONNA SQUADRE} */}
            <td
              className={`w-[100%] bg-black xs:pl-[0] sm:pl-[1rem] md:pl-[1.5rem] md:pr-[1rem] py-[.8px] sm:py-1 md:py-2 md:text-md  lg:text-lg xl:px-4 flex justify-start relative sq-column
            ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ${s.BaseText1}` : ""}

            ${isTeamMarkedWithX(squadra.name) ? `${s.Filter4} underlineX ` : sqSelected.includes(squadra.name + "Z") ? `${s.Filter4} underlineW` : sqSelected.includes(squadra.name + "Y") ? `${s.Filter4} underlineL` : ""}

            ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineW ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}
            ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineL ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}
            ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineX ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}          
                  >
              }`}
            >
              {/* { div delle singole squadre non importa} */}
              <div
                className={`flex items-center bg-black
              ${isCoppiaSelected(squadra.name) ? `${s.Bg0}` : ""}
              ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
              ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
              ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
              `}
              >
                <img
                  src={squadra.logo}
                  alt={`${squadra.name} Logo`}
                  className="w-7 h-7 mr-4"
                />
                <span className={getTextTeam(squadra.name)}>
                  {getTeamName(squadra.name)}
                </span>
              </div>
            </td>
            {/* { COLONNA ?} */}
            <td
              className={`sm:pl-[1rem] md:pl-[2rem] lg:pl-[0.5rem] xl:pl-0 text-center font-extrabold bg-black text-cyan-500/80 md:text-md  lg:text-lg z-4	${indiciDiffQ.includes(index) ? "borderAlto border-white" : ""}`}
            >
              <div className="absolute transform -translate-x-4/3 -translate-y-7 text-left text-lg text-white mx-8 my-[-10] z-[10]">
                {numeriIndiciBorderWhite[index]}
              </div>
              {getPunteggioColonnaDomanda(squadra)}
            </td>
            {/* { COLONNA PTS} */}
            <td
              className={`sm:pl-[1.5rem] sm:pr-[1rem] md:pl-[1rem] lg:pl-2 xl:mr-4   text-left font-bold bg-black md:text-md  lg:text-lg
              ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ` : ""}

              ${indiciDiffPts.includes(index) ? "borderAlto border-gray-600/80 " : ""}
              ${getPunteggioColonnaDomanda(squadra) !== " " ? `  text-cyan-500/80` : "text-cyan-500/80"}

              ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
              ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
              ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""} 
							`}
            >
              <div className="innerBorder"></div>
              <div
                className={`absolute transform -translate-x-4/3 -translate-y-8 text-center text-md text-gray-600/80 mx-8 my-[-10] z-30`}
              >
                {!numeriIndiciBorderWhite[index] && differenzePunti[index]}
              </div>
              {getPunteggioColonnaPTS(squadra)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableClass;
