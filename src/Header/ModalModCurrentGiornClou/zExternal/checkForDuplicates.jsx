export const checkForDuplicatess = (updatedPartite, setDuplicateTeams) => {
    const teams = new Set();
    const duplicates = new Set();
  
    for (const partita of updatedPartite) {
      if (partita.team1) {
        if (teams.has(partita.team1)) {
          duplicates.add(partita.team1);
        }
        teams.add(partita.team1);
      }
      if (partita.team2) {
        if (teams.has(partita.team2)) {
          duplicates.add(partita.team2);
        }
        teams.add(partita.team2);
      }
    }
  
    setDuplicateTeams(duplicates);
  };
  