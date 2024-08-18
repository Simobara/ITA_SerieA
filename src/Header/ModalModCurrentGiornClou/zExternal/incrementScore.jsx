export const incrementScoree1 = (index, partite, setPartite) => {
  const updatedPartite = [...partite];
  if (updatedPartite[index].score1 < 7) {
    updatedPartite[index].score1 += 1;
  } else {
    updatedPartite[index].score1 = 0; // Resetta a 0 se il punteggio è già 7
  }
  setPartite(updatedPartite);
};

export const incrementScoree2 = (index, partite, setPartite) => {
  const updatedPartite = [...partite];
  if (updatedPartite[index].score2 < 7) {
    updatedPartite[index].score2 += 1;
  } else {
    updatedPartite[index].score2 = 0; // Resetta a 0 se il punteggio è già 7
  }
  setPartite(updatedPartite);
};
