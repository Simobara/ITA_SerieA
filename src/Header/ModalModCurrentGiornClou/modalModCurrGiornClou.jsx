import React, { useContext, useEffect, useState } from "react";
import { GiornataClouContext, GiornataNContext } from "../../Ap/Global/global";
import "./modalModCurrGiornClou.css";
import { checkForDuplicatess } from "./zExternal/checkForDuplicates";
import { handleDayChangee, handleTimeChangee } from "./zExternal/handleDayTimeChange";
import { handlePronChangee } from "./zExternal/handlePronChange";
import { handleSaveClickk } from "./zExternal/handleSaveClick";
import { handleTeam1Changee, handleTeam2Changee } from "./zExternal/handleTeamChange";
import { incrementScoree1, incrementScoree2 } from "./zExternal/incrementScore";

const ModalModCurrGiornClou = ({ onClose, onSave }) => {
  const { giornataClouSelected } = useContext(GiornataClouContext);
  const { giornataN } = useContext(GiornataNContext);
  const [partite, setPartite] = useState([...giornataClouSelected]);
  const [squadre, setSquadre] = useState([]); // Nuovo array per le squadre
  const [duplicateTeams, setDuplicateTeams] = useState(new Set()); // Per tracciare i duplicati

  const handleDayChange = (index, value) => handleDayChangee(index, value, partite, setPartite);
  const handleTimeChange = (index, value) => handleTimeChangee(index, value, partite, setPartite);
  const handleTeam1Change = (index, value) => handleTeam1Changee(index, value, partite, setPartite, checkForDuplicates);
  const handleTeam2Change = (index, value) => handleTeam2Changee(index, value, partite, setPartite, checkForDuplicates);
  const handlePronChange = (index, value) => handlePronChangee(index, value, partite, setPartite);
  const checkForDuplicates = (updatedPartite) => checkForDuplicatess(updatedPartite, setDuplicateTeams);
  const incrementScore1 = (index) => incrementScoree1(index, partite, setPartite);
  const incrementScore2 = (index) => incrementScoree2(index, partite, setPartite);
  const handleSaveClick = () => handleSaveClickk(partite, onSave, onClose);

  //-------------------------------------------------------------------------------------
  useEffect(() => {
    const tutteLeSquadre = giornataClouSelected.reduce((acc, partita) => {
      acc.push(partita.team1, partita.team2);
      return acc;
    }, []);
    tutteLeSquadre.unshift(""); // Aggiunge una stringa vuota all'inizio dell'array
    setSquadre(tutteLeSquadre); // Copia delle squadre da giornataClouSelected
  }, [giornataClouSelected]);

  useEffect(() => {
    const initializedPartite = giornataClouSelected.map((partita) => ({
      ...partita,
      score1: ".",
      score2: ".",
    }));
    setPartite(initializedPartite); // Inizializza con score1 e score2
    checkForDuplicates(initializedPartite); // Passa la nuova lista a checkForDuplicates
    console.log("GIORNATA n", giornataN);
    console.log("GIORNATA CLOU SELECTED", initializedPartite);
  }, [giornataClouSelected, giornataN]);
  //-------------------------------------------------------------------------------------
  return (
    <>
      <div className="fixed inset-0 flex items-start justify-start z-50 bg-gray-900 bg-opacity-50 unselectable">
        <div className="relative w-[700px] h-[550px] shadow-xxxl rounded-lg border-4 border-sky-900 bg-black overflow-auto ml-[-2rem] mr-[0]">
          <div className="absolute top-0 left-0 right-0 bg-gray-950 z-20">
            <button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
              X
            </button>
          </div>
          <div className="relative w-full h-full pb-2 pt-[75px]">
            <div className="sm:px-4 px-0">
              {partite.map((partita, index) => (
                <div key={index} className="mb-2 flex items-center justify-between text-white">
                  <div className="flex-1 text-right sm:pr-10 md:pr-15 pr-1">{partita.numero}</div>
                  <div className="flex-1 text-right sm:pr-10 md:pr-15 pr-1">
                    <select
                      value={partita.day}
                      onChange={(e) => handleDayChange(index, e.target.value)}
                      className={`select-no-arrow appearance-none bg-slate-950 text-white rounded p-1 border-black ${partita.day === "dom" ? "!bg-pink-900" : partita.day === "sab" ? "!bg-green-900" : ""}`}
                    >
                      <option value="ven">ven</option>
                      <option value="sab">sab</option>
                      <option value="dom">dom</option>
                      <option value="lun">lun</option>
                      <option value="mar">mar</option>
                      <option value="mer">mer</option>
                      <option value="gio">gio</option>
                    </select>
                  </div>
                  <div className="flex-1 text-right sm:pr-10 md:pr-15 pr-1">
                    <select
                      value={partita.time}
                      onChange={(e) => handleTimeChange(index, e.target.value)}
                      className={`select-no-arrow appearance-none text-white rounded p-1 border-black
                        ${partita.time === "12:30" ? "bg-yellow-300 !text-blue-300" : ""}  
                        ${partita.time === "15:00" ? "bg-yellow-500 !text-orange-600" : ""}    
                        ${["18:00", "18:30"].includes(partita.time) ? "bg-blue-800" : ""}     
                        ${partita.time === "20:45" ? "bg-slate-900" : ""}     
                        ${["12:30", "15:00", "18:00", "18:30", "20:45"].includes(partita.time) ? "" : "bg-slate-500"}`}
                    >
                      <option value="12:30">12.30</option>
                      <option value="15:00">15.00</option>
                      <option value="18:00">18.00</option>
                      <option value="18:30">18.30</option>
                      <option value="20:45">20.45</option>
                    </select>
                  </div>
                  <div className="flex-1 text-right pr-0">
                    <select
                      value={partita.team1}
                      onChange={(e) => handleTeam1Change(index, e.target.value)}
                      className={`select-no-arrow appearance-none bg-slate-900 text-white rounded p-1 border-black ${duplicateTeams.has(partita.team1) ? "border-2 border-red-500" : ""}`}
                    >
                      {squadre.map((squadra, squadraIndex) => (
                        <option key={`team1-${squadraIndex}`} value={squadra}>
                          {squadra}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* <div className="flex-1 text-center ">-</div> */}
                  <div className="flex-1 text-left sm:pr-10 md:pr-15 pr-1 ml-2">
                    <select
                      value={partita.team2}
                      onChange={(e) => handleTeam2Change(index, e.target.value)}
                      className={`select-no-arrow appearance-none bg-slate-900 text-white rounded p-1 border-black ${duplicateTeams.has(partita.team2) ? "border-2 border-red-500" : ""}`}
                    >
                      {squadre.map((squadra, squadraIndex) => (
                        <option key={`team2-${squadraIndex}`} value={squadra}>
                          {squadra}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 text-left sm:pl-5 md:pl-2 pl-0">
                    <select
                      value={partita.pron || ""}
                      onChange={(e) => handlePronChange(index, e.target.value)}
                      className={`select-no-arrow appearance-none bg-slate-900 rounded p-1 text-white border-black`}
                    >
                      <option value=" "> </option>
                      <option value="1">1</option>
                      <option value="X">X</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  {/* <div className="flex-1 text-left">{partita.results}</div> */}
                  <div onClick={() => incrementScore1(index)} className="w-[1rem] bg-slate-800 text-white flex items-center justify-center cursor-pointer mr-1 ">
                    {partita.score1}
                  </div>
                  <div onClick={() => incrementScore2(index)} className="w-[1rem] bg-slate-800 text-white flex items-center justify-center cursor-pointer mr-4">
                    {partita.score2}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-[10%]">
              <button
                className={`px-4 py-2 bg-slate-300 hover:bg-slate-900 hover:text-green-300 rounded-lg text-black ${duplicateTeams.size > 0 ? "cursor-not-allowed" : ""}`}
                disabled={duplicateTeams.size > 0}
                onClick={handleSaveClick}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalModCurrGiornClou;
