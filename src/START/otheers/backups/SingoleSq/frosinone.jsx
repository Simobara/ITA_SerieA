import { calendario } from "../../Matches/matches";

function creaRisultatiFrosinone(calendario) {
    const squadra = 'Frosinone';
    const risultatiFrosinone = [];
    let giornataSpecialeInserita = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        if (i === 20 && !giornataSpecialeInserita) {
            // Inserisci la giornata speciale una sola volta prima della 21ª giornata
            risultatiFrosinone.push({
                risultato: '',
                casa: '***',
                fuori: '***',
                sqVs: '*** *** ***'
            });
            giornataSpecialeInserita = true;
        }

        giornata.forEach(partita => {
            if (partita.team1 === squadra || partita.team2 === squadra) {
                const isCasa = partita.team1 === squadra;
                let resultsTrimmed = partita.results.trim();

                // Gestione delle partite per ogni giornata
                if (resultsTrimmed === '') {
                    risultatiFrosinone.push({
                        risultato: '',
                        casa: isCasa ? '...' : '',
                        fuori: isCasa ? '' : '...',
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                } else {
                    const risultatoSplit = resultsTrimmed.split('-');
                    const golFrosinone = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                    const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                    let segno;
                    if (golFrosinone > golAvversari) segno = '+';
                    else if (golFrosinone < golAvversari) segno = '-';
                    else segno = '=';

                    const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                    risultatiFrosinone.push({
                        risultato: risultatoInvertito,
                        casa: isCasa ? segno : '',
                        fuori: isCasa ? '' : segno,
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                }
            }
        });
    }

    return risultatiFrosinone;
}

const risultatiFrosinone = creaRisultatiFrosinone(calendario);
export const frosinone = risultatiFrosinone;

// export const frosinone = [
//     //* 1
//     { risultato: '✔️', casa: '-', fuori: '', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '', fuori: '=', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'SASSUOLO' },
//     //* 2
//     { risultato: ' ', casa: '', fuori: '=', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'VERONA' },
//     //* 3
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'INTER' },
//     //* 4
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'TORINO' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'LECCE' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MONZA' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MILAN' },

//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'LECCE' },

//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'BOLOGNA' },

//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'TORINO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'EMPOLI' },

//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'INTER' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'UDINESE' },
// ];