import axios from "axios";
import React, { useContext, useState } from "react";
import { GiornataNContext } from "../Ap/Global/global";
import LogoSerieA from "../Body/PagCalendar/assts/LogoItaSerieA.png";
import PagCalendar from "../Body/PagCalendar/pagCalendar";
import PagCoppaIta from "../Body/PagCoppaIta/pagCoppaIta";
import Calendar from "./assts/Calendar.png";
import LogoCoppaItalia from "./assts/LogoCoppaItalia.png";
import ItaliaDelCalcio from "./assts/LogoItaliaDelCalcio.png";

import { openLinks } from "../START/link/linkEsterni";
import "./header.css";

const Header = () => {
  const totaleGiornate = 38;
  const [showModalCal, setShowModalCal] = useState(false);
  const [showModalCoppaIta, setShowModalCoppaIta] = useState(false);
  const { giornataN, setGiornataN } = useContext(GiornataNContext);

  const openLink1 = () => openLinks();

  const toggleModalCal = () => {
    setShowModalCal((prev) => !prev);
  };

  const toggleModalCoppaIta = () => {
    setShowModalCoppaIta((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Giornata attuale: ${giornataN}`);
    try {
      const response = await axios.post("http://localhost:5000/api/giornate/clou", { numero: giornataN });
      console.log("Giornata clou aggiornata:", response.data);
      // Puoi aggiornare lo stato o eseguire altre azioni necessarie qui
    } catch (error) {
      console.error("Errore durante l'aggiornamento della giornata clou:", error);
    }
  };

  const handleChange = (e) => {
    setGiornataN(Number(e.target.value));
  };

  return (
    <header>
      <div className="flex h-[4rem] w-[100%] items-center bg-slate-950">
        <img src={LogoSerieA} alt="Calendar" className="mr-2" style={{ width: "50px", height: "auto" }} />
        <div className="flex-grow flex justify-start items-center">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <select value={giornataN} onChange={handleChange} className="px-8 py-1 rounded">
              {Array.from({ length: totaleGiornate }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
              Set
            </button>
          </form>
          <div className="flex items-center space-x-4 ml-[15%] sm:ml-[35%]">
            <button className="bg-black text-blue-900 rounded flex items-center justify-center animate-gradient" onClick={openLink1}>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
