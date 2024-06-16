import React, { useState } from 'react';
import { mesiAnno } from './FunctCalcolo/0CalcCalend';
import MeseView from './MeseView/meseView';
import './pagCalendar.css';

const PagCalendar = ({ onClose }) => {
	const currentDate = new Date();
	currentDate.setMonth(currentDate.getMonth() + 5); // Aggiungi 5mesi
	const currentMonthIndex = currentDate.getMonth(); //Calcolo mese di apertura

	const [openIndex, setOpenIndex] = useState([currentMonthIndex]);
	const [lastOpenIndex, setLastOpenIndex] = useState(currentMonthIndex);

	const handleMonthClick = (index) => {
		if (index === lastOpenIndex) return;
		setOpenIndex([index]);
		setLastOpenIndex(index);
	};

	return (
		<div className="fixed flex inset-0 items-end justify-end mb-2 mr-2 z-50 bg-gray-900 bg-opacity-50">
			<div className="relative w-[100%] h-[95vh] shadow-xxxl p-8 rounded-lg overflow-x-hidden overflow-y-auto border-4 border-sky-900 bg-black z-[15]">
				<div className="absolute top-0 left-0 right-0 bg-gray-900 ">
					<button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
						X
					</button>
				</div>
				<section className="flex absolute left-0 gap-2 bg-black">
					{mesiAnno.map((month, index) => (
						<div key={index} className={`bg-black h-full max-w-[100%] flex flex-col ${openIndex.includes(index) ? 'open-month' : 'closed-month'}`} onClick={() => handleMonthClick(index)}>
							<div className="cursor-pointer text-white p-2"></div>
							<MeseView month={month} openIndex={openIndex} />
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default PagCalendar;
