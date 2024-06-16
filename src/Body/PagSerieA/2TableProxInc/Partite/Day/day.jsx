// import { useState } from 'react';
// import Placeholder from "./Placeholder/placeholder"; //posizione per trascinare
import Partita from "./Partita/partita";

const Day = ({
  title,
  partite = [],
  resetAll,
  occhioApertoPartita,
  setOcchioApertoPartita,
}) => {
  // const [occhioApertoPartita, setOcchioApertoPartita] = useState(null);
  const hasPartite = Array.isArray(partite) && partite.length > 0;

  return (
    <>
      <div className="text-sky-900 bg-gray-900 text-sm font-bold uppercase text-start ml-[3%] mr-[3%] pl-8 w-[20%]">
        {title}
        {/* <div className="h-px bg-transparent "></div> */}
      </div>
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
