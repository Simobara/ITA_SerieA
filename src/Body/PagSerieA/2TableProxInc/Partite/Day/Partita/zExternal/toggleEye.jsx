export const toggleEyee = (partita, occhioApertoPartita, setOcchioApertoPartita, setButtonResetIsResetting, handleCoppiaSelectTeam, scrollToBottom) => {
  if (occhioApertoPartita === partita.numero) {
    setOcchioApertoPartita(null);
  } else {
    setOcchioApertoPartita(partita.numero);
    setTimeout(scrollToBottom, 0); // Ritarda lo scroll
  }
  setButtonResetIsResetting(true);
  handleCoppiaSelectTeam(partita);
};
