import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import { ENDPOINTS } from '../config/endpoints';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const QuartoA = ({ width = '70px', height = '24px' }) => {
    const [stage, setStage] = useState("");  
    const [oggettoPartitaA1, setOggettoPartitaA1] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaA2, setOggettoPartitaA2] = useState({ team1: '', team2: '', ris: '' });
    const [hoveredTeams, setHoveredTeams] = useState({});
    const [hoveredResults, setHoveredResults] = useState({});
    const [posTeam, setPosTeam] = useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);

    const boxStyle = `text-black font-bold flex items-center justify-start bg-white ml-4 pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;

    const toggleModalCambioSq = (indexSide, stage) => {
        setStage(stage);
        toggleModalCambioSqq(indexSide, setPosTeam, setShowModalCambioSq);
    };

    const toggleModalCambioRis = (stage) => {
        setStage(stage);
        toggleModalCambioRiss(setShowModalCambioRis);
    };

    const handleSaveTeamName = (newTeamName) => {
        console.log("handleSaveTeamName chiamato con:", newTeamName);

        const oggettoPartita = stage === 'quartoA1' ? oggettoPartitaA1 : oggettoPartitaA2;
        console.log("oggettoPartita prima dell'aggiornamento:", oggettoPartita);
        const setOggettoPartita = stage === 'quartoA1' ? setOggettoPartitaA1 : setOggettoPartitaA2;
        const endpoint = stage === 'quartoA1' ? ENDPOINTS.QUARTO_A1 : ENDPOINTS.QUARTO_A2;
        console.log("posTeam:", posTeam);
        handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint);
    };

    const handleSaveTeamsRis = (newTeamsRis) => {
        const oggettoPartita = stage === 'quartoA1' ? oggettoPartitaA1 : oggettoPartitaA2;
        const setOggettoPartita = stage === 'quartoA1' ? setOggettoPartitaA1 : setOggettoPartitaA2;
        const endpoint = stage === 'quartoA1' ? ENDPOINTS.QUARTO_A1 : ENDPOINTS.QUARTO_A2;

        handleSaveTeamsRiss(newTeamsRis, oggettoPartita, setOggettoPartita, endpoint);
    };

    const handleMouseEnterTeam = (teamKey) => {
        setHoveredTeams(prevState => ({ ...prevState, [teamKey]: true }));
    };

    const handleMouseLeaveTeam = (teamKey) => {
        setHoveredTeams(prevState => ({ ...prevState, [teamKey]: false }));
    };

    const handleMouseEnterResult = (resultKey) => {
        setHoveredResults(prevState => ({ ...prevState, [resultKey]: true }));
    };

    const handleMouseLeaveResult = (resultKey) => {
        setHoveredResults(prevState => ({ ...prevState, [resultKey]: false }));
    };

    //--------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PROD
                    : import.meta.env.VITE_API_URL_DEV;

                const responseA1 = await axios.get(`${API_BASE_URL}${ENDPOINTS.QUARTO_A1}`);
                const responseA2 = await axios.get(`${API_BASE_URL}${ENDPOINTS.QUARTO_A2}`);

                if (responseA1.data && responseA1.data.length > 0) {
                    
                    setOggettoPartitaA1(responseA1.data[0]);
                } else {
                    setOggettoPartitaA1(Tornei.SqAQuarti[0]);
                }

                if (responseA2.data && responseA2.data.length > 0) {
                    setOggettoPartitaA2(responseA2.data[0]);
                } else {
                    setOggettoPartitaA2(Tornei.SqAQuarti[1]);
                }

            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartitaA1(Tornei.SqAQuarti[0]);
                setOggettoPartitaA2(Tornei.SqAQuarti[1]);
            }
        };
        fetchData();
    }, []);
    //--------------------------------------------------------------------------------------------------------------

    const createMatch = (match, index, positionStyle, stageKey) => {
        const [team1Result, team2Result] = match.ris ? match.ris.split('-') : ['', ''];
        const team1Key = `team1-${stageKey}-${index}`;
        const team2Key = `team2-${stageKey}-${index}`;
        const resultKey = `result-${stageKey}-${index}`;

        return (
            <div key={match.id || `${stageKey}-${index}`} className="absolute flex flex-col space-y-1" style={positionStyle}>
                <div className="flex">
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => handleMouseEnterTeam(team1Key)}
                        onMouseLeave={() => handleMouseLeaveTeam(team1Key)}
                        onClick={() => toggleModalCambioSq("A", stageKey)}
                    >
                        {match.team1}
                        {hoveredTeams[team1Key] && <span className="absolute right-6 scale-150">📝</span>}
                    </div>
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => handleMouseEnterResult(resultKey)}
                        onMouseLeave={() => handleMouseLeaveResult(resultKey)}
                        onClick={() => toggleModalCambioRis(stageKey)}
                    >
                        {team1Result}
                        {hoveredResults[resultKey] && <span className="absolute right-0 scale-150">📝</span>}
                    </div>
                </div>
                <div className="flex">
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => handleMouseEnterTeam(team2Key)}
                        onMouseLeave={() => handleMouseLeaveTeam(team2Key)}
                        onClick={() => toggleModalCambioSq("B", stageKey)}
                    >
                        {match.team2}
                        {hoveredTeams[team2Key] && <span className="absolute right-6 scale-150">📝</span>}
                    </div>
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => handleMouseEnterResult(resultKey)}
                        onMouseLeave={() => handleMouseLeaveResult(resultKey)}
                        onClick={() => toggleModalCambioRis(stageKey)}
                    >
                        {team2Result}
                        {hoveredResults[resultKey] && <span className="absolute right-0 scale-150">📝</span>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {createMatch(oggettoPartitaA1, 0, { top: '20%', left: '3%' }, "quartoA1")}
            {createMatch(oggettoPartitaA2, 1, { top: '70%', left: '3%' }, "quartoA2")}

            {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
            {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis}/>} 
        </>
    );
};

export default QuartoA;
