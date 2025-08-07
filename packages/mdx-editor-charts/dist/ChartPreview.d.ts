import { DatasetWithContent } from './types/content';
export declare function ClientChartBlock(props: {
    allAvailableDatasets?: DatasetWithContent[];
}): import("react/jsx-runtime").JSX.Element;
export default ClientChartBlock;
export declare const DEFAULT_CHART_PROPS: {
    dataPath: string;
    dateFormat: string;
    idKey: string;
    xKey: string;
    yKey: string;
    yAxisLabel: string;
    xAxisLabel: string;
    highlightStart: string;
    highlightEnd: string;
    highlightLabel: string;
    availableDomain: string;
    altTitle: string;
    altDesc: string;
    colorScheme: string;
};
export declare const ChartWrapper: (props: any) => import("react/jsx-runtime").JSX.Element;
