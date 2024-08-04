export const handleCoppiaSelectTeamm = (partita, coppiaSelected, setCoppiaSelected) => {
  const selectedTeams = {
    team1: partita.team1,
    team2: partita.team2,
    numeroPartita: partita.numero,
  };

  if (coppiaSelected && coppiaSelected.team1 === selectedTeams.team1 && coppiaSelected.team2 === selectedTeams.team2) {
    setCoppiaSelected({});
  } else {
    setCoppiaSelected(selectedTeams);
  }
}
