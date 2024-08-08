import React from "react";

const ModalModCurrGiornClou = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-start justify-start z-50 bg-gray-900 bg-opacity-50 pl-[15rem]">
        <div className="relative w-full h-full max-w-[600px] max-h-[600px] shadow-xxxl rounded-lg border-4 border-sky-900 bg-black overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-gray-950 z-20">
            <button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
              X
            </button>
          </div>
          <div className="relative w-full h-full pb-2 pt-[75px]">
            <div className="text-white">modalModCurrGiornClou</div>
            <div className="text-white">SAVE BUTTON = PARTE LA RICHIESTA AL DATABASE</div>
            <div className="text-white">CONTROLLA CHE TUTTI I DATI PRESENTI ALTRIMENTI ROSSO </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalModCurrGiornClou;
