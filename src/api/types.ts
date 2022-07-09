export type GetDataType = () => void

type AssetType = {
  date: string,
  value: number
}

export type ResponseAssetsType = Array<AssetType>

export interface IChartContainer {
  isPercent?: boolean,
  chartName: string;
  chartData: number[];
  chartDATE: string[];
  getData: GetDataType;
}