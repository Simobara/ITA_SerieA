// utils/aggPunteggioSqReg.js

const aggPunteggioSqRegg = (coppiaRegSelected, aggiungiPunti) => {
  if (coppiaRegSelected) {
    coppiaRegSelected.forEach((match) => {
      const scores = match.risultato.split("-").map(Number);
      const scoreTeam1 = scores[0];
      const scoreTeam2 = scores[1];
      let winningTeam;
      if (scoreTeam1 > scoreTeam2) {
        winningTeam = match.team1;
      } else if (scoreTeam2 > scoreTeam1) {
        winningTeam = match.team2;
      }
      if (winningTeam) {
        aggiungiPunti(winningTeam, 0);
      }
    });
  }
};

export default aggPunteggioSqRegg;
