export function creaRisSq(calendario, nomeSquadra, number) {
  const risultatiSquadra = [];
  const totaleGiornate = 38;

  let giornataSpecialeInserita = false;
  //CONSOLE LOG IMPORTANTE
  // console.log("risultati squadra", risultatiSquadra);
  // console.log(number, "numbernumber");
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

    giornata.forEach((partita) => {
      if (partita.team1 === nomeSquadra || partita.team2 === nomeSquadra) {
        const isCasa = partita.team1 === nomeSquadra;
        let resultsTrimmed = "";
        if (partita.pron === "1" && partita?.results.trim().length == 0) {
          resultsTrimmed = "9-8"; // Se 'pron' è '1', imposta il risultato su '9-8'
        } else if (partita.pron === "2" && partita?.results.trim().length == 0) {
          resultsTrimmed = "8-9"; // Aggiunto: se 'pron' è '2', imposta il risultato su '8-9'
        } else if (partita.pron === "x" && partita?.results.trim().length == 0) {
          resultsTrimmed = "9-9"; // Aggiunto: se 'pron' è 'X', imposta il risultato su '9-9'
        } else {
          resultsTrimmed = typeof partita.results === "string" ? partita.results.trim() : "";
        }
        if (resultsTrimmed.split("-").length === 1) {
          // Se resultsTrimmed è solo un numero, trattalo come una stringa vuota
          resultsTrimmed = "";
        }
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
  return risultatiSquadra;
}
