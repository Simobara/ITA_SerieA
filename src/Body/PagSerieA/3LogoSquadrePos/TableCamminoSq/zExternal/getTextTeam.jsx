import { ts } from "../../../../../START/styles/0CssMainStyle";

export const getTextTeamm = (teamName, isATeam, isBTeam) => {
  if (isATeam(teamName)) {
    return `${ts.ATeamText} font-black `;
  } else if (isBTeam(teamName)) {
    return `${ts.BTeamText} font-thin `;
  } else if (teamName !== "--- --- --- --- --- ---") {
    return `${ts.ABTeamText} text-medium font-medium`;
  } else {
    return "text-black";
  }
};
