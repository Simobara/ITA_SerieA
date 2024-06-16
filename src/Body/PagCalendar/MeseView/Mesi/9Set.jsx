import React, { useState, useEffect } from "react";
import { currentYear } from "../../../START/app/0SerieAMatches";
import { DateIncontri } from "../../../START/app/main";
import { generateMonthDays } from "../../FunctCalcolo/0CalcCalend";
import LogoItaSerieA from "../../../Body/assts/LogoItaSerieA.png";
import LogoItaCoppaItalia from "../../../Body/assts/LogoItaCoppaItalia.png";
import LogoEuroChampionsLeague from "../../../Body/assts/LogoEuroChampionsLeague.png";
import LogoEuroEuropaLeague from "../../../Body/assts/LogoEuroEuropaLeague.png";
import LogoNazionale from "../../../Body/assts/LogoNazionale.png";

const MeseSettembre = () => {
  const currentMonth = "Settembre";
  const [daysInCurrentMonth, setDaysInCurrentMonth] = useState([]);

  useEffect(() => {
    const days = generateMonthDays(currentYear, currentMonth);
    setDaysInCurrentMonth(days);
  }, []);

  return (
    <>
      {daysInCurrentMonth.map((day, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between border-b border-gray-700 text-gray-500 font-lg py-2 ${day.isWeekend ? "bg-sky-950" : ""}`}
        >
          <span className="text-left ">{day.dayName}</span>
          <span className="absolute left-[20%] ">{day.dayNumber}</span>
          {DateIncontri[currentMonth].ItaSerieA?.includes(day.dayNumber) && (
            <img
              src={LogoItaSerieA}
              alt="Logo Serie A"
              className=" absolute w-5 h-full mr-0 right-[0px]"
            />
          )}
          {DateIncontri[currentMonth].ItaCoppaItalia?.includes(
            day.dayNumber
          ) && (
            <img
              src={LogoItaCoppaItalia}
              alt="Logo Ita Coppa Italia"
              className=" absolute w-5 h-full mr-1 right-[15px]"
            />
          )}

          {DateIncontri[currentMonth].EuroChampionsLeague?.includes(
            day.dayNumber
          ) && (
            <img
              src={LogoEuroChampionsLeague}
              alt="Logo Euro Champions League"
              className=" absolute w-5 h-full mr-1 top:[10px] right-[33px]"
            />
          )}
          {DateIncontri[currentMonth].EuroEuropaLeague?.includes(
            day.dayNumber
          ) && (
            <img
              src={LogoEuroEuropaLeague}
              alt="Logo Euro Europa League"
              className=" absolute w-5 h-full mr-1 top:[10px] right-[43px]"
            />
          )}
          {DateIncontri[currentMonth].EuroEuropaLeague?.includes(
            day.dayNumber
          ) && (
            <img
              src={LogoEuroEuropaLeague}
              alt="Logo Euro Europa League"
              className=" absolute w-5 h-full mr-1 top:[10px] right-[43px]"
            />
          )}

          {DateIncontri[currentMonth].Nazionale?.includes(day.dayNumber) && (
            <img
              src={LogoNazionale}
              alt="Logo Nazionale"
              className=" absolute w-5 h-full mr-1 top:[10px] right-[43px]"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default MeseSettembre;
