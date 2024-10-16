// import { useState } from 'react';
// import Placeholder from "./Placeholder/placeholder"; //posizione per trascinare
import Partita from "./Partita/partita";

const Day = ({ titleDayy, partite = [], resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  // const [occhioApertoPartita, setOcchioApertoPartita] = useState(null);
  const hasPartite = Array.isArray(partite) && partite.length > 0;

  // Funzione per calcolare la classe dinamica
  const getClassNames = (titleDayy) => {
    const dayLower = titleDayy.toLowerCase();
    let bgColor = "bg-gray-900"; // Default background
    if (dayLower === "sab") {
      bgColor = "bg-green-900/80";
    } else if (dayLower === "dom") {
      bgColor = "bg-red-900/80";
    }

    // Restituisco la stringa con tutte le classi
    {
      /*VEN SAB DOM  */
    }
    return `${bgColor} text-white text-sm font-bold text-start sm:py-[0] ml-[0.5rem] my-[-1.4rem] sm:my-[-0.4rem] sm:ml-0 md:ml-[2rem] md:lg-[1rem] xl:ml-[2rem] pt-[0] sm:pl-[0.5rem] w-[2.5rem] sm:w-[4.5rem] sm:pt-0 mt-0`;
  };

  return (
    <>
      <div className={getClassNames(titleDayy)}>{titleDayy}</div>

      {/* <div className="h-px bg-transparent "></div> */}
      {hasPartite &&
        partite.map((partita) => (
          <Partita
            key={partita.numero}
            partita={partita}
            // movePartita={movePartita}
            resetAll={resetAll}
            // coppiaSquadre={coppiaSquadre}
            occhioApertoPartita={occhioApertoPartita}
            setOcchioApertoPartita={setOcchioApertoPartita}
          />
        ))}
      {/* {!hasPartite &&
        <Placeholder day={day} movePartita={movePartita} />} */}
    </>
  );
};

export default Day;
