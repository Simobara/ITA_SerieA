import { useDrop } from 'react-dnd';

//eslint-disable-next-line
const Placeholder = ({ day, movePartita }) => {
    const [, drop] = useDrop({
        accept: 'PARTITA',
        drop: (item) => {
            movePartita(item.day, day, item.numero);
        }
    });

    return (
        <div ref={drop} className="mx-auto flex justify-center items-center w-[60rem] max-w-[60vh] border-dashed border-2 border-gray-400 h-16">
            Trascina qui per aggiungere
        </div >
    );
};

export default Placeholder