import React from 'react';
import LogoCoppaItaHeader from './asst/LogoCoppaItaHeader.png';
import LogoSfondoTabellone from './asst/LogoSfondoTabellone.png';
import Colonne from './Colonne/colonne';

export const colonneVoci = [
	{ id:  1, title: 'TRENTADUESIMI',		IdN: '1' },
	{ id:  2, title: 'SEDICESIMI', 			IdN: '2' },	
	{ id:  3, title: 'OTTAVI',				IdN: '3' },
	{ id:  4, title: 'QUARTI', 				IdN: '4' },
	{ id:  5, title: 'SEMIFINALI',			IdN: '5' },
	{ id:  6, title: 'FINALE',				IdN: '6' },
	{ id:  7, title: 'SEMIFINALI',			IdN: '7' },
	{ id:  8, title: 'QUARTI',				IdN: '8' },
	{ id:  9, title: 'OTTAVI',				IdN: '9' },
	{ id: 10, title: 'SEDICESIMI',			IdN:'10' },
	{ id: 11, title: 'TRENTADUESIMI',		IdN:'11' },
];

const PagCoppaIta = ({ onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
			<div className="relative w-full h-full max-w-[1500px] shadow-xxxl rounded-lg border-4 border-sky-900 bg-black overflow-x-auto overflow-y-auto">
				<div className="absolute top-0 left-0 right-0 bg-gray-950 z-20 w-full">
					<button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
						X
					</button>
				</div>
				<div className="relative w-full h-full pb-2 pt-[75px] overflow-x-scroll md:overflow-y-scroll">
					<div className="absolute inset-0 min-w-[1260px] h-full bg-cover bg-no-repeat brightness-[40%]" style={{ backgroundImage: `url(${LogoSfondoTabellone})` }}></div>
					<div className="relative top-[10px] min-w-[1260px] h-[98%] grid grid-cols-11 gap-0 px-4">
						{colonneVoci.map((column) => (
							<Colonne key={column.id} colonneTitle={column.title} colonneIdN={column.IdN} />
						))}
					</div>
					<div className="absolute top-[4px] w-full min-w-[1260px] h-full mb-7" style={{ backgroundImage: `url(${LogoCoppaItaHeader})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
				</div>
			</div>
		</div>
	);
};

export default PagCoppaIta;
