import { useContext, useEffect, useRef, useState } from "react";
import { nomiSquadre, SqEndGruppo1, SqEndGruppo2 } from "../../../START/app/1main";
import { ts } from "../../../START/styles/0CssMainStyle";
import { CoppiaPartitaContext, ScrollContext, TestingContext } from "../../Global/global";
import { creaRisSq } from "../1TableClass/zExternal/creaRisSq";
import TableCamminoSq from "./TableCamminoSq/tableCamminoSq";
import { renderLineaa } from "./zExternal/renderLinea";

const LogoSquadrePos = () => {
  const [squadraAttiva1, setSquadraAttiva1] = useState("");
  const [squadraAttiva2, setSquadraAttiva2] = useState("");
  const { testingClouSelected, setTestingClouSelected } = useContext(TestingContext);
  const { coppiaSelected } = useContext(CoppiaPartitaContext);

  const { setTopRef } = useContext(ScrollContext); // Recupera la funzione per impostare il riferimento
  const topRef = useRef(null); // Crea il riferimento locale per "TOP"

  //logoRefs: Un oggetto che viene utilizzato per creare riferimenti a ciascun logo delle squadre, permettendo operazioni dirette su questi elementi (come i click).
  const logoRefs = useRef({});
  // refContainer: Un riferimento al contenitore principale delle squadre, utilizzato per eventuali manipolazioni o accessi diretti a questo elemento DOM.
  const refContainer = useRef(null);
  const arraySquadre = Object.values(nomiSquadre); //mette nomi Squadre dentro un array

  const datiSquadre = Object.keys(nomiSquadre).reduce((acc, key) => {
    const squadra = nomiSquadre[key];
    acc[squadra.name] = creaRisSq(testingClouSelected, squadra.name);
    return acc;
  }, {});
  console.log("datiSquadre:", datiSquadre); // Aggiungi questo log

  const handleLogoClick = (squadra) => {
    const url = `https://sport.virgilio.it/prossime-partite-calendario-${squadra.name.toLowerCase()}/`;
    window.open(url, "_blank");
  };
  const renderLinea = (start, end) => renderLineaa(start, end, arraySquadre, squadraAttiva1, squadraAttiva2, handleLogoClick, logoRefs);
  // ------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   console.log("SQATTIVA 1", squadraAttiva1);
  //   console.log("SQATTIVA 2", squadraAttiva2);
  // }, [squadraAttiva1, squadraAttiva2]);

  // useEffect(() => {
  //   if (setTopRef) {
  //     setTopRef(topRef.current);
  //     console.log("topRef impostato:", topRef.current); // Debug
  //   }
  // }, [setTopRef]);

  useEffect(() => {
    if (coppiaSelected && coppiaSelected.team1 && coppiaSelected.team2) {
      console.log("coppiaSelected valid:", coppiaSelected);
      setSquadraAttiva1(coppiaSelected.team1);
      setSquadraAttiva2(coppiaSelected.team2);
    } else {
      // console.warn("coppiaSelected is missing team1 or team2", coppiaSelected);
      setSquadraAttiva1("");
      setSquadraAttiva2("");
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
          <div className={`${ts.BgSquadraFuori} text-black w-[50%] max-w-[50%] overflow-x-hidden overflow-y-auto z-1`}>
            <div
              ref={topRef}
              className="absolute top-[15rem] ml-[42%] z-[50] py-[20px] sm:hidden" // sm:hidden nasconde l'elemento su schermi >= 640px
              onClick={() => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <img
                src="/0frecciaTop.png"
                alt="Scroll to Top"
                className="w-11 h-11 cursor-pointer" // Classe per dimensionare e aggiungere un puntatore a mano
              />
            </div>
            <TableCamminoSq squadra={squadraAttiva2} datiSquadra={datiSquadre[squadraAttiva2]} />
          </div>
        )}
      </div>
    </>
  );
};

export default LogoSquadrePos;
