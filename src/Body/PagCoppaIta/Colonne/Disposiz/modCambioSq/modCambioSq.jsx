import React, { useEffect, useRef, useState } from "react";

const ModCambioSq = ({ onClose, stage, posTeam, onSave }) => {
  const [teamName, setTeamName] = useState("");
  const inputRef = useRef(null);

  const handleSave = () => {
    onSave(teamName);
    onClose();
  };

  //------------------------------
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  //------------------------------

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70`}>
      <div
        className={`relative w-full h-full max-w-[200px] max-h-[200px] shadow-xxxl rounded-lg border-4 border-sky-900 bg-black overflow-x-auto overflow-y-auto ${stage === "finale" && posTeam === "A" ? "top-[-4.5rem] left-[-5.5rem]" : "top-[-4.5rem] left-[6.5rem]"}`}
      >
        <div className="absolute top-0 left-0 right-0 bg-gray-950 z-20 w-full">
          <button className="text-3xl leading-none text-sky-700 w-full hover:bg-sky-800 hover:text-white" onClick={onClose}>
            X
          </button>
        </div>
        <div className="p-4 mt-8 flex flex-col items-start">
          <label className="text-white mb-2">Name:</label>
          <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} className="w-full p-2 text-black rounded-lg" ref={inputRef} />
        </div>
        <div className="absolute bottom-2 left-2 pl-2">
          <button className="bg-sky-700 text-white px-3 py-1 rounded hover:bg-sky-800" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModCambioSq;
