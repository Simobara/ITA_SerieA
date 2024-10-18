import axios from "axios";
import { calendario25 } from "./0aCalendarioCurrent";

//! -------------------------------------------------------------------------------------- -------------------------------------------
export const currentYear = 2025;
export const calendario = JSON.parse(JSON.stringify(calendario25));
export const calendario1 = JSON.parse(JSON.stringify(calendario25));
export const giornataNum = 1; //!NON TOCCARE QUESTO VALORE
// Recupera i dati della giornata clou dal server

export const getDefultDay = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/default-day/get-deafault-giornata`);
    return response.data.data;
  } catch (error) {
    console.error("Error resetting the database:", error);
  }
};
export const getAllMatchesList = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/calendar/get-all-matches`);
    return response.data.data;
  } catch (error) {
    console.error("Error resetting the database:", error);
  }
};
export const fetchGiornataClou = async (giornataNum) => {
  try {
    const apiUrl = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;
    const response = await axios.get(`${apiUrl}/api/giornata/${giornataNum}`);
    console.log(`Dati recuperati per giornata ${giornataNum}:`, response.data);
    return response.data; // Restituisce direttamente l'array delle partite
  } catch (error) {
    console.error(`Errore durante il recupero dei dati per la giornata ${giornataNum}:`, error);
    return [];
  }
};

// Condizione per verificare se giornataNum è 38
//! -------------------------------------------------------------------------------------- -------------------------------------------
const allMatches = getAllMatchesList();
export const giornataClou = allMatches[giornataNum]?.matches || [];
