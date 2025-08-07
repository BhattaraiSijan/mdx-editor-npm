export interface MapProps {
    center?: string | number[];
    zoom?: string | number;
    datasetId?: string;
    layerId?: string;
    dateTime?: string;
    compareDateTime?: string;
    compareLabel?: string;
    attrUrl?: string;
    attrAuthor?: string;
    caption?: string;
    projectionId?: string;
    projectionCenter?: [number, number];
    projectionParallels?: [number, number];
    allowProjectionChange?: boolean;
}
export interface ChartProps {
    dataPath?: string;
    dateFormat?: string;
    idKey?: string;
    xKey?: string;
    yKey?: string;
    yAxisLabel?: string;
    xAxisLabel?: string;
    highlightStart?: string;
    highlightEnd?: string;
    highlightLabel?: string;
    availableDomain?: string;
    altTitle?: string;
    colorScheme?: string;
    colors?: string;
    altDesc?: string;
}
export interface DatasetWithContent {
    id: string;
    name: string;
    description?: string;
    layers?: Array<{
        id: string;
        name: string;
        description?: string;
        type?: string;
        timeDensity?: string;
        domain?: string[];
    }>;
    [key: string]: any;
}
