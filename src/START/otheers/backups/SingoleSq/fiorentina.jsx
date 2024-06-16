import { calendario } from "../../Matches/matches";

function creaRisultatiFiorentina(calendario) {
    const squadra = 'Fiorentina';
    const risultatiFiorentina = [];
    let giornataSpecialeInserita = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        if (i === 20 && !giornataSpecialeInserita) {
            // Inserisci la giornata speciale una sola volta prima della 21ª giornata
            risultatiFiorentina.push({
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
                    risultatiFiorentina.push({
                        risultato: '',
                        casa: isCasa ? '...' : '',
                        fuori: isCasa ? '' : '...',
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                } else {
                    const risultatoSplit = resultsTrimmed.split('-');
                    const golFiorentina = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                    const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                    let segno;
                    if (golFiorentina > golAvversari) segno = '+';
                    else if (golFiorentina < golAvversari) segno = '-';
                    else segno = '=';

                    const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                    risultatiFiorentina.push({
                        risultato: risultatoInvertito,
                        casa: isCasa ? segno : '',
                        fuori: isCasa ? '' : segno,
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                }
            }
        });
    }

    return risultatiFiorentina;
}

const risultatiFiorentina = creaRisultatiFiorentina(calendario);
export const fiorentina = risultatiFiorentina;


// export const fiorentina = [
//     //* 1
//     { risultato: '✔️', casa: ' ', fuori: '+', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'LECCE' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'INTER' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'ATALANTA' },
//     //* 2
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'NAPOLI' },
//     //* 3
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'BOLOGNA' },
//     //* 4
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'VERONA' },
//     //* 5
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'TORINO' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'SASSUOLO' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'INTER' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'LECCE' },
//     //* 2
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'TORINO' },
//     //* 3
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'JUVE' },
//     //* 4
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'VERONA' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'CAGLIARI' },
// ];
