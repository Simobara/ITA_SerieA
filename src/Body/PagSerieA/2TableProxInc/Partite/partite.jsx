import { useState, useMemo, useEffect, useContext } from "react";
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
      mar: partite.filter((p) => p.day === "mar"),
      mer: partite.filter((p) => p.day === "mer"),
      gio: partite.filter((p) => p.day === "gio"),
      ven: partite.filter((p) => p.day === "ven"),
      sab: partite.filter((p) => p.day === "sab"),
      dom: partite.filter((p) => p.day === "dom"),
      lun: partite.filter((p) => p.day === "lun"),
    }),
    [partite]
  );

  //AGGIORNA IL COMPONENTE ALLA GIORNATA DI RIFERIMENTO CON LE PARTITE DI QUELLA GIORNATA
  useEffect(() => {
    setPartite([...giornataClouSelected]);
  }, [giornataClouSelected]);

  return (
    // <DndProvider backend={HTML5Backend}>
    <div className=" relative flex flex-col items-left overflow-x-hidden overflow-y-auto xs:text-xs sm:text-xl border border-x-0 rounded-3xl border-pink-800 py-[5%]">
      {/* <Day title="Mar" partite={partitePerGiorno.ven} day="mar" resetAll={resetAll} occhioApertoPartita={occhioApertoPartita} setOcchioApertoPartita={setOcchioApertoPartita} />
			<Day title="Mer" partite={partitePerGiorno.ven} day="mer" resetAll={resetAll} occhioApertoPartita={occhioApertoPartita} setOcchioApertoPartita={setOcchioApertoPartita} />
			<Day title="Gio" partite={partitePerGiorno.ven} day="gio" resetAll={resetAll} occhioApertoPartita={occhioApertoPartita} setOcchioApertoPartita={setOcchioApertoPartita} /> */}
      {partitePerGiorno.mar.length > 0 && (
        <Day
          title="Mar"
          partite={partitePerGiorno.mar}
          day="mar"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
      )}
      {partitePerGiorno.mer.length > 0 && (
        <Day
          title="Mer"
          partite={partitePerGiorno.mer}
          day="mer"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
      )}
      {partitePerGiorno.gio.length > 0 && (
        <Day
          title="Gio"
          partite={partitePerGiorno.gio}
          day="gio"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
      )}
      {partitePerGiorno.ven.length > 0 && (
        <Day
          title="Ven"
          partite={partitePerGiorno.ven}
          day="ven"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
      )}
      {partitePerGiorno.sab.length > 0 && (
        <Day
          title="Sab"
          partite={partitePerGiorno.sab}
          day="sab"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
      )}
      {partitePerGiorno.dom.length > 0 && (
        <Day
          title="Dom"
          partite={partitePerGiorno.dom}
          day="dom"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
      )}
      {partitePerGiorno.lun.length > 0 && (
        <Day
          title="Lun"
          partite={partitePerGiorno.lun}
          day="lun"
          resetAll={resetAll}
          occhioApertoPartita={occhioApertoPartita}
          setOcchioApertoPartita={setOcchioApertoPartita}
        />
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
