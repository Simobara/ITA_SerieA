import TrentaduesimoA	from './Disposiz/1Trentaduesimi/1TrentaduesimoA';
import TrentaduesimoB	from './Disposiz/1Trentaduesimi/1TrentaduesimoB';
import SedicesimoA 		from './Disposiz/2Sedicesimi/2SedicesimoA';
import SedicesimoB 		from './Disposiz/2Sedicesimi/2SedicesimoB';
import OttavoA 			from './Disposiz/3Ottavi/3OttavoA';
import OttavoB 			from './Disposiz/3Ottavi/3OttavoB';
import QuartoA 			from './Disposiz/4Quarti/4QuartoA';
import QuartoB 			from './Disposiz/4Quarti/4QuartoB';
import SemifinaleA 		from './Disposiz/5Semifinali/5SemifinaleA';
import SemifinaleB 		from './Disposiz/5Semifinali/5SemifinaleB';
import Finale 			from './Disposiz/6Finale/6Finale';


const Colonne = ({ colonneTitle, colonneIdN }) => {

	return (
		<div className="relative col-span-1 bg-transparent text-gray-400 font-bold text-sm flex flex-col h-full w-[110px]">
			<div className="mt-2 mb-2 text-center z-20 pt-0">{colonneTitle}</div>
			<div className="flex flex-col items-start justify-start flex-grow ">
				{(colonneTitle === 'TRENTADUESIMI' 		&& colonneIdN ===  '1') &&	<TrentaduesimoA		/>}
				{(colonneTitle === 'SEDICESIMI' 		&& colonneIdN ===  '2') &&	<SedicesimoA 		/>}
				{(colonneTitle === 'OTTAVI' 			&& colonneIdN ===  '3') && 	<OttavoA			/>}
				{(colonneTitle === 'QUARTI' 			&& colonneIdN ===  '4') && 	<QuartoA 			/>}
				{(colonneTitle === 'SEMIFINALI' 		&& colonneIdN ===  '5') &&	<SemifinaleA 		/>}
				{(colonneTitle === 'FINALE'				&& colonneIdN ===  '6') && 	<Finale 			/>}
			</div>
			<div className="flex flex-col items-end justify-end flex-grow">
				{(colonneTitle === 'SEMIFINALI' 		&& colonneIdN ===  '7') &&	<SemifinaleB 		/>}
				{(colonneTitle === 'QUARTI' 			&& colonneIdN ===  '8') && 	<QuartoB 			/>}
				{(colonneTitle === 'OTTAVI' 			&& colonneIdN ===  '9') && 	<OttavoB 			/>}
				{(colonneTitle === 'SEDICESIMI' 		&& colonneIdN === '10') &&	<SedicesimoB 		/>}
				{(colonneTitle === 'TRENTADUESIMI' 		&& colonneIdN === '11') &&	<TrentaduesimoB 	/>}
			</div>
		</div>
	);
};

export default Colonne;
