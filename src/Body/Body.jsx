import {
  ButtonResetProvider,
  CompleteDataProvider,
  CoppiaPartitaProvider,
  CoppiaPartitaRegistrataProvider,
  IndexSelectedProvider,
  PartiteDefinNoModProvider,
  SquadraProvider,
} from "./Global/global";
import PagSerieA from "./PagSerieA/pagSerieA";

const Body = () => {
  return (
    <>
      <IndexSelectedProvider>
        <SquadraProvider>
          <ButtonResetProvider>
            <PartiteDefinNoModProvider>
              <CompleteDataProvider>
                <CoppiaPartitaProvider>
                  <CoppiaPartitaRegistrataProvider>
                    <PagSerieA />
                  </CoppiaPartitaRegistrataProvider>
                </CoppiaPartitaProvider>
              </CompleteDataProvider>
            </PartiteDefinNoModProvider>
          </ButtonResetProvider>
        </SquadraProvider>
      </IndexSelectedProvider>
    </>
  );
};

export default Body;
