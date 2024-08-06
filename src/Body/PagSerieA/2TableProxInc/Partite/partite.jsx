import { useContext, useEffect, useState } from "react";
import { s } from "../../../../START/styles/0CssMainStyle";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { initialPartite } from "../../../../START/START";
import { GiornataClouContext } from "../../../Global/global";
import Day from "./Day/day";
import { giorniSettimana } from "./zExternal/giorniSettimana";
import { partitePerGiornoo } from "./zExternal/partitePerGiorno";

const Partite = ({ resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  const { giornataClouSelected } = useContext(GiornataClouContext);
  const [partite, setPartite] = useState([...giornataClouSelected]);
  const partitePerGiorno = partitePerGiornoo(partite);

  useEffect(() => {
    setPartite([...giornataClouSelected]);
  }, [giornataClouSelected]);

  return (
    // <DndProvider backend={HTML5Backend}>
    <div
      className={`relative overflow-x-hidden overflow-y-scroll hide-scrollbar flex flex-col items-left xs:text-xs sm:text-xl border border-x-0 rounded-3xl ${s.BorderPartite} sm:py-[0] md:py-[-2%] lg:py-[5%] min-w-[17rem] max-h-[26rem] my-[1rem] sm:my-[-0.5rem]`}
    >
      {giorniSettimana.map(
        ({ giorno, title }) =>
          partitePerGiorno[giorno].length > 0 && (
            <Day
              key={giorno}
              title={title}
              partite={partitePerGiorno[giorno]}
              day={giorno}
              resetAll={resetAll}
              occhioApertoPartita={occhioApertoPartita}
              setOcchioApertoPartita={setOcchioApertoPartita}
            />
          ),
      )}
      {/* <div style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button className="p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        style={{ transform: 'rotate(180deg)' }}
                        onClick={() => setResetAll([])}>
                        🧲
                        </button>
                    </div> */}
    </div>
    // </DndProvider>
  );
};

export default Partite;
