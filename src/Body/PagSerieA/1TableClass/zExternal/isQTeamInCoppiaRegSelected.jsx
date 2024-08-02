export const isWinningTeamInCoppiaRegSelectedd = (teamName, completeClouSelected, indexSel, giornataN) => {
  return completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.some((match) => {
    const [team1, team2] = match.results.split("-").map(Number);
    return (match.team1 === teamName && team1 > team2) || (match.team2 === teamName && team2 > team1);
  });
};

export const isLosingTeamInCoppiaRegSelectedd = (teamName, completeClouSelected, indexSel, giornataN) => {
  return completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.some((match) => {
    const [team1, team2] = match.results.split("-").map(Number);
    return (match.team1 === teamName && team1 < team2) || (match.team2 === teamName && team2 < team1);
  });
};

export const isDrawingTeamInCoppiaRegSelectedd = (teamName, completeClouSelected, indexSel, giornataN) => {
  return completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.some((match) => {
    const [team1, team2] = match.results.split("-").map(Number);
    return (match.team1 === teamName || match.team2 === teamName) && team1 === team2;
  });
};
