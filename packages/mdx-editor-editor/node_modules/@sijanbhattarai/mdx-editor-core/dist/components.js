"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customComponents = exports.Prose = exports.Figure = exports.Block = exports.Chapter = exports.ScrollytellingBlock = exports.Caption = exports.MapBlock = exports.Widget = exports.Map = exports.BlockNode = exports.Marker = exports.MyLeaf = void 0;
const react_1 = __importDefault(require("react"));
const MyLeaf = ({ foo, bar, onClick, children }) => {
    return (react_1.default.createElement("span", { className: "bg-yellow-100 px-2 py-1 rounded", onClick: typeof onClick === 'function' ? onClick : () => { } },
        foo && react_1.default.createElement("span", { className: "text-blue-500 mr-1" },
            foo,
            ":"),
        bar && react_1.default.createElement("span", { className: "text-green-500 mr-1" },
            bar,
            ":"),
        children));
};
exports.MyLeaf = MyLeaf;
const Marker = ({ type, children }) => (react_1.default.createElement("span", { className: "border border-red-500 p-1 rounded inline-block" },
    type && react_1.default.createElement("span", { className: "text-xs text-red-500 mr-1" },
        type,
        ":"),
    children));
exports.Marker = Marker;
const BlockNode = ({ children }) => (react_1.default.createElement("div", { className: "border-l-4 border-blue-500 pl-4 my-4" }, children));
exports.BlockNode = BlockNode;
// Basic placeholder components for MDX rendering
const Map = (props) => {
    return react_1.default.createElement("div", { "data-component": "Map", ...props }, "Map Component");
};
exports.Map = Map;
const Widget = ({ heading, children }) => {
    return (react_1.default.createElement("div", { "data-component": "Widget", "data-heading": heading }, children));
};
exports.Widget = Widget;
const MapBlock = (props) => {
    return react_1.default.createElement("div", { "data-component": "MapBlock", ...props }, "MapBlock Component");
};
exports.MapBlock = MapBlock;
const Caption = ({ attrAuthor, attrUrl, children }) => {
    return (react_1.default.createElement("div", { "data-component": "Caption", "data-author": attrAuthor, "data-url": attrUrl }, children));
};
exports.Caption = Caption;
const ScrollytellingBlock = ({ children }) => {
    return react_1.default.createElement("div", { "data-component": "ScrollytellingBlock" }, children);
};
exports.ScrollytellingBlock = ScrollytellingBlock;
const Chapter = (props) => {
    return react_1.default.createElement("div", { "data-component": "Chapter", ...props }, props.children);
};
exports.Chapter = Chapter;
const Block = ({ type = 'full', children }) => {
    return (react_1.default.createElement("div", { "data-component": "Block", "data-type": type, className: `block-${type}` }, children));
};
exports.Block = Block;
const Figure = ({ children }) => {
    return (react_1.default.createElement("figure", { "data-component": "Figure", className: "figure" }, children));
};
exports.Figure = Figure;
const Prose = ({ children }) => {
    return (react_1.default.createElement("div", { "data-component": "Prose", className: "prose" }, children));
};
exports.Prose = Prose;
// Export a components object for convenience
exports.customComponents = {
    MyLeaf: exports.MyLeaf,
    Marker: exports.Marker,
    BlockNode: exports.BlockNode,
    Map: exports.Map,
    Widget: exports.Widget,
    MapBlock: exports.MapBlock,
    Caption: exports.Caption,
    ScrollytellingBlock: exports.ScrollytellingBlock,
    Chapter: exports.Chapter,
    Block: exports.Block,
    Figure: exports.Figure,
    Prose: exports.Prose,
};
