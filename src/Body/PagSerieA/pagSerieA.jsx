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
      <div className="overflow-hidden lg:w-[1299px] flex flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="overflow-y-scroll sm:overflow-y-auto min-w-[90vw] min-h-full sm:min-w-[17rem] sm:max-h-[50vh] md:min-w-[17rem] md:min-h-full lg:min-w-[18rem] lg:min-h-[95vh] xl:max-w-[100%] xl:max-h-[95vh] max-w-[15rem] max-h-[50vh]">
          <div className="border border-r-0 rounded-[20px] border-gray-900 bg-black unselectable">
            <TableClass />
          </div>
        </div>
        <div className="overflow-y-scroll sm:overflow-y-auto min-w-[90vw] sm:min-w-[22.5rem] sm:max-h-[50vh]  md:max-w-[30.15rem] md:max-h-[50vh] lg:min-w-[30rem] lg:min-h-[95vh] xl:max-w-[100%] xl:max-h-[95vh] max-w-[15rem] max-h-[40vh]">
          <div className="border-4 border-l-0 border-r-0 rounded-[20px] border-gray-900 bg-black">
            <TableProxInc />
          </div>
        </div>
        <div className="overflow-y-scroll sm:overflow-x-hidden sm:overflow-y-auto min-w-[90vw] sm:min-w-full sm:max-h-[50vh] md:min-w-[76.9vh] md:max-h-[50vh] lg:min-w-[30rem] lg:min-h-[95vh] lg:w-auto xl:max-w-[100%] xl:max-h-[95vh] max-w-[15rem] max-h-[50vh]">
          <div className="border border-l-0 rounded-[20px] border-gray-900 bg-black unselectable">
            <LogoSquadrePos />
          </div>
        </div>
      </div>
    </>
  );
};
export default PagSerieA;
