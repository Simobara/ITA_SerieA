import { CompleteDataProvider } from "../Ap/Global/global";
import {
  ButtonResetProvider,
  CoppiaPartitaProvider,
  CoppiaPartitaRegistrataProvider,
  IndexSelectedProvider,
  PartiteDefinNoModProvider,
  ScrollProvider,
  SquadraProvider,
  TestingDataProvider,
} from "./Global/global";
import PagSerieA from "./PagSerieA/pagSerieA";

const Body = () => {
  return (
    <>
      <ScrollProvider>
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
      </ScrollProvider>
    </>
  );
};

export default Body;
