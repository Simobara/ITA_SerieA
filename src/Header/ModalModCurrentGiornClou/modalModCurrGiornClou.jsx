import React, { useContext, useEffect, useState } from "react";
import { GiornataClouContext, GiornataNContext } from "../../Ap/Global/global";

const ModalModCurrGiornClou = ({ onClose, onSave }) => {
  const { giornataClouSelected } = useContext(GiornataClouContext);
  const { giornataN } = useContext(GiornataNContext);
  const [partite, setPartite] = useState([...giornataClouSelected]);
  const [squadre, setSquadre] = useState([]); // Nuovo array per le squadre
  const [duplicateTeams, setDuplicateTeams] = useState(new Set()); // Per tracciare i duplicati

  const handleDayChange = (index, value) => {
    const updatedPartite = [...partite];
    updatedPartite[index].day = value;
    setPartite(updatedPartite);
  };

  const handleTimeChange = (index, value) => {
    const updatedPartite = [...partite];
    updatedPartite[index].time = value;
    setPartite(updatedPartite);
  };

  const handleTeam1Change = (index, value) => {
    const updatedPartite = [...partite];
    updatedPartite[index].team1 = value;
    checkForDuplicates(updatedPartite);
    setPartite(updatedPartite);
  };

  const handleTeam2Change = (index, value) => {
    const updatedPartite = [...partite];
    updatedPartite[index].team2 = value;
    checkForDuplicates(updatedPartite);
    setPartite(updatedPartite);
  };

  const handlePronChange = (index, value) => {
    const updatedPartite = [...partite];
    updatedPartite[index].pron = value;
    setPartite(updatedPartite);
  };

  const checkForDuplicates = (updatedPartite) => {
    const teams = new Set();
    const duplicates = new Set();

    for (const partita of updatedPartite) {
      if (partita.team1) {
        if (teams.has(partita.team1)) {
          duplicates.add(partita.team1);
        }
        teams.add(partita.team1);
      }
      if (partita.team2) {
        if (teams.has(partita.team2)) {
          duplicates.add(partita.team2);
        }
        teams.add(partita.team2);
      }
    }

    setDuplicateTeams(duplicates);
  };

  const handleSaveClick = () => {
    const giornataSalvata = partite.map((partita) => ({
      numero: partita.numero,
      day: partita.day,
      time: partita.time,
      team1: partita.team1,
      team2: partita.team2,
      pron: partita.pron || "",
      results: partita.results || "",
    }));
    onSave(giornataSalvata);
    onClose(); // Chiudi il modale dopo aver salvato
  };

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
    setPartite([...giornataClouSelected]);
    checkForDuplicates(giornataClouSelected);
    console.log("GIORNATA n", giornataN);
    console.log("GIORNATA CLOU SELECTED", giornataClouSelected);
  }, [giornataClouSelected, giornataN]);
  //-------------------------------------------------------------------------------------
  return (
    <>
      <div className="fixed inset-0 flex items-start justify-start z-50 bg-gray-900 bg-opacity-50 ">
        <div className="relative w-full h-full max-w-[800px] max-h-[580px] shadow-xxxl rounded-lg border-4 border-sky-900 bg-black overflow-hidden ml-[2rem]">
          <div className="absolute top-0 left-0 right-0 bg-gray-950 z-20">
            <button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
              X
            </button>
          </div>
          <div className="relative w-full h-full pb-2 pt-[75px]">
            <div className="px-4">
              {partite.map((partita, index) => (
                <div key={index} className="mb-2 flex items-center justify-between text-white">
                  <div className="flex-1 text-right pr-2 mr-2">{partita.numero}</div>
                  <div className="flex-1 text-right pr-4">
                    <select
                      value={partita.day}
                      onChange={(e) => handleDayChange(index, e.target.value)}
                      className={`bg-slate-950 text-white rounded p-1 ${partita.day === "dom" ? "!bg-red-400" : ""}`}
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
                  <div className="flex-1 text-right pr-20">
                    <select
                      value={partita.time}
                      onChange={(e) => handleTimeChange(index, e.target.value)}
                      className={`bg-slate-950 text-white rounded p-1 ${partita.time === "20:45" ? "!bg-slate-900" : "!bg-slate-700"}`}
                    >
                      <option value="12:30">12.30</option>
                      <option value="18:30">18.30</option>
                      <option value="15:00">15.00</option>
                      <option value="20:45">20.45</option>
                    </select>
                  </div>
                  <div className="flex-1 text-right pr-0">
                    <select
                      value={partita.team1}
                      onChange={(e) => handleTeam1Change(index, e.target.value)}
                      className={`bg-gray-700 text-white rounded p-1 ${duplicateTeams.has(partita.team1) ? "border-2 border-red-500" : ""}`}
                    >
                      {squadre.map((squadra, squadraIndex) => (
                        <option key={`team1-${squadraIndex}`} value={squadra}>
                          {squadra}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 text-center">-</div>

                  <div className="flex-1 text-left pr-10">
                    <select
                      value={partita.team2}
                      onChange={(e) => handleTeam2Change(index, e.target.value)}
                      className={`bg-gray-700 text-white rounded p-1 ${duplicateTeams.has(partita.team2) ? "border-2 border-red-500" : ""}`}
                    >
                      {squadre.map((squadra, squadraIndex) => (
                        <option key={`team2-${squadraIndex}`} value={squadra}>
                          {squadra}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 text-left pl-2">
                    <select value={partita.pron || ""} onChange={(e) => handlePronChange(index, e.target.value)} className={`bg-slate-950 rounded p-1 text-white`}>
                      <option value=" "> </option>
                      <option value="1">1</option>
                      <option value="X">X</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  <div className="flex-1 text-left">.{partita.results}</div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-[2%] left-[10%]">
              <button
                className={`px-4 py-2 bg-sky-700 hover:bg-sky-900 rounded-lg text-white ${duplicateTeams.size > 0 ? "cursor-not-allowed" : ""}`}
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
