import { ItalianeInChampions, ItalianeInEuropaLeague } from "../../../../START/app/1main";

const prendiColoriColonnaa0 = (index, ArrayNomiSquadre) => {
  if (index < ItalianeInChampions) {
    return "bg-sky-950";
  } else if (index >= ItalianeInChampions && index < ItalianeInChampions + ItalianeInEuropaLeague) {
    return "bg-sky-800";
  } else if (index === ItalianeInChampions + ItalianeInEuropaLeague) {
    return "bg-cyan-700";
  } else if (index >= ArrayNomiSquadre.length - 3) {
    return "bg-gray-500";
  } else {
    return "bg-black";
  }
};

export default prendiColoriColonnaa0;
