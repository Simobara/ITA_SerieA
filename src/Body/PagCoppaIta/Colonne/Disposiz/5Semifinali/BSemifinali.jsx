import React from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';

const BSemifinali = ({ width = '80px', height = '24px' }) => {
	const boxStyle = `flex items-center justify-start mr-1 bg-white text-black font-bold pl-1 overflow-hidden`;
	const containerStyle = { width, height };
	const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center mr-0.5 text-black font-bold bg-gray-500 overflow-hidden`;
	const match = Tornei.SqBSemifinali[0];

    const [team1Result, team2Result] = match.ris ? match.ris.split('-') : ['', ''];

	return (
		<>
            <div className="absolute top-[42%] flex flex-col space-y-1">
                <div className="flex">
                    <div className={resultBoxStyle}>{team1Result}</div>
                    <div className={boxStyle} style={containerStyle}>{match.team1}</div>
                </div>
            </div>
            <div className="absolute top-[45%] right-[calc(50%-10px)] bg-white h-[14%] w-[2px]"></div>
            <div className="absolute bottom-[38%] flex flex-col space-y-1">
                <div className="flex">
                    <div className={resultBoxStyle}>{team2Result}</div>
                    <div className={boxStyle} style={containerStyle}>{match.team2}</div>
                </div>
            </div>
        </>
    );
};

export default BSemifinali;