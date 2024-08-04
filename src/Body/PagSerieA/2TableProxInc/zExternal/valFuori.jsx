import React, { useContext } from "react";
import { ATeams, BTeams } from "../../../../START/funct/FilterTeamByCat";

import { CoppiaPartitaContext } from "../../../Glob/global";

const ValFuori = () => {
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const isATeam = (teamName) => {
    if (typeof teamName === "string") {
      return ATeams.includes(teamName.toUpperCase());
    }
    return false;
  };

  const isBTeam = (teamName) => {
    if (typeof teamName === "string") {
      return BTeams.includes(teamName.toUpperCase());
    }
    return false;
  };

  return (
    <>
      <div className="absolute text-sm mt-[140px]">
        {isATeam(coppiaSelected.team1) &&
          isATeam(coppiaSelected.team2) && ( //FORTE FORTE
            <>
              <pre>SCR TOP 🪨</pre>
              <pre>📈</pre>
            </>
          )}
        {isATeam(coppiaSelected.team1) &&
          isBTeam(coppiaSelected.team2) && ( //FORTE DEBOLE
            <>
              <pre>Pochissime %</pre>
              <pre>SeProxInc "B"+Casa: 🗜️</pre>
            </>
          )}
        {isATeam(coppiaSelected.team1) &&
          !isATeam(coppiaSelected.team2) &&
          !isBTeam(coppiaSelected.team2) && ( //FORTE MEDIA
            <>
              <pre>SCR Europa 🪨</pre>
              <pre>SeProxInc "B"+Casa: 🗜️</pre>
            </>
          )}
        {/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---*/}
        {isBTeam(coppiaSelected.team1) &&
          isBTeam(coppiaSelected.team2) && ( //DEBOLE DEBOLE
            <>
              <pre>SCR RETROCESS 🪨</pre>
              <pre>X</pre>
              <pre>📈</pre>
            </>
          )}
        {isBTeam(coppiaSelected.team1) &&
          isATeam(coppiaSelected.team2) && ( //DEBOLE FORTE
            <>
              <pre>Puo'Inaspettat Perdere</pre>
            </>
          )}
        {isBTeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team2) &&
          !isATeam(coppiaSelected.team2) && ( //DEBOLE MEDIA
            <>
              <pre>Puo' Perdere</pre>
              <pre>📈</pre>
            </>
          )}
        {/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---*/}
        {!isATeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team1) &&
          isATeam(coppiaSelected.team2) && ( //MEDIA FORTE
            <>
              <pre>Puo' perdere</pre>
              <pre>Se Prox "B"+Casa: 🛠️</pre>
              <pre>📈</pre>
            </>
          )}

        {!isATeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team1) &&
          isBTeam(coppiaSelected.team2) && ( //MEDIA DEBOLE
            <>
              <pre>SeProxInc "B"+Casa: 🗜️</pre>
              <pre>📈</pre>
            </>
          )}

        {!isATeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team1) &&
          !isATeam(coppiaSelected.team2) &&
          !isBTeam(coppiaSelected.team2) && ( //MEDIA MEDIA
            <>
              <pre>🎭</pre>
              <pre>📈</pre>
            </>
          )}
      </div>
    </>
  );
};

export default ValFuori;
