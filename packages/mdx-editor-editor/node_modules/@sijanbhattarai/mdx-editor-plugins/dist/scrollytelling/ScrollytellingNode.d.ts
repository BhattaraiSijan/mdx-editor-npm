import { ElementNode, LexicalNode, SerializedElementNode } from 'lexical';
export declare class ScrollytellingNode extends ElementNode {
    static getType(): string;
    static clone(node: ScrollytellingNode): ScrollytellingNode;
    createDOM(): HTMLElement;
    updateDOM(): boolean;
    static importJSON(): ScrollytellingNode;
    exportJSON(): SerializedElementNode;
}
export declare function $createScrollytellingNode(): ScrollytellingNode;
export declare function $isScrollytellingNode(node: LexicalNode | null | undefined): node is ScrollytellingNode;
