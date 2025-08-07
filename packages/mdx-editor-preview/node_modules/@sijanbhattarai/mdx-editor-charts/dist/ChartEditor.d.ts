import React from 'react';
import { LexicalNode } from 'lexical';
import { ChartProps } from './types';
export interface EditorChartProps extends ChartProps {
    node?: LexicalNode & {
        setProps?: (props: Partial<ChartProps>) => void;
    };
}
declare const ChartEditorWrapper: React.FC<any>;
export default ChartEditorWrapper;
