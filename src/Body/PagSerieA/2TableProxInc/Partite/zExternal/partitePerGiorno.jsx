import { useMemo } from "react";

export const partitePerGiornoo = (partite) => {
  return useMemo(
    () => ({
      ven: partite.filter((p) => p.day === "ven"),
      sab: partite.filter((p) => p.day === "sab"),
      dom: partite.filter((p) => p.day === "dom"),
      lun: partite.filter((p) => p.day === "lun"),
      mar: partite.filter((p) => p.day === "mar"),
      mer: partite.filter((p) => p.day === "mer"),
      gio: partite.filter((p) => p.day === "gio"),
    }),
    [partite],
  );
};
