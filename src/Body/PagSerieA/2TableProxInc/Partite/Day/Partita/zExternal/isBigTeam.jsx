import { ATeams } from "../../../../../../../START/funct/FilterTeamByCat";

export const isBigTeamm = (teamName) => {
  const formatTeamName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const boldTeams = ATeams.map(formatTeamName);
  return boldTeams.includes(teamName);
};
