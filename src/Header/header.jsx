import React, { useState } from "react";
import LogoSerieA from "../Body/PagCalendar/assts/LogoItaSerieA.png";
import PagCalendar from "../Body/PagCalendar/pagCalendar";
import PagCoppaIta from "../Body/PagCoppaIta/pagCoppaIta";

import Calendar from "./assts/Calendar.png";
import LogoCoppaItalia from "./assts/LogoCoppaItalia.png";
import ItaliaDelCalcio from "./assts/LogoItaliaDelCalcio.png";
import "./header.css";

const Header = () => {
  const openLink1 = () => {
    window.open(
      "https://www.snai.it/sport/CALCIO/SERIE%20A",
      "_blank",
      "noopener,noreferrer"
    );
    window.open(
      "https://www.tuttosport.com/live/calendario-serie-a",
      "_blank",
      "noopener,noreferrer"
    );
    window.open(
      "http://www.italiadelcalcio.it/i010100.htm",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const [showModalCal, setShowModalCal] = useState(false);
  const [showModalCoppaIta, setShowModalCoppaIta] = useState(false);

  const toggleModalCal = () => {
    setShowModalCal((prev) => !prev);
  };
  const toggleModalCoppaIta = () => {
    setShowModalCoppaIta((prev) => !prev);
  };

  return (
    <header>
      <div className="flex flex-grow items-center w-full bg-sky-900/60">
        <img
          src={LogoSerieA}
          alt="Calendar"
          className="mr-2"
          style={{ width: "50px", height: "auto" }}
        />
        <div className="flex-grow flex justify-center items-center">
          <div>
            <button
              className="bg-black text-blue-900 rounded flex items-center justify-center animate-gradient"
              onClick={openLink1}
            >
              <img
                src={ItaliaDelCalcio}
                alt="Italia del Calcio"
                className="mr-4"
                style={{ width: "30px", height: "auto" }}
              />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleModalCal}>
              <img
                src={Calendar}
                alt="Calendar"
                style={{ width: "35px", height: "35px" }}
              />
            </button>
            <button onClick={toggleModalCoppaIta}>
              <img
                src={LogoCoppaItalia}
                alt="CoppaItalia"
                style={{ width: "35px", height: "35px" }}
              />
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
