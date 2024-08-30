import { CompleteDataProvider } from "../Ap/Global/global";
import {
  ButtonResetProvider,

  CoppiaPartitaProvider,
  CoppiaPartitaRegistrataProvider,
  IndexSelectedProvider,
  PartiteDefinNoModProvider,
  SquadraProvider,
  TestingDataProvider,
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
                    <TestingDataProvider>
                    <PagSerieA />
                    </TestingDataProvider>
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
