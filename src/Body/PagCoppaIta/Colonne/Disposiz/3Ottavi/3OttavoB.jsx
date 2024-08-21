import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';
import { ENDPOINTS } from '../config/endpoints';
import ModCambioRis from '../modCambioRis/modCambioRis';
import ModCambioSq from '../modCambioSq/modCambioSq';
import { handleSaveTeamsNamee } from '../zExternal/handleSaveTeamsName';
import { handleSaveTeamsRiss } from '../zExternal/handleSaveTeamsRis';
import { toggleModalCambioRiss, toggleModalCambioSqq } from '../zExternal/toggleModalCambio';

const OttavoB = ({ width = '70px', height = '24px' }) => {
    const [stage, setStage] = useState("");
    const [oggettoPartitaB1, setOggettoPartitaB1] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaB2, setOggettoPartitaB2] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaB3, setOggettoPartitaB3] = useState({ team1: '', team2: '', ris: '' });
    const [oggettoPartitaB4, setOggettoPartitaB4] = useState({ team1: '', team2: '', ris: '' });
    const [hoveredTeams, setHoveredTeams] = useState({});
    const [hoveredResults, setHoveredResults] = useState({});
    const [posTeam, setPosTeam] = useState("");
    const [showModalCambioSq, setShowModalCambioSq] = useState(false);
    const [showModalCambioRis, setShowModalCambioRis] = useState(false);

    const boxStyle = `text-black font-bold flex items-center justify-start bg-white mr-4 pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;

    // Style specific to the first box in each pair
    const teamStyle = {
        backgroundColor: '#7F1D1D', // bg-red-900 equivalent in Tailwind
        color: 'yellow',
        filter: 'brightness(60%)',
        paddingLeft: '0.25rem',
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
        const oggettoPartita = stage === 'ottaviB1' ? oggettoPartitaB1
                            : stage === 'ottaviB2' ? oggettoPartitaB2
                            : stage === 'ottaviB3' ? oggettoPartitaB3
                            : oggettoPartitaB4;

        const setOggettoPartita = stage === 'ottaviB1' ? setOggettoPartitaB1
                              : stage === 'ottaviB2' ? setOggettoPartitaB2
                              : stage === 'ottaviB3' ? setOggettoPartitaB3
                              : setOggettoPartitaB4;

        const endpoint = stage === 'ottaviB1' ? ENDPOINTS.OTTAVI_B1
                       : stage === 'ottaviB2' ? ENDPOINTS.OTTAVI_B2
                       : stage === 'ottaviB3' ? ENDPOINTS.OTTAVI_B3
                       : ENDPOINTS.OTTAVI_B4;

        handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint);
    };

    const handleSaveTeamsRis = (newTeamsRis) => {
        const oggettoPartita = stage === 'ottaviB1' ? oggettoPartitaB1
                            : stage === 'ottaviB2' ? oggettoPartitaB2
                            : stage === 'ottaviB3' ? oggettoPartitaB3
                            : oggettoPartitaB4;

        const setOggettoPartita = stage === 'ottaviB1' ? setOggettoPartitaB1
                              : stage === 'ottaviB2' ? setOggettoPartitaB2
                              : stage === 'ottaviB3' ? setOggettoPartitaB3
                              : setOggettoPartitaB4;

        const endpoint = stage === 'ottaviB1' ? ENDPOINTS.OTTAVI_B1
                       : stage === 'ottaviB2' ? ENDPOINTS.OTTAVI_B2
                       : stage === 'ottaviB3' ? ENDPOINTS.OTTAVI_B3
                       : ENDPOINTS.OTTAVI_B4;

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

                const responseB1 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_B1}`);
                const responseB2 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_B2}`);
                const responseB3 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_B3}`);
                const responseB4 = await axios.get(`${API_BASE_URL}${ENDPOINTS.OTTAVI_B4}`);

                if (responseB1.data && responseB1.data.length > 0) {
                    setOggettoPartitaB1(responseB1.data[0]);
                } else {
                    setOggettoPartitaB1(Tornei.SqBOttavi[0]);
                }

                if (responseB2.data && responseB2.data.length > 0) {
                    setOggettoPartitaB2(responseB2.data[0]);
                } else {
                    setOggettoPartitaB2(Tornei.SqBOttavi[1]);
                }

                if (responseB3.data && responseB3.data.length > 0) {
                    setOggettoPartitaB3(responseB3.data[0]);
                } else {
                    setOggettoPartitaB3(Tornei.SqBOttavi[2]);
                }

                if (responseB4.data && responseB4.data.length > 0) {
                    setOggettoPartitaB4(responseB4.data[0]);
                } else {
                    setOggettoPartitaB4(Tornei.SqBOttavi[3]);
                }

            } catch (error) {
                console.error('Errore durante il recupero dei dati:', error);
                setOggettoPartitaB1(Tornei.SqBOttavi[0]);
                setOggettoPartitaB2(Tornei.SqBOttavi[1]);
                setOggettoPartitaB3(Tornei.SqBOttavi[2]);
                setOggettoPartitaB4(Tornei.SqBOttavi[3]);
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
                        style={{ ...containerStyle, ...teamStyle }}
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
            {createMatch(oggettoPartitaB1, 0, { top: "8%", right: "3%" }, "ottaviB1")}
            {createMatch(oggettoPartitaB2, 1, { top: "33%", right: "3%" }, "ottaviB2")}
            {createMatch(oggettoPartitaB3, 2, { bottom: "33%", right: "3%" }, "ottaviB3")}
            {createMatch(oggettoPartitaB4, 3, { bottom: "9%", right: "3%" }, "ottaviB4")}

            {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName}/>}
            {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis}/>} 
        </>
    );
};

export default OttavoB;
