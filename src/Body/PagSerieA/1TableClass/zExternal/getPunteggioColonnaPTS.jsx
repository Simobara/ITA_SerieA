import { useCallback } from "react";

/**
 * Hook per calcolare il punteggio finale di una squadra tenendo conto delle penalità per pareggi e sconfitte.
 * @param {Object} completeClouSelected - Array contenente i risultati delle giornate selezionate.
 * @param {Function} isTeamInCoppiaRegSelected - Funzione che verifica se una squadra è nella coppia selezionata.
 * @param {number} indexSel - Indice della giornata selezionata.
 * @param {number} giornataN - Numero della giornata.
 * @returns {Function} - Funzione callback per calcolare il punteggio.
 */
const useGetPunteggioColonnaPTS = (completeClouSelected, isTeamInCoppiaRegSelected, indexSel, giornataN) => {
  return useCallback(
    (squadra) => {
      let punteggioFinale = squadra.punteggio;
      if (isTeamInCoppiaRegSelected(squadra.name)) {
        completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`].forEach((match) => {
          const [team1, team2] = match.results.split("-").map(Number);
          if (team1 === team2) {
            if (match.team1 === squadra.name || match.team2 === squadra.name) {
              punteggioFinale -= 1;
            }
          } else {
            if ((match.team1 === squadra.name && team1 > team2) || (match.team2 === squadra.name && team2 > team1)) {
              punteggioFinale -= 3;
            }
          }
        });
      }
      return punteggioFinale;
    },
    [completeClouSelected, isTeamInCoppiaRegSelected, indexSel, giornataN],
  );
};

export default useGetPunteggioColonnaPTS;
