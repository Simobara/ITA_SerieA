export const incrementScoree1 = (index, partite, setPartite) => {
  const updatedPartite = [...partite];

  if (updatedPartite[index].score1 === "-") {
    updatedPartite[index].score1 = 0; // Se score1 è "-", inizia da 0
    updatedPartite[index].score2 = 0; // Imposta automaticamente score2 a 0
  } else if (updatedPartite[index].score1 < 7) {
    updatedPartite[index].score1 += 1;
  } else {
    updatedPartite[index].score1 = "-"; // Resetta score1 a "-"
    updatedPartite[index].score2 = "-"; // Resetta score2 a "-"
  }

  setPartite(updatedPartite);
};

export const incrementScoree2 = (index, partite, setPartite) => {
  const updatedPartite = [...partite];

  if (updatedPartite[index].score2 === "-") {
    updatedPartite[index].score2 = 0; // Se score2 è "-", inizia da 0
  } else if (updatedPartite[index].score2 < 7) {
    updatedPartite[index].score2 += 1;
  } else {
    updatedPartite[index].score2 = "-"; // Resetta score2 a "-"
  }

  setPartite(updatedPartite);
};
