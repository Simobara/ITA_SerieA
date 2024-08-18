export const handleTeam1Changee = (index, value, partite, setPartite, checkForDuplicates) => {
  const updatedPartite = [...partite];
  updatedPartite[index].team1 = value;
  checkForDuplicates(updatedPartite);
  setPartite(updatedPartite);
};

export const handleTeam2Changee = (index, value, partite, setPartite, checkForDuplicates) => {
  const updatedPartite = [...partite];
  updatedPartite[index].team1 = value;
  checkForDuplicates(updatedPartite);
  setPartite(updatedPartite);
};
