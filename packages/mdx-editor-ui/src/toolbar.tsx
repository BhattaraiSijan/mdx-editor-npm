import React from 'react';
import { Button, usePublisher, insertJsx$ } from '@mdxeditor/editor';
import { Icon } from '@trussworks/react-uswds';
import { MapProps, ChartProps } from '@sijanbhattarai/mdx-editor-core';

export const DEFAULT_MAP_PROPS: MapProps = {
  center: '[-94.5, 41.25]',
  zoom: '8.3',
  datasetId: 'ct-ch4-monthgrid-v2023',
  layerId: 'total-ch4',
  dateTime: '2020-12-31',
  compareDateTime: '2015-12-31',
  compareLabel: '2020 VS 2015',
  attrUrl: '',
  attrAuthor: '',
  caption: '',
};

export const DEFAULT_CHART_PROPS: ChartProps = {
  dataPath: '',
  dateFormat: '%Y-%m-%d',
  idKey: 'id',
  xKey: 'date',
  yKey: 'value',
  yAxisLabel: 'Value',
  xAxisLabel: 'Date',
  highlightStart: '',
  highlightEnd: '',
  highlightLabel: '',
  availableDomain: '',
  altTitle: 'Chart',
  colorScheme: 'default',
  colors: '',
  altDesc: 'A data visualization chart',
};

export const InsertMapButton = () => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
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

export const InsertLineGraph = () => {
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

export const InsertSectionBreak = () => {
  const insertJsx = usePublisher(insertJsx$);

  const handleClick = () => {
    try {
      insertJsx({
        name: 'Break',
        kind: 'text',
        props: {},
      });
    } catch (error) {
      console.error('Error inserting Break component:', error);
      alert('Could not insert break component. See console for details.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      title='Insert Break'
      className='text-sm display-flex flex-align-center padding-1'
    >
      Insert Break
    </Button>
  );
};

export const InsertIframe = () => {
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