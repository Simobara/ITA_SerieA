import { useContext, useEffect, useMemo, useState } from "react";
import { s } from "../../../../START/styles/0CssMainStyle";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { initialPartite } from "../../../../START/START";
import { GiornataClouContext } from "../../../Glob/global";
import Day from "./Day/day";

const Partite = ({ resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  const { giornataClouSelected } = useContext(GiornataClouContext);
  const [partite, setPartite] = useState([...giornataClouSelected]);

  // const reassignNumbers = (updatedPartite) => {
  //     return updatedPartite.map((partita, index) => ({ ...partita, numero: index + 1 }));
  // };

  // const movePartita = (fromDay, toDay, fromNumero, toNumero) => {
  //     let updatedPartite = [...partite];
  //     const fromIndex = updatedPartite.findIndex((p) => p.numero === fromNumero && p.day === fromDay);
  //     const toIndex = toNumero ? updatedPartite.findIndex((p) => p.numero === toNumero && p.day === toDay) : -1;
  //     if (fromDay === toDay && toIndex !== -1) {
  //         [updatedPartite[fromIndex], updatedPartite[toIndex]] = [updatedPartite[toIndex], updatedPartite[fromIndex]];
  //     } else {
  //         updatedPartite[fromIndex].day = toDay;
  //     }
  //     setPartite(reassignNumbers(updatedPartite));
  // };

  const partitePerGiorno = useMemo(
    () => ({
      ven: partite.filter((p) => p.day === "ven"),
      sab: partite.filter((p) => p.day === "sab"),
      dom: partite.filter((p) => p.day === "dom"),
      lun: partite.filter((p) => p.day === "lun"),
      mar: partite.filter((p) => p.day === "mar"),
      mer: partite.filter((p) => p.day === "mer"),
      gio: partite.filter((p) => p.day === "gio"),
    }),
    [partite],
  );

  //AGGIORNA IL COMPONENTE ALLA GIORNATA DI RIFERIMENTO CON LE PARTITE DI QUELLA GIORNATA
  useEffect(() => {
    setPartite([...giornataClouSelected]);
  }, [giornataClouSelected]);

  const giorniSettimana = [
    { giorno: "mar", title: "Mar" },
    { giorno: "mer", title: "Mer" },
    { giorno: "gio", title: "Gio" },
    { giorno: "ven", title: "Ven" },
    { giorno: "sab", title: "Sab" },
    { giorno: "dom", title: "Dom" },
    { giorno: "lun", title: "Lun" },
  ];

  return (
    // <DndProvider backend={HTML5Backend}>
    <div className={`relative overflow-x-hidden overflow-y-scroll hide-scrollbar flex flex-col items-left xs:text-xs sm:text-xl border border-x-0 rounded-3xl ${s.BorderPartite} py-[5%] min-w-[17rem] max-h-[26rem]`}>
      {giorniSettimana.map(({ giorno, title }) => partitePerGiorno[giorno].length > 0 && <Day key={giorno} title={title} partite={partitePerGiorno[giorno]} day={giorno} resetAll={resetAll} occhioApertoPartita={occhioApertoPartita} setOcchioApertoPartita={setOcchioApertoPartita} />)}
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
