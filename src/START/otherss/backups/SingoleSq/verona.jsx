import { calendario } from "../../Matches/matches";

function creaRisultatiVerona(calendario) {
    const squadra = 'Verona';
    const risultatiVerona = [];
    let giornataSpecialeInserita = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        if (i === 20 && !giornataSpecialeInserita) {
            // Inserisci la giornata speciale una sola volta prima della 21ª giornata
            risultatiVerona.push({
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
                    risultatiVerona.push({
                        risultato: '',
                        casa: isCasa ? '...' : '',
                        fuori: isCasa ? '' : '...',
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                } else {
                    const risultatoSplit = resultsTrimmed.split('-');
                    const golVerona = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                    const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                    let segno;
                    if (golVerona > golAvversari) segno = '+';
                    else if (golVerona < golAvversari) segno = '-';
                    else segno = '=';

                    const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                    risultatiVerona.push({
                        risultato: risultatoInvertito,
                        casa: isCasa ? segno : '',
                        fuori: isCasa ? '' : segno,
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                }
            }
        });
    }

    return risultatiVerona;
}

const risultatiVerona = creaRisultatiVerona(calendario);
export const verona = risultatiVerona;



// export const verona = [
//     //* 1
//     { risultato: '✔️', casa: ' ', fuori: '+', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'ROMA' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'BOLOGNA' },
//     //* 2
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'TORINO' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'FROSINONE' },
//     //* 3
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'MONZA' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'GENOA' },
//     //* 4
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'LECCE' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'FIORENTINA' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'INTER' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'NAPOLI' },
//     //* 2
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'SASSUOLO' },
//     //* 3
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'LECCE' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'GENOA' },
//     //* 4
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'FIORENTINA' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'TORINO' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'INTER' },
// ];
