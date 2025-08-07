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
  
  // Track if this is the initial render
  const isInitialMount = useRef(true);
  
  // Create component descriptors with allAvailableDatasets
  // Use a ref to ensure the descriptors always have access to the latest datasets
  const datasetsRef = React.useRef(allAvailableDatasets);
  datasetsRef.current = allAvailableDatasets;
  
  const componentDescriptors = React.useMemo(() => {
    // Pass a getter function instead of the datasets directly
    return createJsxComponentDescriptors(() => datasetsRef.current);
  }, []); // Only create once, but the getter will always return current datasets
  
  // Use markdown directly without manipulation
  const markdownForEditor = markdown || '';
  
  // Log the actual markdown content being passed to editor
  console.log('MDXEditor: markdownForEditor preview:', markdownForEditor?.slice(0, 500) + '...');
  console.log('MDXEditor: Contains <Map>?', markdownForEditor?.includes('<Map'));
  console.log('MDXEditor: Map pattern matches:', markdownForEditor?.match(/<Map[^>]*>/g));
  
  // Debug logging
  useEffect(() => {
    console.log('MDXEditorEnhanced mount/update:');
    console.log('- Markdown length:', markdownForEditor?.length);
    console.log('- Contains Map component?', markdownForEditor?.includes('<Map'));
    console.log('- Component descriptors:', componentDescriptors.map(d => d.name));
    console.log('- Datasets loaded:', allAvailableDatasets?.length);
    console.log('- Editor ready?', isEditorReady);
    
    // Extract and log Map components in markdown
    if (markdownForEditor?.includes('<Map')) {
      const mapMatches = markdownForEditor.match(/<Map[^>]*>/g);
      console.log('- Found Map components:', mapMatches);
    }
  }, [markdownForEditor, componentDescriptors, allAvailableDatasets, isEditorReady]);
  
  // Log when component descriptors are ready
  useEffect(() => {
    if (componentDescriptors.length > 0) {
      console.log('Component descriptors ready:', componentDescriptors.length);
    }
  }, [componentDescriptors]);
  
  // Check if editor is ready after mount
  useEffect(() => {
    if (editorRef.current) {
      setIsEditorReady(true);
      console.log('Editor ref is ready');
    }
  }, []); // Only run once
  
  useEffect(() => {
    // Get textarea from props or context
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
  
  // Add an effect to handle imports
  useEffect(() => {
    if (editorRef.current && isEditorReady) {
      // Use the addImportVisitor$ to add import handling
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
        //mdxJsxFromMarkdown converts all contents of TwoCOlumn to 'code' blocks
        //Below re parses it and converts back to accepted MDX values.
        visit(tree, 'mdxJsxFlowElement', (node) => {
          if (
            ['RightColumn', 'LeftColumn'].includes(node.name) &&
            node.children.length > 0
          ) {
            // The round-trip of getMarkdown() -> fromMarkdown() can cause the rich content of the columns
            // to be stringified into a single text/code node. We need to re-parse that content.
            const innerMarkdown = (node.children[0] as any)?.value;
            // Only re-parse if innerMarkdown is a string. It can be undefined if the child is not a text/code node.
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
        console.log('analyzeMdast: Found', mapNodes.length, 'Map mdxJsxFlowElement nodes');
        console.log('All JSX nodes found:', allJsxNodes);
        
        setMdast(tree);
        
        previewMDAST(reserializedMdxContent(tree));
      }
    } catch (error) {
      console.error('Error analyzing MDAST:', error);
      alert('Error analyzing MDAST: ' + error.message);
    }
  };
  
  // Remove the sync effect - let the editor handle its own state
  
  // Remove key-based remounting - let the editor handle its own state
  // This prevents Lexical reconciliation errors
  const editorKey = 'stable-editor';
  
  // Don't render the editor until we have component descriptors ready
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
      // Sync with textarea immediately
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
      // JSX Plugin MUST be first to properly handle components on initial load
      (() => {
        console.log('Initializing jsxPlugin with descriptors:', componentDescriptors.map(d => ({ name: d.name, kind: d.kind })));
        // Try passing the descriptors directly without memoization
        const descriptors = createJsxComponentDescriptors(() => datasetsRef.current);
        console.log('Fresh descriptors for jsxPlugin:', descriptors.length);
        
        // Log descriptor names to ensure Map is included
        console.log('Descriptor names:', descriptors.map(d => d.name));
        
        // Find the Map descriptor
        const mapDescriptor = descriptors.find(d => d.name === 'Map');
        console.log('Map descriptor found:', !!mapDescriptor);
        
        return jsxPlugin({
          jsxComponentDescriptors: descriptors,
          onError: (error) => {
            console.error('JSX Plugin Error:', error);
          },
        });
      })(),
      (() => {
        console.log('MDXEditor: Initializing plugins with', componentDescriptors.length, 'component descriptors');
        console.log('MDXComponents available:', Object.keys(MDXComponents));
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
        // Don't set diffMarkdown - let it sync automatically with the editor state
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