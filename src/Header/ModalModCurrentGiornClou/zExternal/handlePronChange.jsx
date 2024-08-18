export const handlePronChangee = (index, value) => {
  const updatedPartite = [...partite];
  updatedPartite[index].pron = value;
  setPartite(updatedPartite);
};
