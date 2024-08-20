// Funzione esterna per gestire l'apertura e chiusura del modal delle squadre
export const toggleModalCambioSqq = (indexSide, setPosTeam, setShowModalCambioSq) => {
    setPosTeam(indexSide === "A" ? "A" : "B");
    setShowModalCambioSq(prev => !prev);
};

// Funzione esterna per gestire l'apertura e chiusura del modal dei risultati
export const toggleModalCambioRiss = (setShowModalCambioRis) => {
    setShowModalCambioRis(prev => !prev);
};
