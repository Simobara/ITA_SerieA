import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const BQuarti = ({ width = '70px', height = '24px' }) => {
    const [stage, setStage] = useState("");  
    const [oggettoPartitaB1, setOggettoPartitaB1] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaB2, setOggettoPartitaB2] = useState({ team1: '', team2: '', ris: '' });
    const [hoveredTeams, setHoveredTeams] = useState({});
    const [hoveredResults, setHoveredResults] = useState({});
    const [posTeam, setPosTeam] = useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);

    const ENDPOINTS = {
        quartiB1: '/api/coppaItaQuartiB1/quartiB1',
        quartiB2: '/api/coppaItaQuartiB2/quartiB2'
    };

    const boxStyle = `flex items-center justify-start mr-4 bg-white text-black font-bold pl-1 overflow-hidden `;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center mr-0.5 text-black bg-gray-500 font-bold overflow-hidden`;

    const toggleModalCambioSq = (indexSide, stage) => {
        setStage(stage);
        toggleModalCambioSqq(indexSide, setPosTeam, setShowModalCambioSq);
    };

    const toggleModalCambioRis = (stage) => {
        setStage(stage);
        toggleModalCambioRiss(setShowModalCambioRis);
    };

    const handleSaveTeamName = (newTeamName) => {
        const oggettoPartita = stage === 'quartoB1' ? oggettoPartitaB1 : oggettoPartitaB2;
        const setOggettoPartita = stage === 'quartoB1' ? setOggettoPartitaB1 : setOggettoPartitaB2;
        const endpoint = stage === 'quartoB1' ? ENDPOINTS.quartiB1 : ENDPOINTS.quartiB2;

        handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint);
    };

    const handleSaveTeamsRis = (newTeamsRis) => {
        const oggettoPartita = stage === 'quartoB1' ? oggettoPartitaB1 : oggettoPartitaB2;
        const setOggettoPartita = stage === 'quartoB1' ? setOggettoPartitaB1 : setOggettoPartitaB2;
        const endpoint = stage === 'quartoB1' ? ENDPOINTS.quartiB1 : ENDPOINTS.quartiB2;

        handleSaveTeamsRiss(newTeamsRis, oggettoPartita, setOggettoPartita, endpoint);
    };
//--------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_BASE_URL = import.meta.env.PROD
                    ? import.meta.env.VITE_API_URL_PROD
                    : import.meta.env.VITE_API_URL_DEV;

                const responseB1 = await axios.get(`${API_BASE_URL}${ENDPOINTS.quartiB1}`);
                const responseB2 = await axios.get(`${API_BASE_URL}${ENDPOINTS.quartiB2}`);

                if (responseB1.data && responseB1.data.length > 0) {
                    setOggettoPartitaB1(responseB1.data[0]);
                } else {
                    setOggettoPartitaB1(Tornei.SqBQuarti[0]);
                }

                if (responseB2.data && responseB2.data.length > 0) {
                    setOggettoPartitaB2(responseB2.data[0]);
                } else {
                    setOggettoPartitaB2(Tornei.SqBQuarti[1]); 
                }

            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartitaB1(Tornei.SqBQuarti[0]); 
                setOggettoPartitaB2(Tornei.SqBQuarti[1]); 
            }
        };
        fetchData();
    }, []);

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

    const createMatch = (match, index, positionStyle, stageKey) => {
        const [team1Result, team2Result] = match.ris.split('-');
        const team1Key = `team1-${stageKey}-${index}`;
        const team2Key = `team2-${stageKey}-${index}`;
        const resultKey = `result-${stageKey}-${index}`;

        return (
            <div key={match.id || `${stageKey}-${index}`} className="absolute flex flex-col space-y-1" style={positionStyle}>
                <div className="flex">
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => handleMouseEnterResult(resultKey)}
                        onMouseLeave={() => handleMouseLeaveResult(resultKey)}
                        onClick={() => toggleModalCambioRis(stageKey)}
                    >
                        {team1Result}
                        {hoveredResults[resultKey] && <span className="absolute left-1 scale-150">📝</span>}
                    </div>
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => handleMouseEnterTeam(team1Key)}
                        onMouseLeave={() => handleMouseLeaveTeam(team1Key)}
                        onClick={() => toggleModalCambioSq("A", stageKey)}
                    >
                        {match.team1}
                        {hoveredTeams[team1Key] && <span className="absolute right-4 scale-150">📝</span>}
                    </div>
                </div>
                <div className="flex">
                    <div 
                        className={resultBoxStyle}
                        onMouseEnter={() => handleMouseEnterResult(resultKey)}
                        onMouseLeave={() => handleMouseLeaveResult(resultKey)}
                        onClick={() => toggleModalCambioRis(stageKey)}
                    >
                        {team2Result}
                        {hoveredResults[resultKey] && <span className="absolute left-1 scale-150">📝</span>}
                    </div>
                    <div 
                        className={boxStyle} 
                        style={containerStyle}
                        onMouseEnter={() => handleMouseEnterTeam(team2Key)}
                        onMouseLeave={() => handleMouseLeaveTeam(team2Key)}
                        onClick={() => toggleModalCambioSq("B", stageKey)}
                    >
                        {match.team2}
                        {hoveredTeams[team2Key] && <span className="absolute right-4 scale-150">📝</span>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {createMatch(oggettoPartitaB1, 0, { top: '20%', right: '3%' }, "quartoB1")}
            {createMatch(oggettoPartitaB2, 1, { top: '70%', right: '3%' }, "quartoB2")}

            {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
            {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis} />} 
        </>
    );
};

export default BQuarti;
