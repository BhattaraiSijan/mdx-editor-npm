import { ElementNode } from 'lexical';
export declare class BlockNode extends ElementNode {
    static getType(): string;
    static clone(node: any): BlockNode;
    createDOM(): HTMLDivElement;
    updateDOM(prevNode: any, dom: any, config: any): boolean;
}
export declare class ProseNode extends ElementNode {
    static getType(): string;
    static clone(node: any): ProseNode;
    createDOM(): HTMLDivElement;
    updateDOM(prevNode: any, dom: any, config: any): boolean;
}
export declare function $createBlockNode(): BlockNode;
export declare function $createProseNode(): ProseNode;
