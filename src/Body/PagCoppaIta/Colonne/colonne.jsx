import ATrentaduesimi from './Disposiz/1Trentaduesimi/ATrentaduesimi';
import BTrentaduesimi from './Disposiz/1Trentaduesimi/BTrentaduesimi';
import ASedicesimi from './Disposiz/2Sedicesimi/ASedicesimi';
import BSedicesimi from './Disposiz/2Sedicesimi/BSedicesimi';
import AOttavi from './Disposiz/3Ottavi/AOttavi';
import BOttavi from './Disposiz/3Ottavi/BOttavi';
import AQuarti from './Disposiz/4Quarti/AQuarti';
import BQuarti from './Disposiz/4Quarti/BQuarti';
import ASemifinali from './Disposiz/5Semifinali/ASemifinali';
import BSemifinali from './Disposiz/5Semifinali/BSemifinali';
import Finale from './Disposiz/6Finale/6Finale';


const Colonne = ({ colonneTitle, colonneIdN }) => {

	return (
		<div className="relative col-span-1 bg-transparent text-gray-500 font-bold text-sm flex flex-col h-full w-[110px]">
			<div className="mt-2 mb-2 text-center z-20 pt-0">{colonneTitle}</div>
			<div className="flex flex-col items-start justify-start flex-grow ">
				{(colonneTitle === 'TRENTADUESIMI' 		&& colonneIdN ===  '1') &&	<ATrentaduesimi 	/>}
				{(colonneTitle === 'SEDICESIMI' 		&& colonneIdN ===  '2') &&	<ASedicesimi 		/>}
				{(colonneTitle === 'OTTAVI' 			&& colonneIdN ===  '3') && 	<AOttavi 			/>}
				{(colonneTitle === 'QUARTI' 			&& colonneIdN ===  '4') && 	<AQuarti 			/>}
				{(colonneTitle === 'SEMIFINALI' 		&& colonneIdN ===  '5') &&	<ASemifinali 		/>}
				{(colonneTitle === 'FINALE'				&& colonneIdN ===  '6') && 	<Finale 			/>}
			</div>
			<div className="flex flex-col items-end justify-end flex-grow">
				{(colonneTitle === 'SEMIFINALI' 		&& colonneIdN ===  '7') &&	<BSemifinali 		/>}
				{(colonneTitle === 'QUARTI' 			&& colonneIdN ===  '8') && 	<BQuarti 			/>}
				{(colonneTitle === 'OTTAVI' 			&& colonneIdN ===  '9') && 	<BOttavi 			/>}
				{(colonneTitle === 'SEDICESIMI' 		&& colonneIdN === '10') &&	<BSedicesimi 		/>}
				{(colonneTitle === 'TRENTADUESIMI' 		&& colonneIdN === '11') &&	<BTrentaduesimi 	/>}
			</div>
		</div>
	);
};

export default Colonne;
