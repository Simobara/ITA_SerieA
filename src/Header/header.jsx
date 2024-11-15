import axios from "axios";
import React, { useContext, useState } from "react";
import { GiornataNContext } from "../Ap/Global/global";
import LogoSerieA from "../Body/PagCalendar/assts/LogoItaSerieA.png";
import PagCalendar from "../Body/PagCalendar/pagCalendar";
import PagCoppaIta from "../Body/PagCoppaIta/pagCoppaIta";
import ModalModCurrGiornClou from "./ModalModCurrentGiornClou/modalModCurrGiornClou";
import Calendar from "./assts/Calendar.png";
import LogoCoppaItalia from "./assts/LogoCoppaItalia.png";
import ItaliaDelCalcio from "./assts/LogoItaliaDelCalcio.png";

import { openLinkss } from "../START/link/linkEsterni";
import "./header.css";

const Header = () => {
  const totaleGiornate = 38;
  const [showModalCal, setShowModalCal] = useState(false);
  const [showModalCoppaIta, setShowModalCoppaIta] = useState(false);
  const [showModalModCurrGiornClou, setShowModalModCurrGiornClou] = useState(false);
  // const [giornateClou, setGiornateClou] = useState([]);

  const { giornataN, setGiornataN } = useContext(GiornataNContext);

  const openLinks = () => openLinkss();

  const toggleModalCal = () => {
    setShowModalCal((prev) => !prev);
  };

  const toggleModalCoppaIta = () => {
    setShowModalCoppaIta((prev) => !prev);
  };

  const toggleModalModCurrGiornClou = () => {
    setShowModalModCurrGiornClou((prev) => !prev);
  };

  const handleIncrement = () => {
    setGiornataN((prev) => (prev < totaleGiornate ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setGiornataN((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // const handleChange = (e) => {
  //   setGiornataN(Number(e.target.value));
  // };
  //------------------------------------------------------------------------------------------POST REQUEST GIORNATA CLOU//! CORRETTO
  //ModGiornataClou
  const handleSaveGiornataClou = async (giornataNumber) => {
    console.log(`Dati ricevuti in header.js per giornata ${giornataN}:`, { giornataNumber });

    try {
      // Includi _id se esiste per l'aggiornamento
      const dataToSend = {
        _id: giornataNumber._id, // Aggiungi _id se presente
        giornata: giornataNumber.giornata,
      };

      const response = await axios.post(`${import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV}/api/giornata/${giornataN}`, dataToSend);
      console.log("Risposta dal server:", response.data);
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error);
    }
  };

  //-------------------------------------------------------------------------------------------POST REQUEST GIORNATE CLOU N//! CORRETTO
  //SetGiornataClouN
  const handleSubmitGiornataClouN = async (e) => {
    e.preventDefault();
    console.log(`Giornata attuale numero: ${giornataN}`);
    try {
      const response = await axios.post(`${import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV}/api/giornate/clou/${giornataN}`, {
        numero: giornataN,
      });
      console.log("Giornata clou aggiornata:", response.data);
    } catch (error) {
      console.error("Errore durante l'aggiornamento della giornata clou:", error);
    }
  };
  //--------------------------------------------------------------------------------------------

  return (
    <header>
      <div className="flex h-[4rem] w-[100%] items-center bg-slate-950">
        <img src={LogoSerieA} alt="Calendar" className="mr-2" style={{ width: "50px", height: "auto" }} />
        <div className="flex-grow flex justify-start items-center ">
          <form onSubmit={handleSubmitGiornataClouN} className="flex flex-col items-center bg-slate-900">
            <div className="flex items-center space-x-0">
              <button type="button" onClick={handleDecrement} className="bg-slate-950 text-sky-700 text-2xl px-2 py-1 rounded hover:text-white">
                &lt;
              </button>
              <span className="px-2 text-white">{giornataN}</span>
              <button type="button" onClick={handleIncrement} className="bg-slate-950 text-sky-700 text-2xl px-2 py-1 rounded hover:text-white">
                &gt;
              </button>
            </div>
            <button type="submit" className="bg-slate-900 text-sky-800 px-0 py-1 rounded w-full hover:text-white">
              SetDayClou
            </button>
          </form>
          <div className="mx-1 mb-8 text-white" onClick={toggleModalModCurrGiornClou}>
            📝
          </div>
          <div className="flex items-center space-x-8 ml-[15%] sm:ml-[21%]">
            <button className="bg-black text-blue-900 rounded flex items-center justify-center animate-gradient" onClick={openLinks}>
              <img src={ItaliaDelCalcio} alt="Italia del Calcio" className="mr-0" style={{ width: "30px", height: "auto" }} />
            </button>
            <button onClick={toggleModalCal}>
              <img src={Calendar} alt="Calendar" style={{ width: "35px", height: "35px" }} />
            </button>
            <button onClick={toggleModalCoppaIta}>
              <img src={LogoCoppaItalia} alt="CoppaItalia" style={{ width: "35px", height: "35px" }} />
            </button>

            {showModalCal && <PagCalendar onClose={toggleModalCal} />}
            {showModalCoppaIta && <PagCoppaIta onClose={toggleModalCoppaIta} />}
            {showModalModCurrGiornClou && <ModalModCurrGiornClou onClose={toggleModalModCurrGiornClou} onSave={handleSaveGiornataClou} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
