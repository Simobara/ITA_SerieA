// getPunteggioColonnaDomanda.js

const getPunteggioColonnaDomandaa = (squadra, completeClouSelected, indexSel, giornataN) => {
    const isPartOfSelectedMatch = completeClouSelected[`giornata${indexSel ? indexSel : giornataN}`]?.find(
      (match) => match.team1 === squadra.name || match.team2 === squadra.name
    );
    return isPartOfSelectedMatch?.results !== undefined && isPartOfSelectedMatch && isPartOfSelectedMatch?.results.length
      ? squadra.punteggio
      : "";
  };
  
  export default getPunteggioColonnaDomandaa;
  