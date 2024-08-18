export const handleDayChangee = (index, value, partite, setPartite) => {
  const updatedPartite = [...partite];
  updatedPartite[index].day = value;
  setPartite(updatedPartite);
};

export const handleTimeChangee = (index, value, partite, setPartite) => {
  const updatedPartite = [...partite];
  updatedPartite[index].time = value;
  setPartite(updatedPartite);
};
