import TableClass from "./1TableClass/tableClass";
import TableProxInc from "./2TableProxInc/tableProxInc";
import LogoSquadrePos from "./3LogoSquadrePos/logoSquadrePos";
import "./pagSerieA.css";

const PagSerieA = () => {
  return (
    <>
      {/* <div className="flex"> */}
      {/* <div className="w-6 bg-black"></div> */}
      {/* <div className="flex overflow-x-scroll whitespace-nowrap pl-1 z-3 inset-scrollbar">
                    <LogoSquadrePos />
                </div> */}
      {/* <div className="w-6 bg-black"></div> */}
      {/* </div> */}
      <div className="overflow-y-hidden lg:w-[1299px] grid grid-cols-1 md:grid-cols-10 md:grid-rows-[auto,1fr] lg:flex lg:flex-nowrap">
        {/* Prima sezione: occupa il 30% sui tablet */}
        <div className="overflow-hidden sm:overflow-y-auto min-w-[98vw] sm:min-w-[40%] md:col-span-3 md:row-span-2 md:min-h-[100vh] lg:min-w-[18rem] lg:min-h-[95vh] xl:max-w-[100%] xl:max-h-[95vh]">
          <div className="border border-r-0 rounded-[20px] border-gray-900 bg-black unselectable">
            <TableClass />
          </div>
        </div>

        {/* Seconda sezione: occupa la prima riga del restante 70% sui tablet */}
        <div className="overflow-hidden sm:overflow-y-auto sm:overflow-hidden min-w-[98vw] sm:min-w-[60%] md:col-span-7 md:row-span-1 md:min-h-[30vh] md:max-h-[30vh] lg:min-w-[30rem] lg:min-h-[95vh] xl:max-w-[100%] xl:max-h-[95vh]">
          <div className="border-4 border-l-0 border-r-0 rounded-[20px] border-gray-900 bg-black">
            <TableProxInc />
          </div>
        </div>

        {/* Terza sezione: occupa la seconda riga del restante 70% sui tablet */}
        <div className="overflow-y-auto overflow-x-hidden md:min-h-0 min-w-[98vw] sm:min-w-full md:col-span-7 md:row-span-1 lg:min-w-[30rem] xl:max-w-[100%]">
          <div className="border border-l-0 rounded-[20px] border-gray-900 bg-black unselectable">
            <LogoSquadrePos />
          </div>
        </div>
      </div>
    </>
  );
};
export default PagSerieA;
