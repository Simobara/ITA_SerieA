import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import { ENDPOINTS } from '../config/endpoints';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const Finale = ({ width = '55px', height = '24px' }) => {
    const [stage,setStage]=useState("finale")
    const [oggettoPartita, setOggettoPartita] = useState("");
    const [hoveredTeam1, setHoveredTeam1] = useState(false); 
    const [hoveredTeam2, setHoveredTeam2] = useState(false); 
    const [hoveredResult, setHoveredResult] = useState(false); 
    const [posTeam,setPosTeam]=useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);
    
    

    const boxStyle = `flex items-center justify-start bg-white text-black font-bold pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex items-center justify-center text-black bg-gray-500 w-full font-bold overflow-hidden ml-4 mr-4 mb-4`;
    
    const toggleModalCambioSq = (indexSide) => toggleModalCambioSqq (indexSide, setPosTeam, setShowModalCambioSq);
    const toggleModalCambioRis = () => toggleModalCambioRiss(setShowModalCambioRis);  
    const handleSaveTeamName=(newTeamName)=> handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita,ENDPOINTS.FINALE);
    const handleSaveTeamsRis=(newTeamsRis) => handleSaveTeamsRiss(newTeamsRis, oggettoPartita, setOggettoPartita,ENDPOINTS.FINALE);
    
    
    
    //--------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            console.log("Environment:", import.meta.env.PROD ? 'Production' : 'Development');
            // console.log("VITE_API_URL_DEV:", import.meta.env.VITE_API_URL_DEV);//http://localhost:5000
            // console.log("VITE_API_URL_PROD:", import.meta.env.VITE_API_URL_PROD);//https://ita-serie-a.vercel.app
   
            try {
                // Determina l'URL API in base all'ambiente
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PROD
                    : import.meta.env.VITE_API_URL_DEV;
                console.log("Using API URL: ", API_BASE_URL);
                const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.FINALE}`);
                const data = response.data;
            
                console.log("Resp status:", response.status);
                console.log("Resp data:", data);
            
                if (data.length > 0 && data[0]) {
                    setOggettoPartita(data[0]); // Usa i dati dall'API se disponibili e corretti
                } else {
                    setOggettoPartita(Tornei.Finale[0]); // Usa i dati locali come fallback
                }
                // Forza un errore per utilizzare i dati locali
                // throw new Error('Simulated error to skip API call');
            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartita(Tornei.Finale[0]); // Usa i dati locali come fallback in caso di errore
            }
        };
        fetchData();
        // const interval = setInterval(fetchData, 180000); // Esegue ogni 60 secondi

        // return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    }, []);
    //--------------------------------------------------------------------------------------------------------------
    const team1 = oggettoPartita?.team1 || ""; 
    const team2 = oggettoPartita?.team2 || "";
    const [team1Result, team2Result] = oggettoPartita.ris ? oggettoPartita.ris.split('-') : ['', ''];

    return (
        <>
            <div className="absolute bottom-[42.5%] flex flex-col items-center">
                <div className="flex space-x-1">
                    <div
                        className={boxStyle}
                        style={containerStyle}
                        onMouseEnter={() => setHoveredTeam1(true)} 
                        onMouseLeave={() => setHoveredTeam1(false)}
                        onClick={()=>toggleModalCambioSq("A")}
                    >
                        {team1}
                        {hoveredTeam1 && <span className="absolute left-10 scale-150" >📝</span>}
                    </div>
                    <div
                        className={boxStyle}
                        style={containerStyle}
                        onMouseEnter={() => setHoveredTeam2(true)} 
                        onMouseLeave={() => setHoveredTeam2(false)}
                        onClick={()=>toggleModalCambioSq("B")}
                    >
                        {team2}
                        {hoveredTeam2 && <span className="absolute right-0 scale-150" >📝</span>}
                    </div>
                </div>
                <div
                    className={resultBoxStyle}
                    onMouseEnter={() => setHoveredResult(true)}
                    onMouseLeave={() => setHoveredResult(false)}
                    onClick={toggleModalCambioRis}
                >
                    {team1Result} - {team2Result}
                    {hoveredResult && <span className="absolute right-0 scale-150" >📝</span>}
                </div>
                {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
                {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis}/>}
            </div>
        </>
    );
};

export default Finale;
