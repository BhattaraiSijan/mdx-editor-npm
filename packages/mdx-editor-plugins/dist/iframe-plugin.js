"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertIframeButton = exports.InsertIframeDialog = exports.IframeEditor = void 0;
const react_1 = __importStar(require("react"));
const editor_1 = require("@mdxeditor/editor");
// Iframe Editor Component
const IframeEditor = ({ mdastNode }) => {
    const updateMdastNode = (0, editor_1.useMdastNodeUpdater)();
    const [src, setSrc] = (0, react_1.useState)(mdastNode?.attributes?.find(a => a.name === 'src')?.value || '');
    const [title, setTitle] = (0, react_1.useState)(mdastNode?.attributes?.find(a => a.name === 'title')?.value || '');
    const [width, setWidth] = (0, react_1.useState)(mdastNode?.attributes?.find(a => a.name === 'width')?.value || '100%');
    const [height, setHeight] = (0, react_1.useState)(mdastNode?.attributes?.find(a => a.name === 'height')?.value || '400');
    const handleUpdate = () => {
        const attributes = [];
        if (src)
            attributes.push({ type: 'mdxJsxAttribute', name: 'src', value: src });
        if (title)
            attributes.push({ type: 'mdxJsxAttribute', name: 'title', value: title });
        if (width)
            attributes.push({ type: 'mdxJsxAttribute', name: 'width', value: width });
        if (height)
            attributes.push({ type: 'mdxJsxAttribute', name: 'height', value: height });
        attributes.push({ type: 'mdxJsxAttribute', name: 'frameBorder', value: '0' });
        updateMdastNode({ attributes });
    };
    return (react_1.default.createElement("div", { style: {
            border: '2px solid #007ACC',
            padding: '20px',
            margin: '10px 0',
            borderRadius: '8px',
            backgroundColor: '#f0f8ff'
        } },
        react_1.default.createElement("h4", { style: { marginTop: 0, marginBottom: '15px', color: '#007ACC' } }, "Iframe Configuration"),
        react_1.default.createElement("div", { style: { marginBottom: '15px' } },
            react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "URL:"),
            react_1.default.createElement("input", { type: "url", value: src, onChange: (e) => setSrc(e.target.value), onBlur: handleUpdate, placeholder: "https://example.com", style: {
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                } })),
        react_1.default.createElement("div", { style: { marginBottom: '15px' } },
            react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "Title:"),
            react_1.default.createElement("input", { type: "text", value: title, onChange: (e) => setTitle(e.target.value), onBlur: handleUpdate, placeholder: "Embedded Content", style: {
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                } })),
        react_1.default.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "Width:"),
                react_1.default.createElement("input", { type: "text", value: width, onChange: (e) => setWidth(e.target.value), onBlur: handleUpdate, placeholder: "100%", style: {
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                    } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "Height:"),
                react_1.default.createElement("input", { type: "text", value: height, onChange: (e) => setHeight(e.target.value), onBlur: handleUpdate, placeholder: "400", style: {
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                    } }))),
        src && (react_1.default.createElement("div", { style: { marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '20px' } },
            react_1.default.createElement("p", { style: { marginBottom: '10px', fontWeight: 'bold', color: '#666' } }, "Preview:"),
            react_1.default.createElement("div", { style: {
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    overflow: 'hidden'
                } },
                react_1.default.createElement("iframe", { src: src, title: title || 'Embedded Content', width: width, height: height, frameBorder: "0", style: { display: 'block' } }))))));
};
exports.IframeEditor = IframeEditor;
// Iframe Insert Dialog Component
const InsertIframeDialog = ({ onClose, onInsert }) => {
    const [src, setSrc] = (0, react_1.useState)('');
    const [title, setTitle] = (0, react_1.useState)('');
    const [width, setWidth] = (0, react_1.useState)('100%');
    const [height, setHeight] = (0, react_1.useState)('400');
    const handleInsert = () => {
        if (src) {
            onInsert({ src, title, width, height });
            onClose();
        }
    };
    return (react_1.default.createElement("div", { style: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10000,
            minWidth: '400px'
        } },
        react_1.default.createElement("h3", { style: { marginTop: 0, marginBottom: '20px' } }, "Insert Iframe"),
        react_1.default.createElement("div", { style: { marginBottom: '15px' } },
            react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } },
                "URL: ",
                react_1.default.createElement("span", { style: { color: 'red' } }, "*")),
            react_1.default.createElement("input", { type: "url", value: src, onChange: (e) => setSrc(e.target.value), placeholder: "https://example.com", style: {
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                }, autoFocus: true })),
        react_1.default.createElement("div", { style: { marginBottom: '15px' } },
            react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "Title:"),
            react_1.default.createElement("input", { type: "text", value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Embedded Content", style: {
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                } })),
        react_1.default.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "Width:"),
                react_1.default.createElement("input", { type: "text", value: width, onChange: (e) => setWidth(e.target.value), placeholder: "100%", style: {
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                    } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, "Height:"),
                react_1.default.createElement("input", { type: "text", value: height, onChange: (e) => setHeight(e.target.value), placeholder: "400", style: {
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                    } }))),
        react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '10px' } },
            react_1.default.createElement("button", { onClick: onClose, style: {
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                    fontSize: '14px'
                } }, "Cancel"),
            react_1.default.createElement("button", { onClick: handleInsert, disabled: !src, style: {
                    padding: '8px 16px',
                    border: '1px solid #007ACC',
                    borderRadius: '4px',
                    backgroundColor: src ? '#007ACC' : '#ccc',
                    color: 'white',
                    cursor: src ? 'pointer' : 'not-allowed',
                    fontSize: '14px'
                } }, "Insert"))));
};
exports.InsertIframeDialog = InsertIframeDialog;
// Iframe Insert Button Component
const InsertIframeButton = () => {
    const [showDialog, setShowDialog] = (0, react_1.useState)(false);
    const handleInsert = ({ src, title, width, height }) => {
        (0, editor_1.insertJsx$)({
            name: 'iframe',
            kind: 'flow',
            props: { src, title, width, height, frameBorder: '0' }
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { type: "button", onClick: () => setShowDialog(true), title: "Insert Iframe", style: {
                padding: '4px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
            } },
            react_1.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
                react_1.default.createElement("line", { x1: "9", y1: "3", x2: "9", y2: "21" }),
                react_1.default.createElement("line", { x1: "15", y1: "3", x2: "15", y2: "21" })),
            "Iframe"),
        showDialog && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 9999
                }, onClick: () => setShowDialog(false) }),
            react_1.default.createElement(exports.InsertIframeDialog, { onClose: () => setShowDialog(false), onInsert: handleInsert })))));
};
exports.InsertIframeButton = InsertIframeButton;
