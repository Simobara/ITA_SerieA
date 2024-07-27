import { nomiSquadre } from "../app/1main";

export function filterTeamsByCategory(category) {
  return Object.entries(nomiSquadre)
    .filter(([key, value]) => value && value.isTeam === category)
    .map(([key, value]) => {
      if (value && value.name) {
        return value.name.toUpperCase();
      }
      return "";
    });
}

export let ATeams = [];
export let BTeams = [];

document.addEventListener("DOMContentLoaded", () => {
  ATeams = [...filterTeamsByCategory("A")];
  BTeams = [...filterTeamsByCategory("B")];
});



