const toggleSymbol = (partita, isPartitaModificabile, setButtonResetIsResetting, setIsKQBtnActive, setIsSignOk) => {
    if (partita.results && partita.rank) {
      setButtonResetIsResetting(true);
      setIsKQBtnActive((prev) => !prev);
      setIsSignOk((prev) => !prev);
    }
    if (!isPartitaModificabile || partita.results) return;
    setButtonResetIsResetting(true);
    setIsKQBtnActive((prev) => !prev);
    setIsSignOk((prev) => !prev);
  };
  
  export default toggleSymbol;
  