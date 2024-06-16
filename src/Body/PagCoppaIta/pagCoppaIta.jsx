import React 				from 'react';
import LogoSfondoTabellone 	from './asst/LogoSfondoTabellone.png';
import LogoCoppaItaHeader 	from './asst/LogoCoppaItaHeader.png';
import Colonne 				from './Colonne/colonne';

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
		<div className="fixed inset-0 flex items-end justify-end mb-2 z-50 bg-gray-900 bg-opacity-50">
			<div className="relative w-full h-[95vh] shadow-xxxl rounded-lg overflow-x-hidden overflow-y-auto border-4 border-sky-900 bg-black">
				<div className="absolute top-0 left-0 right-0 bg-gray-950 z-20">
					<button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
						X
					</button>
				</div>
				<div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-[1500px] max-h-[950px]">
					<div className="absolute inset-0 bg-cover bg-no-repeat brightness-[40%]" style={{ backgroundImage: `url(${LogoSfondoTabellone})` }}></div>
					<div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-[95rem] max-w-[1555px] h-[82%] grid grid-cols-11 gap-4 px-6 ">
						{colonneVoci.map((column) => (
							<Colonne key={column.id} colonneTitle={column.title} colonneIdN={column.IdN} />
						))}
					</div>
					<div className="absolute top-15 left-1/2 transform -translate-x-1/2 w-full max-w-[1495px] h-[120px] mt-7" style={{ backgroundImage: `url(${LogoCoppaItaHeader})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
				</div>
			</div>
		</div>
	);
};

export default PagCoppaIta;
