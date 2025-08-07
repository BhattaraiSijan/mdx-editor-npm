"use strict";
//app/components/mdx-plugins/plugins/scrollytellingButtonPlugin.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollytellingButtonPlugin = exports.INSERT_SCROLLYTELLING_NODE = void 0;
const lexical_1 = require("lexical");
const editor_1 = require("@mdxeditor/editor");
const ScrollytellingNode_1 = require("./ScrollytellingNode");
const ScrollytellingLexicalVisitor_1 = require("./ScrollytellingLexicalVisitor");
const ScrollytellingMdastVisitor_1 = require("./ScrollytellingMdastVisitor");
// Define the command for inserting the node
exports.INSERT_SCROLLYTELLING_NODE = (0, lexical_1.createCommand)('INSERT_SCROLLYTELLING_NODE');
exports.scrollytellingButtonPlugin = (0, editor_1.realmPlugin)({
    init(realm) {
        // Register our components with the editor realm
        realm.pubIn({
            [editor_1.addLexicalNode$]: ScrollytellingNode_1.ScrollytellingNode,
            [editor_1.addImportVisitor$]: ScrollytellingMdastVisitor_1.ScrollytellingMdastVisitor,
            [editor_1.addExportVisitor$]: ScrollytellingLexicalVisitor_1.ScrollytellingLexicalVisitor
        });
        // Register the command handler
        realm.pub(editor_1.createRootEditorSubscription$, (editor) => {
            return editor.registerCommand(exports.INSERT_SCROLLYTELLING_NODE, () => {
                editor.update(() => {
                    const node = new ScrollytellingNode_1.ScrollytellingNode();
                    (0, lexical_1.$insertNodes)([node]);
                });
                return true;
            }, 0 // high priority
            );
        });
    }
});
