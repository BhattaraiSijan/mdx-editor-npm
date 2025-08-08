// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';

import {
  DirectiveDescriptor,
  GenericDirectiveEditor,
  GenericJsxEditor,
  JsxComponentDescriptor,
  useMdastNodeUpdater,
} from '@mdxeditor/editor';
// import { TwoColumnEditorWrapper } from './TwoColumnEditor';
import { MapEditorWrapper } from '@sijanbhattarai/mdx-editor-maps';
import { allAvailableDatasets } from '@sijanbhattarai/mdx-editor-datasets';
import { availableCsvs } from '@sijanbhattarai/mdx-editor-datasets';

export const createJsxComponentDescriptors = (datasetsGetter: (() => any[]) | any[] = []): JsxComponentDescriptor[] => {
  const getDatasets = () => {
    if (typeof datasetsGetter === 'function') {
      return datasetsGetter() || [];
    }
    return datasetsGetter || [];
  };
  
  console.log('Creating JSX component descriptors');
  return [
  // Simple test component
  {
    name: 'TestComponent',
    kind: 'flow',
    source: './components.jsx',
    hasChildren: false,
    props: [
      { name: 'text', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'color', type: 'string' },
      { name: 'showDetails', type: 'boolean' },
      { name: 'items', type: 'expression' }
    ],
    Editor: (props) => {
      console.log('TestComponent Editor called with props:', props);
      
      const TestComponent = require('@sijanbhattarai/mdx-editor-core').TestComponent;
      
      const mdastNode = props.mdastNode;
      const getAttributeValue = (attrName, defaultValue) => {
        if (!mdastNode?.attributes) return defaultValue;
        const attr = mdastNode.attributes.find(a => a.name === attrName);
        return attr ? attr.value : defaultValue;
      };
      
      const componentProps = {
        text: getAttributeValue('text', 'Default text'),
        title: getAttributeValue('title', 'Test Component'),
        color: getAttributeValue('color', 'blue'),
        showDetails: getAttributeValue('showDetails', 'true') === 'true',
        items: ['Item 1', 'Item 2', 'Item 3'] // Default for now
      };
      
      return <TestComponent {...componentProps} />;
    },
  },
  // VedaMap test component
  {
    name: 'VedaMap',
    kind: 'flow',
    source: '',
    hasChildren: false,
    props: [{ name: 'datasetId', type: 'string' }],
    Editor: (props) => {
      console.log('VedaMap Editor called!');
      // VedaMap is not in the core package, it's a placeholder
      const VedaMap = (props) => <div>VedaMap: {props.datasetId}</div>;
      return <VedaMap {...props} />;
    },
  },
  {
    name: 'Map',
    kind: 'flow',
    hasChildren: false,
    props: [
      { name: 'center', type: 'string' },
      { name: 'zoom', type: 'string' },
      { name: 'datasetId', type: 'string' },
      { name: 'layerId', type: 'string' },
      { name: 'dateTime', type: 'string' },
      { name: 'compareDateTime', type: 'string' },
      { name: 'compareLabel', type: 'string' },
      { name: 'attrUrl', type: 'string' },
      { name: 'attrAuthor', type: 'string' },
      { name: 'caption', type: 'string' },
    ],
    Editor: (props) => {
      console.log('Map Editor called! Props:', props);
      console.log('Map Editor mdastNode:', props?.mdastNode);
      
      const mdastNode = props.mdastNode;
      
      if (!mdastNode) {
        console.log('No mdastNode provided to Map Editor');
        return <div style={{ padding: '20px', border: '2px solid red', background: '#ffe0e0' }}>
          <h3>Map Component - No mdastNode!</h3>
        </div>;
      }
      
      const getAttributeValue = (attrName, defaultValue = '') => {
        if (!mdastNode.attributes || !Array.isArray(mdastNode.attributes)) {
          return defaultValue;
        }
        const attr = mdastNode.attributes.find(a => a.name === attrName);
        return attr ? attr.value : defaultValue;
      };
      
      const datasetId = getAttributeValue('datasetId', 'none');
      const layerId = getAttributeValue('layerId', 'none');
      
      console.log('Extracted from mdastNode - datasetId:', datasetId, 'layerId:', layerId);
      
      if (!MapEditorWrapper) {
        return <div>Map Editor not available</div>;
      }
      
      return (
        <MapEditorWrapper
          mdastNode={mdastNode}
          descriptor={props.descriptor}
          allAvailableDatasets={getDatasets()}
        />
      );
    },
  },
  {
    name: 'MapBlock',
    kind: 'flow',
    source: '',
    hasChildren: false,
    props: [
      { name: 'datasetId', type: 'string' },
      { name: 'layerId', type: 'string' },
      { name: 'dateTime', type: 'string' },
      { name: 'compareDateTime', type: 'string' },
      { name: 'compareLabel', type: 'string' },
      { name: 'projectionId', type: 'string' },
      { name: 'projectionCenter', type: 'expression' },
      { name: 'projectionParallels', type: 'expression' },
      { name: 'allowProjectionChange', type: 'boolean' }
    ],
    Editor: (props) => {
      console.log('Map Editor called! Props:', props);
      console.log('Map Editor mdastNode:', props?.mdastNode);
      
      const mdastNode = props.mdastNode;
      
      if (!mdastNode) {
        console.log('No mdastNode provided to Map Editor');
        return <div style={{ padding: '20px', border: '2px solid red', background: '#ffe0e0' }}>
          <h3>Map Component - No mdastNode!</h3>
        </div>;
      }
      
      const getAttributeValue = (attrName, defaultValue = '') => {
        if (!mdastNode.attributes || !Array.isArray(mdastNode.attributes)) {
          return defaultValue;
        }
        const attr = mdastNode.attributes.find(a => a.name === attrName);
        return attr ? attr.value : defaultValue;
      };
      
      const datasetId = getAttributeValue('datasetId', 'none');
      const layerId = getAttributeValue('layerId', 'none');
      
      console.log('Extracted from mdastNode - datasetId:', datasetId, 'layerId:', layerId);
      
      if (!MapEditorWrapper) {
        return <div>Map Editor not available</div>;
      }
      
      return (
        <MapEditorWrapper
          mdastNode={mdastNode}
          descriptor={props.descriptor}
          allAvailableDatasets={getDatasets()}
        />
      );
    },
  },
  // {
  //   name: 'TwoColumn',
  //   kind: 'flow',
  //   source: './components', // Adjust the path
  //   hasChildren: true,
  //   props: [{ name: 'children', type: 'object' }],
  //   Editor: (props) => {
  //     return <TwoColumnEditorWrapper props={{ ...props }} />;
  //   },
  // },
  {
    name: 'Block',
    kind: 'flow',
    source: './components', // Adjust the path
    hasChildren: true,
    props: [],
    Editor: GenericJsxEditor,
  },
  {
    name: 'Figure',
    kind: 'flow',
    source: './components', // Adjust the path
    hasChildren: true,
    props: [],
    Editor: GenericJsxEditor,
  },
  {
    name: 'Widget',
    kind: 'flow',
    source: './components.jsx', // Adjust the path
    hasChildren: true,
    props: [{ name: 'heading', type: 'string' }],
    Editor: GenericJsxEditor,
  },
  {
    name: 'Caption',
    kind: 'flow',
    source: './components.jsx', // Adjust the path
    hasChildren: true,
    props: [
      { name: 'attrAuthor', type: 'string' },
      { name: 'attrUrl', type: 'string' },
    ],
    Editor: GenericJsxEditor,
  },
  {
    name: 'Break',
    kind: 'flow',
    source: '', // Adjust the path
    hasChildren: false,
    props: [],
    Editor: GenericJsxEditor,
  },
  {
    name: 'Prose',
    kind: 'flow',
    source: './components', // Adjust the path
    hasChildren: true,
    props: [{ name: 'children', type: 'object' }],
    Editor: GenericJsxEditor,
  },
  {
    name: 'ScrollytellingBlock',
    kind: 'flow',
    source: './components.jsx',
    hasChildren: true,
    props: [],
    Editor: GenericJsxEditor,
  },
  {
    name: 'Chapter',
    kind: 'flow',
    source: './components.jsx',
    hasChildren: true,
    props: [
      { name: 'id', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'center', type: 'expression' },
      { name: 'zoom', type: 'number' },
      { name: 'datasetId', type: 'string' },
      { name: 'layerId', type: 'string' },
      { name: 'dateTime', type: 'string' },
    ],
    Editor: GenericJsxEditor,
  },
  {
    name: 'LeftColumn',
    kind: 'flow',
    source: './components',
    hasChildren: true,
    props: [{ name: 'children', type: 'object' }],
  },
  {
    name: 'RightColumn',
    kind: 'flow',
    source: './components',
    hasChildren: true,
    props: [{ name: 'children', type: 'object' }],
  },
  {
    name: 'Chart',
    kind: 'text',
    source: '',
    props: [
      { name: 'dataPath', type: 'string' },
      { name: 'dateFormat', type: 'string' },
      { name: 'idKey', type: 'string' },
      { name: 'xKey', type: 'string' },
      { name: 'yKey', type: 'string' },
      { name: 'yAxisLabel', type: 'string' },
      { name: 'xAxisLabel', type: 'string' },
      { name: 'highlightStart', type: 'string' },
      { name: 'highlightEnd', type: 'string' },
      { name: 'highlightLabel', type: 'string' },
      { name: 'availableDomain', type: 'string' },
      { name: 'altTitle', type: 'string' },
      { name: 'colorScheme', type: 'string' },
      { name: 'colors', type: 'string' },
      { name: 'altDesc', type: 'string' },
    ],
    hasChildren: false,
   Editor: (props) => {
    return (
    <>
      <ChartEditorWrapper
        {...props}
        allAvailableDatasets={getDatasets()}
        allAvailableCsvs={availableCsvs} // Add this line
      />
    </>
  );
    },
  },
  {
    name: 'iframe',
    kind: 'flow',
    hasChildren: false,
    props: [
      { name: 'src', type: 'string' },
      { name: 'width', type: 'string' },
      { name: 'height', type: 'string' },
      { name: 'frameBorder', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'allowFullScreen', type: 'boolean' },
    ],
    Editor: (props) => {
      const { mdastNode } = props;
      const updateMdastNode = useMdastNodeUpdater();
      
      const getAttributeValue = (attrName, defaultValue) => {
        if (!mdastNode || !Array.isArray(mdastNode.attributes)) {
          return defaultValue;
        }
        const attr = mdastNode.attributes.find(a => a.name === attrName);
        return attr ? attr.value : defaultValue;
      };
      
      const handleChange = (attrName, value) => {
        const newAttributes = [...(mdastNode.attributes || [])];
        const existingIndex = newAttributes.findIndex(a => a.name === attrName);
        
        const newAttr = { type: 'mdxJsxAttribute', name: attrName, value: String(value) };
        
        if (existingIndex >= 0) {
          newAttributes[existingIndex] = newAttr;
        } else {
          newAttributes.push(newAttr);
        }
        
        updateMdastNode({ ...mdastNode, attributes: newAttributes });
      };
      
      return (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '4px',
          margin: '10px 0',
          border: '1px solid #ddd'
        }}>
          <h4 style={{ marginTop: 0, marginBottom: '15px', fontSize: '16px' }}>Iframe Properties</h4>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
              Source URL:
            </label>
            <input
              type="text"
              value={getAttributeValue('src', 'https://example.com')}
              onChange={(e) => handleChange('src', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '6px 10px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                Width:
              </label>
              <input
                type="text"
                value={getAttributeValue('width', '100%')}
                onChange={(e) => handleChange('width', e.target.value)}
                placeholder="e.g., 100% or 600px"
                style={{ 
                  width: '100%', 
                  padding: '6px 10px',
                  border: '1px solid #ccc',
                  borderRadius: '3px',
                  fontSize: '14px'
                }}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                Height:
              </label>
              <input
                type="text"
                value={getAttributeValue('height', '400')}
                onChange={(e) => handleChange('height', e.target.value)}
                placeholder="e.g., 400 or 500px"
                style={{ 
                  width: '100%', 
                  padding: '6px 10px',
                  border: '1px solid #ccc',
                  borderRadius: '3px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
              Title (for accessibility):
            </label>
            <input
              type="text"
              value={getAttributeValue('title', 'Embedded Content')}
              onChange={(e) => handleChange('title', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '6px 10px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ fontSize: '14px' }}>
              <input
                type="checkbox"
                checked={getAttributeValue('allowFullScreen', false) === 'true'}
                onChange={(e) => handleChange('allowFullScreen', e.target.checked)}
                style={{ marginRight: '5px' }}
              />
              Allow Fullscreen
            </label>
          </div>
          
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '3px',
            marginTop: '15px'
          }}>
            <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
              Preview:
            </p>
            <iframe
              src={getAttributeValue('src', 'https://example.com')}
              width={getAttributeValue('width', '100%')}
              height={getAttributeValue('height', '400')}
              frameBorder="0"
              title={getAttributeValue('title', 'Embedded Content')}
              allowFullScreen={getAttributeValue('allowFullScreen', false) === 'true'}
              style={{ 
                marginTop: '10px',
                border: '1px solid #e0e0e0',
                borderRadius: '3px',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>
      );
    },
  },
];
};

export const jsxComponentDescriptors = createJsxComponentDescriptors(allAvailableDatasets);

export const CalloutDirectiveDescriptor: DirectiveDescriptor = {
  name: 'callout',
  testNode(node) {
    return node.name === 'callout';
  },
  attributes: [],
  hasChildren: true,
  Editor: GenericDirectiveEditor,
};
