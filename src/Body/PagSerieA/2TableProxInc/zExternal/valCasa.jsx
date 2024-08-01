import React, { useContext } from "react";
import { ATeams, BTeams } from "../../../../START/funct/FilterTeamByCat";

import { CoppiaPartitaContext } from "../../../Glob/global";

const ValCasa = () => {
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
      <div className="absolute text-sm mt-8">
        {isATeam(coppiaSelected.team1) &&
          isATeam(coppiaSelected.team2) && ( //FORTE FORTE
            <pre>SCR TOP 💪Casa</pre>
          )}
        {isATeam(coppiaSelected.team1) &&
          isBTeam(coppiaSelected.team2) && ( //FORTE DEBOLE
            <>
              <pre>DEVE VINCERE</pre>
              <pre>🫂🎉</pre>
            </>
          )}
        {isATeam(coppiaSelected.team1) &&
          !isATeam(coppiaSelected.team2) &&
          !isBTeam(coppiaSelected.team2) && ( //FORTE MEDIA
            <>
              <pre>DEVE VINCERE</pre>
              <pre>🫂🎉</pre>
              <pre>📈</pre>
            </>
          )}
        {/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---*/}
        {isBTeam(coppiaSelected.team1) &&
          isBTeam(coppiaSelected.team2) && ( //DEBOLE DEBOLE
            <>
              <pre>SCR RETROC 💪Casa</pre>
              <pre>Se Prox "A": win</pre>
              <pre>📈</pre>
            </>
          )}
        {isBTeam(coppiaSelected.team1) &&
          isATeam(coppiaSelected.team2) && ( //DEBOLE FORTE
            <>
              <pre>SeProxInc MediaDebole:🙃</pre>
              <pre>📈</pre>
            </>
          )}
        {isBTeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team2) &&
          !isATeam(coppiaSelected.team2) && ( //DEBOLE MEDIA
            <>
              <pre>🎭</pre>
              <pre>Se Prox "A": win</pre>
              <pre>Se Prox SCR: 🙃</pre>
              <pre>📈</pre>
            </>
          )}
        {/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---*/}
        {!isATeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team1) &&
          isATeam(coppiaSelected.team2) && ( //MEDIA FORTE
            <>
              <pre>Puo' Anche Perdere</pre>
              <pre>Se Prox "B": 🙃</pre>
              <pre>📈</pre>
            </>
          )}
        {!isATeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team1) &&
          isBTeam(coppiaSelected.team2) && ( //MEDIA DEBOLE
            <>
              <pre>DEVE VINCERE</pre>
              <pre>🫂🎉</pre>
            </>
          )}
        {!isATeam(coppiaSelected.team1) &&
          !isBTeam(coppiaSelected.team1) &&
          !isATeam(coppiaSelected.team2) &&
          !isBTeam(coppiaSelected.team2) && ( //MEDIA MEDIA
            <>
              <pre>🎭</pre>
              <pre>SCR Europa 💪Casa</pre>
              <pre>-Se Prox "A": win</pre>
              <pre>📈</pre>
            </>
          )}
      </div>
    </>
  );
};

export default ValCasa;
