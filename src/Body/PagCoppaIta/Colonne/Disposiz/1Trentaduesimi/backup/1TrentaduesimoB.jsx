import React from 'react';
import { Tornei } from '../../../../../START/app/3CoppaItaMatches'; 

const BTrentaduesimi = ({ width = '80px', height = '24px' }) => {
	const boxStyle = `flex items-center justify-start mr-1 bg-white text-black font-bold pl-1 overflow-hidden`;
	const containerStyle = { width, height };
	const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center mr-0.5 text-black bg-gray-500 font-bold overflow-hidden`;

	const createMatchHTML = (match) => {
		const [team1Result, team2Result] = match.ris.split('-');
		const positionStyle = match.pos.includes('bottom')
			? { bottom: match.pos.split('-')[1] }
			: { top: match.pos };

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
			{Tornei.SqBTrentaduesimi.map((match) => createMatchHTML(match))}
		</>
	);
};

export default BTrentaduesimi;
