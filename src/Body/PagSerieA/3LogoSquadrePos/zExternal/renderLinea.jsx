import { nomiSquadre } from "../../../../START/app/1main";

export const renderLineaa = (start, end, arraySquadre, squadraAttiva1, squadraAttiva2, handleLogoClick, logoRefs) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginBottom: "24px",
      marginTop: "9px",
    }}
  >
    {arraySquadre.slice(start, end).map((squadra, index) => {
      const isActive1 = squadra.name === squadraAttiva1;
      const isActive2 = squadra.name === squadraAttiva2;
      console.log("NOMI SQUADRE:", nomiSquadre);
      let className = "px-1 sm:px-2 py-1 grayscale";
      let inlineStyle = {};

      // if (isActive1) {
      //   className = "px-2 cursor-pointer rounded-3xl grayscale-0 bg-sky-700/90 pt-1 sm:pt-2 z-3";
      //   inlineStyle = { filter: "brightness(125%)" }; // Aumenta la luminosità del 25%
      //}
      if (isActive1) {
        className = "px-2 cursor-pointer rounded-3xl grayscale-0 bg-sky-900 pt-1 sm:pt-2 z-3";
        inlineStyle = {
          filter: "brightness(100%)",
          //position: 'absolute', zIndex: '200',  transform: 'translateX(-300px)', transition: 'transform 1.0s ease-in-out'
        };
      } else if (isActive2) {
        className = "px-2 cursor-pointer rounded-3xl grayscale-0 bg-sky-600 pt-1 sm:pt-2 z-1";
        inlineStyle = {
          filter: "brightness(100%)",
          //position: 'absolute', zIndex: '200', transform: 'translateX(-300px)', transition: 'transform 1.0s ease-in-out'
        };
      } else {
        className = "px-2 rounded-3xl grayscale-0 pt-1 sm:pt-2 z-1";
        inlineStyle = {
          filter: "brightness(30%) saturate(0%)",
          pointerEvents: "none",
        };
      }
      return (
        <div key={index} ref={(el) => (logoRefs.current[index] = el)} className={className} style={inlineStyle} onClick={() => handleLogoClick(squadra)}>
          <img src={squadra.logo} alt={`${squadra.nome} Logo`} className="w-7 h-7 sm:w-14 sm:h-14" />
        </div>
      );
    })}
  </div>
);
