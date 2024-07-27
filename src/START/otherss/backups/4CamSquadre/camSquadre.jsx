// // import { LogoSquadre } from '../1ImportLogoSquadre/logoSquadre';
// import { nomiSquadre } from '../../app/main'
// import { calendario } from '../../app/matches';
// import { calcolaPuntiSquadra } from '../../functions/functions';
// import { creaRisultatiSquadra } from '../../functions/functions';

// // const camSquadre = { 
// // 	camInter: 		 creaRisultatiSquadra(calendario, nomiSquadre.Int.name),
// // 	camJuve: 			 creaRisultatiSquadra(calendario, nomiSquadre.Juv.name),
// // 	camMilan:			 creaRisultatiSquadra(calendario, nomiSquadre.Mil.name),
// // 	camAtalanta: 	 creaRisultatiSquadra(calendario, nomiSquadre.Ata.name),
// // 	camNapoli: 		 creaRisultatiSquadra(calendario, nomiSquadre.Nap.name),
// // 	camRoma: 			 creaRisultatiSquadra(calendario, nomiSquadre.Rom.name),
// // 	camLazio: 		 creaRisultatiSquadra(calendario, nomiSquadre.Laz.name),

// // 	camBologna: 	 creaRisultatiSquadra(calendario, nomiSquadre.Bol.name),
// // 	camFiorentina: creaRisultatiSquadra(calendario, nomiSquadre.Fio.name),
// // 	camTorino: 		 creaRisultatiSquadra(calendario, nomiSquadre.Tor.name),
// // 	camUdinese: 	 creaRisultatiSquadra(calendario, nomiSquadre.Udi.name),
// // 	camGenoa: 		 creaRisultatiSquadra(calendario, nomiSquadre.Gen.name),
	
// // 	camMonza: 		 creaRisultatiSquadra(calendario, nomiSquadre.Mon.name),
// // 	camSassuolo: 	 creaRisultatiSquadra(calendario, nomiSquadre.Sas.name),
// // 	camFrosinone:  creaRisultatiSquadra(calendario, nomiSquadre.Fro.name),
// // 	camLecce: 		 creaRisultatiSquadra(calendario, nomiSquadre.Lec.name),
// // 	camCagliari: 	 creaRisultatiSquadra(calendario, nomiSquadre.Cag.name),
// // 	camEmpoli: 		 creaRisultatiSquadra(calendario, nomiSquadre.Emp.name),
// // 	camVerona:		 creaRisultatiSquadra(calendario, nomiSquadre.Ver.name),
// // 	camSalernitana:creaRisultatiSquadra(calendario, nomiSquadre.Sal.name),
// // };
// // export { camSquadre };


// const squadrePunt = [
// 	{ logo: nomiSquadre.Int.logo, 			nome: nomiSquadre.Int.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Int.name)) 			},
// 	{ logo: nomiSquadre.Juv.logo, 			nome: nomiSquadre.Juv.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Juv.name)) 			},
// 	{ logo: nomiSquadre.Mil.logo, 			nome: nomiSquadre.Mil.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Mil.name))			},
// 	{ logo: nomiSquadre.Ata.logo, 			nome: nomiSquadre.Ata.name,			 	punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Ata.name))			},
// 	{ logo: nomiSquadre.Nap.logo, 			nome: nomiSquadre.Nap.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Nap.name))	 		},
// 	{ logo:	nomiSquadre.Rom.logo, 			nome: nomiSquadre.Rom.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Rom.name)) 			},
	
// 	{ logo: nomiSquadre.Laz.logo, 			nome: nomiSquadre.Laz.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Laz.name)) 			},
// 	{ logo: nomiSquadre.Bol.logo, 			nome: nomiSquadre.Bol.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Bol.name))	 		},
// 	{ logo: nomiSquadre.Fio.logo, 			nome: nomiSquadre.Fio.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Fio.name))			},
// 	{ logo: nomiSquadre.Tor.logo, 			nome: nomiSquadre.Tor.name,		 		punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Udi.name)) 			},
// 	{ logo: nomiSquadre.Udi.logo, 			nome: nomiSquadre.Udi.name,		 		punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Udi.name)) 			},
// 	{ logo: nomiSquadre.Gen.logo, 			nome: nomiSquadre.Gen.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Gen.name)) 			},

// 	{ logo: nomiSquadre.Mon.logo, 			nome: nomiSquadre.Mon.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Mon.name)) 			},
// 	{ logo: nomiSquadre.Sas.logo, 			nome: nomiSquadre.Sas.name,			 	punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Sas.name)) 			},
// 	{ logo: nomiSquadre.Fro.logo, 			nome: nomiSquadre.Fro.name,			 	punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Fro.name)) 			},
// 	{ logo: nomiSquadre.Lec.logo, 			nome: nomiSquadre.Lec.name, 			punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Lec.name)) 			},
// 	{ logo: nomiSquadre.Cag.logo, 			nome: nomiSquadre.Cag.name,			 	punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Cag.name))	 		},
// 	{ logo: nomiSquadre.Emp.logo, 			nome: nomiSquadre.Emp.name,		 		punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Emp.name)) 			},
// 	{ logo: nomiSquadre.Ver.logo, 			nome: nomiSquadre.Ver.name,		 		punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Ver.name)) 			},
// 	{ logo: nomiSquadre.Sal.logo,				nome: nomiSquadre.Sal.name,				punteggio: calcolaPuntiSquadra(creaRisultatiSquadra(calendario, nomiSquadre.Sal.name))		 	}
// ];
// export { squadrePunt } ;