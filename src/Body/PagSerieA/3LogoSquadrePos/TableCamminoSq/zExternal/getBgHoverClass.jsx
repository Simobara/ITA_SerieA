import { ts } from "../../../../../START/styles/0CssMainStyle";

export const getBgHoverClasss = (partita) => {
  if (partita.sqVs === "--- --- --- --- --- ---") {
    return "hover:no.hover";
  }
  const conditions = ["+", "-", "=", "."];
  if (conditions.includes(partita.casa)) {
    return `${ts.TabHoverHome}`;
  } else if (conditions.includes(partita.fuori)) {
    return `${ts.TabHoverAway}`;
  }
  return " ";
};
