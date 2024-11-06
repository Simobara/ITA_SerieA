export const toggleEyee = (partita, occhioApertoPartita, setOcchioApertoPartita, setButtonResetIsResetting, handleCoppiaSelectTeam, scrollToTop) => {
  if (occhioApertoPartita === partita.numero) {
    setOcchioApertoPartita(null);
  } else {
    setOcchioApertoPartita(partita.numero);
    scrollToTop();
  }
  setButtonResetIsResetting(true);
  handleCoppiaSelectTeam(partita);
};
