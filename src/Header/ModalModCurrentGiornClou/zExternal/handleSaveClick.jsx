export const handleSaveClickk = (partite, onSave, onClose) => {
  const giornataSalvata = {
    _id: partite[0]._id || undefined, // Mantieni l'_id se esiste
    giornata: partite.map((partita) => {
      // Tratta il "." come valore non valido
      const score1 = partita.score1.trim();
      const score2 = partita.score2.trim();
      const isScore1Valid = !isNaN(parseInt(score1)) && score1 !== "." && score1 !== "";
      const isScore2Valid = !isNaN(parseInt(score2)) && score2 !== "." && score2 !== "";

      return {
        numero: partita.numero,
        day: partita.day,
        time: partita.time,
        team1: partita.team1,
        team2: partita.team2,
        pron: partita.pron || "",
        // Se entrambi i risultati non sono numeri validi, salva una stringa vuota
        results: isScore1Valid && isScore2Valid ? `${score1}-${score2}` : "",
      };
    }),
  };

  onSave(giornataSalvata);
  onClose(); // Chiudi il modale dopo aver salvato
};
