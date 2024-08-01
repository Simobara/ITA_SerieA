import { motion } from "framer-motion";
import { useState } from "react";

const Calendario = () => {
  const TOTAL_NUMBERS = 38;
  const numeri = Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1);

  const [numeroCliccato, setNumeroCliccato] = useState(null);
  const [mouseInLeft, setMouseInLeft] = useState(false);

  const minNumeroDaVisualizzare = Math.max(numeroCliccato - 4, 1);
  const maxNumeroDaVisualizzare = Math.min(numeroCliccato + 4, numeri.length);
  const numeriDaVisualizzare = numeri.slice(
    minNumeroDaVisualizzare - 1,
    maxNumeroDaVisualizzare
  );

  const getBackgroundColor = (numero, positionFromYellow) => {
    if (numero === 19) return "bg-red-500";
    if (numero === 20) return "bg-green-500";
    if (positionFromYellow === 0)
      return "bg-black text-white font-extrabold text-3xl";
    if (positionFromYellow === 1)
      return "bg-blue-800 text-white font-bold text-lg";
    if (positionFromYellow === 2) return "bg-blue-500 text-white ";
    if (positionFromYellow === 3) return "bg-blue-200 text-transparent";
    if (positionFromYellow === 4) return "bg-transparent border-dashed";
    return "bg-blue-500";
  };
  // const getTextColor = (numero, positionFromYellow) => {
  //     const specialColors = [19, 20, 0, 2, -2, 3, -3];
  //     return specialColors.includes(numero) || specialColors.includes(positionFromYellow) ? 'text-black' : 'text-black';
  //     : 'text-white';
  //     };

  // eslint-disable-next-line
  const getMarginTop = (positionFromYellow) => {
    const marginTops = {
      4: "-20px",
      3: "16px",
      2: "38px",
      1: "46px",
      0: "50px",
    };
    return marginTops[positionFromYellow];
  };
  // eslint-disable-next-line
  const NumeroCasella = ({
    numero = 0,
    numeroCliccato = null,
    onClick = () => {},
  }) => {
    const positionFromYellow = Math.abs(numero - numeroCliccato);
    const backgroundColor = getBackgroundColor(numero, positionFromYellow);
    // eslint-disable-next-line
    // const textColor = getTextColor(numero, positionFromYellow);

    let scaleValue;
    if (numero === numeroCliccato) {
      scaleValue = 3.5;
    } else if (positionFromYellow === 1) {
      scaleValue = 1.5;
    } else {
      // eslint-disable-next-line
      scaleValue = 1.2;
    }

    return (
      <motion.div
        initial={{ scale: 1.5 }}
        whileHover={{
          // scale: 1.7,
          x: mouseInLeft ? 0 : -10,
          y: mouseInLeft ? 10 : -10,
          transition: {
            type: "ease-in",
            stiffness: 200,
            damping: 40,
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 1.8,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.2,
          },
        }}
        className={`w-10 h-10 text-center cursor-pointer border-black border-2 rounded-full transform transition-all ease-in-out ${backgroundColor}`}
        style={{
          boxShadow: "-5px 5px 5px rgba(21, 54, 153, .8)",
          overflow: "hidden",
        }}
        onMouseEnter={() => setMouseInLeft(true)}
        onMouseLeave={() => setMouseInLeft(false)}
        onClick={onClick}
      >
        <div
          className={`w-10 h-10 relative rounded-full flex items-center justify-center transition-all ${positionFromYellow === 4 ? "blur bg-transparent" : ""}`}
        >
          {positionFromYellow !== 4 && numero}
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      {/* <div className="flex space-x-8">
                {numeriDaVisualizzare.map((numero, index) => (
                    <NumeroCasella
                        key={index}
                        numero={numero}
                        numeroCliccato={numeroCliccato}
                        onClick={() => setNumeroCliccato(numero)}
                    />
                ))}
            </div>
            <hr className="border-t-4 border-white w-full mt-7" /> */}
    </div>
  );
};

export default Calendario;
