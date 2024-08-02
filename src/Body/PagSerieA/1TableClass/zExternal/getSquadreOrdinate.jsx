import { useMemo } from "react";

const useGetSquadreOrdinate = (sqSelected, nomiSquadre, completeClouSelected, punteggiAggiornati, getPunteggioVirtuale, getPunteggioVisualizzato) => {
  return useMemo(() => {
    return Object.values(nomiSquadre)
      .map((squadra) => ({
        ...squadra,
        punteggioVirtuale: getPunteggioVirtuale(squadra),
        punteggioVisualizzato: getPunteggioVisualizzato(squadra),
      }))
      .sort((a, b) => b.punteggioVirtuale - a.punteggioVirtuale);
  }, [nomiSquadre, sqSelected, completeClouSelected, punteggiAggiornati, getPunteggioVirtuale, getPunteggioVisualizzato]);
};

export default useGetSquadreOrdinate;
