
const prendiColoriColonnaa0 = (index, ArrayNomiSquadre) => {
  if (index < 4) {
    return "bg-sky-950 text-white font-extrabold";
  } else if (index >= 4 && index < 6) {
    return "bg-sky-800 text-white font-extrabold";
  } else if (index === 6) {
    return "bg-cyan-700 text-white font-extrabold";
  } else if (index >= ArrayNomiSquadre.length - 3) {
    return "bg-gray-500 text-black font-extrabold";
  } else {
    return "bg-black";
  }
};

export default prendiColoriColonnaa0;
