import React from 'react';
import {
  activeEditor$,
  addEditorWrapper$,
  addExportVisitor$,
  addImportVisitor$,
  addLexicalNode$,
  addMdastExtension$,
  addSyntaxExtension$,
  addToMarkdownExtension$,
  realmPlugin,
  rootEditor$,
  insertJsx$,
  Button,
  usePublisher,
} from '@mdxeditor/editor';

export const scrollytellingButtonPlugin = realmPlugin({
  update(realm) {
    // Add any necessary update logic
  },
  init(realm) {
    // Initialize the plugin
    // Plugin initialization logic can be added here
  },
});

export const InsertScrollytellingButton = () => {
  const insertJsx = usePublisher(insertJsx$);

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
    } catch (error) {
      console.error('Error inserting ScrollytellingBlock:', error);
      alert('Could not insert ScrollytellingBlock. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title="Insert Scrollytelling Block"
      className="text-sm display-flex flex-align-center padding-1"
    >
      Insert Scrollytelling
    </Button>
  );
};