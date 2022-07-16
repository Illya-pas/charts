import React, { useState } from "react";
import { ChartContainer } from "./components/Chart";
import { getAssets } from "./api/apiCalls";
import { MONTH_NAMES } from "./api/consts";
import { GetDataType, ResponseAssetsType } from "./api/types";

function App(): JSX.Element {
  const [tvlData, setTvlData] = useState<number[]>([]);
  const [aprData, setAprData] = useState<number[]>([]);
  const [tvlDATE, tvlSetDATE] = useState<string[]>([]);

  const getData: GetDataType = async () => {
    let responseData: ResponseAssetsType = await getAssets();
    const lastTvlTenData: Array<number> = [];
    const lastTenDATE: Array<string> = [];
    const lastAprTenData: Array<number> = [];

    for (let i = 0; i < 10; i++) {
      lastTvlTenData.push(responseData[i].value);
      let lastAprItem = 16;
      if (lastAprTenData.length) {
        lastAprItem = lastAprTenData[lastAprTenData.length - 1];
      }

      let lastAprPlusFivePercent = lastAprItem + (lastAprItem * 5) / 100;
      lastAprTenData.push(+lastAprPlusFivePercent.toFixed(2));

      const itemDate: string[] = responseData[i].date.split("-");
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
