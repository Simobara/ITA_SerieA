import { ATeams, BTeams } from "../../../../START/funct/FilterTeamByCat";
import { s, ts } from "../../../../START/styles/0CssMainStyle";

export const isATeam = (teamName) => {
  if (typeof teamName === "string") {
    return ATeams.includes(teamName.toUpperCase());
  }
  return false;
};

export const isBTeam = (teamName) => {
  if (typeof teamName === "string") {
    return BTeams.includes(teamName.toUpperCase());
  }
  return false;
};

export const getTextTeam = (teamName) => {
  // console.log('teamName:', teamName); // Aggiungi per vedere cosa ricevi effettivamente come input
  if (isATeam(teamName)) {
    return `${ts.ATeamText} font-extrabold ${s.ImgTextInRoundMd} `;
  } else if (isBTeam(teamName)) {
    return ` ${ts.BTeamText} font-light ${s.ImgTextInRoundMd} `;
  } else {
    return `${ts.ABTeamText} font-bold`;
  }
};
