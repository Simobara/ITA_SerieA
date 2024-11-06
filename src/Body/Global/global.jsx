import { calendario1 } from "../../START/app/0SerieAMatches";

// SquadraContext.js
import { createContext, useState } from "react";

export const SquadraContext = createContext();
export const SquadraProvider = ({ children }) => {
  const [sqSelected, setSqSelected] = useState([]);

  return <SquadraContext.Provider value={{ sqSelected, setSqSelected }}>{children}</SquadraContext.Provider>;
};

//-----------------------------------------------------------------------
//dalla partita, prende le 2 squadre e le divide creando un oggetto, punto clou in: //! handleCoppiaSelectTeamm
export const CoppiaPartitaContext = createContext();

export const CoppiaPartitaProvider = ({ children }) => {
  const [coppiaSelected, setCoppiaSelected] = useState({});

  return <CoppiaPartitaContext.Provider value={{ coppiaSelected, setCoppiaSelected }}>{children}</CoppiaPartitaContext.Provider>;
};

//-----------------------------------------------------------------------

export const CoppiaPartitaRegistrataContext = createContext();
//prende le squadre che hanno gia' giocato quindi partita registrata: //! partita
export const CoppiaPartitaRegistrataProvider = ({ children }) => {
  const [coppiaRegSelected, setCoppiaRegSelected] = useState([]);

  return <CoppiaPartitaRegistrataContext.Provider value={{ coppiaRegSelected, setCoppiaRegSelected }}>{children}</CoppiaPartitaRegistrataContext.Provider>;
};

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

export const TestingContext = createContext();

export const TestingDataProvider = ({ children }) => {
  const [testingClouSelected, setTestingClouSelected] = useState(calendario1);
  return <TestingContext.Provider value={{ testingClouSelected, setTestingClouSelected }}>{children}</TestingContext.Provider>;
};
//-----------------------------------------------------------------------

export const PartiteDefinNoModContext = createContext();
//Crea un nuovo Set chiamato newPartiteDefinNoMod contenente i numeri delle partite con risultati definiti. //!partita
export const PartiteDefinNoModProvider = ({ children }) => {
  const [partiteDefinNoMod, setPartiteDefinNoMod] = useState(new Set());

  return <PartiteDefinNoModContext.Provider value={{ partiteDefinNoMod, setPartiteDefinNoMod }}>{children}</PartiteDefinNoModContext.Provider>;
};

//-----------------------------------------------------------------------

export const ButtonResetContext = createContext();
//reset button tutto torna allo stato originale //! tableProxInc
export const ButtonResetProvider = ({ children }) => {
  const [buttonResetIsResetting, setButtonResetIsResetting] = useState(false);

  return <ButtonResetContext.Provider value={{ buttonResetIsResetting, setButtonResetIsResetting }}>{children}</ButtonResetContext.Provider>;
};

//-----------------------------------------------------------------------

export const IndexSelectedContext = createContext();
//setta l indice della giornataClou //!calGiorn
export const IndexSelectedProvider = ({ children }) => {
  const [indexSel, setIndexSel] = useState(null);

  return <IndexSelectedContext.Provider value={{ indexSel, setIndexSel }}>{children}</IndexSelectedContext.Provider>;
};

//-----------------------------------------------------------------------
//scroll context
export const ScrollContext = createContext();

// Fornisce il riferimento topRef per gestire lo scroll //! topRef
export const ScrollProvider = ({ children }) => {
  const [topRef, setTopRef] = useState(null);

  return <ScrollContext.Provider value={{ topRef, setTopRef }}>{children}</ScrollContext.Provider>;
};
