import { DatasetData, StoryData, VedaData } from '@lib';
import { DatasetMetadata } from './content';
export declare function processTaxonomies(data: any): DatasetData | StoryData;
export declare const transformToDatasetsList: (content: DatasetMetadata[]) => DatasetData[];
export declare const transformToVedaData: (datasets: DatasetMetadata[] | undefined) => VedaData<DatasetData>;
