import LogoAtalanta from '../assets/0LogoSquadre/Atalanta.png';
import LogoInter from '../assets/0LogoSquadre/Inter.png';
import LogoJuve from '../assets/0LogoSquadre/Juve.png';
import LogoMilan from '../assets/0LogoSquadre/Milan.png';
import LogoNapoli from '../assets/0LogoSquadre/Napoli.png';
import LogoRoma from '../assets/0LogoSquadre/Roma.png';
//*--- ---- ---
import LogoBologna from '../assets/0LogoSquadre/Bologna.png';
import LogoFiorentina from '../assets/0LogoSquadre/Fiorentina.png';
import LogoGenoa from '../assets/0LogoSquadre/Genoa.png';
import LogoLazio from '../assets/0LogoSquadre/Lazio.png';
import LogoTorino from '../assets/0LogoSquadre/Torino.png';
import LogoUdinese from '../assets/0LogoSquadre/Udinese.png';
//*--- ---- ---
import LogoCagliari from '../assets/0LogoSquadre/Cagliari.png';
import LogoComo from '../assets/0LogoSquadre/Como.png';
import LogoEmpoli from '../assets/0LogoSquadre/Empoli.png';
import LogoLecce from '../assets/0LogoSquadre/Lecce.png';
import LogoMonza from '../assets/0LogoSquadre/Monza.png';
import LogoParma from '../assets/0LogoSquadre/Parma.png';
import LogoVenezia from '../assets/0LogoSquadre/Venezia.png';
import LogoVerona from '../assets/0LogoSquadre/Verona.png';

//?--- --- --- --- --- --- --- --- --- ---AGGIORNA SQUADRE E A+B E GLI ANNI DI +1(Consct)
//?NB note: 2 delle squadre medie fanno A, 1 va B. 1 della B rimane in A 2+ anni. 3 va B.

export const nomiSquadre = {
    Int:    { name: 'Inter',      isTeam: 'A',     AnniA: { Consct: 95, Ult: 1930 },       logo: LogoInter,        style: {top: '7.6%',  left: '22.7%' },    link: ''},
    Juv:    { name: 'Juve',       isTeam: 'A',     AnniA: { Consct: 17, Ult: 2008 },       logo: LogoJuve,         style: {top: '10.7%', left: '10.7%' },    link: ''},
    Mil:    { name: 'Milan',      isTeam: 'A',     AnniA: { Consct: 41, Ult: 1984 },       logo: LogoMilan,        style: {top: '7.6%',  left: '22.7%' },    link: ''},
    Ata:    { name: 'Atalanta',   isTeam: 'A',     AnniA: { Consct: 13, Ult: 2012 },       logo: LogoAtalanta,     style: {top: '5%',    left: '26%'   },    link: ''},
    Nap:    { name: 'Napoli',     isTeam: ' ',     AnniA: { Consct: 17, Ult: 2008 },       logo: LogoNapoli,       style: {top: '55%',   left: '63%'   },    link: ''},
    Rom:    { name: 'Roma',       isTeam: 'A',     AnniA: { Consct: 72, Ult: 1953 },       logo: LogoRoma,         style: {top: '45.4%', left: '48.8%' },    link: ''},
    //*--- ---- ---
    Laz:    { name: 'Lazio',      isTeam: '',      AnniA: { Consct: 36, Ult: 1989 },       logo: LogoLazio,        style: {top: '45.4%', left: '48.8%' },    link: ''},
    Udi:    { name: 'Udinese',    isTeam: 'B',      AnniA: { Consct: 29, Ult: 1996 },       logo: LogoUdinese,      style: {top: '1%',    left: '55%'   },    link: ''},
    Fio:    { name: 'Fiorentina', isTeam: '',      AnniA: { Consct: 20, Ult: 2005 },       logo: LogoFiorentina,   style: {top: '25%',   left: '38%'   },    link: ''},
    Tor:    { name: 'Torino',     isTeam: '',     AnniA: { Consct: 12, Ult: 2013 },       logo: LogoTorino,       style: {top: '10.7%', left: '10.7%' },    link: ''},
    Bol:    { name: 'Bologna',    isTeam: 'A',     AnniA: { Consct:  9, Ult: 2016 },       logo: LogoBologna,      style: {top: '17.5%', left: '39.5%' },    link: ''},
    //*--- ---- ---
    Ver:    { name: 'Verona',     isTeam: 'B',     AnniA: { Consct:  5, Ult: 2020 },       logo: LogoVerona,       style: {top: '7.1%',  left: '36.5%' },    link: ''},
    Emp:    { name: 'Empoli',     isTeam: 'B',     AnniA: { Consct:  3, Ult: 2022 },       logo: LogoEmpoli,       style: {top: '26.5%', left: '37%'   },    link: ''},
    Mon:    { name: 'Monza',      isTeam: 'B',     AnniA: { Consct:  2, Ult: 2023 },       logo: LogoMonza,        style: {top: '6%',    left: '23.5%' },    link: ''},
    Lec:    { name: 'Lecce',      isTeam: 'B',     AnniA: { Consct:  2, Ult: 2023 },       logo: LogoLecce,        style: {top: '61%',   left: '93.5%' },    link: ''},
    Cag:    { name: 'Cagliari',   isTeam: 'B',     AnniA: { Consct:  1, Ult: 2024 },       logo: LogoCagliari,     style: {top: '61.5%', left: '22%'   },    link: ''},
    Gen:    { name: 'Genoa',      isTeam: '',      AnniA: { Consct:  1, Ult: 2024 },       logo: LogoGenoa,        style: {top: '17.9%', left: '20.5%' },    link: ''},
    Par:    { name: 'Parma',      isTeam: '',      AnniA: { Consct:  0, Ult: 2025 },       logo: LogoParma,        style: {top: '15.5%', left: '31.5%' },    link: ''},
    Com:    { name: 'Como',       isTeam: 'B',     AnniA: { Consct:  0, Ult: 2025 },       logo: LogoComo,         style: {top: '3.6%',  left: '22.5%' },    link: ''},
    Ven:    { name: 'Venezia',    isTeam: 'B',     AnniA: { Consct:  0, Ult: 2025 },       logo: LogoVenezia,      style: {top: '7.1%',  left: '46.5%' },    link: ''}, 
    
    //const SerieB={
        // Sal: { name: 'Salernitana',isTeam: 'B',     AnniA: { Consct:  2, Ult: 2022 },       logo: LogoSalernitana,  style: {top: '85.9%', left: '66.6%' },    link: ''},
        // Sas: { name: 'Sassuolo',   isTeam: '',      AnniA: { Consct: 10, Ult: 2014 },       logo: LogoSassuolo,     style: {top: '25%',   left: '35%'   },    link: ''},
        // Fro: { name: 'Frosinone',  isTeam: 'B',     AnniA: { Consct:  0, Ult: 2024 },       logo: LogoFrosinone,    style: {top: '70.6%', left: '55%'   },    link: ''},
    //}  
};
//! -------------------------------------------------------------------------------------- -------------------------------------------
export const SqEndGruppo1 = 6; //taglio della fine prima linea
export const SqEndGruppo2 = 12; //taglio della fine seconda linea
export const ItalianeInChampions = 5;
export const ItalianeInEuropaLeague = 2;
//! -------------------------------------------------------------------------------------- -------------------------------------------