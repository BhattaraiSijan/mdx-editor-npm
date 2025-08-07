"use strict";
//app/components/mdx-plugins/plugins/InsertScrollytellingButton.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertScrollytellingButton = void 0;
const react_1 = __importDefault(require("react"));
const editor_1 = require("@mdxeditor/editor");
// import { DocumentPlusIcon } from '@heroicons/react/24/outline'
const scrollytellingButtonPlugin_1 = require("./scrollytellingButtonPlugin");
const InsertScrollytellingButton = () => {
    const rootEditor = (0, editor_1.useCellValue)(editor_1.rootEditor$);
    const handleInsert = () => {
        rootEditor?.dispatchCommand(scrollytellingButtonPlugin_1.INSERT_SCROLLYTELLING_NODE, undefined);
    };
    return (react_1.default.createElement(editor_1.Button, { onClick: handleInsert, title: "Insert Scrollytelling Block", className: "text-xs" }, "\uD83D\uDCDC Scroll"));
};
exports.InsertScrollytellingButton = InsertScrollytellingButton;
