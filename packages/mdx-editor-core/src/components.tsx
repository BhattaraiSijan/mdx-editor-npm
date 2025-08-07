import React, { useState } from 'react';

export const MyLeaf = ({ foo, bar, onClick, children }) => {
  return (
    <span className="bg-yellow-100 px-2 py-1 rounded" onClick={typeof onClick === 'function' ? onClick : () => {}}>
      {foo && <span className="text-blue-500 mr-1">{foo}:</span>}
      {bar && <span className="text-green-500 mr-1">{bar}:</span>}
      {children}
    </span>
  );
};

export const Marker = ({ type, children }) => (
  <span className="border border-red-500 p-1 rounded inline-block">
    {type && <span className="text-xs text-red-500 mr-1">{type}:</span>}
    {children}
  </span>
);

export const BlockNode = ({ children }) => (
  <div className="border-l-4 border-blue-500 pl-4 my-4">{children}</div>
);

// Basic placeholder components for MDX rendering
export const Map = (props) => {
  return <div data-component="Map" {...props}>Map Component</div>;
};

export const Widget = ({ heading, children }) => {
  return (
    <div data-component="Widget" data-heading={heading}>
      {children}
    </div>
  );
};

export const MapBlock = (props) => {
  return <div data-component="MapBlock" {...props}>MapBlock Component</div>;
};

export const Caption = ({ attrAuthor, attrUrl, children }) => {
  return (
    <div data-component="Caption" data-author={attrAuthor} data-url={attrUrl}>
      {children}
    </div>
  );
};

export const ScrollytellingBlock = ({ children }) => {
  return <div data-component="ScrollytellingBlock">{children}</div>;
};

export const Chapter = (props) => {
  return <div data-component="Chapter" {...props}>{props.children}</div>;
};

export const Block = ({ type = 'full', children }) => {
  return (
    <div data-component="Block" data-type={type} className={`block-${type}`}>
      {children}
    </div>
  );
};

export const Figure = ({ children }) => {
  return (
    <figure data-component="Figure" className="figure">
      {children}
    </figure>
  );
};

export const Prose = ({ children }) => {
  return (
    <div data-component="Prose" className="prose">
      {children}
    </div>
  );
};

// Export a components object for convenience
export const customComponents = {
  MyLeaf,
  Marker,
  BlockNode,
  Map,
  Widget,
  MapBlock,
  Caption,
  ScrollytellingBlock,
  Chapter,
  Block,
  Figure,
  Prose,
};