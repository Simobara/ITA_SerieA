import { ts } from "../../../../../START/styles/0CssMainStyle";

export const getTextTeamm = (teamName, isATeam, isBTeam) => {
  if (isATeam(teamName)) {
    return `font-black ${ts.ATeamText}`;
  } else if (isBTeam(teamName)) {
    return `font-thin ${ts.BTeamText}`;
  } else if (teamName !== "--- --- --- --- --- ---") {
    return `text-medium ${ts.ABTeamText} font-medium`;
  } else {
    return "text-black";
  }
};
