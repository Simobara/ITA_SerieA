/**
 * Aggiunge punti alla squadra specificata all'interno dell'array di squadre.
 *
 * @param {string} nomeSquadra - Il nome della squadra a cui aggiungere i punti.
 * @param {number} punti - I punti da aggiungere.
 * @param {Array} arrayNomiSquadre - L'array delle squadre disponibili.
 */
const aggiungiPunti = (nomeSquadra, punti, arrayNomiSquadre) => {
  const squadra = arrayNomiSquadre.find((s) => s.name === nomeSquadra);
  if (squadra) {
    squadra.punteggio += punti;
  }
};

export default aggiungiPunti;
