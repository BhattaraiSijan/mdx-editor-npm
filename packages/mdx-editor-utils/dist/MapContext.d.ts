import { default as React } from 'react';
import { LexicalEditor, LexicalNode } from 'lexical';
interface MapContextValue {
    parentEditor: LexicalEditor;
    lexicalNode: LexicalNode;
}
export declare const MapContextProvider: ({ children, value, }: {
    children: React.ReactNode;
    value: MapContextValue;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useMapContext: () => MapContextValue;
export {};
