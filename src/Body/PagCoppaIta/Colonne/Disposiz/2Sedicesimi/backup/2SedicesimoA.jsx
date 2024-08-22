import React from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches'; 

const SedicesimoA = ({ width = '70px', height = '24px' }) => {
    const boxStyle = `text-black font-bold flex items-center justify-start bg-white ml-4 pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-5 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;

    const createMatch = (match) => {
        const [team1Result, team2Result] = match.ris.split('-');
        const positionStyle = match.id === 3 || match.id === 4
            ? { bottom: match.pos }
            : { top: match.pos };

        return (
            <div key={match.id} className="absolute flex flex-col space-y-1" style={positionStyle}>
                <div className="flex">
                    <div className={boxStyle} style={containerStyle}>	{match.team1}</div>
                    <div className={resultBoxStyle}>									{team1Result}</div>
                </div>
                <div className="flex">
                    <div className={boxStyle} style={containerStyle}>	{match.team2}</div>
                    <div className={resultBoxStyle}>									{team2Result}</div>
                </div>
            </div>
        );
    };

    return (
        <>
            {Tornei.SqASedicesimi.map((match) => createMatch(match))}
        </>
    );
};

export default SedicesimoA;
