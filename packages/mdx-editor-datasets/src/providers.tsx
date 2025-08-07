import React, { ReactNode } from 'react';
import DataProvider from '@sijanbhattarai/mdx-editor-maps';
import VedaUIConfigProvider from '@sijanbhattarai/mdx-editor-maps';
import DevseedUIThemeProvider from '@sijanbhattarai/mdx-editor-utils';
import { DatasetMetadata } from '@sijanbhattarai/mdx-editor-utils';

interface ProviderProps {
  datasets?: DatasetMetadata[];
  children: ReactNode;
}

export default function Providers({ datasets, children }: ProviderProps) {
  return (
    <DevseedUIThemeProvider>
      <VedaUIConfigProvider>
        {datasets ? (
          <DataProvider initialDatasets={datasets}>{children}</DataProvider>
        ) : (
          children
        )}
      </VedaUIConfigProvider>
    </DevseedUIThemeProvider>
  );
}
