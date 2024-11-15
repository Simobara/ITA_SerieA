export const handleSaveClickk = (partite, onSave, onClose) => {
  const giornataSalvata = {
    _id: partite[0]._id || undefined, // Mantieni l'_id se esiste
    giornata: partite.map((partita) => {
      // Converti score1 e score2 in stringhe per evitare errori di tipo
      const score1 = String(partita.score1).trim();
      const score2 = String(partita.score2).trim();

      const isScore1Valid = !isNaN(parseInt(score1)) && score1 !== ".";
      const isScore2Valid = !isNaN(parseInt(score2)) && score2 !== ".";

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
