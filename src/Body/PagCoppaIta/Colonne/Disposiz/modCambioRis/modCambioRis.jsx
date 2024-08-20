import React, { useState } from "react";

const ModCambioRis = ({ onClose, stage, posTeam, onSave }) => {
  const [team1Result, setTeam1Result] = useState("");
  const [team2Result, setTeam2Result] = useState("");

  const handleSave = () => {
    const newTeamsResult = `${team1Result}-${team2Result}`;
    onSave(newTeamsResult);
    onClose();
  };
  const handleReset = () => {
    setTeam1Result("");
    setTeam2Result("");
  };

  const handleTeam1Change = (e) => {
    const value = e.target.value;
    setTeam1Result(value);
    if (value !== "" && team2Result === "") {
      setTeam2Result("0");
    }
  };

  const handleTeam2Change = (e) => {
    const value = e.target.value;
    setTeam2Result(value);
    if (value !== "" && team1Result === "") {
      setTeam1Result("0");
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70`}>
      <div
        className={`relative w-full h-full max-w-[200px] max-h-[260px] shadow-xxxl rounded-lg border-4 border-sky-900 bg-black overflow-x-auto overflow-y-auto ${stage === "finale" ? "top-[13rem] left-[0]" : "top-[-4.5rem] left-[6.5rem]"}`}
      >
        <div className="absolute top-0 left-0 right-0 bg-gray-950 z-20 w-full">
          <button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
            X
          </button>
        </div>
        <div className="p-4 mt-8 flex flex-row items-center space-x-4">
          <div className="flex flex-col items-center">
            <label className="text-white mb-2">Risultato Sq 1:</label>
            <input
              type="number"
              value={team1Result}
              onChange={handleTeam1Change}
              min="0"
              max="20"
              step="1"
              className="w-16 text-center p-2 bg-gray-500 text-white rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-white mb-2">Risultato Sq 2:</label>
            <input
              type="number"
              value={team2Result}
              onChange={handleTeam2Change}
              min="0"
              max="20"
              step="1"
              className="w-16 text-center p-2 bg-gray-500 text-white rounded-lg"
            />
          </div>
        </div>

        <div className="absolute bottom-2 left-2 pl-2">
          <button className="bg-sky-700 text-white px-3 py-1 left-2 rounded hover:bg-sky-800" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="absolute bottom-2 right-2 pr-2">
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModCambioRis;
