export const handlePronChangee = (index, value, partite, setPartite)=>{
  const updatedPartite = [...partite];
  updatedPartite[index].pron = value;
  setPartite(updatedPartite);
};
