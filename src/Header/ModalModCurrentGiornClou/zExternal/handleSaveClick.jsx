export const handleSaveClickk = (partite, onSave, onClose) => {
  const giornataSalvata = partite.map((partita) => ({
    numero: partita.numero,
    day: partita.day,
    time: partita.time,
    team1: partita.team1,
    team2: partita.team2,
    pron: partita.pron || "",
    results: (partita.score1 !== "-" ? partita.score1 : "") + "-" + (partita.score2 !== "-" ? partita.score2 : ""),
  }));

  onSave(giornataSalvata);
  onClose(); // Chiudi il modale dopo aver salvato
};
