//QUESTO FILE E' CORR. Finale.jsx

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Finale = ({ width = '55px', height = '24px' }) => {
    const [match, setMatch] = useState("");

    const boxStyle = `flex items-center justify-start bg-white text-black font-bold pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex items-center justify-center text-black bg-gray-500 w-full font-bold overflow-hidden ml-4 mr-4 mb-4`;

    useEffect(() => {
        const fetchData = async () => {
            console.log("Environment:", import.meta.env.PROD ? 'Production' : 'Development');
            console.log("VITE_API_URL_PRODUCTION:", import.meta.env.VITE_API_URL_PRODUCTION);
            console.log("VITE_API_URL_DEVELOPMENT:", import.meta.env.VITE_API_URL_DEVELOPMENT);
   
            try {
                // Determina l'URL API in base all'ambiente
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PRODUCTION
                    : import.meta.env.VITE_API_URL_DEVELOPMENT;
                
                console.log("Using API URL: ", API_BASE_URL);
   
                const response = await axios.get(`${API_BASE_URL}/api/coppaItaFinale/finale`);
                const data = response.data;
   
                console.log("DATI FINALE: ", data); // Controlla la struttura dei dati
   
                if (data.length > 0 && data[0]) {
                    setMatch(data[0]); // Accedi correttamente al primo match dell'array "Finale"
                } else {
                    console.error('La struttura dei dati non è quella prevista');
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
            }
        };
        fetchData();
    }, []);

    const team1 = match?.team1 || "";// Se `match` è null, imposta `team1` a una stringa vuota
    const team2 = match?.team2 || "";// Se `match` è null, imposta `team2` a una stringa vuota
    const [team1Result, team2Result] = match.ris ? match.ris.split('-') : ['', ''];

    return (
        <>
            <div className="absolute bottom-[42.5%] flex flex-col items-center">
                <div className="flex space-x-1">
                    <div className={boxStyle} style={containerStyle}>{team1}</div>
                    <div className={boxStyle} style={containerStyle}>{team2}</div>
                </div>
                <div className={resultBoxStyle}>{team1Result} - {team2Result}</div>
            </div>
        </>
    );
};

export default Finale;
