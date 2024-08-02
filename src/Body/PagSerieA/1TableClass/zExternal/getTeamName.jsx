const getTeamNamee = (squadr) => {
  if (typeof squadr === "object" && squadr !== null) {
    squadr = squadr.name;
  }
  if (typeof squadr === "string") {
    return squadr.replace("X", "").replace("Y", "").replace("Z", "");
  }
  return ""; // Gestisci il caso in cui l'input non è né un oggetto né una stringa
};

export default getTeamNamee;
