'use client';
import React, { useEffect, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { MapContextProvider, useMapContext } from '@sijanbhattarai/mdx-editor-utils';
import dynamic from 'next/dynamic';
import { LexicalNode } from 'lexical';
import { TextInput, Label, Button, DatePicker } from '@trussworks/react-uswds';
import { MapProps } from '@sijanbhattarai/mdx-editor-core';
import { useMdastNodeUpdater } from '@mdxeditor/editor';
import { DEFAULT_MAP_PROPS } from '@sijanbhattarai/mdx-editor-ui';
import { InputField } from '@sijanbhattarai/mdx-editor-utils';
import { ClientMapBlock } from './MapPreview';

import { DatasetWithContent } from './types/content';

interface EditorMapProps extends MapProps {
  node?: LexicalNode & { setProps?: (props: Partial<MapProps>) => void };
  allAvailableDatasets?: DatasetWithContent[];
}

// Create a placeholder node type that satisfies the LexicalNode interface
const createPlaceholderNode = (): LexicalNode & {
  setProps?: (props: Partial<EditorMapProps>) => void;
} => {
  return {
    __type: 'placeholder',
    __key: 'placeholder',
    __parent: null,
    __prev: null,
    __next: null,
    setProps: () => console.warn('setProps called on a placeholder node'),
  } as unknown as LexicalNode & {
    setProps?: (props: Partial<EditorMapProps>) => void;
  };
};


const MapEditorWithPreview = (props) => {
  const updateMdastNode = useMdastNodeUpdater();
  const [isEditing, setIsEditing] = useState(true);

  // 1. Get the mdastNode, which is the single source of truth.
  const mdastNode = props.mdastNode || props?.props?.mdastNode;
  const allAvailableDatasets = props.allAvailableDatasets;

  // 2. Create a helper function to read attributes directly.
  const getAttr = (name) => {
    const attribute = mdastNode?.attributes.find(a => a.name === name);
    return attribute ? attribute.value : DEFAULT_MAP_PROPS[name] || '';
  };
  
  // 3. Define a single function to handle all input changes.
  const handlePropChange = (propName, value) => {
    const attributes = [...(mdastNode.attributes || [])];
    const existingIndex = attributes.findIndex(a => a.name === propName);

    const newAttribute = { type: 'mdxJsxAttribute', name: propName, value };

    if (existingIndex !== -1) {
      attributes[existingIndex] = newAttribute;
    } else {
      attributes.push(newAttribute);
    }
    
    // Auto-update layerId if datasetId changed
    if (propName === 'datasetId') {
      const newDataset = allAvailableDatasets?.find((d) => d.metadata.id === value);
      const newLayerId = newDataset?.metadata.layers[0]?.id || '';
      const layerIndex = attributes.findIndex(a => a.name === 'layerId');
      if (layerIndex !== -1) {
        attributes[layerIndex] = { type: 'mdxJsxAttribute', name: 'layerId', value: newLayerId };
      } else {
        attributes.push({ type: 'mdxJsxAttribute', name: 'layerId', value: newLayerId });
      }
    }

    // 4. Immediately update the node. No internal state needed.
    updateMdastNode({ attributes });
  };
  
  // Build dropdown options directly from props
  const datasetOptions = React.useMemo(() => 
    allAvailableDatasets?.map(d => ({ value: d.metadata.id, label: d.metadata.name })) || [], 
    [allAvailableDatasets]
  );
  
  const selectedDataset = React.useMemo(() => 
    allAvailableDatasets?.find((d) => d.metadata.id === getAttr('datasetId')),
    [allAvailableDatasets, mdastNode]
  );

  const layerOptions = React.useMemo(() => 
    selectedDataset?.metadata.layers.map(l => ({ value: l.id, label: l.name })) || [],
    [selectedDataset]
  );
  
  // Get all props for the preview directly from the source
  const currentMapProps = {
      datasetId: getAttr('datasetId'),
      layerId: getAttr('layerId'),
      center: getAttr('center'),
      zoom: getAttr('zoom'),
      dateTime: getAttr('dateTime'),
      compareDateTime: getAttr('compareDateTime'),
      compareLabel: getAttr('compareLabel'),
      caption: getAttr('caption'),
      attrAuthor: getAttr('attrAuthor'),
      attrUrl: getAttr('attrUrl')
  };
  
  const { center, zoom } = currentMapProps;
  const parsedCenter = typeof center === 'string' && center.startsWith('[') ? JSON.parse(center) : [-94.5, 41.25];
  const parsedZoom = typeof zoom === 'string' ? parseFloat(zoom) || 8.3 : zoom;


  return (
    <div className='border-05 border-primary rounded-lg overflow-hidden shadow-sm bg-white'>
      <div className='flex flex-col'>
        <div className='padding-2 grid-container w-full maxw-full margin-2 bg-gray-10 radius-lg'>
          {isEditing && (
            <div>
              <h3 className='font-medium text-blue-700 text-sm'>Map Properties</h3>
              <div className='grid-row flex-align-end grid-gap-2'>
                 {/* Simplified Input Example */}
                 <div className="grid-col-6">
                    <Label htmlFor="datasetId">Dataset</Label>
                    <select id="datasetId" className="usa-select" value={getAttr('datasetId')} onChange={(e) => handlePropChange('datasetId', e.target.value)}>
                        {datasetOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                 </div>
                 <div className="grid-col-6">
                    <Label htmlFor="layerId">Layer</Label>
                    <select id="layerId" className="usa-select" value={getAttr('layerId')} onChange={(e) => handlePropChange('layerId', e.target.value)}>
                        {layerOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                 </div>
                 <div className="grid-col-12">
                     <Label htmlFor="caption-input">Caption</Label>
                     <TextInput id="caption-input" name="caption" type="text" value={getAttr('caption')} onChange={(e) => handlePropChange('caption', e.target.value)} />
                 </div>
                {/* Add other inputs here, following the same pattern */}
              </div>
            </div>
          )}

          <div className={`${isEditing && 'padding-top-2'}`}>
            <Button type='button' onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Collapse Editor' : 'Open Editor'}
            </Button>
          </div>
        </div>
          
        <div className='relative'>
          <ClientMapBlock
            {...currentMapProps}
            key={`map-preview-${JSON.stringify(currentMapProps)}`} // Key off all props
            center={parsedCenter}
            zoom={parsedZoom}
            allAvailableDatasets={allAvailableDatasets}
          />
        </div>
        {currentMapProps.caption && (
          <div>
            <figcaption className='text-gray-30 flex padding-top-2'>
              <span><p className='display-inline'>{currentMapProps.caption}</p></span>
            </figcaption>
          </div>
        )}
      </div>
    </div>
  );
};

// This wrapper is used when the component is used in the editor
const MapEditorWrapper: React.FC<EditorMapProps> = (props) => {
  try {
    const [editor] = useLexicalComposerContext();

    return (
      <>
        <MapContextProvider
          value={{
            parentEditor: editor,
            lexicalNode: props.node || createPlaceholderNode(),
          }}
        >
          <MapEditorWithPreview 
            {...props} 
            allAvailableDatasets={props.allAvailableDatasets}
          />
        </MapContextProvider>
      </>
    );
  } catch (error) {
    console.error('Error in MapEditorWrapper:', error);
    return (
      <div className='p-4 bg-yellow-100 rounded border border-yellow-400'>
        <p className='text-yellow-800'>
          Map component could not be loaded properly.
        </p>
        
      </div>
    );
  }
};

export default MapEditorWrapper;
