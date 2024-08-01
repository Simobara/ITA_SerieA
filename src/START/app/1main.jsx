import LogoAtalanta from '../otherss/assets/0LogoSquadre/Atalanta.png';
import LogoInter from '../otherss/assets/0LogoSquadre/Inter.png';
import LogoJuve from '../otherss/assets/0LogoSquadre/Juve.png';
import LogoMilan from '../otherss/assets/0LogoSquadre/Milan.png';
import LogoNapoli from '../otherss/assets/0LogoSquadre/Napoli.png';
import LogoRoma from '../otherss/assets/0LogoSquadre/Roma.png';
//*--- ---- ---
import LogoBologna from '../otherss/assets/0LogoSquadre/Bologna.png';
import LogoFiorentina from '../otherss/assets/0LogoSquadre/Fiorentina.png';
import LogoGenoa from '../otherss/assets/0LogoSquadre/Genoa.png';
import LogoLazio from '../otherss/assets/0LogoSquadre/Lazio.png';
import LogoTorino from '../otherss/assets/0LogoSquadre/Torino.png';
import LogoUdinese from '../otherss/assets/0LogoSquadre/Udinese.png';
//*--- ---- ---
import LogoCagliari from '../otherss/assets/0LogoSquadre/Cagliari.png';
import LogoComo from '../otherss/assets/0LogoSquadre/Como.png';
import LogoEmpoli from '../otherss/assets/0LogoSquadre/Empoli.png';
import LogoLecce from '../otherss/assets/0LogoSquadre/Lecce.png';
import LogoMonza from '../otherss/assets/0LogoSquadre/Monza.png';
import LogoParma from '../otherss/assets/0LogoSquadre/Parma.png';
import LogoVenezia from '../otherss/assets/0LogoSquadre/Venezia.png';
import LogoVerona from '../otherss/assets/0LogoSquadre/Verona.png';
//?--- --- --- --- --- --- --- --- --- ---AGGIORNA SQUADRE E A+B E GLI ANNI DI +1(Consct)
//?NB note: 2 delle squadre medie fanno A, 1 va B. 1 della B rimane in A 2+ anni. 3 va B.

export const nomiSquadre = {
    Int:    { name: 'Inter',      isTeam: 'A',     AnniA: { Consct: 95, Ult: 1930 },       logo: LogoInter,        style: {top: '10.6%', left: '22.7%' },    link: ''},
    Juv:    { name: 'Juve',       isTeam: 'A',     AnniA: { Consct: 17, Ult: 2008 },       logo: LogoJuve,         style: {top: '16.7%', left: '10.7%' },    link: ''},
    Mil:    { name: 'Milan',      isTeam: 'A',     AnniA: { Consct: 41, Ult: 1984 },       logo: LogoMilan,        style: {top: '10.6%', left: '22.7%' },    link: ''},
    Ata:    { name: 'Atalanta',   isTeam: 'A',     AnniA: { Consct: 13, Ult: 2012 },       logo: LogoAtalanta,     style: {top: '7%',    left: '26.6%' },    link: ''},
    Nap:    { name: 'Napoli',     isTeam: ' ',     AnniA: { Consct: 17, Ult: 2008 },       logo: LogoNapoli,       style: {top: '83%',   left: '62%'   },    link: ''},
    Rom:    { name: 'Roma',       isTeam: 'A',     AnniA: { Consct: 72, Ult: 1953 },       logo: LogoRoma,         style: {top: '66.8%', left: '48.2%' },    link: ''},
    //*--- ---- ---
    Laz:    { name: 'Lazio',      isTeam: '',      AnniA: { Consct: 36, Ult: 1989 },       logo: LogoLazio,        style: {top: '66.8%', left: '48.2%' },    link: ''},
    Udi:    { name: 'Udinese',    isTeam: 'B',     AnniA: { Consct: 29, Ult: 1996 },       logo: LogoUdinese,      style: {top: '0.8%',  left: '54.3%' },    link: ''},
    Fio:    { name: 'Fiorentina', isTeam: '',      AnniA: { Consct: 20, Ult: 2005 },       logo: LogoFiorentina,   style: {top: '36.9%', left: '38.6%' },    link: ''},
    Tor:    { name: 'Torino',     isTeam: '',      AnniA: { Consct: 12, Ult: 2013 },       logo: LogoTorino,       style: {top: '16.7%', left: '10.7%' },    link: ''},
    Bol:    { name: 'Bologna',    isTeam: 'A',     AnniA: { Consct:  9, Ult: 2016 },       logo: LogoBologna,      style: {top: '26%',   left: '39.5%' },    link: ''},
    //*--- ---- ---
    Ver:    { name: 'Verona',     isTeam: 'B',     AnniA: { Consct:  5, Ult: 2020 },       logo: LogoVerona,       style: {top: '11.1%', left: '36.5%' },    link: ''},
    Emp:    { name: 'Empoli',     isTeam: 'B',     AnniA: { Consct:  3, Ult: 2022 },       logo: LogoEmpoli,       style: {top: '38%',   left: '36.4%' },    link: ''},
    Mon:    { name: 'Monza',      isTeam: 'B',     AnniA: { Consct:  2, Ult: 2023 },       logo: LogoMonza,        style: {top: '8%',    left: '23.5%' },    link: ''},
    Lec:    { name: 'Lecce',      isTeam: 'B',     AnniA: { Consct:  2, Ult: 2023 },       logo: LogoLecce,        style: {top: '88%',   left: '93.4%' },    link: ''},
    Cag:    { name: 'Cagliari',   isTeam: 'B',     AnniA: { Consct:  1, Ult: 2024 },       logo: LogoCagliari,     style: {top: '91%',   left: '21.6%' },    link: ''},
    Gen:    { name: 'Genoa',      isTeam: '',      AnniA: { Consct:  1, Ult: 2024 },       logo: LogoGenoa,        style: {top: '26.9%', left: '20.5%' },    link: ''},
    Par:    { name: 'Parma',      isTeam: '',      AnniA: { Consct:  0, Ult: 2025 },       logo: LogoParma,        style: {top: '23.5%',  left: '31.5%'},    link: ''},
    Com:    { name: 'Como',       isTeam: 'B',     AnniA: { Consct:  0, Ult: 2025 },       logo: LogoComo,         style: {top: '3.6%',   left: '22.5%'},    link: ''},
    Ven:    { name: 'Venezia',    isTeam: 'B',     AnniA: { Consct:  0, Ult: 2025 },       logo: LogoVenezia,      style: {top: '11.1%', left: '46.5%' },    link: ''}, 
    //SERIE B
    // Sal: { name: 'Salernitana',isTeam: 'B',     AnniA: { Consct:  2, Ult: 2022 },       logo: LogoSalernitana,  style: {top: '85.9%', left: '66.6%' },    link: ''},
    // Sas: { name: 'Sassuolo',   isTeam: '',      AnniA: { Consct: 10, Ult: 2014 },       logo: LogoSassuolo,     style: {top: '25%',   left: '35%'   },    link: ''},
    // Fro: { name: 'Frosinone',  isTeam: 'B',     AnniA: { Consct:  0, Ult: 2024 },       logo: LogoFrosinone,    style: {top: '70.6%', left: '55%'   },    link: ''},
};
//! -------------------------------------------------------------------------------------- -------------------------------------------
export const SqEndGruppo1 = 6; //taglio della fine prima linea
export const SqEndGruppo2 = 12; //taglio della fine seconda linea
//! -------------------------------------------------------------------------------------- -------------------------------------------