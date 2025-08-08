// @ts-nocheck
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
  toolbarPlugin,
  frontmatterPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  CodeToggle,
  jsxPlugin,
  InsertImage,
  imagePlugin,
  ListsToggle,
  linkPlugin,
  MDXEditor,
  NestedLexicalEditor,
  CodeMirrorEditor,
  useMdastNodeUpdater,
  rootEditor$,
  addImportVisitor$,
  realmPlugin,
  Cell,
  Signal,
  useCellValues,
  markdown$,
  directivesPlugin,
  linkDialogPlugin,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
} from '@mdxeditor/editor';
import {
  $getRoot,
  $getSelection,
  LexicalEditor,
  $isRangeSelection,
  $isParagraphNode,
  $isElementNode,
  $isTextNode,
  ElementNode,
  TextNode,
  LexicalNode,
  $createParagraphNode,
  $createTextNode,
} from 'lexical';
import { reserializedMdxContent } from '@sijanbhattarai/mdx-editor-utils';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { MapIcon } from '@heroicons/react/24/outline';
import '@mdxeditor/editor/style.css';
import dynamic from 'next/dynamic';
import { BlockNode, Marker } from '@sijanbhattarai/mdx-editor-core';

// import { TwoColumnEditorWrapper } from './TwoColumnEditor';
import {
  InsertMapButton,
  // InsertLineGraph,
  // InsertTwoColumnButton,
  InsertSectionBreak,
  InsertIframe,
} from './ToolbarComponents';
import { Map, Widget, Caption, MapBlock, Chapter, Block, Figure, Prose, customComponents as MDXComponents } from '@sijanbhattarai/mdx-editor-core';

import {
  createJsxComponentDescriptors,
  jsxComponentDescriptors,
  CalloutDirectiveDescriptor,
} from './ComponentDescriptors';
import { nodeGroupingPlugin } from '@sijanbhattarai/mdx-editor-plugins';
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import { $createBlockNode, $createProseNode } from '@sijanbhattarai/mdx-editor-plugins';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxJsx } from 'micromark-extension-mdx-jsx';
import { mdxJsxFromMarkdown } from 'mdast-util-mdx-jsx';

interface MDXEditorWrapperProps {
  markdown: string;
  onChange: (content: string) => void;
}

const initialConfig = {
  namespace: 'MyEditor', // Unique namespace for this editor instance
  onError: (error) => {
    console.error('Lexical editor error:', error);
  },
};

export function MDXEditorEnhanced({
  markdown,
  onChange,
  editorMounted,
  previewMDAST,
  allAvailableDatasets,
}: any) {
  const editorRef = useRef(null);
  const [mdast, setMdast] = useState(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [currentMarkdown, setCurrentMarkdown] = useState(markdown);
  
  const isInitialMount = useRef(true);

  const datasetsRef = React.useRef(allAvailableDatasets);
  datasetsRef.current = allAvailableDatasets;
  
  const componentDescriptors = React.useMemo(() => {
    // Pass a getter function instead of the datasets directly
    return createJsxComponentDescriptors(() => datasetsRef.current);
  }, []); 
  
  const markdownForEditor = markdown || '';
  
  useEffect(() => {
    if (componentDescriptors.length > 0) {
      console.log('Component descriptors ready:', componentDescriptors.length);
    }
  }, [componentDescriptors]);
  
  useEffect(() => {
    if (editorRef.current) {
      setIsEditorReady(true);
      console.log('Editor ref is ready');
    }
  }, []); // Only run once
  
  useEffect(() => {
    const textarea = document.querySelector('.mdx-editor-field');
    if (textarea && markdown) {
      textarea.value = markdown;
      textarea.setAttribute('data-mdx-updated', 'true');
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
    }
  }, [markdown]);
  
  useEffect(() => {
    const textarea = document.querySelector('.mdx-editor-field');
    if (textarea && currentMarkdown) {
      textarea.value = currentMarkdown;
      textarea.setAttribute('data-mdx-updated', 'true');
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
    }
  }, [currentMarkdown]);
  
  useEffect(() => {
    if (editorRef.current && isEditorReady) {
      console.log('Editor is ready, checking for JSX components');
    }
  }, [isEditorReady]);
  
  const analyzeMdast = () => {
    try {
      const markdown = editorRef.current && editorRef.current.getMarkdown();
      
      if (markdown) {
        const tree = fromMarkdown(markdown, {
          extensions: [mdxJsx()],
          mdastExtensions: [mdxJsxFromMarkdown()],
        });
        visit(tree, 'mdxJsxFlowElement', (node) => {
          if (
            ['RightColumn', 'LeftColumn'].includes(node.name) &&
            node.children.length > 0
          ) {
            const innerMarkdown = (node.children[0] as any)?.value;
            if (typeof innerMarkdown === 'string') {
              node.children = fromMarkdown(innerMarkdown, {
                extensions: [mdxJsx()],
                mdastExtensions: [mdxJsxFromMarkdown()],
              }).children;
            }
          }
        });
        
        // DEBUG: list Map nodes to verify parsing
        const mapNodes: any[] = [];
        const allJsxNodes: any[] = [];
        visit(tree, 'mdxJsxFlowElement', (node) => {
          allJsxNodes.push({ name: node.name, type: node.type, attributes: node.attributes });
          if (node.name === 'Map') {
            mapNodes.push(node);
            console.log('Map node attributes:', node.attributes);
          }
        });
        
        setMdast(tree);
        
        previewMDAST(reserializedMdxContent(tree));
      }
    } catch (error) {
      console.error('Error analyzing MDAST:', error);
      alert('Error analyzing MDAST: ' + error.message);
    }
  };

  const editorKey = 'stable-editor';
  
  if (componentDescriptors.length === 0) {
    console.log('MDXEditor: Waiting for component descriptors...');
    return (
      <div className='h-[600px] border rounded-lg overflow-hidden flex items-center justify-center'>
      <div>Loading editor components...</div>
      </div>
    );
  }
  
  console.log('MDXEditor: Rendering with descriptors:', componentDescriptors.length);
  
  return (
    <div className='h-[600px] border rounded-lg overflow-hidden'>
    <MDXEditor
    key={editorKey}
    ref={editorRef}
    markdown={markdownForEditor}
    onChange={(content) => {
      setCurrentMarkdown(content);
      
      console.log("this is the one", content)
      const textarea = document.querySelector('.mdx-editor-field');
      if (textarea) {
        textarea.value = content;
        textarea.setAttribute('data-mdx-updated', 'true');
        const event = new Event('input', { bubbles: true });
        textarea.dispatchEvent(event);
      }
      
      analyzeMdast();
      return onChange(content);
    }}
    contentEditableClassName='prose prose-lg max-w-none min-h-[500px] outline-none px-4 py-2'
    plugins={[
      (() => {
        const descriptors = createJsxComponentDescriptors(() => datasetsRef.current);
        
        const mapDescriptor = descriptors.find(d => d.name === 'Map');
        
        return jsxPlugin({
          jsxComponentDescriptors: descriptors,
          onError: (error) => {
            console.error('JSX Plugin Error:', error);
          },
        });
      })(),
      (() => {
        return realmPlugin({
          allowedImports: {
            './components': MDXComponents,
            './components.jsx': MDXComponents,
          },
        });
      })(),
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      thematicBreakPlugin(),
      markdownShortcutPlugin(),
      codeBlockPlugin(),
      frontmatterPlugin(),
      imagePlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      directivesPlugin({
        directiveDescriptors: [CalloutDirectiveDescriptor],
      }),
      diffSourcePlugin({
        viewMode: 'rich-text',
      }),
      toolbarPlugin({
        toolbarContents: () => (
          <div className='grid-column'>
          <div className='grid-row border-bottom-1px padding-y-1'>
          <UndoRedo />
          <BoldItalicUnderlineToggles />
          <ListsToggle />
          <BlockTypeSelect />
          <CreateLink />
          <CodeToggle />
          <InsertImage />
          <DiffSourceToggleWrapper />
          </div>
          <div className='grid-row padding-y-1'>
          <InsertMapButton />
          <InsertSectionBreak />
          <InsertIframe />
          </div>
          </div>
        ),
      }),
    ]}
    className='w-full h-full'
    />
    </div>
  );
}
export default MDXEditorEnhanced;