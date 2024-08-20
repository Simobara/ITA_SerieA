import axios from "axios";

export const handleSaveTeamsNamee = async (newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint) => {
  try {
    if (!oggettoPartita) return;

    const campoTeam = posTeam === "A" ? "team1" : "team2";
    const oggettoPartitaAggiornato = { ...oggettoPartita, [campoTeam]: newTeamName };

    const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;

    const response = await axios.post(`${API_BASE_URL}${endpoint}`, oggettoPartitaAggiornato);

    if (response.status === 200) {
      console.log("Nuovo nome della squadra salvato:", newTeamName);
      setOggettoPartita(response.data);
    } else {
      console.error("Errore durante l'aggiornamento della squadra:", response.status);
    }
  } catch (error) {
    console.error("Errore durante l'invio della richiesta:", error);
  }
};