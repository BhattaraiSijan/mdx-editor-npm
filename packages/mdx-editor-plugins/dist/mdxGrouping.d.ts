import React from 'react';
/**
 * Generic node grouping plugin that allows custom filtering and grouping of nodes
 */
export declare const GenericNodeGroupingPlugin: React.FC;
/**
 * Create a plugin for MDXEditor from our generic grouping plugin
 */
export declare const nodeGroupingPlugin: () => {
    plugin: {
        resolve: () => (props: any) => React.JSX.Element;
    };
};
