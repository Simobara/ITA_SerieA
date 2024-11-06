export const toggleEyee = (partita, occhioApertoPartita, setOcchioApertoPartita, setButtonResetIsResetting, handleCoppiaSelectTeam, scrollToBottom) => {
  if (occhioApertoPartita === partita.numero) {
    setOcchioApertoPartita(null);
  } else {
    setOcchioApertoPartita(partita.numero);
    scrollToBottom();
  }
  setButtonResetIsResetting(true);
  handleCoppiaSelectTeam(partita);
};
