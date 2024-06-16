import LogoInter 			from '../../assets/0LogoSquadre/Inter.png';
import LogoJuve 			from '../../assets/0LogoSquadre/Juve.png';
import LogoMilan 			from '../../assets/0LogoSquadre/Milan.png';
import LogoAtalanta 		from '../../assets/0LogoSquadre/Atalanta.png';
import LogoNapoli 			from '../../assets/0LogoSquadre/Napoli.png';
import LogoRoma             from '../../assets/0LogoSquadre/Roma.png';
//*--- ---- ---
import LogoLazio 			from '../../assets/0LogoSquadre/Lazio.png';
import LogoBologna 			from '../../assets/0LogoSquadre/Bologna.png';
import LogoFiorentina 	    from '../../assets/0LogoSquadre/Fiorentina.png';
import LogoTorino 			from '../../assets/0LogoSquadre/Torino.png';
import LogoUdinese 			from '../../assets/0LogoSquadre/Udinese.png';
import LogoGenoa            from '../../assets/0LogoSquadre/Genoa.png';
//*--- ---- ---
import LogoSassuolo 		from '../../assets/0LogoSquadre/Sassuolo.png';
import LogoMonza 			from '../../assets/0LogoSquadre/Monza.png';
import LogoFrosinone 		from '../../assets/0LogoSquadre/Frosinone.png';
import LogoLecce 			from '../../assets/0LogoSquadre/Lecce.png';
import LogoCagliari 		from '../../assets/0LogoSquadre/Cagliari.png';
import LogoEmpoli 			from '../../assets/0LogoSquadre/Empoli.png';
import LogoVerona 			from '../../assets/0LogoSquadre/Verona.png';
import LogoSalernitana 	    from '../../assets/0LogoSquadre/Salernitana.png';
//*--- ---- ---
//---dalla serie B
import LogoParma 			from '../../assets/0LogoSquadre/Parma.png';
import LogoComo		 		from '../../assets/0LogoSquadre/Como.png';
import LogoVenezia 			from '../../assets/0LogoSquadre/Venezia.png';

const nomiSquadre = {
    Int:    { name: 'Inter',      isTeam: 'A',          logo: LogoInter,        style: { width: '11px', height: '11px',     top: '10.6%', left: '22.7%' }     },
    Juv:    { name: 'Juve',       isTeam: 'A',          logo: LogoJuve,         style: { width: '11px', height: '11px',     top: '16.7%', left: '10.7%' }     },
    Mil:    { name: 'Milan',      isTeam: 'A',          logo: LogoMilan,        style: { width: '11px', height: '11px',     top: '10.6%', left: '22.7%' }     },
    Ata:    { name: 'Atalanta',   isTeam: 'A',          logo: LogoAtalanta,     style: { width: '11px', height: '11px',     top: '7%',    left: '26.6%' }     },
    Nap:    { name: 'Napoli',     isTeam: 'A',          logo: LogoNapoli,       style: { width: '11px', height: '11px',     top: '83%',   left: '62%'   }     },
    Rom:    { name: 'Roma',       isTeam: 'A',          logo: LogoRoma,         style: { width: '11px', height: '11px',     top: '66.8%', left: '48.2%' }     },
    //*--- ---- ---
    Laz:    { name: 'Lazio',      isTeam: '',           logo: LogoLazio,        style: { width: '11px', height: '11px',     top: '66.8%', left: '48.2%' }     },
    Bol:    { name: 'Bologna',    isTeam: '',           logo: LogoBologna,      style: { width: '11px', height: '11px',     top: '26%',   left: '39.5%' }     },
    Fio:    { name: 'Fiorentina', isTeam: '',           logo: LogoFiorentina,   style: { width: '11px', height: '11px',     top: '36.9%', left: '38.6%' }     },
    Tor:    { name: 'Torino',     isTeam: '',           logo: LogoTorino,       style: { width: '11px', height: '11px',     top: '16.7%', left: '10.7%' }     },
    Udi:    { name: 'Udinese',    isTeam: '',           logo: LogoUdinese,      style: { width: '11px', height: '11px',     top: '0.8%',  left: '54.3%' }     },
    Gen:    { name: 'Genoa',      isTeam: '',           logo: LogoGenoa,        style: { width: '11px', height: '11px',     top: '26.9%', left: '20.5%' }     },
    //*--- ---- ---
    Mon:    { name: 'Monza',      isTeam: 'B',          logo: LogoMonza,        style: { width: '11px', height: '11px',     top: '25%',   left: '35%'   }     },
    Sas:    { name: 'Sassuolo',   isTeam: 'B',          logo: LogoSassuolo,     style: { width: '11px', height: '11px',     top: '25%',   left: '35%'   }     },
    Fro:    { name: 'Frosinone',  isTeam: 'B',          logo: LogoFrosinone,    style: { width: '11px', height: '11px',     top: '70.6%', left: '55%'   }     },
    Lec:    { name: 'Lecce',      isTeam: 'B',          logo: LogoLecce,        style: { width: '11px', height: '11px',     top: '90%',   left: '93.4%' }     },
    Cag:    { name: 'Cagliari',   isTeam: 'B',          logo: LogoCagliari,     style: { width: '11px', height: '11px',     top: '91.3%', left: '21.6%' }     },
    Emp:    { name: 'Empoli',     isTeam: 'B',          logo: LogoEmpoli,       style: { width: '11px', height: '11px',     top: '11.1%', left: '36.5%' }     },
    Ver:    { name: 'Verona',     isTeam: 'B',          logo: LogoVerona,       style: { width: '11px', height: '11px',     top: '38%',   left: '36.4%' }     },
    Sal:    { name: 'Salernitana',isTeam: 'B',          logo: LogoSalernitana,  style: { width: '11px', height: '11px',     top: '85.9%', left: '66.6%' }     }
};
export { nomiSquadre }


export const SqEndGruppo1 = 7; //taglio della fine prima linea
export const SqEndGruppo2 = 12; //taglio della fine seconda linea
