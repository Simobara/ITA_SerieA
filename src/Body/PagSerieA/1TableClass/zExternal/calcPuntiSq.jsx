export function calcPntSq(puntiSquadra) {
  let puntiTotali = 0;
  puntiSquadra?.forEach((partita) => {
    let risultatoCasa = partita.casa.trim();
    let risultatoFuori = partita.fuori.trim();
    let risultatoPartita = partita.risultato.trim();
    // Controlla se il risultato inizia con '8' o '9' e ignora l'aggiunta di punti se vero
    if (risultatoPartita.startsWith("8") || risultatoPartita.startsWith("9")) {
      console.log("Risultato predefinito ignorato:", risultatoPartita);
      return;
    }
    if (risultatoCasa === "+") {
      puntiTotali += 3;
    } else if (risultatoCasa === "=") {
      puntiTotali += 1;
    }
    if (risultatoFuori === "+") {
      puntiTotali += 3;
    } else if (risultatoFuori === "=") {
      puntiTotali += 1;
    }
  });

  return puntiTotali;
}
