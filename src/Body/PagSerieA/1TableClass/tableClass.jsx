import { useContext, useEffect, useState } from "react";
import { GiornataNContext } from "../../../Ap/Global/global";
import { nomiSquadre } from "../../../START/app/1main";
import { s } from "../../../START/styles/0CssMainStyle";
import {
  CompleteDataContext,
  CoppiaPartitaContext,
  CoppiaPartitaRegistrataContext,
  GiornataClouContext,
  IndexSelectedContext,
  SquadraContext,
} from "../../Global/global";
import "./tableClass.css";
import aggPunteggioSqRegg from "./zExternal/addPunteggioSqReg";
import aggiungiPuntii from "./zExternal/addPunti";
import { calcPntSq } from "./zExternal/calcPuntiSq";
import { creaRisSq } from "./zExternal/creaRisSq";
import useGetIsCoppiaSelected from "./zExternal/getIsCoppiaSelected";
import useGetIsTeamInCoppiaRegSelected from "./zExternal/getIsTeamInCoppiaRegSelected";
import useGetIsTeamMarkedWithhX from "./zExternal/getIsTeamMarkedWithX";
import getPunteggioColonnaDomandaa from "./zExternal/getPunteggioColonnaDomanda";
import useGetPunteggioColonnaPTS from "./zExternal/getPunteggioColonnaPTS";
import useGetPunteggioVirtuale from "./zExternal/getPunteggioVirtuale";
import useGetPunteggioVisualizzato from "./zExternal/getPunteggioVisualizzato";
import useGetSquadreConPunteggioVirtuale from "./zExternal/getSquadreConPuntVirt";
import useGetSquadreOrdinate from "./zExternal/getSquadreOrdinate";
import getTeamNamee from "./zExternal/getTeamName";
import { getTextTeam } from "./zExternal/isQTeam";
import { isDrawingTeamInCoppiaRegSelectedd, isLosingTeamInCoppiaRegSelectedd, isWinningTeamInCoppiaRegSelectedd } from "./zExternal/isQTeamInCoppiaRegSelected";
import prendiColoriColonnaa0 from "./zExternal/prendiColoriColonna0";
import squadreOrdinatee from "./zExternal/squadreOrdinate";

const TableClass = () => {
  const [indiciDiffPts, setIndiciDiffPts] = useState([]);
  const [indiciDiffQ, setIndiciDiffQ] = useState([]);
  const [numeriIndiciBorderWhite, setNumeriIndiciBorderWhite] = useState({});
  const [differenzePunti, setDifferenzePunti] = useState({});
  const [punteggiAggiornati, setPunteggiAggiornati] = useState([]);
  const [giornataClouSelected, setGiornataClouSelected] = useState(GiornataClouContext);
  const { giornataN, setGiornataN } = useContext(GiornataNContext);

  const { sqSelected } = useContext(SquadraContext);
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const { coppiaRegSelected } = useContext(CoppiaPartitaRegistrataContext);
  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const { completeClouSelected, setCompleteClouSelected } = useContext(CompleteDataContext);
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const ArrayNomiSquadre = Object.values(nomiSquadre);

  const handleResize = () => {
    setIsBigScreen(window.innerWidth >= 768);
    setIsMobile(window.innerWidth < 768);
  };

  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const prendiColoriColonna0 = (index) => prendiColoriColonnaa0(index, ArrayNomiSquadre);
  const getPunteggioVirtuale = useGetPunteggioVirtuale(sqSelected, completeClouSelected);
  const getPunteggioVisualizzato = useGetPunteggioVisualizzato(sqSelected, getPunteggioVirtuale);

  const getSquadreConPunteggioVirtuale = useGetSquadreConPunteggioVirtuale(sqSelected, ArrayNomiSquadre, getPunteggioVirtuale);
  const getSquadreOrdinate = useGetSquadreOrdinate(
    sqSelected,
    nomiSquadre,
    completeClouSelected,
    punteggiAggiornati,
    getPunteggioVirtuale,
    getPunteggioVisualizzato,
  );
  const isTeamInCoppiaRegSelected = useGetIsTeamInCoppiaRegSelected(completeClouSelected, indexSel, giornataN);
  const getPunteggioColonnaPTS = useGetPunteggioColonnaPTS(completeClouSelected, isTeamInCoppiaRegSelected, indexSel, giornataN);

  const isCoppiaSelected = useGetIsCoppiaSelected(coppiaSelected);
  const isPureNumber = (str) => /^\d+$/.test(str);

  const squadreOrdinate = squadreOrdinatee(sqSelected, nomiSquadre, completeClouSelected, punteggiAggiornati, getPunteggioVirtuale, getPunteggioVisualizzato);
  const isTeamMarkedWithX = useGetIsTeamMarkedWithhX(sqSelected, completeClouSelected);
  // prettier-ignore
  const aggPunteggioSqReg = () => aggPunteggioSqRegg(coppiaRegSelected, aggiungiPunti);
  // prettier-ignore
  const aggiungiPunti = (nomeSquadra, punti) => aggiungiPuntii(nomeSquadra, punti, ArrayNomiSquadre);
  // prettier-ignore
  const getPunteggioColonnaDomanda = (squadra) => getPunteggioColonnaDomandaa(squadra, completeClouSelected, indexSel, giornataN);

  const isWinningTeamInCoppiaRegSelected = (teamName) => isWinningTeamInCoppiaRegSelectedd(teamName, completeClouSelected, indexSel, giornataN);
  const isLosingTeamInCoppiaRegSelected = (teamName) => isLosingTeamInCoppiaRegSelectedd(teamName, completeClouSelected, indexSel, giornataN);
  const isDrawingTeamInCoppiaRegSelected = (teamName) => isDrawingTeamInCoppiaRegSelectedd(teamName, completeClouSelected, indexSel, giornataN);

  const getTeamName = (teamName) => getTeamNamee(teamName);

  const half = Math.ceil(squadreOrdinate.length / 2);
  const firstHalf = squadreOrdinate.slice(0, half);
  const secondHalf = squadreOrdinate.slice(half);
  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------
  //per la finestra
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Itera su tutte le squadre, calcolando e assegnando i punteggi iniziali basati sui risultati di ciascuna squadra.
  //Forza un aggiornamento dello stato dei punteggi per riflettere le nuove assegnazioni nel rendering del componente.
  useEffect(() => {
    Object.keys(nomiSquadre).forEach((key) => {
      const squadra = nomiSquadre[key];
      let number = indexSel ? indexSel : giornataN;
      // console.log(completeClouSelected, "qwertyuiop");
      const risultatiSquadra = creaRisSq(completeClouSelected, squadra.name, number);
      // Log per vedere i risultati della squadra corrente

      console.log(squadra.name, calcPntSq(risultatiSquadra), "nommiiiii");
      const punteggio = calcPntSq(risultatiSquadra);

      squadra.punteggio = punteggio; // Aggiunge il punteggio direttamente all'oggetto della squadra
      console.log(squadra.name, squadra.punteggio, "punteggioInizialeSquadra");
    });

    // Forza un aggiornamento dello stato per riflettere i nuovi punteggi nel rendering del componente
    setPunteggiAggiornati((prevPunteggi) => [...prevPunteggi]); // Assicurati che questa logica abbia senso nel tuo contesto
  }, [indexSel, completeClouSelected]);

  //Calcola gli indici delle squadre che hanno una differenza di punteggio significativa (>= 3) con la squadra precedente nella lista ordinata.
  useEffect(() => {
    let nuoviIndici = [];
    let numeriCorrispondenti = {};
    for (let i = 1; i < squadreOrdinate.length; i++) {
      const punteggioAttuale = getPunteggioColonnaDomanda(squadreOrdinate[i]);
      const punteggioPrecedente = getPunteggioColonnaDomanda(squadreOrdinate[i - 1]);
      if (isPureNumber(punteggioAttuale) && isPureNumber(punteggioPrecedente)) {
        const differenzaPunteggio = Math.abs(punteggioAttuale - punteggioPrecedente);
        if (differenzaPunteggio >= 3) {
          nuoviIndici.push(i);
          numeriCorrispondenti[i] = differenzaPunteggio;
        }
      }
    }
    setIndiciDiffQ(nuoviIndici);
    setNumeriIndiciBorderWhite(numeriCorrispondenti);
  }, [squadreOrdinate, coppiaRegSelected, completeClouSelected]);

  //Calcola le differenze di punteggio significative (>= 3) tra squadre adiacenti nella lista di punteggi aggiornati ordinati.
  useEffect(() => {
    let nuoviIndici = [];
    let nuoveDifferenze = {};

    // Assicurati che punteggiAggiornati sia un array ordinato
    const punteggiOrdinati = [...punteggiAggiornati].sort((a, b) => b.punteggioAggiornato - a.punteggioAggiornato);

    for (let i = 1; i < punteggiOrdinati.length; i++) {
      const differenza = Math.abs(punteggiOrdinati[i].punteggioAggiornato - punteggiOrdinati[i - 1].punteggioAggiornato);
      if (differenza >= 3) {
        nuoviIndici.push(i);
        nuoveDifferenze[i] = differenza;
      }
    }
    setIndiciDiffPts(nuoviIndici);
    setDifferenzePunti(nuoveDifferenze);
  }, [punteggiAggiornati, completeClouSelected]);
  //Chiama una funzione per aggiornare i punteggi delle squadre basate sulle coppie selezionate (coppiaRegSelected).
  useEffect(() => {
    if (coppiaRegSelected) {
      // console.log("COMP TABLECLASS/coppiaRegSelected", coppiaRegSelected)
    }
    aggPunteggioSqReg();
  }, [coppiaRegSelected, completeClouSelected]);

  //Aggiorna lo stato punteggiAggiornati con questi nuovi punteggi.
  //Calcola le differenze di punteggio significative (>= 3) tra squadre adiacenti nella lista di nuovi punteggi.
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
      const differenza = Math.abs(nuoviPunteggi[i].punteggioAggiornato - nuoviPunteggi[i - 1].punteggioAggiornato);
      if (differenza >= 3) {
        nuoveDifferenze[i] = differenza;
      }
    }
    // console.log(nuoveDifferenze, "nuoveDifferenze");
    setDifferenzePunti(nuoveDifferenze);
  }, [coppiaRegSelected, completeClouSelected]);

  // --------------------------------------------------------------------------------------

  return (
    <>
      {isBigScreen && (
        <table className="relative overflow-auto min-h-[57rem]">
          <thead>
            <tr className="bg-black text-gray-600 text-center">
              <th className=" w-[0.5rem]" style={{ whiteSpace: "nowrap" }}>
                --
              </th>
              <th className=" w-[1rem] sm:pl-[1rem] md:pl-[0] lg:pl-[1rem] lg:pr-[1rem]">--- SQUADRA ---</th>
              <th className=" w-[1rem] sm:pl-[1rem] md:pl-[1.5rem] lg:pl-[1rem] lg:pr-[1rem] pl-[1rem]">?</th>
              <th className=" w-[1rem] sm:pl-[1rem] md:pl-[0.5rem] md:text-center lg:pl-[0] pl-[0.5rem] text-right ">PTS</th>
              {/* <th className=" w-[2%]"> </th> */}
              {/* Altre colonne commentate */}
            </tr>
          </thead>
          <tbody className="bg-black text-cyan-800">
            {squadreOrdinate.map((squadra, index) => (
              // console.log('Rendering squadra:', squadra.name);
              <tr key={index}>
                <td className={`text-center relative ${prendiColoriColonna0(index)}`}>
                  <div className="w-full h-full flex items-center justify-center ">{/* {index + 1} */}</div>
                </td>
                {/* { COLONNA SQUADRE} */}
                <td
                  className={`w-[100%] bg-black xs:pl-[0] sm:pl-[1rem] md:pl-[1.5rem] md:pr-[2rem] py-[8px] md:py-2 sm:text-lg md:text-md lg:text-lg xl:px-4 flex justify-start relative sq-column
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
                    <img src={squadra.logo} alt={`${squadra.name} Logo`} className="w-7 h-7 mr-4" />
                    <span className={getTextTeam(squadra.name)}>{getTeamName(squadra.name)}</span>
                  </div>
                </td>
                {/* { COLONNA ?} */}
                <td
                  className={`sm:pl-[1rem] md:pl-[1.5rem] lg:pl-[0.5rem] xl:pl-0 pl-[1rem] text-center font-extrabold bg-black text-cyan-500/80 md:text-md  lg:text-lg z-4	
                ${indiciDiffQ.includes(index) ? "borderAlto border-white" : ""}`}
                >
                  <div className="absolute transform -translate-x-4/3 -translate-y-7 text-left text-lg text-white mx-8 my-[-10] z-[10]">
                    {numeriIndiciBorderWhite[index]}
                  </div>
                  {getPunteggioColonnaDomanda(squadra)}
                </td>
                {/* { COLONNA PTS} */}
                <td
                  className={`sm:pl-[1.5rem] md:pl-[1rem] lg:pl-2 pl-[1rem] xl:mr-4 text-left font-bold bg-black md:text-md  lg:text-lg
              ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ` : ""}
              ${indiciDiffPts.includes(index) ? "borderAlto border-gray-600/80 " : ""}
              ${getPunteggioColonnaDomanda(squadra) !== " " ? `  text-cyan-500/80` : "text-cyan-500/80"}
              ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
              ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
              ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""} 
							`}
                >
                  <div className="innerBorder"></div>
                  <div className={`absolute transform -translate-x-4/3 -translate-y-8 text-center text-md text-gray-600/80 mx-8 my-[-10] z-30`}>
                    {!numeriIndiciBorderWhite[index] && differenzePunti[index]}
                  </div>
                  {getPunteggioColonnaPTS(squadra)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isMobile && (
        <div className="table-container w-[100vw]">
          <div className="table-column">
            <table className="relative overflow-x-hidden overflow-y-hidden md:min-h-[57rem] max-w-[46%]">
              <thead>
                <tr className="bg-black text-gray-600 text-center">
                  <th className="w-[0.2rem] sm:w-[0.5rem]" style={{ whiteSpace: "nowrap" }}>
                    --
                  </th>
                  <th className="w-[20%] sm:pl-[1rem]">----- SQUADRA</th>
                  <th className="w-[1rem] sm:pl-[1rem] pl-[0.5rem]">?</th>
                  <th className="w-[1rem] sm:pl-[1rem] pl-[0.5rem] text-center">PTS</th>
                </tr>
              </thead>
              <tbody className="bg-black text-cyan-800">
                {firstHalf.map((squadra, index) => (
                  <tr key={index}>
                    <td className={`text-center relative ${prendiColoriColonna0(index, squadreOrdinate)}`}>
                      <div className="w-full h-full flex items-center justify-center ">{/* {index + 1} */}</div>
                    </td>
                    <td
                      className={`w-[100%] bg-black xs:pl-[0] sm:pl-[1rem] md:pl-[1.5rem] md:pr-[2rem] py-[7px] md:py-2 sm:text-lg md:text-md lg:text-lg xl:px-4 flex justify-start relative sq-column
                      ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ${s.BaseText1}` : ""}
                      ${isTeamMarkedWithX(squadra.name) ? `${s.Filter4} underlineX ` : sqSelected.includes(squadra.name + "Z") ? `${s.Filter4} underlineW` : sqSelected.includes(squadra.name + "Y") ? `${s.Filter4} underlineL` : ""}
                      ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineW ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}
                      ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineL ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}
                      ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineX ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}`}
                    >
                      <div
                        className={`flex items-center bg-black
                        ${isCoppiaSelected(squadra.name) ? `${s.Bg0}` : ""}
                        ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
                        ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
                        ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
                        `}
                      >
                        <img src={squadra.logo} alt={`${squadra.name} Logo`} className="w-7 h-7 mr-4" />
                        <span className={getTextTeam(squadra.name)}>{getTeamName(squadra.name)}</span>
                      </div>
                    </td>
                    <td
                      className={`sm:pl-[1rem] md:pl-[1.5rem] lg:pl-[0.5rem] xl:pl-0 pl-[0] text-center font-extrabold bg-black text-cyan-500/80 md:text-md  lg:text-lg z-4	
                          ${indiciDiffQ.includes(index) ? "borderAlto border-white" : ""}`}
                    >
                      <div className="absolute transform -translate-x-4/3 -translate-y-7 sm:-translate-y-6 md:-translate-y-8 text-center md:text-lg text-md text-white mx-5 sm:mx-3 md:mx-0 lg:mx-2 my-[-10] z-[10]">
                        {numeriIndiciBorderWhite[index]}
                      </div>
                      {getPunteggioColonnaDomanda(squadra)}
                    </td>
                    <td
                      className={`sm:pl-[1.5rem] md:pl-[1rem] lg:pl-2 pl-[1rem] xl:mr-4 text-left font-bold bg-black md:text-md  lg:text-lg
                        ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ` : ""}
                        ${indiciDiffPts.includes(index) ? "borderAlto border-gray-600/80 " : ""}
                        ${getPunteggioColonnaDomanda(squadra) !== " " ? `  text-cyan-500/80` : "text-cyan-500/80"}
                        ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
                        ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
                        ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}`}
                    >
                      <div className="innerBorder"></div>
                      <div className={`absolute transform -translate-x-4/3 -translate-y-8 text-left text-md text-gray-600/80 mx-8 sm:my-[-10] z-30`}>
                        {!numeriIndiciBorderWhite[index] && differenzePunti[index]}
                      </div>
                      {getPunteggioColonnaPTS(squadra)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-column">
            <table className="relative overflow-x-hidden overflow-y-hidden md:min-h-[57rem] max-w-[46%] ml-[0rem]">
              <thead>
                <tr className="bg-black text-gray-600 text-center">
                  <th className="w-[1rem] sm:w-[0.5rem]" style={{ whiteSpace: "nowrap" }}>
                    --
                  </th>
                  <th className="w-[20%] sm:pl-[1rem] "> ----- SQUADRA </th>
                  <th className="w-[1rem] sm:pl-[1rem] pl-[0.5rem]">?</th>
                  <th className="w-[1rem] sm:pl-[1rem] pl-[0.5rem] text-center">PTS</th>
                </tr>
              </thead>
              <tbody className="bg-black text-cyan-800">
                {secondHalf.map((squadra, index) => (
                  <tr key={index}>
                    <td className={`text-center relative ${prendiColoriColonna0(index + half, squadreOrdinate)}`}>
                      <div className="w-full h-full flex items-center justify-center ">{/* {index + 1} */}</div>
                    </td>
                    <td
                      className={`flex w-[100%] bg-black xs:pl-[0] sm:pl-[1rem] py-[7px] sm:text-lg justify-start relative sq-column
                      ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ${s.BaseText1}` : ""}
                      ${isTeamMarkedWithX(squadra.name) ? `${s.Filter4} underlineX ` : sqSelected.includes(squadra.name + "Z") ? `${s.Filter4} underlineW` : sqSelected.includes(squadra.name + "Y") ? `${s.Filter4} underlineL` : ""}
                      ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineW ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}
                      ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineL ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}
                      ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter4} underlineX ${isCoppiaSelected(squadra.name) ? "" : s.Bg3}` : ""}`}
                    >
                      <div
                        className={`flex items-center bg-black
                        ${isCoppiaSelected(squadra.name) ? `${s.Bg0}` : ""}
                        ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
                        ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
                        ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Bg0}` : ""}
                        `}
                      >
                        <img src={squadra.logo} alt={`${squadra.name} Logo`} className="w-7 h-7 mr-4" />
                        <span className={getTextTeam(squadra.name)}>{getTeamName(squadra.name)}</span>
                      </div>
                    </td>
                    <td
                      className={`sm:pl-[1rem] md:pl-[1.5rem] lg:pl-[0.5rem] xl:pl-0 pl-[1rem] text-center font-extrabold bg-black text-cyan-500/80 md:text-md  lg:text-lg z-4	
                          ${indiciDiffQ.includes(index + half) ? "borderAlto border-white" : ""}`}
                    >
                      <div className="absolute transform -translate-x-4/3 -translate-y-7 text-left text-lg text-white mx-8 my-[-10] z-[10]">
                        {numeriIndiciBorderWhite[index + half]}
                      </div>
                      {getPunteggioColonnaDomanda(squadra)}
                    </td>
                    <td
                      className={`sm:pl-[1.5rem] md:pl-[1rem] lg:pl-2 pl-[1rem] xl:mr-4 text-left font-bold bg-black md:text-md  lg:text-lg
                        ${isCoppiaSelected(squadra.name) ? `${s.Bg2} ${s.Filter2} ` : ""}
                        ${indiciDiffPts.includes(index + half) ? "borderAlto border-gray-600/80 " : ""}
                        ${getPunteggioColonnaDomanda(squadra) !== " " ? `  text-cyan-500/80` : "text-cyan-500/80"}
                        ${isWinningTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
                        ${isLosingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}
                        ${isDrawingTeamInCoppiaRegSelected(squadra.name) ? `${s.Filter3} ${s.BaseText} ${isCoppiaSelected(squadra.name) ? `${s.BaseText}` : `${s.Bg3}`}` : ""}`}
                    >
                      <div className="innerBorder"></div>
                      <div className="absolute transform -translate-x-4/3 -translate-y-7 sm:-translate-y-6 md:-translate-y-8 text-left md:text-lg text-md text-white mx-5 sm:mx-3 md:mx-0 lg:mx-2 my-[-10] z-[10]">
                        {!numeriIndiciBorderWhite[index + half] && differenzePunti[index + half]}
                      </div>
                      {getPunteggioColonnaPTS(squadra)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default TableClass;
