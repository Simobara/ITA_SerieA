// Importa ATeams e BTeams se non sono già importati
import { ATeams, BTeams } from "../../../../../../../START/funct/FilterTeamByCat";
import { ts } from "../../../../../../../START/styles/0CssMainStyle";

export const isATeam = (teamName) => {
  return ATeams.includes(teamName.toUpperCase());
};

export const isBTeam = (teamName) => {
  return BTeams.includes(teamName.toUpperCase());
};

export const getTextTeam = (teamName) => {
  if (isATeam(teamName)) {
    return `font-black ${ts.ATeamText} ${ts.ATeamBg}`;
  } else if (isBTeam(teamName)) {
    return `font-light ${ts.BTeamText}`;
  } else {
    return `text-medium ${ts.ABTeamText}`;
  }
};
