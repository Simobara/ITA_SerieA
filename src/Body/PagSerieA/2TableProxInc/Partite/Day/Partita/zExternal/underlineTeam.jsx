import { s } from "../../../../../../../START/styles/0CssMainStyle";

export const underlineTeamm = (team, selection) => {
  if (selection === "") {
    return "";
  }
  if (selection === "1") {
    if (team === "1") {
      return `${s.BrightnessDopoScelta} underlineC font-bold underline-thick z-3`;
    } else {
      return `${s.BrightnessDopoScelta}`;
    }
  } else if (selection === "2") {
    if (team === "2") {
      return `${s.BrightnessDopoScelta} underlineF font-bold underline-thick z-3`;
    } else {
      return `${s.BrightnessDopoScelta}`;
    }
  } else if (selection === "X") {
    return `${s.BrightnessDopoScelta} underline underline-yellow font-bold underline-thick z-3`;
  } else {
    return `${s.BrightnessDopoScelta}`;
  }
};
