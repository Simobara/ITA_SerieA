import PagSerieA from "./PagSerieA/pagSerieA";
import { CompleteDataProvider, SquadraProvider } from "./Global/global";
import { GiornataClouProvider } from "./Global/global";
import { CoppiaPartitaProvider } from "./Global/global";
import { CoppiaPartitaRegistrataProvider } from "./Global/global";
import { PartiteDefinNoModProvider } from "./Global/global";
import { ButtonResetProvider } from "./Global/global";
import { IndexSelectedProvider } from "./Global/global";

const Body = () => {
  return (
    <>
      <IndexSelectedProvider>
        <SquadraProvider>
          <ButtonResetProvider>
            <PartiteDefinNoModProvider>
              <CompleteDataProvider>
                <GiornataClouProvider>
                  <CoppiaPartitaProvider>
                    <CoppiaPartitaRegistrataProvider>
                      <PagSerieA />
                    </CoppiaPartitaRegistrataProvider>
                  </CoppiaPartitaProvider>
                </GiornataClouProvider>
              </CompleteDataProvider>
            </PartiteDefinNoModProvider>
          </ButtonResetProvider>
        </SquadraProvider>
      </IndexSelectedProvider>
    </>
  );
};

export default Body;
