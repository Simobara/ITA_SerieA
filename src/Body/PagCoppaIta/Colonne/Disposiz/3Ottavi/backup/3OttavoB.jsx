import React from "react";
import { Tornei } from "../../../../../../START/app/3CoppaItaMatches";

const OttavoB = ({ width = "70px", height = "24px" }) => {
  const boxStyle = `flex items-center justify-start bg-white text-black font-bold mr-4 pl-1 overflow-hidden`;
  const teamStyle = {
    backgroundColor: "#7f1d1d", // bg-red-900 equivalent
    color: "yellow",
    // color: 'yellow',
    filter: "brightness(60%)",
    paddingLeft: "0.25rem",
    fontSize: "15px",
    fontWeight: "bold",
    overflow: "hidden",
  };
  const containerStyle = { width, height };
  const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center mr-0.5 text-black font-bold bg-gray-500`;

  const createMatch = (match, positionStyle) => {
    const [team1Result, team2Result] = match.ris
      ? match.ris.split("-")
      : ["", ""];
    return (
      <div
        key={match.id}
        className="absolute flex flex-col space-y-1"
        style={positionStyle}
      >
        <div className="flex">
          <div className={resultBoxStyle}>{team1Result}</div>
          <div
            className={`${boxStyle}`}
            style={{ ...containerStyle, ...teamStyle }}
          >
            {match.team1}
          </div>
        </div>
        <div className="flex">
          <div className={resultBoxStyle}>{team2Result}</div>
          <div className={boxStyle} style={containerStyle}>
            {match.team2}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {Tornei.SqBOttavi.map((match) => {
        const positionStyle =
          match.id === 3 || match.id === 4
            ? { bottom: match.pos }
            : { top: match.pos };
        return createMatch(match, positionStyle);
      })}
    </>
  );
};

export default OttavoB;
