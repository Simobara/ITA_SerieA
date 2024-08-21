import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const BSemifinali = ({ width = '80px', height = '24px' }) => {
    const [stage,setStage]=useState("semifinaleB")
    const [oggettoPartita, setOggettoPartita] = useState("");
    const [hoveredTeam1, setHoveredTeam1] = useState(false);
    const [hoveredTeam2, setHoveredTeam2] = useState(false);
    const [hoveredResult, setHoveredResult] = useState(false);
    const [posTeam, setPosTeam] = useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);

    const ENDPOINTS = {
        semifinalB: '/api/coppaItaSemifinaleB/semifinaleB'
    };

    const boxStyle = `flex items-center justify-start mr-1 bg-white text-black font-bold pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center mr-0.5 text-black font-bold bg-gray-500 overflow-hidden`;

    const toggleModalCambioSq = (indexSide) => toggleModalCambioSqq(indexSide, setPosTeam, setShowModalCambioSq);
    const toggleModalCambioRis = () => toggleModalCambioRiss(setShowModalCambioRis);
    const handleSaveTeamName = (newTeamName) => handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, ENDPOINTS.semifinalB);
    const handleSaveTeamsRis = (newTeamsRis) => handleSaveTeamsRiss(newTeamsRis, oggettoPartita, setOggettoPartita, ENDPOINTS.semifinalB);

    //--------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PROD
                    : import.meta.env.VITE_API_URL_DEV;
                const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.semifinalB}`);
                const data = response.data;

                if (data.length > 0 && data[0]) {
                    setOggettoPartita(data[0]);
                } else {
                    setOggettoPartita(Tornei.SqBSemifinali[0]);
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartita(Tornei.SqBSemifinali[0]);
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
                        className={resultBoxStyle}
                        onMouseEnter={() => setHoveredResult(true)}
                        onMouseLeave={() => setHoveredResult(false)}
                        onClick={toggleModalCambioRis}
                    >
                        {team1Result}
                        {hoveredResult && <span className="absolute left-1 scale-150">📝</span>}
                    </div>
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => setHoveredTeam1(true)}
                        onMouseLeave={() => setHoveredTeam1(false)}
                        onClick={() => toggleModalCambioSq("A")}
                    >
                        {team1}
                        {hoveredTeam1 && <span className="absolute right-0 scale-150">📝</span>}
                    </div>
                </div>
            </div>
            <div className="absolute top-[45%] right-[calc(50%-10px)] bg-white h-[14%] w-[2px]"></div>
            <div className="absolute bottom-[38%] flex flex-col space-y-1">
                <div className="flex">
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => setHoveredResult(true)}
                        onMouseLeave={() => setHoveredResult(false)}
                        onClick={toggleModalCambioRis}
                    >
                        {team2Result}
                        {hoveredResult && <span className="absolute left-1 scale-150">📝</span>}
                    </div>
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => setHoveredTeam2(true)}
                        onMouseLeave={() => setHoveredTeam2(false)}
                        onClick={() => toggleModalCambioSq("B")}
                    >
                        {team2}
                        {hoveredTeam2 && <span className="absolute right-0 scale-150">📝</span>}
                    </div>
                </div>
            </div>

            {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
            {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis}/>}
        </>
    );
};

export default BSemifinali;
