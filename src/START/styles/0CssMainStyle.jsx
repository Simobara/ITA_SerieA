import './variable.css';

//sezione classifica - sezione1
export const s = {
  Bg0:              "bg-transparent",
  Bg1:              "bg-gray-700",
  Bg2:              "bg-slate-700/70", // colore per hover qunado seleziono squadre
  Bg3:              "bg-slate-800/70",  

  Filter:           "filter brightness-[50%]",
  Filter1:          "filter brightness-[80%]",
  Filter2:          "filter brightness-[90%]", //no mod
  Filter3:          "filter brightness-[90%]", //colonna PTS
  Filter4:          "filter brightness-[80%]", //colonna SQ - se ha gia' giocato

  BaseText:         "text-gray-700",
  BaseText1:        "md:text-md font-bold",

  ImgTextInRoundMd: "text-md",
  ImgTextInRoundSm: "text-sm",

  BorderPartite:        "border-pink-900",
  BrightnessDopoScelta: "brightness-60",
  BorderLineNextMatch:  "border-b-2 border-pink-700 border-dashed",

  pinWin: "text-[var(--win-color)] text-sm ",
  pinDraw: "text-[var(--draw-color)] text-sm ",
  pinLose: "text-[var(--lose-color)] text-sm ",
};

//sezione classifica - sezione3
export const ts = {
  Bg0:              "bg-transparent",
  Bg9:              "bg-black",

  TextCF:           "text-blue-500",
  //--- --- --- --- --- --- --- --- --- --- --- --- --- ---
  TabHoverHome:     "hover:bg-[var(--win-color)]", //parte3 - hover delle squadre tabella
  TabHoverAway:     "hover:bg-[var(--away-color)]",

  BgSquadraCasa:    "bg-[#022545]", //parte3 - titolo squadre tabella
  BgSquadraFuori:   "bg-[var(--lose-color)]",

  SqCasaZChart:     "!z-10",
  SqFuoriZChart:    "!z-5",

  //--- --- --- --- --- --- --- --- --- --- --- --- ---
  ATeamBg:          "bg-[#03325C]/80 border-t-2 border-l-4 border-cyan-500 rounded-t-sm rounded-l-3xl rounded-tr-xl",

  //--- --- --- --- --- --- --- --- --- --- --- --- ---
  ATeamText:        "text-black tracking-wider font-white",

  BTeamText:        "text-gray-600",

  ABTeamText:       "text-sky-800 font-bold",
  //--- --- --- --- --- --- --- --- --- --- --- --- --- ---
  ColResBg:         "!text-gray-800",
  ColResLine:       "text-gray-500",

  //--- --- --- --- --- --- --- --- --- --- --- --- --- ---
  ColResHome:       "!text-sky-800 font-semibold",
  ColResAway:       "text-[var(--lose-color)] font-light",

  //--- --- --- --- --- --- --- --- --- --- --- --- --- ---
  WinBg:            "bg-[var(--win-color)] rounded-full",
  WinText:           "!text-[var(--win-color)]", 

  DrawBg:           "bg-[var(--draw-color)] rounded-full", 
  DrawText:         "!text-[var(--draw-color)]", 

  LoseBg:           "bg-[var(--lose-color)] rounded-full",
  LoseText:         "!text-[var(--lose-color)]",
  //--- --- --- --- --- --- --- --- --- --- --- --- --- ---
  HoverSqHome:      "bg-red-700",
  HoverSqAway:      "bg-sky-800",
  //--- --- --- --- --- --- --- --- --- --- --- --- --- ---

  //ottima tonalita'=[#045b8a][#03325C][#022F51][#022545][#020c2d]",
};
