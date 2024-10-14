import { ATeams, BTeams } from "../../../../START/funct/FilterTeamByCat";

// Funzioni per verificare se una squadra è in Serie A o B
const isATeam = (teamName) => {
  if (typeof teamName === "string") {
    return ATeams.includes(teamName.toUpperCase());
  }
  return false;
};

const isBTeam = (teamName) => {
  if (typeof teamName === "string") {
    return BTeams.includes(teamName.toUpperCase());
  }
  return false;
};

export function creaRisSq(calendario, nomeSquadra, number) {
  const risultatiSquadra = [];
  const totaleGiornate = 38;

  let giornataSpecialeInserita = false;
  let value = number ? number : totaleGiornate;

  for (let i = 1; i <= value; i++) {
    const giornata = calendario[`giornata${i}`];

    if (i === 20 && !giornataSpecialeInserita) {
      risultatiSquadra.push({
        risultato: "",
        casa: "",
        fuori: "",
        sqVs: "/",
      });
      giornataSpecialeInserita = true;
    }

    if (Array.isArray(giornata)) {
      giornata.forEach((partita) => {
        if (partita.team1 === nomeSquadra || partita.team2 === nomeSquadra) {
          const isCasa = partita.team1 === nomeSquadra; // Verifica se la squadra gioca in casa
          let resultsTrimmed = partita?.results.trim() || "";

          // Verifica se i risultati contengono numeri validi
          const [score1, score2] = resultsTrimmed.split("-");
          const isScore1Valid = !isNaN(parseInt(score1)) && score1.trim() !== "-" && score1.trim() !== "";
          const isScore2Valid = !isNaN(parseInt(score2)) && score2.trim() !== "-" && score2.trim() !== "";

          if (!isScore1Valid || !isScore2Valid) {
            resultsTrimmed = ""; // Se uno dei risultati non è un numero valido, ignora il risultato
          }

          // Logica per squadre di Serie A contro Serie B
          if (resultsTrimmed === "" && isCasa) {
            const avversario = partita.team2;
            const isATeamCurrent = isATeam(nomeSquadra);
            const isBTeamOpponent = isBTeam(avversario);

            if (isATeamCurrent && isBTeamOpponent && partita.pron.trim() === "") {
              resultsTrimmed = "9-8";
              partita.pron = "1Ab"; // Aggiorna anche il pronostico come vittoria per la squadra A
            }
          }

          // Nuova logica per squadre di Serie B che giocano in casa contro un'altra squadra di Serie B
          if (resultsTrimmed === "" && isCasa) {
            const avversario = partita.team2;
            const isBTeamCurrent = isBTeam(nomeSquadra);
            const isBTeamOpponent = isBTeam(avversario);

            if (isBTeamCurrent && isBTeamOpponent && partita.pron.trim() === "") {
              resultsTrimmed = "9-8";
              partita.pron = "1bb"; // Aggiorna anche il pronostico come vittoria per la squadra B
            }
          }

          // Gestione del pronostico esistente
          if (resultsTrimmed.length === 0) {
            if (partita.pron === "1") {
              resultsTrimmed = "9-8"; // Pronostico di vittoria
            } else if (partita.pron === "2") {
              resultsTrimmed = "8-9"; // Pronostico di sconfitta
            } else if (partita.pron.toLowerCase() === "x") {
              resultsTrimmed = "9-9"; // Pronostico di pareggio
            }
          }

          // Se il risultato è ancora vuoto, considera la partita come senza risultato
          if (resultsTrimmed === "") {
            risultatiSquadra.push({
              risultato: "",
              casa: isCasa ? "." : "",
              fuori: isCasa ? "" : ".",
              sqVs: isCasa ? partita.team2 : partita.team1,
            });
          } else {
            const risultatoSplit = resultsTrimmed.split("-");
            const golSquadra = isCasa ? risultatoSplit[0] : risultatoSplit[1];
            const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

            let segno;
            if (golSquadra > golAvversari) segno = "+";
            else if (golSquadra < golAvversari) segno = "-";
            else segno = "=";

            const risultatoInvertito = isCasa ? resultsTrimmed : risultatoSplit.reverse().join("-");

            risultatiSquadra.push({
              risultato: risultatoInvertito,
              casa: isCasa ? segno : "",
              fuori: isCasa ? "" : segno,
              sqVs: isCasa ? partita.team2 : partita.team1,
            });
          }
        }
      });
    }
  }
  return risultatiSquadra;
}
