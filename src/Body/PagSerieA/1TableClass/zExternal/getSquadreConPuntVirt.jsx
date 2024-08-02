import { useMemo } from "react";

const useGetSquadreConPunteggioVirtuale = (sqSelected,ArrayNomiSquadre,getPunteggioVirtuale) => {
  return useMemo(() => {
    return ArrayNomiSquadre.map((squadra) => ({
      ...squadra,
      punteggioVirtuale: getPunteggioVirtuale(squadra),
    }));
  }, [ArrayNomiSquadre, sqSelected, getPunteggioVirtuale]);
};

export default useGetSquadreConPunteggioVirtuale;
