import React, { useState } from "react";
import { ChartContainer } from "./components/Chart";
// import { getAssets } from "./api/apiCalls";
import { MONTH_NAMES } from "./api/consts";
import { GetDataType, ResponseAssetsType } from "./api/types";

function App(): JSX.Element {
  const [tvlData, setTvlData] = useState<number[]>([]);
  const [aprData, setAprData] = useState<number[]>([]);
  const [tvlDATE, tvlSetDATE] = useState<string[]>([]);

  const getData: GetDataType = async () => {
    // let responseData: ResponseAssetsType = await getAssets();
    const lastTvlTenData: Array<number> = [
      12, 14.5, 25, 17, 13, 18, 19.3, 20.1, 13.6, 17.7,
    ];
    const lastTenDATE: Array<string> = [];
    const lastAprTenData: Array<number> = [];
    const staticDATE = [
      "2022-01-01",
      "2022-01-02",
      "2022-01-04",
      "2022-01-07",
      "2022-01-09",
      "2022-01-10",
      "2022-01-15",
      "2022-04-03",
      "2022-04-08",
      "2022-05-11",
    ];

    for (let i = 0; i < 10; i++) {
      // lastTvlTenData.push(responseData[i].value);
      let lastAprItem = 16;
      if (lastAprTenData.length) {
        lastAprItem = lastAprTenData[lastAprTenData.length - 1];
      }

      let lastAprPlusFivePercent = lastAprItem + (lastAprItem * 5) / 100;
      lastAprTenData.push(+lastAprPlusFivePercent.toFixed(2));

      // const itemDate: string[] = responseData[i].date.split("-");
      const itemDate: string[] = staticDATE[i].split("-");
      const itemDateMonth: string = MONTH_NAMES[+itemDate[1] - 1];
      const itemViewDate = `${itemDateMonth} ${itemDate[2]}`;
      lastTenDATE.unshift(itemViewDate);
    }
    setAprData(lastAprTenData);
    setTvlData(lastTvlTenData);
    tvlSetDATE(lastTenDATE);
  };

  return (
    <div className="app">
      <header className="app_header"></header>
      <div className="charts-container">
        <ChartContainer
          isPercent={true}
          chartName="Asset APR(y)"
          chartData={aprData}
          chartDATE={tvlDATE}
          getData={() => getData()}
        />
        <ChartContainer
          chartName="Asset TVL"
          chartData={tvlData}
          chartDATE={tvlDATE}
          getData={() => getData()}
        />
      </div>
    </div>
  );
}

export default App;
