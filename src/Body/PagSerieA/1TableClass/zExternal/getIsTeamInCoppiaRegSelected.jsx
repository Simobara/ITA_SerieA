import { useCallback } from "react";

/**
 * Hook per verificare se una squadra è inclusa nella coppia registrata per la giornata selezionata.
 * @param {Object} completeClouSelected - Array contenente i risultati delle giornate selezionate.
 * @param {number} indexSel - Indice della giornata selezionata.
 * @param {number} giornataN - Numero della giornata.
 * @returns {Function} - Funzione callback per verificare se una squadra è nella coppia registrata.
 */
const useGetIsTeamInCoppiaRegSelected = (completeClouSelected, indexSel, giornataN) => {
  return useCallback(
    (teamName) => {
      return completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.find((match) => match.team1 === teamName || match.team2 === teamName);
    },
    [completeClouSelected, indexSel, giornataN],
  );
};

export default useGetIsTeamInCoppiaRegSelected;
