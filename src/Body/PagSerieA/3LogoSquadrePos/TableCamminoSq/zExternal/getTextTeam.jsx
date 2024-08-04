export const getTextTeamm = (teamName, isATeam, isBTeam) => {
  if (isATeam(teamName)) {
    return "font-black text-black";
  } else if (isBTeam(teamName)) {
    return "font-thin text-gray-400/80";
  } else if (teamName !== "--- --- --- --- --- ---") {
    return "text-medium text-sky-700 font-medium";
  } else {
    return "text-black";
  }
};
