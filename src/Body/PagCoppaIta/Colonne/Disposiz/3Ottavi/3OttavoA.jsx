import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import { ENDPOINTS } from '../config/endpoints';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const OttavoA = ({ width = '70px', height = '24px' }) => {
    const [stage, setStage] = useState("");  
    const [oggettoPartitaA1, setOggettoPartitaA1] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaA2, setOggettoPartitaA2] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaA3, setOggettoPartitaA3] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaA4, setOggettoPartitaA4] = useState({ team1: '', team2: '', ris: '' });
    const [hoveredTeams, setHoveredTeams] = useState({});
    const [hoveredResults, setHoveredResults] = useState({});
    const [posTeam, setPosTeam] = useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);
    
    const boxStyle = `text-black font-bold flex items-center justify-start bg-white ml-4 pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;

    // Style specific to the first box in each pair
    const teamStyle = {
        backgroundColor: '#7F1D1D', // bg-red-900 equivalent in Tailwind
        color: 'yellow',
        filter: 'brightness(60%)',
        paddingLeft: '',
        fontSize: '15px',
        fontWeight: 'bold',
        overflow: 'hidden',
    };

    const toggleModalCambioSq = (indexSide, stage) => {
        setStage(stage);
        toggleModalCambioSqq(indexSide, setPosTeam, setShowModalCambioSq);
    };

    const toggleModalCambioRis = (stage) => {
        setStage(stage);
        toggleModalCambioRiss(setShowModalCambioRis);
    };

    const handleSaveTeamName = (newTeamName) => {
        const oggettoPartita = stage === 'ottaviA1' ? oggettoPartitaA1
                            : stage === 'ottaviA2' ? oggettoPartitaA2
                            : stage === 'ottaviA3' ? oggettoPartitaA3
                            : oggettoPartitaA4;

        const setOggettoPartita = stage === 'ottaviA1' ? setOggettoPartitaA1
                              : stage === 'ottaviA2' ? setOggettoPartitaA2
                              : stage === 'ottaviA3' ? setOggettoPartitaA3
                              : setOggettoPartitaA4;

        const endpoint = stage === 'ottaviA1' ? ENDPOINTS.OTTAVI_A1
                       : stage === 'ottaviA2' ? ENDPOINTS.OTTAVI_A2
                       : stage === 'ottaviA3' ? ENDPOINTS.OTTAVI_A3
                       : ENDPOINTS.OTTAVI_A4;

        handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint);
    };

    const handleSaveTeamsRis = (newTeamsRis) => {
        const oggettoPartita = stage === 'ottaviA1' ? oggettoPartitaA1
                            : stage === 'ottaviA2' ? oggettoPartitaA2
                            : stage === 'ottaviA3' ? oggettoPartitaA3
                            : oggettoPartitaA4;

        const setOggettoPartita = stage === 'ottaviA1' ? setOggettoPartitaA1
                              : stage === 'ottaviA2' ? setOggettoPartitaA2
                              : stage === 'ottaviA3' ? setOggettoPartitaA3
                              : setOggettoPartitaA4;

        const endpoint = stage === 'ottaviA1' ? ENDPOINTS.OTTAVI_A1
                       : stage === 'ottaviA2' ? ENDPOINTS.OTTAVI_A2
                       : stage === 'ottaviA3' ? ENDPOINTS.OTTAVI_A3
                       : ENDPOINTS.OTTAVI_A4;

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

                const responseA1 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_A1}`);
                const responseA2 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_A2}`);
                const responseA3 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_A3}`);
                const responseA4 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_A4}`);

                if (responseA1.data && responseA1.data.length > 0) {
                    setOggettoPartitaA1(responseA1.data[0]);
                } else {
                    setOggettoPartitaA1(Tornei.SqAOttavi[0]);
                }

                if (responseA2.data && responseA2.data.length > 0) {
                    setOggettoPartitaA2(responseA2.data[0]);
                } else {
                    setOggettoPartitaA2(Tornei.SqAOttavi[1]);
                }

                if (responseA3.data && responseA3.data.length > 0) {
                    setOggettoPartitaA3(responseA3.data[0]);
                } else {
                    setOggettoPartitaA3(Tornei.SqAOttavi[2]);
                }

                if (responseA4.data && responseA4.data.length > 0) {
                    setOggettoPartitaA4(responseA4.data[0]);
                } else {
                    setOggettoPartitaA4(Tornei.SqAOttavi[3]);
                }

            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartitaA1(Tornei.SqAOttavi[0]);
                setOggettoPartitaA2(Tornei.SqAOttavi[1]);
                setOggettoPartitaA3(Tornei.SqAOttavi[2]);
                setOggettoPartitaA4(Tornei.SqAOttavi[3]);
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
                        style={{ ...containerStyle, ...teamStyle }}
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
            {createMatch(oggettoPartitaA1, 0, { top: "8%", left: "3%" }, "ottaviA1")}
            {createMatch(oggettoPartitaA2, 1, { top: "33%", left: "3%" }, "ottaviA2")}
            {createMatch(oggettoPartitaA3, 2, { bottom: "33%", left: "3%" }, "ottaviA3")}
            {createMatch(oggettoPartitaA4, 3, { bottom: "9%", left: "3%" }, "ottaviA4")}

            {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
            {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis}/>} 
        </>
    );
};

export default OttavoA;
