import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Finale = ({ width = '55px', height = '24px' }) => {
    const [match, setMatch] = useState(null);

    const boxStyle = `flex items-center justify-start bg-white text-black font-bold pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex items-center justify-center text-black bg-gray-500 w-full font-bold overflow-hidden ml-4 mr-4 mb-4`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Determina l'URL API in base all'ambiente
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PRODUCTION
                    : import.meta.env.VITE_API_URL_DEVELOPMENT;


                const response = await axios.get(`${API_BASE_URL}/api/coppaItaFinale/finale`);
                const data = response.data;

				console.log("Using API URL: ", API_BASE_URL);
                console.log("DATI FINALE: ", data); // Controlla la struttura dei dati
                console.log("PRODUCTION", import.meta.env.VITE_API_URL_PRODUCTION);

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

    if (!match) {
        return <div>Loading...</div>;
    }

    const [team1Result, team2Result] = match.ris ? match.ris.split('-') : ['', ''];

    return (
        <>
            <div className="absolute bottom-[42.5%] flex flex-col items-center">
                <div className="flex space-x-1">
                    <div className={boxStyle} style={containerStyle}>{match.team1}</div>
                    <div className={boxStyle} style={containerStyle}>{match.team2}</div>
                </div>
                <div className={resultBoxStyle}>{team1Result} - {team2Result}</div>
            </div>
        </>
    );
};

export default Finale;
