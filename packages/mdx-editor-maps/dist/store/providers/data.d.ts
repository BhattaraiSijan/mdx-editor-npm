import { default as React, ReactNode } from 'react';
import { DatasetMetadata } from '@sijanbhattarai/mdx-editor-utils';
interface DataStore {
    datasets?: DatasetMetadata[];
    setDatasets?: React.Dispatch<React.SetStateAction<DatasetMetadata[] | undefined>>;
}
export declare const DataContext: React.Context<DataStore>;
export declare function useDataStore(): DataStore;
declare function DataProvider({ initialDatasets, children, }: {
    children: JSX.Element | ReactNode;
    initialDatasets: any[] | undefined;
}): import("react/jsx-runtime").JSX.Element;
export default DataProvider;
