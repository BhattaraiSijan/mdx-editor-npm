import React, { useState } from 'react';
import { 
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_NORMAL
} from 'lexical';
import { $insertNodes } from '@lexical/selection';
import { 
  useMdastNodeUpdater, 
  useLexicalNodeRemove,
  insertJsx$,
  useLexicalComposerContext
} from '@mdxeditor/editor';

// Iframe Editor Component
export const IframeEditor = ({ mdastNode }) => {
  const updateMdastNode = useMdastNodeUpdater();
  const [src, setSrc] = useState(mdastNode?.attributes?.find(a => a.name === 'src')?.value || '');
  const [title, setTitle] = useState(mdastNode?.attributes?.find(a => a.name === 'title')?.value || '');
  const [width, setWidth] = useState(mdastNode?.attributes?.find(a => a.name === 'width')?.value || '100%');
  const [height, setHeight] = useState(mdastNode?.attributes?.find(a => a.name === 'height')?.value || '400');

  const handleUpdate = () => {
    const attributes = [];
    if (src) attributes.push({ type: 'mdxJsxAttribute', name: 'src', value: src });
    if (title) attributes.push({ type: 'mdxJsxAttribute', name: 'title', value: title });
    if (width) attributes.push({ type: 'mdxJsxAttribute', name: 'width', value: width });
    if (height) attributes.push({ type: 'mdxJsxAttribute', name: 'height', value: height });
    attributes.push({ type: 'mdxJsxAttribute', name: 'frameBorder', value: '0' });
    
    updateMdastNode({ attributes });
  };

  return (
    <div style={{ 
      border: '2px solid #007ACC', 
      padding: '20px', 
      margin: '10px 0', 
      borderRadius: '8px',
      backgroundColor: '#f0f8ff' 
    }}>
      <h4 style={{ marginTop: 0, marginBottom: '15px', color: '#007ACC' }}>
        Iframe Configuration
      </h4>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          URL:
        </label>
        <input
          type="url"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          onBlur={handleUpdate}
          placeholder="https://example.com"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleUpdate}
          placeholder="Embedded Content"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Width:
          </label>
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            onBlur={handleUpdate}
            placeholder="100%"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Height:
          </label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onBlur={handleUpdate}
            placeholder="400"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      {src && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
          <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#666' }}>
            Preview:
          </p>
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <iframe
              src={src}
              title={title || 'Embedded Content'}
              width={width}
              height={height}
              frameBorder="0"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Iframe Insert Dialog Component
export const InsertIframeDialog = ({ onClose, onInsert }) => {
  const [src, setSrc] = useState('');
  const [title, setTitle] = useState('');
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('400');

  const handleInsert = () => {
    if (src) {
      onInsert({ src, title, width, height });
      onClose();
    }
  };

  return (
    <div style={{
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
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Insert Iframe</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          URL: <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="url"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          placeholder="https://example.com"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
          autoFocus
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Embedded Content"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Width:
          </label>
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="100%"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Height:
          </label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="400"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button
          onClick={onClose}
          style={{
            padding: '8px 16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Cancel
        </button>
        <button
          onClick={handleInsert}
          disabled={!src}
          style={{
            padding: '8px 16px',
            border: '1px solid #007ACC',
            borderRadius: '4px',
            backgroundColor: src ? '#007ACC' : '#ccc',
            color: 'white',
            cursor: src ? 'pointer' : 'not-allowed',
            fontSize: '14px'
          }}
        >
          Insert
        </button>
      </div>
    </div>
  );
};

// Iframe Insert Button Component
export const InsertIframeButton = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleInsert = ({ src, title, width, height }) => {
    insertJsx$({
      name: 'iframe',
      kind: 'flow',
      props: { src, title, width, height, frameBorder: '0' }
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowDialog(true)}
        title="Insert Iframe"
        style={{
          padding: '4px 8px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: 'white',
          cursor: 'pointer',
          fontSize: '14px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
        </svg>
        Iframe
      </button>
      
      {showDialog && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999
            }}
            onClick={() => setShowDialog(false)}
          />
          <InsertIframeDialog
            onClose={() => setShowDialog(false)}
            onInsert={handleInsert}
          />
        </>
      )}
    </>
  );
};