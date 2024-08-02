import { useCallback } from "react";

const useGetPunteggioVisualizzato = (sqSelected, getPunteggioVirtuale) => {
  return useCallback(
    (squadra) => {
      if (sqSelected.includes(squadra.name + "Z") || sqSelected.includes(squadra.name + "X")) {
        return getPunteggioVirtuale(squadra);
      } else if (sqSelected.includes(squadra.name + "Y")) {
        return squadra.punteggio;
      }
      return "";
    },
    [sqSelected, getPunteggioVirtuale],
  );
};

export default useGetPunteggioVisualizzato;
