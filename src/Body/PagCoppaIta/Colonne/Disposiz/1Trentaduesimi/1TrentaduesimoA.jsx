import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tornei } from "../../../../../START/app/3CoppaItaMatches";
import { ENDPOINTS } from "../config/endpoints";
import ModCambioRis from "../modCambioRis/modCambioRis";
import ModCambioSq from "../modCambioSq/modCambioSq";
import { handleSaveTeamsNamee } from "../zExternal/handleSaveTeamsName";
import { handleSaveTeamsRiss } from "../zExternal/handleSaveTeamsRis";
import { toggleModalCambioRiss, toggleModalCambioSqq } from "../zExternal/toggleModalCambio";

const TrentaduesimoA = ({ width = "70px", height = "24px" }) => {
  const [stage, setStage] = useState("");
  const [oggettoPartitaA1, setOggettoPartitaA1] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA2, setOggettoPartitaA2] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA3, setOggettoPartitaA3] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA4, setOggettoPartitaA4] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA5, setOggettoPartitaA5] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA6, setOggettoPartitaA6] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA7, setOggettoPartitaA7] = useState({ team1: "", team2: "", ris: "" });
  const [oggettoPartitaA8, setOggettoPartitaA8] = useState({ team1: "", team2: "", ris: "" });

  const [hoveredTeams, setHoveredTeams] = useState({});
  const [hoveredResults, setHoveredResults] = useState({});
  const [posTeam, setPosTeam] = useState("");
  const [showModalCambioSq, setShowModalCambioSq] = useState(false);
  const [showModalCambioRis, setShowModalCambioRis] = useState(false);

  const boxStyle = `text-black font-bold flex items-center justify-start bg-white ml-4 pl-1 overflow-hidden`;
  const containerStyle = { width, height };
  const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 text-black font-bold overflow-hidden`;

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
      stage === "trentaduesimoA1"
        ? oggettoPartitaA1
        : stage === "trentaduesimoA2"
          ? oggettoPartitaA2
          : stage === "trentaduesimoA3"
            ? oggettoPartitaA3
            : stage === "trentaduesimoA4"
              ? oggettoPartitaA4
              : stage === "trentaduesimoA5"
                ? oggettoPartitaA5
                : stage === "trentaduesimoA6"
                  ? oggettoPartitaA6
                  : stage === "trentaduesimoA7"
                    ? oggettoPartitaA7
                    : oggettoPartitaA8;

    const setOggettoPartita =
      stage === "trentaduesimoA1"
        ? setOggettoPartitaA1
        : stage === "trentaduesimoA2"
          ? setOggettoPartitaA2
          : stage === "trentaduesimoA3"
            ? setOggettoPartitaA3
            : stage === "trentaduesimoA4"
              ? setOggettoPartitaA4
              : stage === "trentaduesimoA5"
                ? setOggettoPartitaA5
                : stage === "trentaduesimoA6"
                  ? setOggettoPartitaA6
                  : stage === "trentaduesimoA7"
                    ? setOggettoPartitaA7
                    : setOggettoPartitaA8;

    const endpoint =
      stage === "trentaduesimoA1"
        ? ENDPOINTS.TRENTADUESIMO_A1
        : stage === "trentaduesimoA2"
          ? ENDPOINTS.TRENTADUESIMO_A2
          : stage === "trentaduesimoA3"
            ? ENDPOINTS.TRENTADUESIMO_A3
            : stage === "trentaduesimoA4"
              ? ENDPOINTS.TRENTADUESIMO_A4
              : stage === "trentaduesimoA5"
                ? ENDPOINTS.TRENTADUESIMO_A5
                : stage === "trentaduesimoA6"
                  ? ENDPOINTS.TRENTADUESIMO_A6
                  : stage === "trentaduesimoA7"
                    ? ENDPOINTS.TRENTADUESIMO_A7
                    : ENDPOINTS.TRENTADUESIMO_A8;

    handleSaveTeamsNamee(newTeamName, oggettoPartita, posTeam, setOggettoPartita, endpoint);
  };

  const handleSaveTeamsRis = (newTeamsRis) => {
    const oggettoPartita =
      stage === "trentaduesimoA1"
        ? oggettoPartitaA1
        : stage === "trentaduesimoA2"
          ? oggettoPartitaA2
          : stage === "trentaduesimoA3"
            ? oggettoPartitaA3
            : stage === "trentaduesimoA4"
              ? oggettoPartitaA4
              : stage === "trentaduesimoA5"
                ? oggettoPartitaA5
                : stage === "trentaduesimoA6"
                  ? oggettoPartitaA6
                  : stage === "trentaduesimoA7"
                    ? oggettoPartitaA7
                    : oggettoPartitaA8;

    const setOggettoPartita =
      stage === "trentaduesimoA1"
        ? setOggettoPartitaA1
        : stage === "trentaduesimoA2"
          ? setOggettoPartitaA2
          : stage === "trentaduesimoA3"
            ? setOggettoPartitaA3
            : stage === "trentaduesimoA4"
              ? setOggettoPartitaA4
              : stage === "trentaduesimoA5"
                ? setOggettoPartitaA5
                : stage === "trentaduesimoA6"
                  ? setOggettoPartitaA6
                  : stage === "trentaduesimoA7"
                    ? setOggettoPartitaA7
                    : setOggettoPartitaA8;

    const endpoint =
      stage === "trentaduesimoA1"
        ? ENDPOINTS.TRENTADUESIMO_A1
        : stage === "trentaduesimoA2"
          ? ENDPOINTS.TRENTADUESIMO_A2
          : stage === "trentaduesimoA3"
            ? ENDPOINTS.TRENTADUESIMO_A3
            : stage === "trentaduesimoA4"
              ? ENDPOINTS.TRENTADUESIMO_A4
              : stage === "trentaduesimoA5"
                ? ENDPOINTS.TRENTADUESIMO_A5
                : stage === "trentaduesimoA6"
                  ? ENDPOINTS.TRENTADUESIMO_A6
                  : stage === "trentaduesimoA7"
                    ? ENDPOINTS.TRENTADUESIMO_A7
                    : ENDPOINTS.TRENTADUESIMO_A8;

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

        const responseA1 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A1}`);
        const responseA2 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A2}`);
        const responseA3 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A3}`);
        const responseA4 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A4}`);
        const responseA5 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A5}`);
        const responseA6 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A6}`);
        const responseA7 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A7}`);
        const responseA8 = await axios.get(`${API_BASE_URL}${ENDPOINTS.TRENTADUESIMO_A8}`);

        if (responseA1.data && responseA1.data.length > 0) {
          setOggettoPartitaA1(responseA1.data[0]);
        } else {
          setOggettoPartitaA1(Tornei.SqATrentaduesimi[0]);
        }

        if (responseA2.data && responseA2.data.length > 0) {
          setOggettoPartitaA2(responseA2.data[0]);
        } else {
          setOggettoPartitaA2(Tornei.SqATrentaduesimi[1]);
        }

        if (responseA3.data && responseA3.data.length > 0) {
          setOggettoPartitaA3(responseA3.data[0]);
        } else {
          setOggettoPartitaA3(Tornei.SqATrentaduesimi[2]);
        }

        if (responseA4.data && responseA4.data.length > 0) {
          setOggettoPartitaA4(responseA4.data[0]);
        } else {
          setOggettoPartitaA4(Tornei.SqATrentaduesimi[3]);
        }

        if (responseA5.data && responseA5.data.length > 0) {
          setOggettoPartitaA5(responseA5.data[0]);
        } else {
          setOggettoPartitaA5(Tornei.SqATrentaduesimi[4]);
        }

        if (responseA6.data && responseA6.data.length > 0) {
          setOggettoPartitaA6(responseA6.data[0]);
        } else {
          setOggettoPartitaA6(Tornei.SqATrentaduesimi[5]);
        }

        if (responseA7.data && responseA7.data.length > 0) {
          setOggettoPartitaA7(responseA7.data[0]);
        } else {
          setOggettoPartitaA7(Tornei.SqATrentaduesimi[6]);
        }

        if (responseA8.data && responseA8.data.length > 0) {
          setOggettoPartitaA8(responseA8.data[0]);
        } else {
          setOggettoPartitaA8(Tornei.SqATrentaduesimi[7]);
        }
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
        setOggettoPartitaA1(Tornei.SqATrentaduesimi[0]);
        setOggettoPartitaA2(Tornei.SqATrentaduesimi[1]);
        setOggettoPartitaA3(Tornei.SqATrentaduesimi[2]);
        setOggettoPartitaA4(Tornei.SqATrentaduesimi[3]);
        setOggettoPartitaA5(Tornei.SqATrentaduesimi[4]);
        setOggettoPartitaA6(Tornei.SqATrentaduesimi[5]);
        setOggettoPartitaA7(Tornei.SqATrentaduesimi[6]);
        setOggettoPartitaA8(Tornei.SqATrentaduesimi[7]);
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
            className={boxStyle}
            style={containerStyle}
            onMouseEnter={() => handleMouseEnterTeam(team1Key)}
            onMouseLeave={() => handleMouseLeaveTeam(team1Key)}
            onClick={() => toggleModalCambioSq("A", stageKey)}
          >
            {match.team1}
            {hoveredTeams[team1Key] && <span className="absolute right-6 scale-150">📝</span>}
          </div>
          <div
            className={resultBoxStyle}
            onMouseEnter={() => handleMouseEnterResult(resultKey)}
            onMouseLeave={() => handleMouseLeaveResult(resultKey)}
            onClick={() => toggleModalCambioRis(stageKey)}
          >
            {team1Result}
            {hoveredResults[resultKey] && <span className="absolute right-0 scale-150">📝</span>}
          </div>
        </div>
        <div className="flex">
          <div
            className={boxStyle}
            style={containerStyle}
            onMouseEnter={() => handleMouseEnterTeam(team2Key)}
            onMouseLeave={() => handleMouseLeaveTeam(team2Key)}
            onClick={() => toggleModalCambioSq("B", stageKey)}
          >
            {match.team2}
            {hoveredTeams[team2Key] && <span className="absolute right-6 scale-150">📝</span>}
          </div>
          <div
            className={resultBoxStyle}
            onMouseEnter={() => handleMouseEnterResult(resultKey)}
            onMouseLeave={() => handleMouseLeaveResult(resultKey)}
            onClick={() => toggleModalCambioRis(stageKey)}
          >
            {team2Result}
            {hoveredResults[resultKey] && <span className="absolute right-0 scale-150">📝</span>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {createMatch(oggettoPartitaA1, 0, { top: "5%", left: "3%" }, "trentaduesimoA1")}
      {createMatch(oggettoPartitaA2, 1, { top: "15%", left: "3%" }, "trentaduesimoA2")}
      {createMatch(oggettoPartitaA3, 2, { top: "30%", left: "3%" }, "trentaduesimoA3")}
      {createMatch(oggettoPartitaA4, 3, { top: "40%", left: "3%" }, "trentaduesimoA4")}
      {createMatch(oggettoPartitaA5, 4, { bottom: "36%", left: "3%" }, "trentaduesimoA5")}
      {createMatch(oggettoPartitaA6, 5, { bottom: "26%", left: "3%" }, "trentaduesimoA6")}
      {createMatch(oggettoPartitaA7, 6, { bottom: "12%", left: "3%" }, "trentaduesimoA7")}
      {createMatch(oggettoPartitaA8, 7, { bottom: "1%", left: "3%" }, "trentaduesimoA8")}

      {showModalCambioSq && <ModCambioSq onClose={toggleModalCambioSq} stage={stage} posTeam={posTeam} onSave={handleSaveTeamName} />}
      {showModalCambioRis && <ModCambioRis onClose={toggleModalCambioRis} stage={stage} posTeam={posTeam} onSave={handleSaveTeamsRis} />}
    </>
  );
};

export default TrentaduesimoA;
