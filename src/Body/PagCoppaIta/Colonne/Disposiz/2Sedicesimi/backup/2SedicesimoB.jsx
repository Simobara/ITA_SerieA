import React from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches';

const SedicesimoB = ({ width = '70px', height = '24px' }) => {
	const boxStyle = `flex items-center justify-start mr-3 bg-white text-black font-bold pl-1 overflow-hidden`;
	const containerStyle = { width, height };
	const resultBoxStyle = `flex flex-1 w-5 h-[24px] items-center justify-center mr-0.5 text-black bg-gray-500 font-bold overflow-hidden`;

	const createMatch = (match) => {
		const [team1Result, team2Result] = match.ris.split('-');
		const positionStyle = match.id === 3 || match.id === 4 ? { bottom: match.pos } : { top: match.pos };

		return (
			<div key={match.id} className="absolute flex flex-col space-y-1" style={positionStyle}>
				<div className="flex">
					<div className={resultBoxStyle}>{team1Result}</div>
					<div className={boxStyle} style={containerStyle}>{match.team1}</div>
				</div>
				<div className="flex">
					<div className={resultBoxStyle}>{team2Result}</div>
					<div className={boxStyle} style={containerStyle}>{match.team2}</div>
				</div>
			</div>
		);
	};

	return (
		<>
			{Tornei.SqBSedicesimi.map((match) => createMatch(match))}
		</>
	);
};

export default SedicesimoB;
