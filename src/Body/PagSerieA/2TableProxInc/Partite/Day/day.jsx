// import { useState } from 'react';
// import Placeholder from "./Placeholder/placeholder"; //posizione per trascinare
import Partita from "./Partita/partita";

const Day = ({ title, partite = [], resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  // const [occhioApertoPartita, setOcchioApertoPartita] = useState(null);
  const hasPartite = Array.isArray(partite) && partite.length > 0;

  return (
    <>
      <div className="text-sky-900 bg-gray-900 text-sm font-bold uppercase text-start sm:py-[0] my-[-0.8rem] sm:my-[-0.4rem] ml-[2rem] sm:ml-0 md:ml-[2rem] md:lg-[1rem] xl:ml-[2rem] pt-[0] sm:pl-[0.5rem] w-[2.5rem] sm:w-[4.5rem] sm:pt-0 mt-0 ">
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
