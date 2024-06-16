import React from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';

const ASemifinali = ({ width = '80px', height = '24px' }) => {
    const boxStyle = `text-black font-bold flex items-center justify-start bg-white ml-1 pl-1 overflow-hidden`;
    const containerStyle = { width, height };
    const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;
    const match = Tornei.SqASemifinali[0];

    const [team1Result, team2Result] = match.ris ? match.ris.split('-') : ['', ''];

    return (
        <>
            <div className="absolute top-[42%] flex flex-col space-y-1">
                <div className="flex">
                    <div className={boxStyle} style={containerStyle}>{match.team1}</div>
                    <div className={resultBoxStyle}>{team1Result}</div>
                </div>
            </div>
            <div className="absolute top-[45%] left-[calc(50%-10px)] bg-white h-[14%] w-[2px]"></div>
            <div className="absolute bottom-[38%] flex flex-col space-y-1">
                <div className="flex">
                    <div className={boxStyle} style={containerStyle}>{match.team2}</div>
                    <div className={resultBoxStyle}>{team2Result}</div>
                </div>
            </div>
        </>
    );
};

export default ASemifinali;
