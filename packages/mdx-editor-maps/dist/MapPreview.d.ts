import { DatasetWithContent } from './types/content';
interface MapPreviewProps {
    allAvailableDatasets?: DatasetWithContent[];
    datasets?: DatasetWithContent[];
    datasetId?: string;
    layerId?: string;
    [key: string]: any;
}
export declare function ClientMapBlock(props: MapPreviewProps): import("react/jsx-runtime").JSX.Element;
export default ClientMapBlock;
