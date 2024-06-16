import React, { useState, useEffect } from 'react';

import { currentYear } 				from '../../../START/app/0SerieAMatches';
import { DateIncontri } 			from '../../../START/app/2dateMatch';
import { generateMonthDays } 		from '../FunctCalcolo/0CalcCalend';

import LogoItaSerieA 				from '../assts/LogoItaSerieA.png';
import LogoItaCoppaItalia 			from '../assts/LogoItaCoppaItalia.png';
import LogoEuroChampionsLeague 		from '../assts/LogoEuroChampionsLeague.png';
import LogoEuroEuropaLeague 		from '../assts/LogoEuroEuropaLeague.png';
import LogoEuroConferenceLeague 	from '../assts/LogoEuroConferenceLeague.png';
import LogoNazionale 				from '../assts/LogoNazionale.png';
import LogoEuroSupercoppaUefa 		from '../assts/LogoEuroSupercoppaUefa.png';
import LogoItaSupercoppa 			from '../assts/LogoItaSupercoppa.png'

import './meseView.css';



const MeseView = React.memo(({ month, openIndex }) => {
	const [daysInMonth, setDaysInMonth] = useState([]);

	const eventLogos = [
		{ key: 'ItaSerieA', 			logo: LogoItaSerieA, 			offset:   0 },
		{ key: 'ItaCoppaItalia', 		logo: LogoItaCoppaItalia, 		offset:  35 },
		{ key: 'EuroChampionsLeague', 	logo: LogoEuroChampionsLeague,	offset:  70 },
		{ key: 'EuroEuropaLeague', 		logo: LogoEuroEuropaLeague, 	offset: 105 },
		{ key: 'EuroConferenceLeague',	logo: LogoEuroConferenceLeague, offset: 140 },
		{ key: 'Nazionale', 			logo: LogoNazionale, 			offset: 175 },
		{ key: 'EuroSuperCoppaUefa', 	logo: LogoEuroSupercoppaUefa, 	offset:  70 },
		{ key: 'ItaSupercoppa', 		logo: LogoItaSupercoppa,	 	offset: 175 },
	];

	useEffect(() => {
		const seasonStartMonths = ['Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
		const yearForMonth = seasonStartMonths.includes(month) ? currentYear - 1 : currentYear;
		setDaysInMonth(generateMonthDays(yearForMonth, month));
	}, [month, currentYear]);

	const getEventDetails = (day, eventKey) => {
		const monthData = DateIncontri[0][month];
		if (!monthData) {
			return null;
		}
		const events = monthData[eventKey];
		return events && events.find((event) => event.date === day.dayNumber);
	};

	return (
		<div className="flex flex-col h-full mb-[6rem] ml-[0.5rem]">
			<div className={`justify-start items-start text-gray-700 text-2xl font-bold h-10 z-10 ${openIndex ? '' : ''}`}>{month}</div>
			{daysInMonth.map((day, index) => (
				<div key={index} className={`relative flex items-center justify-between w-[20.5rem] text-gray-500 py-2 ${day.isWeekend ? 'bg-gray-800' : ''}`}>
					<span className="text-left">{day.dayName}</span>
					<div className="absolute left-[2.4rem]">{day.dayNumber}</div>
					{eventLogos.map((event, i) => {
						const eventDetails = getEventDetails(day, event.key);
						return (
							eventDetails && (
								<div key={i} style={{ position: 'absolute', right: `${event.offset}px` }}>
									<img
										src={event.logo}
										alt={`Logo ${event.key}`}
										className="transition-all duration-300 ease-in-out"
										style={{
											width: '2rem',
											height: '2.5rem',
											border: '1px solid transparent',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.nextSibling.style.display = 'block';
											e.currentTarget.style.border = '5px solid yellow';
											e.currentTarget.nextSibling.innerHTML = `<div style="font-size: 17px; font-weight:bold; color:white">${eventDetails.details.event}<br> <div style="font-size: 17px; font-weight:bold; color:gray"> ${eventDetails.details.teams}</div>`;
										}}
										onMouseLeave={(e) => {
											e.currentTarget.nextSibling.style.display = 'none';
											e.currentTarget.style.border = '1px solid transparent';
											e.currentTarget.nextSibling.innerHTML = '';
										}}
									/>
									<div className="hidden absolute w-[230px] h-auto left-[3rem] -top-0.5 p-2.5 z-10 bg-sky-700/90 text-black"></div>
								</div>
							)
						);
					})}
				</div>
			))}
		</div>
	);
});

export default MeseView;
