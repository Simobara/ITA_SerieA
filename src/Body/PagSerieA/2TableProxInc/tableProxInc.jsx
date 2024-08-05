import { useContext, useEffect, useState } from "react";
import { GiornataNContext } from "../../../Ap/Global/global";
import { calendario1 } from "../../../START/app/0SerieAMatches";
// import { nomiSquadre } from "../../../START/app/1main";
import { ts } from "../../../START/styles/0CssMainStyle";
import serieAItalia from "../../../assts/ChartSerieAItalia/serieAItalia.png";
import { ButtonResetContext, CompleteDataContext, CoppiaPartitaContext, GiornataClouContext, IndexSelectedContext } from "../../Global/global";
import CalGiorn from "./CalGiorn/calGiorn";
import Partite from "./Partite/partite";
import "./tableProxInc.css";
import { getTextTeam } from "./zExternal/isQTeam";
import { renderSquadre } from "./zExternal/renderSquadre";
import ValCasa from "./zExternal/valCasa";
import ValFuori from "./zExternal/valFuori";

// import { squadreConfig } from '../../../START/components/2NomiSquadre/nomiSquadre';
// import { calendario } from "../../../START/Matches/matches"
// import { giornataClou } from "../../../START/Matches/matches";
// import { GiornataClouContext } from "../../Global/global";
// import { PartiteDefinNoModContext } from "../../Global/global";
// import ModalInserimento from "./ModalInserimento/modalInser";
// import Calendario from "./Calendario/calendario";

const TableProxInc = () => {
  const [resetAll, setResetAll] = useState([]);
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);
  const { completeClouSelected, setCompleteClouSelected } = useContext(CompleteDataContext);
  const { indexSel, setIndexSel } = useContext(IndexSelectedContext);
  const { giornataN, setGiornataN } = useContext(GiornataNContext);

  const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  const [squadreAttive, setSquadreAttive] = useState({ team1: "", team2: "" });
  const [occhioApertoPartita, setOcchioApertoPartita] = useState(null);
  // const [isModalInserOpen, setIsModalInserOpen] = useState(false);
  // const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  // const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleReset = () => {
    setCompleteClouSelected(JSON.parse(JSON.stringify(calendario1)));
    setResetAll([]);
    setGiornataClouSelected(JSON.parse(JSON.stringify(calendario1))[`giornata${giornataN}`]);
    setIndexSel(giornataN);
    setTimeout(() => {
      setButtonResetIsResetting(false);
    }, 300);
  };
  // --------------------------------------------------------------------------------------
  useEffect(() => {
    if (!buttonResetIsResetting) {
      setButtonResetIsResetting(false);
    }
  }, []);

  useEffect(() => {
    handleReset();
  }, [giornataN]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // --------------------------------------------------------------------------------------
  return (
    <>
      <div className="relative">
        {!isMobile && (
          <div className="unselectable flex justify-center h-[26.8rem] overflow-x-hidden hide-scrollbar ">
            <div className="relative h-[42rem] w-[100rem] ml-[-2rem] mr-[0rem]">
              <img src={serieAItalia} alt="serieAItalia" className="unselectable relative h-[110%] w-[100%] mt-[-4rem] filter brightness-35" />
              {coppiaSelected && renderSquadre()}
              {buttonResetIsResetting && (
                <button className="absolute top-[18%] left-[45%] p-1 font-bold bg-transparent rounded-full hover:bg-red-900 z-10" onClick={() => handleReset()}>
                  📍
                  {/* 👁️ */}
                </button>
              )}

              <div
                className="absolute top-[-1%] left-[58.5%] w-[310px] h-[223px] bg-black flex flex-col items-start justify-start text-white text-lg border border-gray-700 border-3 px-1 overflow-hidden z-10"
                style={{ borderRadius: "5%" }}
              >
                <div className="flex-1 flex items-start">
                  <span className={`${getTextTeam(coppiaSelected.team1)} ${ts.BgSquadraCasa} !z-20`}>{coppiaSelected.team1}</span>
                </div>
                {occhioApertoPartita && <ValCasa />}
                <div className="flex-1 flex items-start mt-1 ">
                  <span className={`${getTextTeam(coppiaSelected.team2)} ${ts.BgSquadraFuori} !z-10`}>{coppiaSelected.team2}</span>
                </div>
                {occhioApertoPartita && <ValFuori />}
              </div>
              {/* <div className="absolute top-[26%] left-[49.5%]">1 -📊 </div>
            <div className="absolute top-[30.2%] left-[51%]">3 -📋 </div> */}
            </div>
          </div>
        )}
        {/* <button className="mt-2 mr-4 p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
              // style={{ transform: 'rotate(180deg)' }}
              onClick={() => setIsModalInserOpen(true)}
            > 📝 </button> */}
        <div className="sticky flex flex-col overflow-x-hidden overflow-y-auto bg-black z-[4] min-h-[30rem]">
          <CalGiorn onReset={resetAll} />
          <Partite resetAll={resetAll} occhioApertoPartita={occhioApertoPartita} setOcchioApertoPartita={setOcchioApertoPartita} />
        </div>
        {/* </div> */}
      </div>
      {/* <ModalInserimento isOpen={isModalInserOpen} isClose={() => setIsModalInserOpen(false)} /> */}
    </>
  );
};

export default TableProxInc;
