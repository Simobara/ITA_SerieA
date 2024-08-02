import { useCallback } from "react";

const useIsTeamMarkedWithhX = (sqSelected, completeClouSelected) => {
  return useCallback(
    (teamName) => {
      try {
        return typeof teamName === "string" && (teamName.endsWith("X") || sqSelected.includes(teamName + "X"));
      } catch (error) {
        console.error("Error processing teamName:", teamName, error);
        return false;
      }
    },
    [sqSelected, completeClouSelected],
  );
};

export default useIsTeamMarkedWithhX;
