"use strict";
//app/components/mdx-plugins/visitors/ScrollytellingMdastVisitor.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollytellingMdastVisitor = void 0;
const ScrollytellingNode_1 = require("./ScrollytellingNode");
exports.ScrollytellingMdastVisitor = {
    // Test for the outer ScrollytellingBlock element
    testNode: node => node.type === 'mdxJsxFlowElement' && node.name === 'ScrollytellingBlock',
    // Simply convert it to a ScrollytellingNode - the content details don't matter for visualization
    visitNode: _node => new ScrollytellingNode_1.ScrollytellingNode()
};
