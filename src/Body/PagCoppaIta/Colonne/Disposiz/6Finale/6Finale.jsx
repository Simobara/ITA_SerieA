// import React from 'react';
// import { Tornei } from '../../../../../START/app/3CoppaItaMatches';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Finale = ({ width = '55px', height = '24px' }) => {
	const [match, setMatch] = useState(null);

	const boxStyle = `flex items-center justify-start bg-white text-black font-bold pl-1 overflow-hidden`;
    const containerStyle = { width, height };
	const resultBoxStyle = `flex items-center justify-center text-black bg-gray-500 w-full font-bold overflow-hidden ml-4 mr-4 mb-4`;

	// const match = Tornei.Finale[0];

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get('http://localhost:5000/api/coppaItaFinale/finale');
			const data = response.data;
			if (data.length > 0) {
			  setMatch(data[0].Finale[0]); // Assuming you want the first match of the first Finale
			}
		  } catch (error) {
			console.error('Errore durante il recupero dei dati:', error);
		  }
		};
		fetchData();
	  }, []);

	  if (!match) {
		return <div>Loading...</div>;
	  }
	
	  const [team1Result, team2Result] = match.ris?match.ris.split('-') : ['', ''];

	return (
		<>
			<div className="absolute bottom-[42.5%] flex flex-col items-center">
				<div className="flex space-x-1">
					<div className={boxStyle} style={containerStyle}>{match.team1}</div>
					<div className={boxStyle} style={containerStyle}>{match.team2}</div>
				</div>
				<div className={resultBoxStyle}>{team1Result} - {team2Result}</div>
			</div>
		</>
	);
};

export default Finale;
