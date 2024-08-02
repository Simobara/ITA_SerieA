import { useCallback } from "react";

const useGetIsCoppiaSelected = (coppiaSelected) => {
  return useCallback(
    (nomeSquadra) => {
      return coppiaSelected && (nomeSquadra === coppiaSelected.team1 || nomeSquadra === coppiaSelected.team2);
    },
    [coppiaSelected],
  );
};

export default useGetIsCoppiaSelected;
