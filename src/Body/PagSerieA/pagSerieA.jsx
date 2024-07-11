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
    <div className="overflow-y-auto min-w-[90vw] min-h-full sm:min-w-[17rem] sm:max-h-[50vh] md:min-w-[17rem] md:min-h-full lg:min-w-[18rem] lg:min-h-[95vh] xl:max-w-[100%] xl:max-h-[95vh] max-w-[15rem] max-h-[50vh]">
        <div className="border border-r-0 rounded-[20px] border-gray-900 bg-black unselectable pb-2 mt-0">
            <TableClass />
        </div>
    </div>
    <div className="overflow-y-auto min-w-[90vw] sm:min-w-[22rem] sm:max-h-[50vh]  md:max-w-[30rem] md:max-h-[50vh] lg:min-w-[30rem] lg:min-h-[95vh] xl:max-w-[100%] xl:max-h-[95vh] max-w-[15rem] max-h-[50vh]">
        <div className="border-2 rounded-[20px] border-gray-900 bg-black mt-2">
            <TableProxInc />
        </div>
    </div>
    <div className="overflow-x-hidden overflow-y-auto min-w-[90vw] sm:min-w-full sm:max-h-[50vh] md:min-w-[75.6vh] md:max-h-[50vh] lg:min-w-[30rem] lg:min-h-[95vh] lg:w-auto xl:max-w-[100%] xl:max-h-[95vh] max-w-[15rem] max-h-[50vh]">
        <div className="border border-l-0 rounded-[20px] border-gray-900 bg-black unselectable pb-4 mt-1">
            <LogoSquadrePos />
        </div>
    </div>
</div>
    </>
  );
};
export default PagSerieA;


