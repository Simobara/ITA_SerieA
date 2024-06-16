import { calendario } from "../../Matches/matches";

function creaRisultatiLecce(calendario) {
    const squadra = 'Lecce';
    const risultatiLecce = [];
    let giornataSpecialeInserita = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        if (i === 20 && !giornataSpecialeInserita) {
            // Inserisci la giornata speciale una sola volta prima della 21ª giornata
            risultatiLecce.push({
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
                    risultatiLecce.push({
                        risultato: '',
                        casa: isCasa ? '...' : '',
                        fuori: isCasa ? '' : '...',
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                } else {
                    const risultatoSplit = resultsTrimmed.split('-');
                    const golLecce = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                    const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                    let segno;
                    if (golLecce > golAvversari) segno = '+';
                    else if (golLecce < golAvversari) segno = '-';
                    else segno = '=';

                    const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                    risultatiLecce.push({
                        risultato: risultatoInvertito,
                        casa: isCasa ? segno : '',
                        fuori: isCasa ? '' : segno,
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                }
            }
        });
    }

    return risultatiLecce;
}

const risultatiLecce = creaRisultatiLecce(calendario);
export const lecce = risultatiLecce;

// export const lecce = [
//     //* 1
//     { risultato: '✔️', casa: '+', fuori: ' ', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'MONZA' },
//     //* 2
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'GENOA' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'SASSUOLO' },
//     //* 3
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'TORINO' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'MILAN' },
//     //* 4
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'FROSINONE' },
//     //* 5
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'INTER' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'CAGLIARI' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'FIORENTINA' },
//     //* 2
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'TORINO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'INTER' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'FROSINONE' },
//     //* 3
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'MILAN' },
//     //* 4
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'CAGLIARI' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'NAPOLI' },
// ];