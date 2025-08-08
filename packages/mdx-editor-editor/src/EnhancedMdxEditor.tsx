
'use client';

import React, {
  useState,
  useCallback,
  Suspense,
  useRef,
  useEffect,
} from 'react';
import dynamic from 'next/dynamic';
// import Providers from '@sijanbhattarai/mdx-editor-datasets';
import { LegacyGlobalStyles } from '@sijanbhattarai/mdx-editor-core';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import MDXEditorEnhanced from './MDXEditor';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error('Error in MDX Editor:', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('MDX Editor Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with the MDX Editor.</div>;
    }
    return this.props.children;
  }
}
const EDITOR_KEY = 'stable-mdx-editor-instance';

interface EditorStyle {
  style: {
    height: string;
    display: string;
    alignItems: string;
    justifyContent: string;
  };
}

// const MDXEditorEnhanced = dynamic(
//   () =>
//     import('./MDXEditor'),
//   {
//     ssr: false,
//     loading: () => (
//       <div className='h-[600px] flex items-center justify-center'>
//         Loading editor...
//       </div>
//     ),
//   },
// );

// const SimpleMDXPreview = dynamic(
//   () =>
//     import('./MDXPreview').then(
//       (mod) => mod.SimpleMDXPreview,
//     ),
//   {
//     ssr: false,
//     loading: () => (
//       <div className='h-[600px] flex items-center justify-center'>
//         Loading preview...
//       </div>
//     ),
//   },
// );

const initialContent = `# Welcome to the MDX Editor

This is a live editor where you can write and preview MDX content.

## Features

-   Live preview
-   Markdown formatting
-   Code blocks
-   Insert custom Map components

## Example Map

This is an example of how you can embed interactive maps in your content.

Try editing this content!
`;

export default function EditorPage({ allAvailableDatasets, textarea, initialContent: propInitialContent }) {
  const [mdxContent, setMdxContent] = useState(propInitialContent || initialContent);
  const [reserializedMdxContent, setReserializedMdxContent] =
    useState(propInitialContent || initialContent);
  const [editorMounted, setEditorMounted] = useState(false);
  
  const handleContentChange = useCallback((content: string) => {
    console.log('Content changed:', content);
    // Preserve import statements so JSX components continue to parse correctly.
    setMdxContent(content);
    if (textarea) {
      textarea.value = content;
    }
  }, [textarea]);
  
  // Set editor as mounted once it's loaded
  useEffect(() => {
    setEditorMounted(true);
  }, []);

  return (
    <div className='mdx-editor-wrapper'>
      {/* <Providers datasets={allAvailableDatasets}> */}
        <LegacyGlobalStyles />
        <div className='mdx-editor-container'>
          <Suspense
            fallback={
              <div className='mdx-editor-loading'>
                Loading editor...
              </div>
            }
          >
              <ErrorBoundary>
                <MDXEditorEnhanced
                  key={EDITOR_KEY}
                  markdown={mdxContent}
                  onChange={handleContentChange}
                  editorMounted={editorMounted}
                  previewMDAST={setReserializedMdxContent}
                  allAvailableDatasets={allAvailableDatasets}
                />
              </ErrorBoundary>
          </Suspense>
        </div>
      {/* </Providers> */}
    </div>
  );
}
const initialConfig = {
  namespace: 'MyEditor', // Unique namespace for this editor instance
  onError: (error) => {
    console.error('Lexical editor error:', error);
  },
};
