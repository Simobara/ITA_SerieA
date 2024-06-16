import { useState } from 'react';

// eslint-disable-next-line
const ModalInserimento = ({ isOpen, isClose }) => {
	if (!isOpen) return null;
	// eslint-disable-next-line
	const [inputColors, setInputColors] = useState(Array(20).fill('text-gray-200 font-sm')); // Stato per gestire i colori dei campi input.
	// eslint-disable-next-line
	const [inputValues, setInputValues] = useState(['']); // Stato per gestire i valori dei campi input.
	// eslint-disable-next-line
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (index) => (e) => {
		const newValues = [...inputValues];
		newValues[index] = e.target.value;
		setInputValues(newValues);
		const newColors = [...inputColors];
		newColors[index] = e.target.value ? 'text-red-500' : 'text-gray-200';
		setInputColors(newColors);
	};
	const handleSubmit = () => {
		if (inputValues.some((value) => value.trim() === '')) {
			setErrorMessage('Per favore, riempi tutti i campi.');
			return;
		}
		setErrorMessage('');
		// Implementa qui la logica di invio dei dati.
		// ...
		// Dopo l'invio, chiudi il modal.
		isClose();
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-5 rounded relative w-[30%] max-w-[100rem]">
				<button onClick={isClose} className="absolute top-0 right-0 m-2 text-red-500 text-5xl font-bold" style={{ outline: 'none' }}>
					&#10005; {/* Carattere speciale per la croce */}
				</button>
				<div className="mt-[10%] flex border border-8 rounded-2xl border-blue-500 mx-4">
					{' '}
					{/* Contenitore Flex */}
					<div className="flex flex-row mx-8">
						<div className="flex-1">
							<p className="text-center font-bold text-black text-2xl">CASA</p>
							{Array.from({ length: 10 }).map((_, index) => (
								<form key={index} className="mb-2">
									<input type="text" placeholder={`Sq C ${index + 1}`} className={`w-full p-1 border border-gray-300 rounded font-bold text-2xl placeholder-gray-300 ${inputColors[index]}`} onChange={handleInputChange(index)} />
								</form>
							))}
						</div>
						<div className="flex-1">
							<p className="text-center font-bold text-black text-2xl">TRASFERTA</p>
							{Array.from({ length: 10 }).map((_, index) => (
								<form key={index} className="mb-2">
									<input type="text" placeholder={`Sq F ${index + 1}`} className={`w-full p-1 border border-gray-300 rounded font-bold text-2xl placeholder-gray-300 ${inputColors[index]}`} onChange={handleInputChange(index)} />
								</form>
							))}
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-4">
					<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded text-2xl font-extrabold" onClick={handleSubmit}>
						INVIA
					</button>
				</div>
				{errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
			</div>
		</div>
	);
};
export default ModalInserimento;
