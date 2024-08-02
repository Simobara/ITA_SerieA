import { useCallback } from "react";

const useGetPunteggioVirtuale = (sqSelected, completeClouSelected) => {
  return useCallback(
    (squadra) => {
      let aggiuntaPunti = 0;
      return squadra.punteggio + aggiuntaPunti;
    },
    [sqSelected, completeClouSelected],
  );
};

export default useGetPunteggioVirtuale;
