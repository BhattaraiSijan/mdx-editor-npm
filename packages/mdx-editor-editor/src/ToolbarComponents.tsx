import React from 'react';

import { Icon } from '@trussworks/react-uswds';

import { NestedLexicalEditor, useMdastNodeUpdater } from '@mdxeditor/editor';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  Button,
  usePublisher,
  insertJsx$,
  useCellValue,
  viewMode$,
} from '@mdxeditor/editor';

import { DEFAULT_CHART_PROPS } from '@sijanbhattarai/mdx-editor-ui';
import { MapProps, ChartProps } from '@sijanbhattarai/mdx-editor-core';

export const DEFAULT_MAP_PROPS: MapProps = {
  center: '[-94.5, 41.25]',
  zoom: '8.3',
  datasetId: 'vulcan-ffco2-yeargrid-v4',
  layerId: 'vulcan-total-co2',
  dateTime: '2020-12-31',
  compareDateTime: '2015-12-31',
  compareLabel: '2020 VS 2015',
  attrUrl: '',
  attrAuthor: '',
  caption: '',
};


interface TwoColumnProps {
  children: React.ReactNode;
}

export const TwoColumn: React.FC<TwoColumnProps> = ({ children }) => {
  return <div className='grid grid-cols-2 gap-4'>{children}</div>;
};

export const LeftColumnEditor: React.FC<any> = ({ mdastNode, descriptor }) => {
  const updateMdastNode = useMdastNodeUpdater();

  return (
    <div className='border rounded-md p-2'>
      <NestedLexicalEditor
        getContent={(node) => node.children}
        getUpdatedMdastNode={(node, children) => {
          updateMdastNode({ ...mdastNode, children });
        }}
      />
    </div>
  );
};

export const InsertMapButton = (props) => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      // Insert MapBlock directly to avoid complex nesting issues
      insertJsx({
        name: 'MapBlock',
        kind: 'flow',
        props: { 
          datasetId: DEFAULT_MAP_PROPS.datasetId,
          layerId: DEFAULT_MAP_PROPS.layerId,
          dateTime: DEFAULT_MAP_PROPS.dateTime,
        },
      });
    } catch (error) {
      console.error('Error inserting Map component:', error);
      alert('Could not insert Map component. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Map'
      className='text-sm display-flex flex-align-center padding-1'
    >
      <Icon.Map className='margin-right-05 width-3 height-3' aria-hidden="true" />
      Add Map
    </Button>
  );
};

export const InsertLineGraph = (props) => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      insertJsx({
        name: 'Chart',
        kind: 'flow',
        props: { ...DEFAULT_CHART_PROPS },
      });
    } catch (error) {
      console.error('Error inserting Chart component:', error);
      alert('Could not insert chart component. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Line Graph'
      className='text-sm display-flex flex-align-center padding-1'
    >
      <Icon.Insights className='margin-right-05 width-3 height-3' aria-hidden="true" />
      line graph
    </Button>
  );
};

export const InsertSectionBreak = (props) => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      insertJsx({
        name: 'Break',
        kind: 'text',
        props: {},
      });
    } catch (error) {
      console.error('Error inserting Map component:', error);
      alert('Could not insert chart component. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Map'
      className='text-sm display-flex flex-align-center padding-1'
    >
      Insert Break
    </Button>
  );
};

export const InsertIframe = (props) => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      insertJsx({
        name: 'iframe',
        kind: 'flow',
        props: {
          src: 'https://example.com',
          width: '100%',
          height: '400',
          frameBorder: '0',
          title: 'Embedded Content'
        },
      });
    } catch (error) {
      console.error('Error inserting iframe component:', error);
      alert('Could not insert iframe. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Iframe'
      className='text-sm display-flex flex-align-center padding-1'
    >
      Insert Iframe
    </Button>
  );
};

export const InsertSimpleMap = (props) => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      // Insert just a simple Map component
      insertJsx({
        name: 'Map',
        kind: 'flow',
        props: { 
          datasetId: DEFAULT_MAP_PROPS.datasetId,
          layerId: DEFAULT_MAP_PROPS.layerId,
          dateTime: DEFAULT_MAP_PROPS.dateTime,
          center: DEFAULT_MAP_PROPS.center,
          zoom: DEFAULT_MAP_PROPS.zoom,
        },
      });
    } catch (error) {
      console.error('Error inserting simple Map component:', error);
      alert('Could not insert simple Map component. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Simple Map'
      className='text-sm display-flex flex-align-center padding-1'
    >
      <Icon.Map className='margin-right-05 width-3 height-3' aria-hidden="true" />
      Simple Map
    </Button>
  );
};

export const InsertTestComponent = (props) => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      insertJsx({
        name: 'TestComponent',
        kind: 'flow',
        props: { 
          text: 'This is a complex test component!',
          title: 'Interactive Test Component',
          color: 'green',
          showDetails: true,
          // Note: items array would be passed as a string in MDX
          items: '["Custom Item 1", "Custom Item 2", "Custom Item 3"]'
        },
      });
    } catch (error) {
      console.error('Error inserting TestComponent:', error);
      alert('Could not insert TestComponent. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Test Component'
      className='text-sm display-flex flex-align-center padding-1'
    >
      Test Component
    </Button>
  );
};

// export const InsertTwoColumnButton = () => {
//   const insertJsx = usePublisher(insertJsx$);

//   const handleClick = () => {
//     try {
//       insertJsx({
//         name: 'TwoColumn',
//         kind: 'flow',
//         props: {},
//         // The children need to be valid MDAST nodes.
//         // An empty paragraph is added to each column to make them editable from the start.
//         children: [
//           {
//             type: 'mdxJsxFlowElement',
//             name: 'LeftColumn',
//             children: [{ type: 'paragraph', children: [{ type: 'text', value: '' }] }],
//           },
//           {
//             type: 'mdxJsxFlowElement',
//             name: 'RightColumn',
//             children: [{ type: 'paragraph', children: [{ type: 'text', value: '' }] }],
//           },
//         ],
//       });
//     } catch (error) {
//       console.error('Error inserting TwoColumn component:', error);
//       alert('Could not insert TwoColumn component. See console for details.');
//     }
//   };

//   return (
//     <Button
//       onClick={handleClick}
//       className='text-sm display-flex flex-align-center padding-1'
//     >
//       <div className='margin-right-05 width-3 height-3 flex-align-center display-flex'>
//       </div>
//       Insert 2 Column
//     </Button>
//   );
// };
