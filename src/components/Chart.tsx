import React, { useEffect } from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
  ChartArea,
  ChartAxisDefaults,
} from "@progress/kendo-react-charts";
import "hammerjs";
import "@progress/kendo-theme-default/dist/all.css";
import { IChartContainer } from "../api/types";
import { Gradient } from "./Gradient";

export const ChartContainer = ({
  isPercent,
  chartName,
  chartData,
  chartDATE,
  getData,
}: IChartContainer) => {
  useEffect(() => {
    getData();
  }, []);

  const suffix = "%";

  const labelContent = (e: any) => (isPercent ? e.value + suffix : e.value);
  const labelDate = (e: any) => e.value;

  return (
    <>
      <div
        className="col-6"
        style={{
          width: 800,
          margin: 15,
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Gradient />
        <div style={{ height: 0 }}></div>
        <div>
          <Chart
            zoomable={true}
            style={{
              height: 400,
            }}
          >
            <ChartAxisDefaults
              majorGridLines={{ color: "#443870" }}
              color={"#a0a0df"}
              line={{ width: 0 }}
              labels={{
                content: labelContent,
                padding: 6,
              }}
            />
            <ChartArea margin={15} background={"#2F2B52"} />
            <ChartTitle
              text={chartName}
              color={"white"}
              font={"600 18px Roboto, sans-serif"}
            />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                color={"#a0a0df"}
                categories={chartDATE}
                startAngle={45}
                labels={{
                  content: labelDate,
                }}
                line={{
                  color: "inherit",
                }}
              />
            </ChartCategoryAxis>
            <ChartSeries>
              {chartData.length ? (
                <ChartSeriesItem
                  border={{ width: 0 }}
                  line={{
                    style: "smooth",
                    color: "#c669ff",
                    width: 2,
                  }}
                  color={"url(#svg-gradient)"}
                  type="area"
                  tooltip={{
                    visible: true,
                  }}
                  data={chartData}
                />
              ) : null}
            </ChartSeries>
          </Chart>
        </div>
      </div>
    </>
  );
};
