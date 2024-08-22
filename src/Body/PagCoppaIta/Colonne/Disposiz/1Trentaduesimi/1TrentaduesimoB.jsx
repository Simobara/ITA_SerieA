import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tornei } from "../../../../../START/app/3CoppaItaMatches";
import { ENDPOINTS } from "../config/endpoints";
import ModCambioRis from "../modCambioRis/modCambioRis";
import ModCambioSq from "../modCambioSq/modCambioSq";
import { handleSaveTeamsNamee } from "../zExternal/handleSaveTeamsName";
import { handleSaveTeamsRiss } from "../zExternal/handleSaveTeamsRis";
import { toggleModalCambioRiss, toggleModalCambioSqq } from "../zExternal/toggleModalCambio";

const BTrentaduesimi = ({ width = "80px", height = "24px" }) => {
  const [stage, setStage] = useState("");
  const [oggettoPartitaB1, setOggettoPartitaB1] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB2, setOggettoPartitaB2] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB3, setOggettoPartitaB3] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB4, setOggettoPartitaB4] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB5, setOggettoPartitaB5] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB6, setOggettoPartitaB6] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB7, setOggettoPartitaB7] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaB8, setOggettoPartitaB8] = useState({ team1: "", team2: "", ris: "" });

  const [hoveredTeams, setHoveredTeams] = useState({});
  const [hoveredResults, setHoveredResults] = useState({});
  const [posTeam, setPosTeam] = useState("");
  const [showModalCambioSq, setShowModalCambioSq] = useState(false);
  const [showModalCambioRis, setShowModalCambioRis] = useState(false);

  const boxStyle = `flex items-center justify-start mr-1 bg-white text-black font-bold pl-1 overflow-hidden`;
  const containerStyle = { width, height };
  const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center mr-0.5 text-black bg-gray-500 font-bold overflow-hidden`;

  const toggleModalCambioSq = (indexSide, stage) => {
    setStage(stage);
    toggleModalCambioSqq(indexSide, setPosTeam, setShowModalCambioSq);
  };

  const toggleModalCambioRis = (stage) => {
    setStage(stage);
    toggleModalCambioRiss(setShowModalCambioRis);
  };

  const handleSaveTeamName = (newTeamName) => {
    const oggettoPartita =
      stage === "trentaduesimoB1"
        ? oggettoPartitaB1
        : stage === "trentaduesimoB2"
          ? oggettoPartitaB2
          : stage === "trentaduesimoB3"
            ? oggettoPartitaB3
            : stage === "trentaduesimoB4"
              ? oggettoPartitaB4
              : stage === "trentaduesimoB5"
                ? oggettoPartitaB5
                : stage === "trentaduesimoB6"
                  ? oggettoPartitaB6
                  : stage === "trentaduesimoB7"
                    ? oggettoPartitaB7
                    : oggettoPartitaB8;

    const setOggettoPartita =
      stage === "trentaduesimoB1"
        ? setOggettoPartitaB1
        : stage === "trentaduesimoB2"
          ? setOggettoPartitaB2
          : stage === "trentaduesimoB3"
            ? setOggettoPartitaB3
            : stage === "trentaduesimoB4"
              ? setOggettoPartitaB4
              : stage === "trentaduesimoB5"
                ? setOggettoPartitaB5
                : stage === "trentaduesimoB6"
                  ? setOggettoPartitaB6
                  : stage === "trentaduesimoB7"
                    ? setOggettoPartitaB7
                    : setOggettoPartitaB8;

    const endpoint =
      stage === "trentaduesimoB1"
        ? ENDPOINTS.TRENTADUESIMO_B1
        : stage === "trentaduesimoB2"
          ? ENDPOINTS.TRENTADUESIMO_B2
          : stage === "trentaduesimoB3"
            ? ENDPOINTS.TRENTADUESIMO_B3
            : stage === "trentaduesimoB4"
              ? ENDPOINTS.TRENTADUESIMO_B4
              : stage === "trentaduesimoB5"
                ? ENDPOINTS.TRENTADUESIMO_B5
                : stage === "trentaduesimoB6"
                  ? ENDPOINTS.TRENTADUESIMO_B6
                  : stage === "trentaduesimoB7"
                    ? ENDPOINTS.TRENTADUESIMO_B7
                    : ENDPOINTS.TRENTADUESIMO_B8;

    handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint);
  };

  const handleSaveTeamsRis = (newTeamsRis) => {
    const oggettoPartita =
      stage === "trentaduesimoB1"
        ? oggettoPartitaB1
        : stage === "trentaduesimoB2"
          ? oggettoPartitaB2
          : stage === "trentaduesimoB3"
            ? oggettoPartitaB3
            : stage === "trentaduesimoB4"
              ? oggettoPartitaB4
              : stage === "trentaduesimoB5"
                ? oggettoPartitaB5
                : stage === "trentaduesimoB6"
                  ? oggettoPartitaB6
                  : stage === "trentaduesimoB7"
                    ? oggettoPartitaB7
                    : oggettoPartitaB8;

    const setOggettoPartita =
      stage === "trentaduesimoB1"
        ? setOggettoPartitaB1
        : stage === "trentaduesimoB2"
          ? setOggettoPartitaB2
          : stage === "trentaduesimoB3"
            ? setOggettoPartitaB3
            : stage === "trentaduesimoB4"
              ? setOggettoPartitaB4
              : stage === "trentaduesimoB5"
                ? setOggettoPartitaB5
                : stage === "trentaduesimoB6"
                  ? setOggettoPartitaB6
                  : stage === "trentaduesimoB7"
                    ? setOggettoPartitaB7
                    : setOggettoPartitaB8;

    const endpoint =
      stage === "trentaduesimoB1"
        ? ENDPOINTS.TRENTADUESIMO_B1
        : stage === "trentaduesimoB2"
          ? ENDPOINTS.TRENTADUESIMO_B2
          : stage === "trentaduesimoB3"
            ? ENDPOINTS.TRENTADUESIMO_B3
            : stage === "trentaduesimoB4"
              ? ENDPOINTS.TRENTADUESIMO_B4
              : stage === "trentaduesimoB5"
                ? ENDPOINTS.TRENTADUESIMO_B5
                : stage === "trentaduesimoB6"
                  ? ENDPOINTS.TRENTADUESIMO_B6
                  : stage === "trentaduesimoB7"
                    ? ENDPOINTS.TRENTADUESIMO_B7
                    : ENDPOINTS.TRENTADUESIMO_B8;

    handleSaveTeamsRiss(newTeamsRis, oggettoPartita, setOggettoPartita, endpoint);
  };

  const handleMouseEnterTeam = (teamKey) => {
    setHoveredTeams((prevState) => ({ ...prevState, [teamKey]: true }));
  };

  const handleMouseLeaveTeam = (teamKey) => {
    setHoveredTeams((prevState) => ({ ...prevState, [teamKey]: false }));
  };

  const handleMouseEnterResult = (resultKey) => {
    setHoveredResults((prevState) => ({ ...prevState, [resultKey]: true }));
  };

  const handleMouseLeaveResult = (resultKey) => {
    setHoveredResults((prevState) => ({ ...prevState, [resultKey]: false }));
  };

  //--------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;

        const responseB1 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B1}`);
        const responseB2 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B2}`);
        const responseB3 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B3}`);
        const responseB4 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B4}`);
        const responseB5 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B5}`);
        const responseB6 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B6}`);
        const responseB7 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B7}`);
        const responseB8 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_B8}`);

        if (responseB1.data && responseB1.data.length > 0) {
          setOggettoPartitaB1(responseB1.data[0]);
        } else {
          setOggettoPartitaB1(Tornei.SqBTrentaduesimi[0]);
        }

        if (responseB2.data && responseB2.data.length > 0) {
          setOggettoPartitaB2(responseB2.data[0]);
        } else {
          setOggettoPartitaB2(Tornei.SqBTrentaduesimi[1]);
        }

        if (responseB3.data && responseB3.data.length > 0) {
          setOggettoPartitaB3(responseB3.data[0]);
        } else {
          setOggettoPartitaB3(Tornei.SqBTrentaduesimi[2]);
        }

        if (responseB4.data && responseB4.data.length > 0) {
          setOggettoPartitaB4(responseB4.data[0]);
        } else {
          setOggettoPartitaB4(Tornei.SqBTrentaduesimi[3]);
        }

        if (responseB5.data && responseB5.data.length > 0) {
          setOggettoPartitaB5(responseB5.data[0]);
        } else {
          setOggettoPartitaB5(Tornei.SqBTrentaduesimi[4]);
        }

        if (responseB6.data && responseB6.data.length > 0) {
          setOggettoPartitaB6(responseB6.data[0]);
        } else {
          setOggettoPartitaB6(Tornei.SqBTrentaduesimi[5]);
        }

        if (responseB7.data && responseB7.data.length > 0) {
          setOggettoPartitaB7(responseB7.data[0]);
        } else {
          setOggettoPartitaB7(Tornei.SqBTrentaduesimi[6]);
        }

        if (responseB8.data && responseB8.data.length > 0) {
          setOggettoPartitaB8(responseB8.data[0]);
        } else {
          setOggettoPartitaB8(Tornei.SqBTrentaduesimi[7]);
        }
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
        setOggettoPartitaB1(Tornei.SqBTrentaduesimi[0]);
        setOggettoPartitaB2(Tornei.SqBTrentaduesimi[1]);
        setOggettoPartitaB3(Tornei.SqBTrentaduesimi[2]);
        setOggettoPartitaB4(Tornei.SqBTrentaduesimi[3]);
        setOggettoPartitaB5(Tornei.SqBTrentaduesimi[4]);
        setOggettoPartitaB6(Tornei.SqBTrentaduesimi[5]);
        setOggettoPartitaB7(Tornei.SqBTrentaduesimi[6]);
        setOggettoPartitaB8(Tornei.SqBTrentaduesimi[7]);
      }
    };
    fetchData();
  }, []);
  //--------------------------------------------------------------------------------------------------------------

  const createMatch = (match, index, positionStyle, stageKey) => {
    const [team1Result, team2Result] = match.ris ? match.ris.split("-") : ["", ""];
    const team1Key = `team1-${stageKey}-${index}`;
    const team2Key = `team2-${stageKey}-${index}`;
    const resultKey = `result-${stageKey}-${index}`;

    return (
      <div key={match.id || `${stageKey}-${index}`} className="absolute flex flex-col space-y-1" style={positionStyle}>
        <div className="flex">
          <div
            className={resultBoxStyle}
            onMouseEnter={() => handleMouseEnterResult(resultKey)}
            onMouseLeave={() => handleMouseLeaveResult(resultKey)}
            onClick={() => toggleModalCambioRis(stageKey)}
          >
            {team1Result}
            {hoveredResults[resultKey] && <span className="absolute left-1 scale-150">📝</span>}
          </div>
          <div
            className={boxStyle}
            style={containerStyle}
            onMouseEnter={() => handleMouseEnterTeam(team1Key)}
            onMouseLeave={() => handleMouseLeaveTeam(team1Key)}
            onClick={() => toggleModalCambioSq("A", stageKey)}
          >
            {match.team1}
            {hoveredTeams[team1Key] && <span className="absolute right-1 scale-150">📝</span>}
          </div>
        </div>
        <div className="flex">
          <div
            className={resultBoxStyle}
            onMouseEnter={() => handleMouseEnterResult(resultKey)}
            onMouseLeave={() => handleMouseLeaveResult(resultKey)}
            onClick={() => toggleModalCambioRis(stageKey)}
          >
            {team2Result}
            {hoveredResults[resultKey] && <span className="absolute left-1 scale-150">📝</span>}
          </div>
          <div
            className={boxStyle}
            style={containerStyle}
            onMouseEnter={() => handleMouseEnterTeam(team2Key)}
            onMouseLeave={() => handleMouseLeaveTeam(team2Key)}
            onClick={() => toggleModalCambioSq("B", stageKey)}
          >
            {match.team2}
            {hoveredTeams[team2Key] && <span className="absolute right-1 scale-150">📝</span>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {createMatch(oggettoPartitaB1, 0, { top: "5%", left: "3%" }, "trentaduesimoB1")}
      {createMatch(oggettoPartitaB2, 1, { top: "15%", left: "3%" }, "trentaduesimoB2")}
      {createMatch(oggettoPartitaB3, 2, { top: "30%", left: "3%" }, "trentaduesimoB3")}
      {createMatch(oggettoPartitaB4, 3, { top: "40%", left: "3%" }, "trentaduesimoB4")}
      {createMatch(oggettoPartitaB5, 4, { bottom: "36%", left: "3%" }, "trentaduesimoB5")}
      {createMatch(oggettoPartitaB6, 5, { bottom: "26%", left: "3%" }, "trentaduesimoB6")}
      {createMatch(oggettoPartitaB7, 6, { bottom: "11%", left: "3%" }, "trentaduesimoB7")}
      {createMatch(oggettoPartitaB8, 7, { bottom: "1%", left: "3%" }, "trentaduesimoB8")}

      {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName} />}
      {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis} />}
    </>
  );
};

export default BTrentaduesimi;
