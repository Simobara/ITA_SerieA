import { useContext, useEffect, useState } from "react";
import { calendario, giornataN } from "../../../../START/app/0SerieAMatches";
import { ATeams, BTeams } from "../../../../START/otheers/functions/functions";
import { ts } from "../../../../START/otheers/styles/0CssMainStyle";
import { IndexSelectedContext } from "../../../Glob/global";
import { GiornataClouContext } from "../../../Glob/global/";
import "./tableCamminoSq.css";

const TableCamminoSq = ({ squadra, datiSquadra }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );
  const [selectedIndexGiornata, setSelectedIndexGiornata] = useState(null);
  const { giornataClouSelected, setGiornataClouSelected } =
    useContext(GiornataClouContext);
  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const nomeSquadra = typeof squadra === "string" ? squadra : "DefinireSq";

  const isATeam = (teamName) => {
    return ATeams.includes(teamName.toUpperCase());
  };

  const isBTeam = (teamName) => {
    return BTeams.includes(teamName.toUpperCase());
  };

  const getTextTeam = (teamName) => {
    if (isATeam(teamName)) {
      return "font-black text-black";
    } else if (isBTeam(teamName)) {
      return "font-thin text-gray-400/80";
    } else if (teamName !== "--- --- --- --- --- ---") {
      return "text-medium text-cyan-500/80 font-medium";
    } else {
      return "text-black";
    }
  };

  // const getTextColor = (partita) => {
  //   const conditions = ["+", "-", "=", "..."];
  //   if (conditions.includes(partita.casa) || conditions.includes(partita.fuori)) {
  //     return "text-white"; // white text when row is fuchsia
  //   }
  //   return "text-black"; // default text color
  // };

  const getBgHoverClass = (partita) => {
    if (partita.sqVs === "--- --- --- --- --- ---") {
      return "hover:no.hover";
    }
    const conditions = ["+", "-", "=", "..."];
    if (conditions.includes(partita.casa)) {
      return `hover:bg-green-950`;
    } else if (conditions.includes(partita.fuori)) {
      return `hover:bg-red-950`;
    }
    return " ";
  };

  const getClassForCasa = (casa) => {
    switch (casa) {
      case "+":
        return `${ts.WinBg} ${ts.WinText}`;
      case "=":
        return `${ts.DrawBg} ${ts.DrawText}`;
      case "-":
        return `${ts.LoseBg} ${ts.LoseText}`;
      default:
        return `${ts.Bg9}`;
    }
  };
  const getClassForFuori = (fuori) => {
    if (fuori === "...") {
      return `bg-black ${ts.TextCF}`;
    }
    if (fuori === " ") {
      return " ";
    }
    switch (fuori) {
      case "+":
        return `${ts.WinBg} ${ts.WinText}`;
      case "=":
        return `${ts.DrawBg} ${ts.DrawText}`;
      case "-":
        return `${ts.LoseBg} ${ts.LoseText}`;
      default:
        return `${ts.Bg0}`;
    }
  };

  // ------------------------------------------------------------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (giornataClouSelected) {
      let nuovoIndice =
        Object.keys(calendario).findIndex(
          (key) => calendario[key] === giornataClouSelected
        ) + 1;
      console.log("NI", nuovoIndice);
      nuovoIndice = indexSel ? indexSel : giornataN;
      if (nuovoIndice <= 19) {
        setSelectedIndexGiornata(nuovoIndice - 1);
      } else {
        setSelectedIndexGiornata(nuovoIndice);
      }
      // console.log(giornataClouSelected);
    }
  }, [giornataClouSelected]); // la dipendenza è necessaria per ricaricare l'effetto quando giornataClouSelected cambia
  // ------------------------------------------------------------------------------------------------

  return (
    <div className="">
      <h1
        className={`{ text-center md:text-3xl scale-150 ${getTextTeam(nomeSquadra)}`}
      >
        {nomeSquadra}
      </h1>
      <table>
        <thead>
          <tr className="bg-black text-white border border-black overflow-x-hidden text-md">
            <th className="text-center text-white w-[12%] sm:w-[15%] xl:w-[12%] "></th>
            <th className="text-center text-cyan-700 w-[18%] sm:w-[25%] xl:w-[20%] font-bold">
              C
            </th>
            <th className="text-center text-cyan-700 w-[12%] sm:w-[15%] xl:w-[12%] font-bold">
              F
            </th>
            <th className="text-center text-white w-full "></th>
            <th className="text-left"></th>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-scroll scrollbar-hide overflow-x-hidden md:overflow-x-hidden h-[37.5rem]">
        <table className=" border-2 border-t-0 border-r-0 border-gray-800 filter brightness-[75%] overflow-y-auto w-[120%] table-auto bg-black">
          <tbody>
            {/* eslint-disable-next-line */}
            {datiSquadra.map((partita, index) => {
              const casaClass = getClassForCasa(partita.casa);
              const fuoriClass = getClassForFuori(partita.fuori);

              // Dividere il risultato in due parti
              const risultatoPulito = partita.risultato
                .trim()
                .replace(/\s*-\s*/, "-");
              const risultatoParts = risultatoPulito.split("-");
              const risultatoParte1 = risultatoParts[0]; // Prima parte del risultato
              const risultatoParte2 = risultatoParts[1]; // Seconda parte del risultato

              // Condizione per non visualizzare il risultato se è 9-8, 8-9, o 9-9
              const isPronostico =
                (risultatoParte1 === "9" && risultatoParte2 === "8") ||
                (risultatoParte1 === "8" && risultatoParte2 === "9") ||
                (risultatoParte1 === "9" && risultatoParte2 === "9");

              let borderStyle = "";
              if (index === selectedIndexGiornata) {
                borderStyle = "border-b-4 border-fuchsia-900";
              }

              // Converti il nome della squadra: prima lettera maiuscola, resto minuscolo
              const formattedSqVs = partita.sqVs.toLowerCase();
              const sqVsFormatted =
                formattedSqVs.charAt(0).toUpperCase() + formattedSqVs.slice(1);

              const sqVsClass = isATeam(partita.sqVs)
                ? `font-black py-[-4] ml-[-4] ${ts.ATeamBg} ${ts.ATeamText} !border-l-0 `
                : isBTeam(partita.sqVs)
                  ? `font-light ${ts.BTeamText}`
                  : partita.sqVs === "--- --- --- --- --- ---"
                    ? "font-black text-black" // Imposta il testo nero per questa condizione specifica
                    : `${ts.ABTeamText} font-bold `;
              const bgHoverClass = getBgHoverClass(partita);
              // const textColorClass = getTextColor(partita);
              return (
                <tr
                  key={index}
                  className={`overflow-x-hidden xs:text-lg sm:text-md ${bgHoverClass} last-text ${borderStyle}`}
                >
                  <td
                    className={`w-[5%] sm:w-[15%] xl:w-[5%] text-center font-bold ${ts.ColResLine} ${ts.ColResBg} text-xl`}
                  >
                    {isPronostico ? (
                      <div className="flex justify-center items-center">
                        <span className="text-yellow-400 text-xl font-black justify-center items-center ">
                          *
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className={`${ts.ColResHome} text-xl`}>
                          {risultatoParte1}
                        </span>
                        {risultatoParte1 && risultatoParte2 && "-"}
                        <span className={`${ts.ColResAway} text-xl`}>
                          {risultatoParte2}
                        </span>
                      </>
                    )}
                  </td>
                  <td
                    className={`w-[17%] sm:w-[15%] xl:w-[10%] text-center xs:text-xl sm:text-base font-bold ${casaClass} ${ts.TextCF}`}
                  >
                    {partita.casa}
                  </td>
                  <td
                    className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xl sm:text-base font-bold ${fuoriClass} ${ts.TextCF}`}
                  >
                    {partita.fuori}
                  </td>
                  <td className={`sm:w-[50%] pl-4 text-xl ${sqVsClass} `}>
                    {isMobile == true
                      ? sqVsFormatted.slice(0, 3)
                     : sqVsFormatted}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCamminoSq;
