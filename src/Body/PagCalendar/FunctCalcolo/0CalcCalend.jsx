import { currentYear } from '../../../START/app/0SerieAMatches';

export const mesiAnno = ['Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre', 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno'];
export const giorniSettimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

// ------------------------------------------------------------------------------------------------
const generateDaysInMonths = (currentYear) => {
	const daysInMonth = [
		31, // Agosto
		30, // Settembre
		31, // Ottobre
		30, // Novembre
		31, // Dicembre
		31, // Gennaio
		currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0) ? 29 : 28, // Febbraio
		31, // Marzo
		30, // Aprile
		31, // Maggio
		30, // Giugno
	];

	return mesiAnno.map((month, index) => {
		const year = index < 5 ? currentYear - 1 : currentYear;
		return { month, days: daysInMonth[index], year };
	});
};

// Funzione per generare i giorni dei mesi da agosto a dicembre
export function generateDaysForFirstPeriod(currentYear) {
	let monthDays = [];
	const months = mesiAnno.slice(0, 5); // Agosto a Dicembre
	months.forEach((month) => {
		monthDays = monthDays.concat(generateMonthDays(currentYear - 1, month));
	});
	return monthDays;
}

// Funzione per generare i giorni dei mesi da gennaio a giugno
export function generateDaysForSecondPeriod(currentYear) {
	let monthDays = [];
	const months = mesiAnno.slice(5); // Gennaio a Giugno
	months.forEach((month) => {
		monthDays = monthDays.concat(generateMonthDays(currentYear, month));
	});
	return monthDays;
}

// Funzione generica per generare i giorni di un mese
export function generateMonthDays(year, month) {
	const monthIndex = mesiAnno.indexOf(month);
	const firstDayOfMonth = new Date(year, monthIndex < 5 ? monthIndex + 7 : monthIndex - 5, 1);
	const daysInMonth = new Date(year, monthIndex < 5 ? monthIndex + 8 : monthIndex - 4, 0).getDate();

	let monthDays = [];
	for (let day = 1; day <= daysInMonth; day++) {
		const date = new Date(year, firstDayOfMonth.getMonth(), day);
		const dayOfWeekIndex = (date.getDay() + 6) % 7;
		const dayName = giorniSettimana[dayOfWeekIndex].substring(0, 3); // Prende solo le prime tre lettere
		const dayNameCapitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1).toLowerCase(); // Capitalizza la stringa
		const isWeekend = dayOfWeekIndex === 5 || dayOfWeekIndex === 6;
		monthDays.push({
			dayNumber: day,
			dayName: dayNameCapitalized,
			isWeekend: isWeekend,
		});
	}
	return monthDays;
}

// Esecuzione del calcolo per un anno specifico
const totalDaysPerMonthFirstPeriod = generateDaysForFirstPeriod(currentYear);
const totalDaysPerMonthSecondPeriod = generateDaysForSecondPeriod(currentYear);

// console.log('Days from August to December:', totalDaysPerMonthFirstPeriod);
// console.log('Days from January to June:', totalDaysPerMonthSecondPeriod);
// ------------------------------------------------------------------------------------------------
