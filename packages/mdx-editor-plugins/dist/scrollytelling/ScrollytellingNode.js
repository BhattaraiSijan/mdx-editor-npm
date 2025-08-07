"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollytellingNode = void 0;
exports.$createScrollytellingNode = $createScrollytellingNode;
exports.$isScrollytellingNode = $isScrollytellingNode;
const lexical_1 = require("lexical");
class ScrollytellingNode extends lexical_1.ElementNode {
    static getType() {
        return 'scrollytelling';
    }
    static clone(node) {
        return new ScrollytellingNode(node.__key);
    }
    createDOM() {
        const element = document.createElement('div');
        element.className = 'scrollytelling-block';
        return element;
    }
    updateDOM() {
        return false;
    }
    static importJSON() {
        return new ScrollytellingNode();
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            type: 'scrollytelling',
            version: 1,
        };
    }
}
exports.ScrollytellingNode = ScrollytellingNode;
function $createScrollytellingNode() {
    return new ScrollytellingNode();
}
function $isScrollytellingNode(node) {
    return node instanceof ScrollytellingNode;
}
