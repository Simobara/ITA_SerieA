export const incrementScoree1 = (score1, setScore1) => {
  if (score1 < 7) {
    setScore1(score1 + 1);
  } else {
    setScore1(0); // Resetta a 0 se il punteggio è già 7
  }
};

export const incrementScoree2 = (score2, setScore2) => {
  if (score2 < 7) {
    setScore2(score2 + 1);
  } else {
    setScore2(0); // Resetta a 0 se il punteggio è già 7
  }
};
