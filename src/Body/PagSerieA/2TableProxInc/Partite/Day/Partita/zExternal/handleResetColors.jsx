const handleResetColorss = (t1, t2, partita, selection, setSelection, setButtonResetIsResetting, setIsKQBtnActive, setIsSignOk, setIsButtonClickable, occhioApertoPartita, setOcchioApertoPartita, handleCoppiaSelectTeam, sqSelected, setSqSelected, completeClouSelected, setCompleteClouSelected, indexSel, giornataN) => {
    // if (partita.results) return;
    setSelection("");
    setButtonResetIsResetting(true);
    setIsKQBtnActive(!setIsKQBtnActive);
    setIsSignOk(!setIsKQBtnActive);
    setIsButtonClickable(false);
  
    if (occhioApertoPartita === partita.numero) {
      setOcchioApertoPartita(null);
      handleCoppiaSelectTeam(partita);
    }
  
    if (sqSelected.length === 0) {
      setSqSelected([]);
    } else {
      setSqSelected((currentSelected) => {
        if (currentSelected) {
          return currentSelected.filter(
            (squadra) =>
              // Rimuovi entrambe le squadre e le loro varianti con 'X', 'Y', e 'Z' se presenti
              squadra !== partita.team1 &&
              squadra !== partita.team1 + "X" &&
              squadra !== partita.team1 + "Y" &&
              squadra !== partita.team1 + "Z" &&
              squadra !== partita.team2 &&
              squadra !== partita.team2 + "X" &&
              squadra !== partita.team2 + "Y" &&
              squadra !== partita.team2 + "Z"
          );
        }
        return [];
      });
    }
  
    const result = completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.map((data) => {
      if (data.team1 === t1 && data.team2 === t2 && data.rank) {
        data.results = "";
        data.rank = "1 - 1";
        return data;
      }
      return data;
    });
  
    setCompleteClouSelected({
      ...completeClouSelected,
      [`giornata${indexSel ? indexSel : giornataN}`]: result,
    });
  };
  
  export default handleResetColorss;
  