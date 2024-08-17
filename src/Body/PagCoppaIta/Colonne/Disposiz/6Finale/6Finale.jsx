import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';

const Finale = ({ width = '55px', height = '24px' }) => {
    const [match, setMatch] = useState("");

    const boxStyle = `flex items-center justify-start bg-white text-black font-bold pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex items-center justify-center text-black bg-gray-500 w-full font-bold overflow-hidden ml-4 mr-4 mb-4`;

    useEffect(() => {
        const fetchData = async () => {
            console.log("Environment:", import.meta.env.PROD ? 'Production' : 'Development');
            // console.log("VITE_API_URL_DEVELOPMENT:", import.meta.env.VITE_API_URL_DEVELOPMENT);//http://localhost:5000
            // console.log("VITE_API_URL_PRODUCTION:", import.meta.env.VITE_API_URL_PRODUCTION);//https://ita-serie-a.vercel.app
   
            try {
                // Determina l'URL API in base all'ambiente
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PRODUCTION
                    : import.meta.env.VITE_API_URL_DEVELOPMENT;
                
                // console.log("Using API URL: ", API_BASE_URL);
            
                const response = await axios.get(`${API_BASE_URL}/api/coppaItaFinale/finale`);
                const data = response.data;
            
                // console.log("Resp status:", response.status);
                // console.log("Resp data:", data);
            
                if (data.length > 0 && data[0]) {
                    setMatch(data[0]); // Usa i dati dall'API se disponibili e corretti
                } else {
                    setMatch(Tornei.Finale[0]); // Usa i dati locali come fallback
                }
                // Forza un errore per utilizzare i dati locali
                // throw new Error('Simulated error to skip API call');
            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setMatch(Tornei.Finale[0]); // Usa i dati locali come fallback in caso di errore
            }
        };
        fetchData();
    }, []);

    const team1 = match?.team1 || ""; // Se `match` è null, imposta `team1` a una stringa vuota
    const team2 = match?.team2 || ""; // Se `match` è null, imposta `team2` a una stringa vuota
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
