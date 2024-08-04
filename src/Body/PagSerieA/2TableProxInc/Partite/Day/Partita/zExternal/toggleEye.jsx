export const toggleEyee = (partita, occhioApertoPartita, setOcchioApertoPartita, setButtonResetIsResetting, handleCoppiaSelectTeam) => {
  if (occhioApertoPartita === partita.numero) {
    setOcchioApertoPartita(null);
  } else {
    setOcchioApertoPartita(partita.numero);
  }
  setButtonResetIsResetting(true);
  handleCoppiaSelectTeam(partita);
};
