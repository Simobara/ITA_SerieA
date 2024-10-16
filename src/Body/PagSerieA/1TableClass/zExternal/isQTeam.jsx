import { ATeams, BTeams } from "../../../../START/funct/FilterTeamByCat";
import { ts } from "../../../../START/styles/0CssMainStyle";

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
  if (isATeam(teamName)) {
    return `font-black ${ts.ATeamBg} ${ts.ATeamText} my-[-1rem] py-[0.2rem]`;
  } else if (isBTeam(teamName)) {
    return `font-light ${ts.BTeamText}`;
  } else {
    return `text-medium ${ts.ABTeamText}`;
  }
};
