import { useContext, useEffect, useState } from "react";
import { GiornataClouContext, GiornataNContext } from "../../../../Ap/Global/global";
import { calendario } from "../../../../START/app/0SerieAMatches";
import { s, ts } from "../../../../START/styles/0CssMainStyle";
import { IndexSelectedContext } from "../../../Global/global";
import "./tableCamminoSq.css";
import { getBgHoverClasss } from "./zExternal/getBgHoverClass";
import { getSignForCasaa } from "./zExternal/getSignForCasa";
import { getSignForFuorii } from "./zExternal/getSignForFuori";
import { getTextTeamm } from "./zExternal/getTextTeam";
import { isATeam, isBTeam } from "./zExternal/isQTeam";

const TableCamminoSq = ({ squadra, datiSquadra }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)" && "(min-width: 768px").matches);
  const [selectedIndexGiornata, setSelectedIndexGiornata] = useState(null);
  const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const { giornataN, setGiornataN } = useContext(GiornataNContext);

  const getTextTeam = (teamName) => getTextTeamm(teamName, isATeam, isBTeam);
  const getBgHoverClass = (partita) => getBgHoverClasss(partita);
  const getSignForCasa = (casa) => getSignForCasaa(casa);
  const getSignForFuori = (fuori) => getSignForFuorii(fuori);

  const nomeSquadra = typeof squadra === "string" ? squadra : "???";
  // ------------------------------------------------------------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //Quando la finestra viene ridimensionata, la funzione handleResize aggiorna lo stato isMobile in base alla corrispondenza del media query (max-width: 768px).

  //Aggiorna l'indice della giornata selezionata (selectedIndexGiornata) quando cambia la giornata clou selezionata (giornataClouSelected).
  useEffect(() => {
    if (giornataClouSelected) {
      let nuovoIndice = Object.keys(calendario).findIndex((key) => calendario[key] === giornataClouSelected) + 1;
      console.log("NI", nuovoIndice);
      nuovoIndice = indexSel ? indexSel : giornataN;
      if (nuovoIndice <= 19) {
        setSelectedIndexGiornata(nuovoIndice - 1);
      } else {
        setSelectedIndexGiornata(nuovoIndice);
      }
      // console.log(giornataClouSelected);
    }
  }, [giornataClouSelected]);

  // useEffect(() => {
  //   console.log("datiSquadra in TableCamminoSq:", datiSquadra);
  //   if (!datiSquadra) {
  //     console.error("datiSquadra is undefined or null for:", squadra);
  //   }
  // }, [datiSquadra]);

  // ------------------------------------------------------------------------------------------------

  return (
    <div className="mb-[0rem]">
      <h1 className={`{ text-center md:text-3xl scale-150 ${getTextTeam(nomeSquadra)}`}>{nomeSquadra}</h1>
      <table>
        <thead>
          <tr className="bg-black text-white border border-black overflow-x-hidden text-xs">
            <th className="text-center text-white !w-[4%] sm:w-[15%] xl:w-[12%] "></th>
            <th className="text-center text-cyan-700 w-[25%] sm:w-[25%] xl:w-[20%] font-bold mb-[1rem]">{/* C */}</th>
            <th className="text-center text-cyan-700 w-[25%] sm:w-[15%] xl:w-[12%] font-bold">{/* F */}</th>
            <th className="text-center text-white w-full"></th>
            <th className="text-left"></th>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-scroll scrollbar-hide overflow-x-hidden md:overflow-x-hidden h-[37.5rem]">
        <table className=" border-2 border-t-0 border-r-0 border-gray-800 filter brightness-[%] overflow-y-auto w-[100%] table-auto bg-black">
          <tbody>
            {datiSquadra.map((partita, index) => {
              const casaClass = getSignForCasa(partita.casa);
              const fuoriClass = getSignForFuori(partita.fuori);

              const risultatoPulito = partita.risultato // Dividere il risultato in due parti
                .trim()
                .replace(/\s*-\s*/, "-");
              const risultatoParts = risultatoPulito.split("-");
              const risultatoParte1 = risultatoParts[0]; // Prima parte del risultato
              const risultatoParte2 = risultatoParts[1]; // Seconda parte del risultato

              const isPronostico =
                (risultatoParte1 === "9" && risultatoParte2 === "8") ||
                (risultatoParte1 === "8" && risultatoParte2 === "9") ||
                (risultatoParte1 === "9" && risultatoParte2 === "9");

              let pronosticoText = "";
              if (risultatoParte1 === "9" && risultatoParte2 === "8") {
                pronosticoText = "Win";
              } else if (risultatoParte1 === "8" && risultatoParte2 === "9") {
                pronosticoText = "Lose";
              } else if (risultatoParte1 === "9" && risultatoParte2 === "9") {
                pronosticoText = "Draw";
              }

              let borderStyle = "";
              if (index === selectedIndexGiornata) {
                borderStyle = `${s.BorderLineNextMatch}`;
              }
              const formattedSqVs = partita.sqVs.toLowerCase();
              const sqVsFormatted = formattedSqVs.charAt(0).toUpperCase() + formattedSqVs.slice(1);

              const sqVsClass = isATeam(partita.sqVs)
                ? `font-black py-[0.02rem] sm:py-[-4] ml-[-4] ${ts.ATeamBg} ${ts.ATeamText} !border-l-0 `
                : isBTeam(partita.sqVs)
                  ? `font-light ${ts.BTeamText}`
                  : partita.sqVs === "--- --- --- --- --- ---"
                    ? "font-black text-black"
                    : `${ts.ABTeamText} font-bold `;
              const bgHoverClass = getBgHoverClass(partita);

              return (
                <tr key={index} className={`overflow-x-hidden ${bgHoverClass} ${borderStyle}`}>
                  <td className={`!w-[4%] sm:w-[11%] md:w-[20%] xl:w-[15%] text-center font-bold ${ts.ColResLine} ${ts.ColResBg} `}>
                    {isPronostico ? (
                      <div className="flex justify-center items-center">
                        <span className={`${s[`pin${pronosticoText}`]} font-black justify-center items-center scale-150`}>*</span>
                      </div>
                    ) : (
                      <>
                        <span className={`${ts.ColResHome} text-lg sm:text-xl`}>{risultatoParte1}</span>
                        {risultatoParte1 && risultatoParte2 && "-"}
                        <span className={`${ts.ColResAway} text-lg sm:text-xl`}>{risultatoParte2}</span>
                      </>
                    )}
                  </td>
                  <td className={`w-[25%] sm:w-[15%] md:w-[12%] xl:w-[15%] text-center text-lg sm:text-xl font-bold ${isPronostico ? "" : casaClass} ${ts.TextCF} `}>
                    {partita.casa}
                  </td>
                  <td className={`w-[25%] sm:w-[15%] md:w-[12%] xl:w-[15%] text-center text-lg sm:text-xl font-bold ${isPronostico ? "" : fuoriClass} ${ts.TextCF} last-text`}>
                    {partita.fuori}
                  </td>
                  <td className={`w-full sm:w-[45%] ml-[10%] text-lg sm:text-xl pl-[2%] sm:pl-[10%] ${sqVsClass} last-text`}>
                    {isMobile == true ? sqVsFormatted.slice(0, 10) : sqVsFormatted}
                  </td>
                </tr>
                //implementare se la TEXTCF in casa e' con un squadra di B allora ... sono di colore verde acceso
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCamminoSq;
