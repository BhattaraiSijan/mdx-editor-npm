// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck : until veda-ui fixes its types
'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customComponents = exports.LegacyGlobalStyles = exports.externalDatasetsAtom = exports.useTimelineDatasetAtom = exports.timelineDatasetsAtom = exports.useFiltersWithQS = exports.Chart = exports.Chapter = exports.ScrollytellingBlock = exports.CompareImage = exports.MapBlock = exports.Image = exports.Caption = exports.Figure = exports.Prose = exports.Block = exports.StoriesHubContent = exports.DatasetSelectorModal = exports.ExplorationAndAnalysis = exports.PageFooter = exports.PageHeader = exports.PageHero = exports.CatalogContent = exports.VedaUIProvider = exports.ReactQueryProvider = exports.DevseedUiThemeProvider = void 0;
const veda_ui_1 = require("@teamimpact/veda-ui");
Object.defineProperty(exports, "CatalogContent", { enumerable: true, get: function () { return veda_ui_1.CatalogContent; } });
Object.defineProperty(exports, "PageHero", { enumerable: true, get: function () { return veda_ui_1.PageHero; } });
Object.defineProperty(exports, "useFiltersWithQS", { enumerable: true, get: function () { return veda_ui_1.useFiltersWithQS; } });
Object.defineProperty(exports, "ReactQueryProvider", { enumerable: true, get: function () { return veda_ui_1.ReactQueryProvider; } });
Object.defineProperty(exports, "DevseedUiThemeProvider", { enumerable: true, get: function () { return veda_ui_1.DevseedUiThemeProvider; } });
Object.defineProperty(exports, "VedaUIProvider", { enumerable: true, get: function () { return veda_ui_1.VedaUIProvider; } });
Object.defineProperty(exports, "Block", { enumerable: true, get: function () { return veda_ui_1.Block; } });
Object.defineProperty(exports, "Prose", { enumerable: true, get: function () { return veda_ui_1.Prose; } });
Object.defineProperty(exports, "Figure", { enumerable: true, get: function () { return veda_ui_1.Figure; } });
Object.defineProperty(exports, "Caption", { enumerable: true, get: function () { return veda_ui_1.Caption; } });
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return veda_ui_1.Image; } });
Object.defineProperty(exports, "MapBlock", { enumerable: true, get: function () { return veda_ui_1.MapBlock; } });
Object.defineProperty(exports, "CompareImage", { enumerable: true, get: function () { return veda_ui_1.CompareImage; } });
Object.defineProperty(exports, "PageHeader", { enumerable: true, get: function () { return veda_ui_1.PageHeader; } });
Object.defineProperty(exports, "PageFooter", { enumerable: true, get: function () { return veda_ui_1.PageFooter; } });
Object.defineProperty(exports, "ExplorationAndAnalysis", { enumerable: true, get: function () { return veda_ui_1.ExplorationAndAnalysis; } });
Object.defineProperty(exports, "DatasetSelectorModal", { enumerable: true, get: function () { return veda_ui_1.DatasetSelectorModal; } });
Object.defineProperty(exports, "timelineDatasetsAtom", { enumerable: true, get: function () { return veda_ui_1.timelineDatasetsAtom; } });
Object.defineProperty(exports, "useTimelineDatasetAtom", { enumerable: true, get: function () { return veda_ui_1.useTimelineDatasetAtom; } });
Object.defineProperty(exports, "StoriesHubContent", { enumerable: true, get: function () { return veda_ui_1.StoriesHubContent; } });
Object.defineProperty(exports, "externalDatasetsAtom", { enumerable: true, get: function () { return veda_ui_1.externalDatasetsAtom; } });
Object.defineProperty(exports, "ScrollytellingBlock", { enumerable: true, get: function () { return veda_ui_1.ScrollytellingBlock; } });
Object.defineProperty(exports, "Chapter", { enumerable: true, get: function () { return veda_ui_1.Chapter; } });
Object.defineProperty(exports, "Chart", { enumerable: true, get: function () { return veda_ui_1.Chart; } });
Object.defineProperty(exports, "LegacyGlobalStyles", { enumerable: true, get: function () { return veda_ui_1.LegacyGlobalStyles; } });
// Export our custom components and theme
__exportStar(require("./components"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./theme"), exports);
var components_1 = require("./components");
Object.defineProperty(exports, "customComponents", { enumerable: true, get: function () { return components_1.customComponents; } });
