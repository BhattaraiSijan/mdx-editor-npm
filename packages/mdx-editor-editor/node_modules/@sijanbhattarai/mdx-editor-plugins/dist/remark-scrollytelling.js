"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remarkDummyButtonSerialize = remarkDummyButtonSerialize;
exports.remarkDummyButtonDeserialize = remarkDummyButtonDeserialize;
const unist_util_visit_1 = require("unist-util-visit");
function remarkDummyButtonSerialize() {
    return (tree) => {
        console.log('✅ Serialize plugin is executing...'); // ADD THIS
        (0, unist_util_visit_1.visit)(tree, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'DummyButton') {
                console.log('🚨 Found DummyButton for serialization:', node); // ADD THIS
                node.name = 'ScrollytellingBlock';
                node.children = [
                    {
                        type: 'mdxJsxFlowElement',
                        name: 'Chapter',
                        attributes: [
                            { type: 'mdxJsxAttribute', name: 'center', value: '[77.63,24.27]' },
                            { type: 'mdxJsxAttribute', name: 'zoom', value: '2' },
                            { type: 'mdxJsxAttribute', name: 'datasetId', value: 'lis-global-da-trends' },
                            { type: 'mdxJsxAttribute', name: 'layerId', value: 'lis-global-da-tws-trend' },
                            { type: 'mdxJsxAttribute', name: 'datetime', value: '2003-01-01' }
                        ],
                        children: [
                            { type: 'heading', depth: 2, children: [{ type: 'text', value: 'Freshwater is depleting' }] },
                            { type: 'paragraph', children: [{ type: 'text', value: 'Over the globe, terrestrial water storage...' }] }
                        ]
                    }
                ];
            }
        });
    };
}
function remarkDummyButtonDeserialize() {
    return (tree) => {
        console.log('🚩 Deserialize Plugin Running');
        (0, unist_util_visit_1.visit)(tree, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'ScrollytellingBlock') {
                const chapterNode = node.children.find((child) => child.type === 'mdxJsxFlowElement' && child.name === 'Chapter');
                if (chapterNode) {
                    node.name = 'DummyButton';
                    node.attributes = [];
                    node.children = [];
                }
            }
        });
    };
}
