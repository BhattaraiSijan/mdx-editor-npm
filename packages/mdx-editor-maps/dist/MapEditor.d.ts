import { default as React } from 'react';
import { LexicalNode } from 'lexical';
import { MapProps } from '@sijanbhattarai/mdx-editor-core';
import { DatasetWithContent } from './types/content';
interface EditorMapProps extends MapProps {
    node?: LexicalNode;
    parentEditor?: any;
    allAvailableDatasets?: DatasetWithContent[];
}
declare const MapEditorWrapper: React.FC<EditorMapProps>;
export default MapEditorWrapper;
