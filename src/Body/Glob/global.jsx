import { calendario, giornataClou } from "../../START/app/0SerieAMatches";

// SquadraContext.js
import { createContext, useState } from "react";

export const SquadraContext = createContext();
// eslint-disable-next-line
export const SquadraProvider = ({ children }) => {
  const [sqSelected, setSqSelected] = useState([]);

  return (
    <SquadraContext.Provider value={{ sqSelected, setSqSelected }}>
      {children}
    </SquadraContext.Provider>
  );
};

//-----------------------------------------------------------------------

export const CoppiaPartitaContext = createContext();
// eslint-disable-next-line
export const CoppiaPartitaProvider = ({ children }) => {
  const [coppiaSelected, setCoppiaSelected] = useState([]);

  return (
    <CoppiaPartitaContext.Provider
      value={{ coppiaSelected, setCoppiaSelected }}
    >
      {children}
    </CoppiaPartitaContext.Provider>
  );
};

//-----------------------------------------------------------------------

export const CoppiaPartitaRegistrataContext = createContext();
// eslint-disable-next-line
export const CoppiaPartitaRegistrataProvider = ({ children }) => {
  const [coppiaRegSelected, setCoppiaRegSelected] = useState([]);

  return (
    <CoppiaPartitaRegistrataContext.Provider
      value={{ coppiaRegSelected, setCoppiaRegSelected }}
    >
      {children}
    </CoppiaPartitaRegistrataContext.Provider>
  );
};

//-----------------------------------------------------------------------

export const GiornataClouContext = createContext();
// eslint-disable-next-line
export const GiornataClouProvider = ({ children }) => {
  const [giornataClouSelected, setGiornataClouSelected] =
    useState(giornataClou);

  return (
    <GiornataClouContext.Provider
      value={{ giornataClouSelected, setGiornataClouSelected }}
    >
      {children}
    </GiornataClouContext.Provider>
  );
};
//-----------------------------------------------------------------------
export const CompleteDataContext = createContext();
// eslint-disable-next-line
export const CompleteDataProvider = ({ children }) => {
  const [completeClouSelected, setCompleteClouSelected] = useState(calendario);
  return (
    <CompleteDataContext.Provider
      value={{ completeClouSelected, setCompleteClouSelected }}
    >
      {children}
    </CompleteDataContext.Provider>
  );
};
//-----------------------------------------------------------------------

export const PartiteDefinNoModContext = createContext();
// eslint-disable-next-line
export const PartiteDefinNoModProvider = ({ children }) => {
  const [partiteDefinNoMod, setPartiteDefinNoMod] = useState(new Set());

  return (
    <PartiteDefinNoModContext.Provider
      value={{ partiteDefinNoMod, setPartiteDefinNoMod }}
    >
      {children}
    </PartiteDefinNoModContext.Provider>
  );
};

//-----------------------------------------------------------------------

export const ButtonResetContext = createContext();
// eslint-disable-next-line
export const ButtonResetProvider = ({ children }) => {
  const [buttonResetIsResetting, setButtonResetIsResetting] = useState(false);

  return (
    <ButtonResetContext.Provider
      value={{ buttonResetIsResetting, setButtonResetIsResetting }}
    >
      {children}
    </ButtonResetContext.Provider>
  );
};

//-----------------------------------------------------------------------

export const IndexSelectedContext = createContext();
// eslint-disable-next-line
export const IndexSelectedProvider = ({ children }) => {
  const [indexSel, setIndexSel] = useState(null);

  return (
    <IndexSelectedContext.Provider value={{ indexSel, setIndexSel }}>
      {children}
    </IndexSelectedContext.Provider>
  );
};

//-----------------------------------------------------------------------
