import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import { ENDPOINTS } from '../config/endpoints';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const SemifinaleA = ({ width = '80px', height = '24px' }) => {
    const [stage,setStage]=useState("semifinaleA")
    const [oggettoPartita, setOggettoPartita] = useState("");
    const [hoveredTeam1, setHoveredTeam1] = useState(false);
    const [hoveredTeam2, setHoveredTeam2] = useState(false);
    const [hoveredResult, setHoveredResult] = useState(false);
    const [posTeam, setPosTeam] = useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);

        const boxStyle = `text-black font-bold flex items-center justify-start bg-white ml-1 pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;

    const toggleModalCambioSq = (indexSide) => toggleModalCambioSqq(indexSide, setPosTeam, setShowModalCambioSq);
    const toggleModalCambioRis = () => toggleModalCambioRiss(setShowModalCambioRis);
    const handleSaveTeamName = (newTeamName) => handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita,ENDPOINTS.SEMIFINALE_A );
    const handleSaveTeamsRis = (newTeamsRis) => handleSaveTeamsRiss(newTeamsRis, oggettoPartita, setOggettoPartita, ENDPOINTS.SEMIFINALE_A );

    //--------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PROD
                    : import.meta.env.VITE_API_URL_DEV;
                const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.SEMIFINALE_A }`);
                const data = response.data;

                if (data.length > 0 && data[0]) {
                    setOggettoPartita(data[0]);
                } else {
                    setOggettoPartita(Tornei.SqASemifinali[0]);
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartita(Tornei.SqASemifinali[0]);
            }
        };
        fetchData();
    }, []);
    //--------------------------------------------------------------------------------------------------------------
    const team1 = oggettoPartita?.team1 || ""; 
    const team2 = oggettoPartita?.team2 || "";
    const [team1Result, team2Result] = oggettoPartita.ris ? oggettoPartita.ris.split('-') : ['', ''];

    return (
        <>
            <div className="absolute top-[42%] flex flex-col space-y-1">
                <div className="flex">
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => setHoveredTeam1(true)}
                        onMouseLeave={() => setHoveredTeam1(false)}
                        onClick={() => toggleModalCambioSq("A")}
                    >
                        {team1}
                        {hoveredTeam1 && <span className="absolute right-6 scale-150">📝</span>}
                    </div>
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => setHoveredResult(true)}
                        onMouseLeave={() => setHoveredResult(false)}
                        onClick={toggleModalCambioRis}
                    >
                        {team1Result}
                        {hoveredResult && <span className="absolute right-0 scale-150">📝</span>}
                    </div>
                </div>
            </div>
            <div className="absolute top-[45%] left-[calc(50%-10px)] bg-white h-[14%] w-[2px]"></div>
            <div className="absolute bottom-[38%] flex flex-col space-y-1">
                <div className="flex">
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => setHoveredTeam2(true)}
                        onMouseLeave={() => setHoveredTeam2(false)}
                        onClick={() => toggleModalCambioSq("B")}
                    >
                        {team2}
                        {hoveredTeam2 && <span className="absolute right-6 scale-150">📝</span>}
                    </div>
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => setHoveredResult(true)}
                        onMouseLeave={() => setHoveredResult(false)}
                        onClick={toggleModalCambioRis}
                    >
                        {team2Result}
                        {hoveredResult && <span className="absolute right-0 scale-150">📝</span>}
                    </div>
                </div>
            </div>

            {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
            {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis}/>}
        </>
    );
};

export default SemifinaleA;
