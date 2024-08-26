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
          const isCasa = partita.team1 === nomeSquadra;
          let resultsTrimmed = partita?.results.trim() || "";

          // Verifica se i risultati contengono numeri validi
          const [score1, score2] = resultsTrimmed.split("-");
          const isScore1Valid = !isNaN(score1) && score1.trim() !== "";
          const isScore2Valid = !isNaN(score2) && score2.trim() !== "";

          if (!isScore1Valid || !isScore2Valid) {
            resultsTrimmed = ""; // Se uno dei risultati non è un numero valido, ignora il risultato
          } else if (partita.pron === "1" && resultsTrimmed.length === 0) {
            resultsTrimmed = "9-8"; // Se 'pron' è '1' e nessun risultato è presente, imposta su '9-8'
          } else if (partita.pron === "2" && resultsTrimmed.length === 0) {
            resultsTrimmed = "8-9"; // Se 'pron' è '2' e nessun risultato è presente, imposta su '8-9'
          } else if (partita.pron.toLowerCase() === "x" && resultsTrimmed.length === 0) {
            resultsTrimmed = "9-9"; // Se 'pron' è 'X' e nessun risultato è presente, imposta su '9-9'
          }

          // Se il risultato è ancora vuoto, considera la partita come senza risultato
          if (resultsTrimmed === "") {
            risultatiSquadra.push({
              risultato: "",
              casa: isCasa ? "..." : "",
              fuori: isCasa ? "" : "...",
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
