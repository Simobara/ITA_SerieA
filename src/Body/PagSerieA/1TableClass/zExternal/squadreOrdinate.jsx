import { useMemo } from "react";

const useSquadreOrdinatee = (sqSelected, nomiSquadre, completeClouSelected, punteggiAggiornati, getPunteggioVirtuale, getPunteggioVisualizzato) => {
  return useMemo(() => {
    console.log(nomiSquadre, "nomiSquadre");
    return Object.values(nomiSquadre)
      .map((squadra) => ({
        ...squadra,
        punteggioVirtuale: getPunteggioVirtuale(squadra),
        punteggioVisualizzato: getPunteggioVisualizzato(squadra),
      }))
      .sort((a, b) => b.punteggioVirtuale - a.punteggioVirtuale);
  }, [nomiSquadre, sqSelected, completeClouSelected, punteggiAggiornati, getPunteggioVirtuale, getPunteggioVisualizzato]);
};

export default useSquadreOrdinatee;
