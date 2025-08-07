"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertScrollytellingButton = exports.scrollytellingButtonPlugin = void 0;
const react_1 = __importDefault(require("react"));
const editor_1 = require("@mdxeditor/editor");
exports.scrollytellingButtonPlugin = (0, editor_1.realmPlugin)({
    update(realm) {
        // Add any necessary update logic
    },
    init(realm) {
        // Initialize the plugin
        // Plugin initialization logic can be added here
    },
});
const InsertScrollytellingButton = () => {
    const insertJsx = (0, editor_1.usePublisher)(editor_1.insertJsx$);
    const handleClick = () => {
        try {
            insertJsx({
                name: 'ScrollytellingBlock',
                kind: 'flow',
                props: {},
                children: [
                    {
                        type: 'mdxJsxFlowElement',
                        name: 'Chapter',
                        attributes: [
                            { type: 'mdxJsxAttribute', name: 'id', value: 'chapter-1' },
                            { type: 'mdxJsxAttribute', name: 'title', value: 'Chapter 1' },
                        ],
                        children: [
                            {
                                type: 'paragraph',
                                children: [{ type: 'text', value: 'Chapter content goes here...' }],
                            },
                        ],
                    },
                ],
            });
        }
        catch (error) {
            console.error('Error inserting ScrollytellingBlock:', error);
            alert('Could not insert ScrollytellingBlock. See console for details.');
        }
    };
    return (react_1.default.createElement(editor_1.Button, { onClick: handleClick, title: "Insert Scrollytelling Block", className: "text-sm display-flex flex-align-center padding-1" }, "Insert Scrollytelling"));
};
exports.InsertScrollytellingButton = InsertScrollytellingButton;
