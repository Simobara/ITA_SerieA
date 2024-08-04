// FILE VALIDO NEL CASO METTO DRAG-DROP 

// const movePartita = (fromDay, toDay, fromNumero, toNumero) => {
  //     let updatedPartite = [...partite];
  //     const fromIndex = updatedPartite.findIndex((p) => p.numero === fromNumero && p.day === fromDay);
  //     const toIndex = toNumero ? updatedPartite.findIndex((p) => p.numero === toNumero && p.day === toDay) : -1;
  //     if (fromDay === toDay && toIndex !== -1) {
  //         [updatedPartite[fromIndex], updatedPartite[toIndex]] = [updatedPartite[toIndex], updatedPartite[fromIndex]];
  //     } else {
  //         updatedPartite[fromIndex].day = toDay;
  //     }
  //     setPartite(reassignNumbers(updatedPartite));
  // };