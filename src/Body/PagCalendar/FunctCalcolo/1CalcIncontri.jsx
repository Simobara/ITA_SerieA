import { calendario, currentYear } from "../../../START/app/0SerieAMatches";

//------------------------------------------------------------------------ PER SERIE A
export function calculateYear(month) {
  return month >= 8 ? currentYear - 1 : currentYear;
}

export const monthMapping = {
  Gennaio: 1,
  Febbraio: 2,
  Marzo: 3,
  Aprile: 4,
  Maggio: 5,
  Giugno: 6,
  Luglio: 7,
  Agosto: 8,
  Settembre: 9,
  Ottobre: 10,
  Novembre: 11,
  Dicembre: 12,
};

export function getDayOfWeek(year, month, day) {
  if (month === undefined) {
    return monthMappingp[7];
  }
  const date = new Date(year, month - 1, day);
  const daysOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return daysOfWeek[date.getDay()];
}

export function getMatchesForDate(year, month, day, giornata) {
  const dayOfWeek = getDayOfWeek(year, month, day);
  let dayAbbreviation;

  // Personalizza l'abbreviazione in base al giorno della settimana
  switch (dayOfWeek) {
    case "Lunedì":
      dayAbbreviation = "lun";
      break;
    case "Martedì":
      dayAbbreviation = "mar";
      break;
    case "Mercoledì":
      dayAbbreviation = "mer";
      break;
    case "Giovedì":
      dayAbbreviation = "gio";
      break;
    case "Venerdì":
      dayAbbreviation = "ven";
      break;
    case "Sabato":
      dayAbbreviation = "sab";
      break;
    case "Domenica":
      dayAbbreviation = "dom";
      break;
    default:
      dayAbbreviation = dayOfWeek.slice(0, 3).toLowerCase();
      break;
  }

  // Filtra le partite che cadono in quel giorno specifico
  const matches =
    calendario[giornata]?.filter((match) => match.day === dayAbbreviation) ||
    [];
  return matches
    .map((match) => `<li>${match.team1} - ${match.team2}</li>`)
    .join("");
}

export function extractMonthNumberFromDateIncontri(dataIncontri, month) {
  const monthName = month;
  return monthMapping[monthName];
}

//------------------------------------------------------------------------ PER ALTRE COMPETIZIONI
const otherCompetitions = [
  "ItaCoppaItalia",
  "EuroChampionsLeague",
  "EuroEuropaLeague",
  "EuroConferenceLeague",
  "Nazionale",
  "EuroSuperCoppaUefa",
];
export const updateCompetitionDetails = (year, monthNumber, competition) => {
  if (competition) {
    competition.forEach((match) => {
      if (match && match.details && match.details.event) {
        const giornata = match.details.event.includes("giornata")
          ? `giornata${match.details.event.split("giornata")[1]}`
          : match.details.event;
        const matchesOnDate = getMatchesForDate(
          year,
          monthNumber,
          match.date,
          giornata
        );
        match.details.teams = `<ul>${matchesOnDate}</ul>`;
      }
    });
  }
};

// Itera su tutti i mesi e aggiorna le competizioni
async function initializeAndProcessDateIncontri() {
  const { DateIncontri } = await import("../../../START/app/2dateMatch");
  // Itera su tutti i mesi e aggiorna le competizioni
  Object.keys(DateIncontri[0])?.forEach((month) => {
    const monthNumber = extractMonthNumberFromDateIncontri(DateIncontri, month);
    const year = calculateYear(monthNumber);
    // Aggiorna i dettagli per ItaSerieA
    DateIncontri[0][month].ItaSerieA?.forEach((match) => {
      if (match && match.details && match.details.event) {
        const giornata = `giornata${match.details.event.split("giornata")[1]}`;
        const matchesOnDate = getMatchesForDate(
          year,
          monthNumber,
          match.date,
          giornata
        );
        match.details.teams = `<ul>${matchesOnDate}</ul>`;
      }
    });
    // Competizioni da aggiornare con la nuova funzione
    otherCompetitions?.forEach((competition) => {
      updateCompetitionDetails(
        year,
        monthNumber,
        DateIncontri[0][month][competition]
      );
    });
  });
}

// Chiamata alla funzione async per inizializzare e processare DateIncontri
initializeAndProcessDateIncontri().catch((error) => {
  console.error("Error initializing and processing DateIncontri:", error);
});
