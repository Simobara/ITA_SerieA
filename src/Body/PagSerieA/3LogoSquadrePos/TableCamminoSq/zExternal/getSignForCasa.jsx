import { ts } from "../../../../../START/styles/0CssMainStyle";

export const getSignForCasaa = (casa) => {
  switch (casa) {
    case "+":
      return `${ts.WinBg} ${ts.WinText}`;
    case "=":
      return `${ts.DrawBg} ${ts.DrawText}`;
    case "-":
      return `${ts.LoseBg} ${ts.LoseText}`;
    default:
      return `${ts.Bg9}`;
  }
};
