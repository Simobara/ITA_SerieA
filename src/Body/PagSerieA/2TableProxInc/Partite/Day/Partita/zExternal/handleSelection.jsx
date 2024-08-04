export const handleSelectionn = (
  selectedTeam,
  selectionType,
  numeroPartita = "",
  partita,
  setButtonResetIsResetting,
  setSelection,
  setIsButtonClickable,
  setSqSelected,
  setCompleteClouSelected,
  completeClouSelected,
  indexSel,
  giornataN,
  isKQBtnActive,
) => {
  if (numeroPartita !== 0 && numeroPartita === partita.numero) {
    setButtonResetIsResetting(true);
    setSelection(selectionType);
    setIsButtonClickable(true);
    setSqSelected((currentSelected) => {
      if (!Array.isArray(currentSelected)) {
        console.error("Expected an array, but got:", currentSelected);
        return [];
      }
      let updatedSelection = currentSelected.filter((squadra) => squadra !== partita.team1 && squadra !== partita.team2);
      if (selectionType === "1") {
        updatedSelection.push(selectedTeam === partita.team1 ? partita.team1 : partita.team2);
      } else if (selectionType === "2") {
        updatedSelection.push(selectedTeam === partita.team1 ? partita.team2 : partita.team1);
      } else if (selectionType === "X") {
        updatedSelection.push(partita.team1, partita.team2);
      }
      return updatedSelection;
    });
  } else if (numeroPartita === "") {
    setButtonResetIsResetting(true);
    if (!isKQBtnActive) {
      setSelection(selectionType);
      if (selectionType === "1" || selectionType === "X" || selectionType === "2") {
        setIsButtonClickable(true);
      }
      setSqSelected((currentSelected) => {
        if (!Array.isArray(currentSelected)) {
          console.error("Expected an array, but got:", currentSelected);
          return [];
        }
        let updatedSelection = currentSelected;
        const nonSelectedTeam = selectedTeam === partita.team1 ? partita.team2 : partita.team1;
        updatedSelection = updatedSelection.filter(
          (squadra) =>
            squadra !== partita.team1 &&
            squadra !== partita.team1 + "X" &&
            squadra !== partita.team1 + "Y" &&
            squadra !== partita.team1 + "Z" &&
            squadra !== partita.team2 &&
            squadra !== partita.team2 + "X" &&
            squadra !== partita.team2 + "Y" &&
            squadra !== partita.team2 + "Z",
        );
        if (selectionType === "X") {
          updatedSelection = [...updatedSelection, partita.team1 + "X", partita.team2 + "X"];
        } else {
          updatedSelection = [...updatedSelection, selectedTeam + "Z", nonSelectedTeam + "Y"];
        }
        return updatedSelection;
      });
    }
    const result = completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.map((data) => {
      if (data.team1 === selectedTeam && selectionType === "X") {
        data.results = "1-1";
        data.rank = "1 - 1";
        return data;
      }
      if (data.team1 === selectedTeam) {
        data.results = "1-0";
        data.rank = "1 - 1";
        return data;
      } else if (data.team2 === selectedTeam) {
        data.results = "0-1";
        data.rank = "1 - 1";
        return data;
      }
      return data;
    });
    setCompleteClouSelected({
      ...completeClouSelected,
      [`giornata${indexSel ? indexSel : giornataN}`]: result,
    });
  }
};
