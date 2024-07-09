import React, { useState } from 'react';
import { mesiAnno } from './FunctCalcolo/0CalcCalend';
import MeseView from './MeseView/meseView';
import './pagCalendar.css';

const PagCalendar = ({ onClose }) => {
	const currentDate = new Date();
	currentDate.setMonth(currentDate.getMonth() + 5); // Aggiungi 5 mesi
	const currentMonthIndex = currentDate.getMonth(); // Calcolo mese di apertura

	const [openIndex, setOpenIndex] = useState([currentMonthIndex]);

	const handleMonthClick = (index, event) => {
		const clickX = event.clientX;
		const elementX = event.currentTarget.getBoundingClientRect().left;

		if (clickX > elementX + 100) return;

		if (!openIndex.includes(index)) {
			setOpenIndex([index]);
		}
	};

	return (
		<div className="fixed flex inset-0 items-start justify-start mb-2 mr-2 z-50 bg-gray-900 bg-opacity-50">
			<div className="relative w-[100%] h-[95vh] py-8 shadow-xxxl rounded-lg overflow-y-scroll md:overflow-auto sm:overflow-hidden border-4 border-sky-900 bg-black z-[15]">
				<div className="absolute top-0 left-0 right-0 bg-gray-900">
					<button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
						X
					</button>
				</div>
				<div className="relative" style={{ maxWidth: '2000px', maxHeight:'100%' }}>
					<section className="flex bg-black">
						{mesiAnno.map((month, index) => (
							<div
								key={index}
								className={`bg-black h-full flex flex-col ${openIndex.includes(index) ? 'open-month' : 'closed-month'}`}
								onClick={(event) => handleMonthClick(index, event)}
							>
								<div className="cursor-pointer p-2">{month}</div>
								<MeseView month={month} openIndex={openIndex} />
							</div>
						))}
					</section>
				</div>
			</div>
		</div>
	);
};

export default PagCalendar;
