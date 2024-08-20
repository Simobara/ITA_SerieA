import axios from "axios";

export const handleSaveTeamsRiss = async (newTeamsRis, oggettoPartita, setOggettoPartita) => {
  try {
    if (!oggettoPartita) return;

    const oggettoPartitaAggiornato = { ...oggettoPartita, ris: newTeamsRis };

    const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;

    const response = await axios.post(`${API_BASE_URL}/api/coppaItaFinale/finale`, oggettoPartitaAggiornato);

    if (response.status === 200) {
      console.log("Risultato della partita salvato:", newTeamsRis);
      setOggettoPartita(response.data);
    } else {
      console.error("Errore durante l'aggiornamento del risultato:", response.status);
    }
  } catch (error) {
    console.error("Errore durante l'invio della richiesta:", error);
  }
};
