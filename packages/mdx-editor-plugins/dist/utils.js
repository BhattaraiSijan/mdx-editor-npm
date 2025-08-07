"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProseNode = exports.BlockNode = void 0;
exports.$createBlockNode = $createBlockNode;
exports.$createProseNode = $createProseNode;
const lexical_1 = require("lexical");
//BREAD CRUMBS:
// Need to reserialize the components into <block<prose> structure
// You can do so either through string manipulation, but want to keept hat in the back pocket for the time being
// 
// Should go through the lexical node functionality and create groups based off how that is handled. 
class BlockNode extends lexical_1.ElementNode {
    static getType() {
        return 'block';
    }
    static clone(node) {
        return new BlockNode(node.__key);
    }
    createDOM() {
        const dom = document.createElement('div');
        dom.classList.add('block-container'); // Add any necessary styling
        return dom;
    }
    updateDOM(prevNode, dom, config) {
        return false;
    }
}
exports.BlockNode = BlockNode;
class ProseNode extends lexical_1.ElementNode {
    static getType() {
        return 'prose';
    }
    static clone(node) {
        return new ProseNode(node.__key);
    }
    createDOM() {
        const dom = document.createElement('div');
        dom.classList.add('prose-content'); // Add any necessary styling
        return dom;
    }
    updateDOM(prevNode, dom, config) {
        return false;
    }
}
exports.ProseNode = ProseNode;
function $createBlockNode() {
    return new BlockNode();
}
function $createProseNode() {
    return new ProseNode();
}
