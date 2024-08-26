import { useContext, useEffect, useState } from "react";
import { GiornataClouContext } from "../../../../Ap/Global/global";
import { s } from "../../../../START/styles/0CssMainStyle";
import Day from "./Day/day";
import { giorniSettimana } from "./zExternal/giorniSettimana";
import { partitePerGiornoo } from "./zExternal/partitePerGiorno";

const Partite = ({ resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  const { giornataClouSelected } = useContext(GiornataClouContext);
  const [partite, setPartite] = useState([]);

  useEffect(() => {
    console.log("Dati attuali della giornata:", giornataClouSelected);
    setPartite(Array.isArray(giornataClouSelected) ? giornataClouSelected : []);
  }, [giornataClouSelected]);

  // Inizializza un flag per la gestione del caricamento
  const isLoading = !Array.isArray(giornataClouSelected);

  const partitePerGiorno = partitePerGiornoo(partite);

  return (
    <div
      className={`relative overflow-x-hidden overflow-y-scroll hide-scrollbar flex flex-col items-left xs:text-xs sm:text-xl border border-x-0 rounded-3xl ${s.BorderPartite} sm:py-[0] md:py-[-2%] lg:py-[5%] min-w-[17rem] max-h-[26rem] sm:my-[-0.5rem]`}
    >
      {isLoading ? (
        <div>Caricamento in corso...</div>
      ) : (
        giorniSettimana.map(
          ({ giorno, title }) =>
            partitePerGiorno[giorno].length > 0  && (
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
        )
      )}
    </div>
  );
};

export default Partite;
