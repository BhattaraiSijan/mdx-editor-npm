'use client';
import React, { useEffect, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeNode } from '@lexical/code';
import { TableNode, TableRowNode, TableCellNode } from '@lexical/table';
import { LinkNode } from '@lexical/link';

import { MapContextProvider, useMapContext } from '@sijanbhattarai/mdx-editor-utils';
import { LexicalNode } from 'lexical';
import { Button } from '@trussworks/react-uswds';
import { MapProps } from '@sijanbhattarai/mdx-editor-core';
import { useMdastNodeUpdater } from '@mdxeditor/editor';
import { DEFAULT_MAP_PROPS } from '@sijanbhattarai/mdx-editor-ui';
import { InputField } from '@sijanbhattarai/mdx-editor-utils';
import { ClientMapBlock } from './MapPreview';
import { DatasetWithContent } from './types/content';

interface EditorMapProps extends MapProps {
  node?: LexicalNode;
  parentEditor?: any;
  allAvailableDatasets?: DatasetWithContent[];
}

const createPlaceholderNode = (): LexicalNode => {
  return {
    __type: 'placeholder',
    __key: 'placeholder',
    __parent: null,
    __prev: null,
    __next: null,
  } as unknown as LexicalNode;
};

const MapEditorWithPreview: React.FC<any> = (props) => {
  const contextValue = useMapContext();
  const [isEditing, setIsEditing] = useState(true);

  const initialMapProps = () => {
    try {
      const mdastNode = props.mdastNode || props?.props?.mdastNode;
      if (!mdastNode?.attributes) {
        console.warn('Missing mdastNode attributes, using default props');
        return { ...DEFAULT_MAP_PROPS };
      }

      const generatedProps = mdastNode.attributes.reduce(
        (acc, item) => {
          if (item && item.name && item.value !== undefined) {
            acc[item.name] = item.value;
          }
          return acc;
        },
        {},
      );

      if (
        generatedProps.center &&
        generatedProps.layerId &&
        generatedProps.zoom &&
        generatedProps.datasetId &&
        generatedProps.dateTime
      ) {
        return { ...generatedProps };
      }
      return { ...DEFAULT_MAP_PROPS };
    } catch (error) {
      console.error('Error in initialMapProps:', error);
      return { ...DEFAULT_MAP_PROPS };
    }
  };

  const [mapProps, setMapProps] = useState(initialMapProps());
  const [draftInputs, setDraftInputs] = useState({
    defaultDateFormat: '%Y-%m-%d',
    dateTime: mapProps.dateTime,
    compareDateTime: mapProps.compareDateTime,
    center: mapProps.center,
  });
  const [inputErrors, setInputErrors] = useState({
    dateTime: false,
    compareDateTime: false,
    center: false,
  });
  
  const {
    center,
    layerId,
    zoom,
    datasetId,
    dateTime,
    compareDateTime,
    compareLabel,
    attrAuthor,
    attrUrl,
    caption,
  } = mapProps;

  const parsedCenter =
    typeof center === 'string'
      ? center.startsWith('[')
        ? JSON.parse(center)
        : [-94.5, 41.25]
      : center;

  const parsedZoom = typeof zoom === 'string' ? parseFloat(zoom) || 8.3 : zoom;

  const updateMdastNode = useMdastNodeUpdater();
  const mdastNode = props.mdastNode || props?.props?.mdastNode;
  const allAvailableDatasets = props.allAvailableDatasets;

  const datasetOptions = React.useMemo(() => 
    allAvailableDatasets?.map(d => ({
      value: d.metadata.id,
      label: d.metadata.name
    })) || [], 
    [allAvailableDatasets]
  );

  const selectedDataset = React.useMemo(() => 
    allAvailableDatasets?.find((d) => d.metadata.id === datasetId),
    [allAvailableDatasets, datasetId]
  );
  
  const layerOptions = React.useMemo(() => 
    selectedDataset?.metadata.layers.map(l => ({
      value: l.id,
      label: l.name
    })) || [],
    [selectedDataset]
  );

  const stateToNode = Object.entries(mapProps).map(([name, value]) => ({
    type: 'mdxJsxAttribute',
    name,
    value: String(value)
  }));

  useEffect(() => {
    setTimeout(() => {
      updateMdastNode({ ...mdastNode, attributes: stateToNode });
    }, 0);
  }, [mapProps]);

  useEffect(() => {
    if (selectedDataset && selectedDataset.metadata.layers.length > 0) {
      const currentLayerIsValid = selectedDataset.metadata.layers.some(
        (l) => l.id === layerId
      );
      if (!currentLayerIsValid) {
        setMapProps((prev) => ({
          ...prev,
          layerId: selectedDataset.metadata.layers[0].id,
        }));
      }
    }
  }, [datasetId, selectedDataset, layerId]);

  const firstInterface = [
    { fieldName: '*Dataset ID', propName: 'datasetId', isRequired: true },
    { fieldName: '*Layer ID', propName: 'layerId', isRequired: true },
    {
      fieldName: '*Center',
      propName: 'center',
      isRequired: true,
      validateAgainst: 'centerFormat',
    },
    { fieldName: '*Zoom', propName: 'zoom', isRequired: true },
    {
      fieldName: '*Date Time',
      propName: 'dateTime',
      isRequired: true,
      validateAgainst: 'defaultDateFormat',
    },
  ];

  const comparisonInterface = [
    { fieldName: 'Compare Label', propName: 'compareLabel' },
    {
      fieldName: 'Compare Date',
      propName: 'compareDateTime',
      validateAgainst: 'defaultDateFormat',
    },
  ];

  const captionInterface = [
    { fieldName: 'Author Attribution', propName: 'attrAuthor' },
    { fieldName: 'Attribution Url', propName: 'attrUrl' },
    {
      fieldName: 'Caption',
      propName: 'caption',
      type: 'area',
      customClass: 'flex flex-fill',
    },
  ];

  return (
    <div className=' border-05 border-primary rounded-lg overflow-hidden shadow-sm bg-white'>
      <div className='flex flex-col'>
        <div className='padding-2 grid-container w-full maxw-full margin-2 bg-gray-10 radius-lg'>
          {isEditing && (
            <div>
              <h3
                className={`font-medium ${isEditing ? 'text-blue-700' : 'text-gray-500'} text-sm`}
              >
                Map Properties
              </h3>
              <div className='grid-row flex-align-end grid-gap-2'>
                {firstInterface.map((field) => {
                  const { propName } = field;
                  const fieldProps = {
                    ...field,
                    value: mapProps[propName],
                    onChange: setMapProps,
                    componentProps: mapProps,
                    draftInputs,
                    inputErrors,
                    setInputErrors,
                    setDraftInputs,
                    options: propName === 'datasetId' ? datasetOptions : (propName === 'layerId' ? layerOptions : undefined),
                  };
                  return <InputField key={propName} {...fieldProps} />;
                })}
              </div>
              <h4>Map Comparison</h4>
              <div className='grid-row flex-align-end grid-gap-2'>
                {comparisonInterface.map((field) => {
                  const fieldProps = {
                    ...field,
                    value: mapProps[field.propName],
                    onChange: setMapProps,
                    componentProps: mapProps,
                    draftInputs,
                    setDraftInputs,
                    inputErrors,
                    setInputErrors,
                  };
                  return <InputField key={field.propName} {...fieldProps} />;
                })}
              </div>
              <div className='grid-row flex-align-start grid-gap-2'>
                {captionInterface.map((field) => {
                  const fieldProps = {
                    ...field,
                    value: mapProps[field.propName],
                    onChange: setMapProps,
                    componentProps: mapProps,
                  };
                  return <InputField key={field.propName} {...fieldProps} />;
                })}
              </div>
            </div>
          )}

          <div className={`${isEditing && 'padding-top-2'}`}>
            <Button
              type='button'
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Collapse Map Editor' : 'Open Map Editor'}
            </Button>
          </div>
        </div>
          
        <div className='relative'>
          <ClientMapBlock
            key={`map-${datasetId}-${layerId}-${JSON.stringify(parsedCenter)}-${parsedZoom}-${dateTime}`}
            {...mapProps}
            center={parsedCenter}
            zoom={parsedZoom}
            allAvailableDatasets={allAvailableDatasets}
          />
        </div>
        <div>
          <figcaption className='text-gray-30 flex padding-top-2'>
            <span>
              <p className='display-inline'>{mapProps.caption}</p>
            </span>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

const MapEditorWrapper: React.FC<EditorMapProps> = (props) => {
  const parentEditor = props.parentEditor;
  const initialConfig = {
    namespace: `MapEditor-${props.mdastNode.name}`,
    editable: false,
    parentEditor: parentEditor,
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      CodeNode,
      TableNode,
      TableRowNode,
      TableCellNode,
      LinkNode,
    ],
    onError: (error: Error) => {
      console.error('Map Sandbox Editor Error:', error);
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <MapContextProvider
        value={{
          parentEditor: parentEditor,
          lexicalNode: props.node || createPlaceholderNode(),
        }}
      >
        <MapEditorWithPreview {...props} />
      </MapContextProvider>
    </LexicalComposer>
  );
};

export default MapEditorWrapper;