import { ts } from "../../../../../START/styles/0CssMainStyle";

export const getClassForFuorii = (fuori) => {
  if (fuori === "...") {
    return `bg-black ${ts.TextCF}`;
  }
  if (fuori === " ") {
    return " ";
  }
  switch (fuori) {
    case "+":
      return `${ts.WinBg} ${ts.WinText}`;
    case "=":
      return `${ts.DrawBg} ${ts.DrawText}`;
    case "-":
      return `${ts.LoseBg} ${ts.LoseText}`;
    default:
      return `${ts.Bg0}`;
  }
};
