import { useContext } from "react";
import { nomiSquadre } from "../../../../START/app/1main";
import { ATeams, BTeams } from "../../../../START/funct/FilterTeamByCat";
import { s, ts } from "../../../../START/styles/0CssMainStyle";
import { CoppiaPartitaContext } from "../../../Global/global";

export const renderSquadre = () => {
  const squadreArray = Object.values(nomiSquadre);
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

  const getTextTeam = (teamName) => {
    // console.log('teamName:', teamName); // Aggiungi per vedere cosa ricevi effettivamente come input
    if (isATeam(teamName)) {
      return `${ts.ATeamText} font-extrabold ${s.ImgTextInRoundMd} `;
    } else if (isBTeam(teamName)) {
      return `${ts.BTeamText} font-light ${s.ImgTextInRoundMd} `;
    } else {
      return `${ts.ABTeamText} font-bold`;
    }
  };

  return squadreArray.map((squadra) => {
    const isCoppiaSelectedTeam = coppiaSelected && (coppiaSelected.team1 === squadra.name || coppiaSelected.team2 === squadra.name); // Verifica se la squadra corrente è team1 o team2
    const team1Info = coppiaSelected && squadreArray.find((s) => s.name === coppiaSelected.team1); // Trova le informazioni di team1 e team2 da nomiSquadre
    const team2Info = coppiaSelected && squadreArray.find((s) => s.name === coppiaSelected.team2);
    const isSamePosition = team1Info && team2Info && team1Info.style.top === team2Info.style.top && team1Info.style.left === team2Info.style.left; // Verifica se team1 e team2 hanno gli stessi valori di top e left

    if (isCoppiaSelectedTeam) {
      if (isSamePosition) {
        const sharedStyle = {
          width: "35px",
          height: "35px",
          backgroundColor: "#caee00",
          borderRadius: "50%",
          position: "absolute",
          top: `calc(${squadra.style.top} - 1%)`,
          left: `calc(${squadra.style.left} - 2%)`,
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };

        const innerCircleStyle = {
          width: "25px",
          height: "25px",
          backgroundColor: "#FF00FF",
          opacity: 0.8,
          zIndex: "-1",
          borderRadius: "50%",
        };

        return (
          <div key={squadra.name} id={squadra.name} style={sharedStyle}>
            <div style={innerCircleStyle}></div>
          </div>
        );
      } else {
        const customStyle = {
          ...squadra.style,
          width: "30px",
          height: "25px",
          zIndex: 2,
        };
        const teamColorClass = coppiaSelected.team1 === squadra.name ? `${ts.BgSquadraCasa} ${ts.SqCasaZChart}` : `${ts.BgSquadraFuori} ${ts.SqFuoriZChart}`;
        // const textStyleClass = 'text-black font-medium text-xl';
        const teamName = coppiaSelected.team1 === squadra.name ? coppiaSelected.team1 : coppiaSelected.team2;
        const teamClass = getTextTeam(teamName);

        return (
          <div key={squadra.name} id={squadra.name} className={`absolute ${teamColorClass} scale-150 rounded-full flex items-center justify-center`} style={customStyle}>
            <span className={`${teamClass} overflow-hidden`}>{teamName.slice(0, 3)}</span>
          </div>
        );
      }
    } else {
      const defaultStyle = {
        width: "11px",
        height: "11px",
        backgroundColor: "black",
        borderRadius: "50%",
        position: "absolute",
        top: squadra.style.top,
        left: squadra.style.left,
      };
      return <div key={`${squadra.name}-${squadra.style.top}-${squadra.style.left}`} style={defaultStyle}></div>;
    }
  });
};
