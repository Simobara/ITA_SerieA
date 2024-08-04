import { useContext, useEffect, useRef, useState } from "react";
import { calendario1 } from "../../../START/app/0SerieAMatches";
import { nomiSquadre, SqEndGruppo1, SqEndGruppo2 } from "../../../START/app/1main";
import { ts } from "../../../START/styles/0CssMainStyle";
import { CoppiaPartitaContext } from "../../Glob/global";
import { creaRisSq } from "../1TableClass/zExternal/creaRisSq";
import TableCamminoSq from "./TableCamminoSq/tableCamminoSq";
import { renderLineaa } from "./zExternal/renderLinea";

const LogoSquadrePos = () => {
  const [squadraAttiva1, setSquadraAttiva1] = useState("");
  const [squadraAttiva2, setSquadraAttiva2] = useState("");
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const logoRefs = useRef({});
  const refContainer = useRef(null);
  const arraySquadre = Object.values(nomiSquadre); //mette nomi Squadre dentro un array
  const datiSquadre = Object.keys(nomiSquadre).reduce((acc, key) => {
    const squadra = nomiSquadre[key];
    acc[squadra.name] = creaRisSq(calendario1, squadra.name);
    return acc;
  }, {});

  const handleLogoClick = (squadra) => {
    const url = `https://sport.virgilio.it/prossime-partite-calendario1-${squadra.name.toLowerCase()}/`;
    window.open(url, "_blank");
  };
  const renderLinea = (start, end) => renderLineaa(start, end, arraySquadre, squadraAttiva1, squadraAttiva2, handleLogoClick, logoRefs);
  // ------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   console.log("SQATTIVA 1", squadraAttiva1);
  //   console.log("SQATTIVA 2", squadraAttiva2);
  // }, [squadraAttiva1, squadraAttiva2]);

  useEffect(() => {
    if (coppiaSelected) {
      setSquadraAttiva1(coppiaSelected.team1);
      setSquadraAttiva2(coppiaSelected.team2);
    }
  }, [coppiaSelected]);
  // ------------------------------------------------------------------------------------------------
  return (
    <>
      <div className=" bg-black text-white hidden sm:hidden md:hidden lg:block">
        <div className="mt-[0rem] mb-[2rem] overflow-hidden z-2 ">
          <div className="w-[40rem] mx-auto items-center h-1 bg-gray-600/80 text-gray-900 ">
            <div className="pl-1 border-2 border-sky-800/70 w-5 bg-gray-800 text-sky-700/70 sm:text-md font-extrabold uppercase">{/* 1 */}</div>
          </div>
          {/* Aggiunta di max-h-[3rem] e overflow-y-auto */}
          <div className="max-h-[3.3rem] sm:max-h-[5rem] xl:max-h-[5rem] overflow-y-hidden">{renderLinea(0, SqEndGruppo1)}</div>
        </div>
        <div className="mt-[-2rem] mb-[1.8rem] overflow-hidden z-3 sticky ">
          <div className="w-[40rem] mx-auto items-center h-1 bg-gray-600/80 text-gray-900">
            {/* <div className="pl-1 border-2 border-sky-800/80 w-5 bg-gray-800 text-sky-700/70 sm:text-md font-extrabold uppercase"> */}
            {/* 2 */}
            {/* </div> */}
          </div>
          {/* Aggiunta di max-h-[3rem] e overflow-y-auto */}
          <div className="max-h-[3.3rem] sm:max-h-[5rem] xl:max-h-[5rem] overflow-y-hidden">{renderLinea(SqEndGruppo1, SqEndGruppo2)}</div>
        </div>
        <div className="mt-[-2rem] mb-[0rem] z-4 sticky">
          <div className="w-[40rem] mx-auto items-center h-1 bg-gray-600/80 text-gray-900">
            <div className="pl-1 border-2 border-sky-800/80 w-5 bg-gray-800 text-sky-700/70 sm:text-md font-extrabold uppercase">{/* 3 */}</div>
          </div>
          {/* Aggiunta di max-h-[3rem] e overflow-y-auto */}
          <div className=" max-h-[3.3rem] sm:max-h-[5rem] xl:max-h-[5rem] overflow-y-hidden">{renderLinea(SqEndGruppo2, arraySquadre.length)}</div>
        </div>
      </div>
      <div ref={refContainer} className="flex sticky mt-[1rem] mb-[0.5rem]">
        {squadraAttiva1 && (
          <div className={`${ts.BgSquadraCasa} text-black  w-[50%] max-w-[50%] overflow-x-hidden overflow-y-auto z-1`}>
            <TableCamminoSq squadra={squadraAttiva1} datiSquadra={datiSquadre[squadraAttiva1]} />
          </div>
        )}
        {squadraAttiva2 && (
          <div className={`${ts.BgSquadraFuori} text-black  w-[50%] max-w-[50%] overflow-x-hidden overflow-y-auto z-1`}>
            <TableCamminoSq squadra={squadraAttiva2} datiSquadra={datiSquadre[squadraAttiva2]} />
          </div>
        )}
      </div>
    </>
  );
};

export default LogoSquadrePos;
