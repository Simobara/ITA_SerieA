function calcolaAnniConsct(squadre) {
  const annoCorrente = new Date().getFullYear();
  const risultati = {};

  Object.keys(squadre).forEach((key) => {
    const squadra = squadre[key];
    if (squadra.AnniA && squadra.AnniA.Ult) {
      risultati[squadra.name] = annoCorrente - squadra.AnniA.Ult;
    } else {
      risultati[squadra.name] = 'Dato "Ult" non disponibile';
    }
  });

  return risultati;
}

document.addEventListener("DOMContentLoaded", () => {
  const anniConsct = calcolaAnniConsct(nomiSquadre);
  // console.log(anniConsct);
});
