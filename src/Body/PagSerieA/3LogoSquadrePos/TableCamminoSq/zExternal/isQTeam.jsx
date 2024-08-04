import { ATeams, BTeams } from "../../../../../START/funct/FilterTeamByCat";

export const isATeam = (teamName) => {
  return ATeams.includes(teamName.toUpperCase());
};

export const isBTeam = (teamName) => {
  return BTeams.includes(teamName.toUpperCase());
};
