import React, { useEffect, useState } from 'react';

import { currentYear } from '../../../START/app/0SerieAMatches';
import { DateIncontri } from '../../../START/app/2dateMatch';
import { generateMonthDays } from '../FunctCalcolo/0CalcCalend';

import LogoEuroChampionsLeague from '../assts/LogoEuroChampionsLeague.png';
import LogoEuroConferenceLeague from '../assts/LogoEuroConferenceLeague.png';
import LogoEuroEuropaLeague from '../assts/LogoEuroEuropaLeague.png';
import LogoEuroSupercoppaUefa from '../assts/LogoEuroSupercoppaUefa.png';
import LogoItaCoppaItalia from '../assts/LogoItaCoppaItalia.png';
import LogoItaSerieA from '../assts/LogoItaSerieA.png';
import LogoItaSupercoppa from '../assts/LogoItaSupercoppa.png';
import LogoNazionale from '../assts/LogoNazionale.png';

import './meseView.css';

const MeseView = React.memo(({ month, openIndex }) => {
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const eventLogos = [
        { key: 'ItaSerieA', logo: LogoItaSerieA, offset: 0 },
        { key: 'ItaCoppaItalia', logo: LogoItaCoppaItalia, offset: 35 },
        { key: 'EuroChampionsLeague', logo: LogoEuroChampionsLeague, offset: 70 },
        { key: 'EuroEuropaLeague', logo: LogoEuroEuropaLeague, offset: 105 },
        { key: 'EuroConferenceLeague', logo: LogoEuroConferenceLeague, offset: 140 },
        { key: 'Nazionale', logo: LogoNazionale, offset: 175 },
        { key: 'EuroSuperCoppaUefa', logo: LogoEuroSupercoppaUefa, offset: 70 },
        { key: 'ItaSupercoppa', logo: LogoItaSupercoppa, offset: 175 },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <div className={`flex flex-col h-full mb-[6rem] lg:ml-[2.5rem] lg:mr-[-2rem] md:ml-[-2rem] md:mr-[-1rem]`}>
            <div className={`text-gray-700 lg:text-2xl md:text-lg font-bold h-10 z-10 lg:ml-[0.3rem] md:ml-[3rem] ${openIndex.includes(month) ? '' : ''}`}>
                {openIndex.includes(month) ? month : month.slice(0, 3)}
            </div>
            {daysInMonth.map((day, index) => (
                <div key={index} className={`relative flex items-start justify-start lg:w-[17rem] md:w-[20rem]  text-gray-500 py-2 ${day.isWeekend ? 'bg-sky-950' : ''}`}>
                    <span className="text-left">{day.dayName}</span>
                    <div className="absolute left-[2.2rem]">{day.dayNumber}</div>
                    {eventLogos.map((event, i) => {
                        const eventDetails = getEventDetails(day, event.key);
                        return (
                            eventDetails && (
                                <div key={i} style={{ position: 'absolute', right: isMobile ? '-20px' : `${event.offset}px` }}>
                                    <img
                                        src={event.logo}
                                        alt={`Logo ${event.key}`}
                                        className="transition-all duration-200 ease-in-out"
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
                                    <div className="hidden absolute w-[110px] h-auto left-[2rem] -top-0.5 p-2.5 z-10 bg-sky-700/90 text-black"></div>
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
