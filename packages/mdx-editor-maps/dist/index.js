import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect, useCallback, createContext, useMemo, useLayoutEffect } from "react";
import { DevseedUiThemeProvider, VedaUIProvider, MapBlock as MapBlock$1 } from "@teamimpact/veda-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-router-dom";
import { useMdastNodeUpdater } from "@mdxeditor/editor";
import { theme } from "@sijanbhattarai/mdx-editor-core";
import { ReactQueryProvider, VedaUIProvider as VedaUIProvider$1, DevseedUiThemeProvider as DevseedUiThemeProvider$1, transformToVedaData, MapContextProvider, useMapContext, InputField } from "@sijanbhattarai/mdx-editor-utils";
import { Button } from "@trussworks/react-uswds";
import dynamic from "next/dynamic";
import Link from "next/link";
import { createUITheme } from "@devseed-ui/theme-provider";
const n$1 = [
  {
    metadata: {
      id: "ct-ch4-monthgrid-v2023",
      name: "CarbonTracker-CH₄ Isotopic Methane Inverse Fluxes",
      description: "Global, monthly 1 degree resolution methane emission estimates from microbial, fossil and pyrogenic sources derived using inverse modeling, version 2023",
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" },
            { id: "Natural Emissions and Sinks", name: "Natural Emissions and Sinks" },
            { id: "Methane", name: "Methane" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" }
          ]
        },
        {
          name: "Gas",
          values: [{ id: "CH₄", name: "CH₄" }]
        },
        {
          name: "Product Type",
          values: [
            { id: "Ground Measurements", name: "Ground Measurements" },
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "total-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Total CH₄ Emission",
          type: "raster",
          description: "Total methane emission from microbial, fossil and pyrogenic sources.",
          zoomExtent: [0, 0],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "50",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "total-ch4",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          }
        },
        {
          id: "microbial-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Microbial CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all microbial sources, such as wetlands, ruminants, agriculture and termites.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "30",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "microbial-ch4",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          }
        },
        {
          id: "fossil-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Fossil CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all fossil sources, such as oil and gas activities and coal mining.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "50",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "fossil-ch4",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          }
        },
        {
          id: "pyrogenic-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Pyrogenic CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all sources of biomass burning, such as wildfires and crop residue burning.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "8",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "pyrogenic-ch4",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          }
        }
      ]
    },
    slug: "ct-ch4-monthgrid-v2023",
    content: ""
    // If you want to include full markdown content, you can parse it in here
  },
  {
    metadata: {
      id: "eccodarwin-co2flux-monthgrid-v5",
      name: "Air-Sea CO₂ Flux, ECCO-Darwin Model v5",
      description: "Global, monthly average air-sea CO₂ flux at ~1/3° resolution from 2020 to 2022",
      taxonomy: [
        {
          name: "Topics",
          values: [{ id: "Natural Emissions and Sinks", name: "Natural Emissions and Sinks" }]
        },
        {
          name: "Source",
          values: [{ id: "NASA", name: "NASA" }]
        },
        {
          name: "Gas",
          values: [{ id: "CO₂", name: "CO₂" }]
        },
        {
          name: "Product Type",
          values: [{ id: "Model Output", name: "Model Output" }]
        }
      ],
      layers: [
        {
          id: "air-sea-co2",
          stacCol: "eccodarwin-co2flux-monthgrid-v5",
          name: "Air-Sea CO₂ Flux",
          type: "raster",
          description: "Monthly mean air-sea CO₂ Flux (negative into ocean)",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "mmol m²/s" },
            type: "gradient",
            min: "-0.0007",
            max: "0.0007",
            stops: [
              "#0000FF",
              "#3399FF",
              "#66CCFF",
              "#FFFFFF",
              "#FF66CC",
              "#FF3399",
              "#FF0000"
            ]
          },
          compare: {
            datasetId: "eccodarwin-co2flux-monthgrid-v5",
            layerId: "air-sea-co2",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          }
        }
      ]
    },
    slug: "eccodarwin-co2flux-monthgrid-v5",
    content: ""
    // optional: parsed MDX markdown content if needed
  },
  {
    metadata: {
      id: "vulcan-total-co2",
      name: "Vulcan Fossil Fuel CO₂ Emissions, Version 4",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuels and cement production over the contiguous United States, version 4.0",
      isHidden: !0,
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-elc-res-co2",
          stacCol: "vulcan-ffco2-elc-res-yeargrid-v4",
          name: "Scope 2 Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "500",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
      ]
    },
    slug: "vulcan-ffco2-elc-res-yeargrid-v4",
    content: ""
  },
  {
    metadata: {
      id: "vulcan-ffco2-yeargrid-v4",
      name: "Vulcan Fossil Fuel CO₂ Emissions",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuel combustion over the contiguous United States, version 4.0",
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" },
            { id: "Urban", name: "Urban" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Hybrid Product", name: "Hybrid Product" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-total-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Total Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        },
        {
          id: "vulcan-air-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Airport Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual ffCO₂ emissions from taxi, take-off, and landing up to 3000 ft.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-air-co2",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        },
        {
          id: "vulcan-res-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual ffCO₂ emissions from Residential buildings.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-elc-res-yeargrid-v4",
            layerId: "vulcan-elc-res-co2",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
        // Add other layers like vulcan-com-co2, vulcan-ind-co2, etc. if needed
      ]
    },
    slug: "vulcan-ffco2-yeargrid-v4",
    content: ""
  },
  {
    metadata: {
      id: "vulcan-ffco2-elc-res-yeargrid-v4",
      name: "Vulcan Fossil Fuel CO₂ Emissions, Version 4",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuels and cement production over the contiguous United States, version 4.0",
      isHidden: !0,
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-elc-res-co2",
          stacCol: "vulcan-ffco2-elc-res-yeargrid-v4",
          name: "Scope 2 Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "500",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: T, datetime: E, compareDatetime: w }) => T && E && w ? `${T.format(E, "LLL yyyy")} VS ${T.format(w, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
      ]
    },
    slug: "vulcan-ffco2-elc-res-yeargrid-v4",
    content: ""
  }
], transformedDatasets = n$1.map((T) => ({
  id: T.metadata.id,
  data: {
    id: T.metadata.id,
    name: T.metadata.name,
    description: T.metadata.description,
    usage: [],
    media: {},
    taxonomy: T.metadata.taxonomy || [],
    infoDescription: T.metadata.description,
    layers: T.metadata.layers
  }
})), datasetsForVedaProvider = {};
transformedDatasets.forEach((T) => {
  datasetsForVedaProvider[T.id] = T;
});
const queryClient = new QueryClient(), getAttributeValue = (T, E, w = void 0) => {
  if (!T || !Array.isArray(T.attributes))
    return w;
  const k = T.attributes.find((Be) => Be.name === E);
  if (!k) return w;
  if (k.value && typeof k.value == "object" && k.value.type === "mdxJsxAttributeValueExpression") {
    try {
      const Be = k.value.data?.estree;
      if (Be && Be.body && Be.body.length > 0 && Be.body[0].type === "ExpressionStatement") {
        const We = Be.body[0].expression;
        if (We.type === "Literal")
          return We.value;
        if ((We.type === "ArrayExpression" || We.type === "ObjectExpression") && typeof k.value.value == "string")
          return k.value.value;
      }
    } catch {
    }
    return k.value.value;
  }
  let ge = k.value;
  if (typeof ge == "string") {
    const Be = ge.toLowerCase().trim();
    if (Be === "true") return !0;
    if (Be === "false") return !1;
  }
  return ge;
}, createAttributeAstNode = (T, E) => typeof E == "boolean" ? { type: "mdxJsxAttribute", name: T, value: { type: "mdxJsxAttributeValueExpression", value: E ? "true" : "false" } } : typeof E == "number" ? { type: "mdxJsxAttribute", name: T, value: { type: "mdxJsxAttributeValueExpression", value: String(E) } } : typeof E == "string" && E.trim().startsWith("[") && E.trim().endsWith("]") || E.trim().startsWith("{") && E.trim().endsWith("}") ? { type: "mdxJsxAttribute", name: T, value: { type: "mdxJsxAttributeValueExpression", value: E } } : { type: "mdxJsxAttribute", name: T, value: String(E) }, MapBlockInteractiveEditor = ({ mdastNode: T }) => {
  const E = useMdastNodeUpdater(), [w, k] = useState({
    datasetId: "sandbox",
    layerId: "no2-monthly",
    dateTime: ""
  }), [ge, Be] = useState({}), [We, je] = useState(!1);
  useEffect(() => {
    const Pn = {
      datasetId: getAttributeValue(T, "datasetId", "sandbox"),
      layerId: getAttributeValue(T, "layerId", "no2-monthly"),
      dateTime: getAttributeValue(T, "dateTime", "")
    };
    k(Pn), Qe(Pn);
  }, [T]);
  const Je = (Pn) => {
    const { name: ci, value: gt, type: St, checked: Jr } = Pn.target;
    k((Fi) => ({
      ...Fi,
      [ci]: St === "checkbox" ? Jr : gt
    }));
  }, Qe = useCallback((Pn) => {
    const {
      datasetId: ci,
      layerId: gt,
      dateTime: St,
      compareDateTime: Jr,
      compareLabel: Fi,
      projectionId: Wr,
      projectionCenterStr: Di,
      projectionParallelsStr: $i,
      allowProjectionChange: Oi
    } = Pn;
    console.log("Datasets for Veda Provider:", datasetsForVedaProvider);
    const Mi = datasetsForVedaProvider[ci], Ui = Mi?.data?.layers.find((Vi) => Vi.id === gt);
    if (Mi && Ui) {
      je(!0);
      const Vi = { datasetId: ci, layerId: gt };
      St && (Vi.dateTime = St), Jr && (Vi.compareDateTime = Jr), Fi && (Vi.compareLabel = Fi), Wr && (Vi.projectionId = Wr);
      let Zi, Ji;
      if (Di)
        try {
          Zi = JSON.parse(Di);
        } catch {
        }
      if ($i)
        try {
          Ji = JSON.parse($i);
        } catch {
        }
      Zi !== void 0 && (Vi.projectionCenter = Zi), Ji !== void 0 && (Vi.projectionParallels = Ji), Vi.allowProjectionChange = Oi, Vi.datasets = datasetsForVedaProvider, Be(Vi);
    } else
      je(!1), Be({ datasetId: ci, layerId: gt });
  }, []), Ze = useCallback(() => {
    const Pn = [];
    w.datasetId && Pn.push(createAttributeAstNode("datasetId", w.datasetId)), w.layerId && Pn.push(createAttributeAstNode("layerId", w.layerId)), w.dateTime && Pn.push(createAttributeAstNode("dateTime", w.dateTime)), E({ attributes: Pn }), Qe(w);
  }, [w, E, Qe]), dt = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoiY292aWQtbmFzYSIsImEiOiJjbGNxaWdqdXEwNjJnM3VuNDFjM243emlsIn0.NLbvgae00NUD5K64CD6ZyA", Xe = process.env.NEXT_PUBLIC_API_STAC_ENDPOINT || "https://earth.gov/ghgcenter/api/stac", Ar = process.env.NEXT_PUBLIC_API_RASTER_ENDPOINT || "https://earth.gov/ghgcenter/api/raster", tn = (Pn) => ({
    name: Pn,
    onBlur: Ze,
    style: { width: "100%", padding: "6px", boxSizing: "border-box", marginBottom: "2px" }
  }), wr = { display: "block", marginBottom: "2px", fontSize: "0.85em", fontWeight: "500" };
  return /* @__PURE__ */ jsxs("div", { style: { border: "2px solid #28a745", padding: "15px", margin: "5px", backgroundColor: "#f0fff0" }, children: [
    /* @__PURE__ */ jsx("h4", { style: { marginTop: 0, marginBottom: "12px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }, children: "Edit MapBlock Properties" }),
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px 18px", marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: wr, htmlFor: "datasetId", children: "Dataset ID:" }),
        /* @__PURE__ */ jsx("input", { type: "text", id: "datasetId", ...tn("datasetId"), value: w.datasetId, onChange: Je })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: wr, htmlFor: "layerId", children: "Layer ID:" }),
        /* @__PURE__ */ jsx("input", { type: "text", id: "layerId", ...tn("layerId"), value: w.layerId, onChange: Je })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: wr, htmlFor: "dateTime", children: "Date/Time:" }),
        /* @__PURE__ */ jsx("input", { type: "text", id: "dateTime", ...tn("dateTime"), value: w.dateTime, onChange: Je, placeholder: "YYYY-MM-DDTHH:mm:ssZ" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "15px" }, children: [
      /* @__PURE__ */ jsx("p", { style: { margin: "0 0 10px 0", fontWeight: "bold", fontSize: "0.9em", color: "#2C3E50", textAlign: "center" }, children: "Live Map Preview" }),
      /* @__PURE__ */ jsxs("div", { style: { minHeight: "350px", position: "relative", border: "1px solid lightgrey" }, children: [
        console.log("Preview Props:", ge),
        We && ge.datasetId && ge.layerId ? /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(DevseedUiThemeProvider, { theme, children: /* @__PURE__ */ jsx(
          VedaUIProvider,
          {
            config: {
              envMapboxToken: dt,
              envApiStacEndpoint: Xe,
              envApiRasterEndpoint: Ar,
              datasets: datasetsForVedaProvider,
              navigation: { LinkComponent: "a", linkProps: { pathAttributeKeyName: "href" } },
              theme
            },
            children: ge.datasetId && ge.layerId && /* @__PURE__ */ jsx(MapBlock$1, { ...ge })
          }
        ) }) }) : /* @__PURE__ */ jsxs("p", { style: { textAlign: "center", color: "grey", padding: "20px" }, children: [
          "Preview unavailable: Ensure Dataset ID ('",
          ge.datasetId || w.datasetId || "empty",
          "') and Layer ID ('",
          ge.layerId || w.layerId || "empty",
          "') are valid."
        ] })
      ] })
    ] })
  ] });
}, r$1 = createContext(null);
function t$1(T, E) {
  return { getTheme: function() {
    return E ?? null;
  } };
}
function t(T, ...E) {
  const w = new URL("https://lexical.dev/docs/error"), k = new URLSearchParams();
  k.append("code", T);
  for (const ge of E) k.append("v", ge);
  throw w.search = k.toString(), Error(`Minified Lexical error #${T}; visit ${w.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const e = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, n = e && "documentMode" in document ? document.documentMode : null, r = e && /Mac|iPod|iPhone|iPad/.test(navigator.platform), i = e && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), s = !(!e || !("InputEvent" in window) || n) && "getTargetRanges" in new window.InputEvent("input"), o = e && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), l$1 = e && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, c = e && /Android/.test(navigator.userAgent), a = e && /^(?=.*Chrome).*/i.test(navigator.userAgent), u$1 = e && c && a, f$2 = e && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !a;
function d$1(...T) {
  const E = [];
  for (const w of T) if (w && typeof w == "string") for (const [k] of w.matchAll(/\S+/g)) E.push(k);
  return E;
}
const h$1 = 1, g$1 = 3, _ = 9, p$1 = 11, y = 0, m$1 = 1, x = 2, C$1 = 0, S$1 = 1, v = 2, N = 4, b = 8, O = 128, A = 1792 | (112 | (3 | N | b) | O), D = 1, P = 2, F$1 = 3, L$1 = 4, I$4 = 5, z$2 = 6, K$2 = o || l$1 || f$2 ? " " : "​", R$2 = `

`, B$1 = i ? " " : K$2, W$2 = "֑-߿יִ-﷽ﹰ-ﻼ", J$1 = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", $$1 = new RegExp("^[^" + J$1 + "]*[" + W$2 + "]"), j$1 = new RegExp("^[^" + W$2 + "]*[" + J$1 + "]"), U$2 = { bold: 1, capitalize: 1024, code: 16, highlight: O, italic: 2, lowercase: 256, strikethrough: N, subscript: 32, superscript: 64, underline: b, uppercase: 512 }, V = { directionless: 1, unmergeable: 2 }, Y$1 = { center: P, end: z$2, justify: L$1, left: D, right: F$1, start: I$4 }, H$1 = { [P]: "center", [z$2]: "end", [L$1]: "justify", [D]: "left", [F$1]: "right", [I$4]: "start" }, q$1 = { normal: 0, segmented: 2, token: 1 }, G$1 = { [C$1]: "normal", [v]: "segmented", [S$1]: "token" }, Q$2 = "$config";
function Z$1(T, E, w, k, ge, Be) {
  let We = T.getFirstChild();
  for (; We !== null; ) {
    const je = We.__key;
    We.__parent === E && (xi(We) && Z$1(We, je, w, k, ge, Be), w.has(je) || Be.delete(je), ge.push(je)), We = We.getNextSibling();
  }
}
const tt$1 = 100;
let et$1 = !1, nt$1 = 0;
function rt$2(T) {
  nt$1 = T.timeStamp;
}
function it$3(T, E, w) {
  const k = T.nodeName === "BR", ge = E.__lexicalLineBreak;
  return ge && (T === ge || k && T.previousSibling === ge) || k && Ts(T, w) !== void 0;
}
function st$2(T, E, w) {
  const k = xo(co(w));
  let ge = null, Be = null;
  k !== null && k.anchorNode === T && (ge = k.anchorOffset, Be = k.focusOffset);
  const We = T.nodeValue;
  We !== null && zs(E, We, ge, Be, !1);
}
function ot$2(T, E, w) {
  if (_r(T)) {
    const k = T.anchor.getNode();
    if (k.is(w) && T.format !== k.getFormat()) return !1;
  }
  return fs(E) && w.isAttached();
}
function lt$2(T, E, w, k) {
  for (let ge = T; ge && !zo(ge); ge = eo(ge)) {
    const Be = Ts(ge, E);
    if (Be !== void 0) {
      const We = Ss(Be, w);
      if (We) return vi(We) || !To(ge) ? void 0 : [ge, We];
    } else if (ge === k) return [k, Es(w)];
  }
}
function ct$3(T, E, w) {
  et$1 = !0;
  const k = performance.now() - nt$1 > tt$1;
  try {
    _i(T, () => {
      const ge = Pr() || function(Xe) {
        return Xe.getEditorState().read(() => {
          const Ar = Pr();
          return Ar !== null ? Ar.clone() : null;
        });
      }(T), Be = /* @__PURE__ */ new Map(), We = T.getRootElement(), je = T._editorState, Je = T._blockCursorElement;
      let Qe = !1, Ze = "";
      for (let Xe = 0; Xe < E.length; Xe++) {
        const Ar = E[Xe], tn = Ar.type, wr = Ar.target, Pn = lt$2(wr, T, je, We);
        if (!Pn) continue;
        const [ci, gt] = Pn;
        if (tn === "characterData") k && sr(gt) && fs(wr) && ot$2(ge, wr, gt) && st$2(wr, gt, T);
        else if (tn === "childList") {
          Qe = !0;
          const St = Ar.addedNodes;
          for (let Wr = 0; Wr < St.length; Wr++) {
            const Di = St[Wr], $i = vs(Di), Oi = Di.parentNode;
            if (Oi != null && Di !== Je && $i === null && !it$3(Di, Oi, T)) {
              if (i) {
                const Mi = (To(Di) ? Di.innerText : null) || Di.nodeValue;
                Mi && (Ze += Mi);
              }
              Oi.removeChild(Di);
            }
          }
          const Jr = Ar.removedNodes, Fi = Jr.length;
          if (Fi > 0) {
            let Wr = 0;
            for (let Di = 0; Di < Fi; Di++) {
              const $i = Jr[Di];
              (it$3($i, wr, T) || Je === $i) && (wr.appendChild($i), Wr++);
            }
            Fi !== Wr && Be.set(ci, gt);
          }
        }
      }
      if (Be.size > 0) for (const [Xe, Ar] of Be) Ar.reconcileObservedMutation(Xe, T);
      const dt = w.takeRecords();
      if (dt.length > 0) {
        for (let Xe = 0; Xe < dt.length; Xe++) {
          const Ar = dt[Xe], tn = Ar.addedNodes, wr = Ar.target;
          for (let Pn = 0; Pn < tn.length; Pn++) {
            const ci = tn[Pn], gt = ci.parentNode;
            gt == null || ci.nodeName !== "BR" || it$3(ci, wr, T) || gt.removeChild(ci);
          }
        }
        w.takeRecords();
      }
      ge !== null && (Qe && Ms(ge), i && Xs(T) && ge.insertRawText(Ze));
    });
  } finally {
    et$1 = !1;
  }
}
function at$1(T) {
  const E = T._observer;
  E !== null && ct$3(T, E.takeRecords(), E);
}
function ut$1(T) {
  (function(E) {
    nt$1 === 0 && co(E).addEventListener("textInput", rt$2, !0);
  })(T), T._observer = new MutationObserver((E, w) => {
    ct$3(T, E, w);
  });
}
function pt(T) {
  const E = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set();
  for (let k = typeof T == "function" ? T : T.replace; k.prototype && k.prototype.getType !== void 0; k = Object.getPrototypeOf(k)) {
    const { ownNodeConfig: ge } = Ro(k);
    if (ge && ge.stateConfigs) for (const Be of ge.stateConfigs) {
      let We;
      "stateConfig" in Be ? (We = Be.stateConfig, Be.flat && w.add(We.key)) : We = Be, E.set(We.key, We);
    }
  }
  return { flatKeys: w, sharedConfigMap: E };
}
class yt {
  constructor(E, w, k = void 0, ge = /* @__PURE__ */ new Map(), Be = void 0) {
    this.node = E, this.sharedNodeState = w, this.unknownState = k, this.knownState = ge;
    const { sharedConfigMap: We } = this.sharedNodeState, je = Be !== void 0 ? Be : function(Je, Qe, Ze) {
      let dt = Ze.size;
      if (Qe) for (const Xe in Qe) {
        const Ar = Je.get(Xe);
        Ar && Ze.has(Ar) || dt++;
      }
      return dt;
    }(We, k, ge);
    this.size = je;
  }
  getValue(E) {
    const w = this.knownState.get(E);
    if (w !== void 0) return w;
    this.sharedNodeState.sharedConfigMap.set(E.key, E);
    let k = E.defaultValue;
    if (this.unknownState && E.key in this.unknownState) {
      const ge = this.unknownState[E.key];
      ge !== void 0 && (k = E.parse(ge)), this.updateFromKnown(E, k);
    }
    return k;
  }
  getInternalState() {
    return [this.unknownState, this.knownState];
  }
  toJSON() {
    const E = { ...this.unknownState }, w = {};
    for (const [k, ge] of this.knownState) k.isEqual(ge, k.defaultValue) ? delete E[k.key] : E[k.key] = k.unparse(ge);
    for (const k of this.sharedNodeState.flatKeys) k in E && (w[k] = E[k], delete E[k]);
    return Ct(E) && (w.$ = E), w;
  }
  getWritable(E) {
    if (this.node === E) return this;
    const { sharedNodeState: w, unknownState: k } = this, ge = new Map(this.knownState);
    return new yt(E, w, function(Be, We, je) {
      let Je;
      if (je) for (const [Qe, Ze] of Object.entries(je)) {
        const dt = Be.get(Qe);
        dt ? We.has(dt) || We.set(dt, dt.parse(Ze)) : (Je = Je || {}, Je[Qe] = Ze);
      }
      return Je;
    }(w.sharedConfigMap, ge, k), ge, this.size);
  }
  updateFromKnown(E, w) {
    const k = E.key;
    this.sharedNodeState.sharedConfigMap.set(k, E);
    const { knownState: ge, unknownState: Be } = this;
    ge.has(E) || Be && k in Be || (Be && (delete Be[k], this.unknownState = Ct(Be)), this.size++), ge.set(E, w);
  }
  updateFromUnknown(E, w) {
    const k = this.sharedNodeState.sharedConfigMap.get(E);
    k ? this.updateFromKnown(k, k.parse(w)) : (this.unknownState = this.unknownState || {}, E in this.unknownState || this.size++, this.unknownState[E] = w);
  }
  updateFromJSON(E) {
    const { knownState: w } = this;
    for (const k of w.keys()) w.set(k, k.defaultValue);
    if (this.size = w.size, this.unknownState = void 0, E) for (const [k, ge] of Object.entries(E)) this.updateFromUnknown(k, ge);
  }
}
function mt$1(T) {
  const E = T.getWritable(), w = E.__state ? E.__state.getWritable(E) : new yt(E, xt$1(E));
  return E.__state = w, w;
}
function xt$1(T) {
  return T.__state ? T.__state.sharedNodeState : ts(Oo(), T.getType()).sharedNodeState;
}
function Ct(T) {
  if (T) for (const E in T) return T;
}
function vt$1(T, E, w) {
  for (const [k, ge] of E.knownState) {
    if (T.has(k.key)) continue;
    T.add(k.key);
    const Be = w ? w.getValue(k) : k.defaultValue;
    if (Be !== ge && !k.isEqual(Be, ge)) return !0;
  }
  return !1;
}
function Tt$1(T, E, w) {
  const { unknownState: k } = E, ge = w ? w.unknownState : void 0;
  if (k) {
    for (const [Be, We] of Object.entries(k))
      if (!T.has(Be) && (T.add(Be), We !== (ge ? ge[Be] : void 0)))
        return !0;
  }
  return !1;
}
function kt(T, E) {
  const w = T.__state;
  return w && w.node === T ? w.getWritable(E) : w;
}
function Nt$1(T, E) {
  const w = T.__mode, k = T.__format, ge = T.__style, Be = E.__mode, We = E.__format, je = E.__style, Je = T.__state, Qe = E.__state;
  return (w === null || w === Be) && (k === null || k === We) && (ge === null || ge === je) && (T.__state === null || Je === Qe || function(Ze, dt) {
    if (Ze === dt) return !0;
    if (Ze && dt && Ze.size !== dt.size) return !1;
    const Xe = /* @__PURE__ */ new Set();
    return !(Ze && vt$1(Xe, Ze, dt) || dt && vt$1(Xe, dt, Ze) || Ze && Tt$1(Xe, Ze, dt) || dt && Tt$1(Xe, dt, Ze));
  }(Je, Qe));
}
function bt(T, E) {
  const w = T.mergeWithSibling(E), k = ni()._normalizedNodes;
  return k.add(T.__key), k.add(E.__key), w;
}
function wt(T) {
  let E, w, k = T;
  if (k.__text !== "" || !k.isSimpleText() || k.isUnmergeable()) {
    for (; (E = k.getPreviousSibling()) !== null && sr(E) && E.isSimpleText() && !E.isUnmergeable(); ) {
      if (E.__text !== "") {
        if (Nt$1(E, k)) {
          k = bt(E, k);
          break;
        }
        break;
      }
      E.remove();
    }
    for (; (w = k.getNextSibling()) !== null && sr(w) && w.isSimpleText() && !w.isUnmergeable(); ) {
      if (w.__text !== "") {
        if (Nt$1(k, w)) {
          k = bt(k, w);
          break;
        }
        break;
      }
      w.remove();
    }
  } else k.remove();
}
function Et$1(T) {
  return Mt(T.anchor), Mt(T.focus), T;
}
function Mt(T) {
  for (; T.type === "element"; ) {
    const E = T.getNode(), w = T.offset;
    let k, ge;
    if (w === E.getChildrenSize() ? (k = E.getChildAtIndex(w - 1), ge = !0) : (k = E.getChildAtIndex(w), ge = !1), sr(k)) {
      T.set(k.__key, ge ? k.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!xi(k)) break;
    T.set(k.__key, ge ? k.getChildrenSize() : 0, "element", !0);
  }
}
let Ot$1, At, Dt$1, Pt, Ft$1, Lt, It, zt, Kt$1, Rt, Bt = "", Wt = "", Jt = null, $t = "", jt = "", Ut = !1, Vt = !1, Yt = null;
function Ht$1(T, E) {
  const w = It.get(T);
  if (E !== null) {
    const k = fe(T);
    k.parentNode === E && E.removeChild(k);
  }
  if (zt.has(T) || At._keyToDOMMap.delete(T), xi(w)) {
    const k = oe(w, It);
    qt(k, 0, k.length - 1, null);
  }
  w !== void 0 && Ys(Rt, Dt$1, Pt, w, "destroyed");
}
function qt(T, E, w, k) {
  let ge = E;
  for (; ge <= w; ++ge) {
    const Be = T[ge];
    Be !== void 0 && Ht$1(Be, k);
  }
}
function Gt(T, E) {
  T.setProperty("text-align", E);
}
const Xt = "40px";
function Qt(T, E) {
  const w = Ot$1.theme.indent;
  if (typeof w == "string") {
    const ge = T.classList.contains(w);
    E > 0 && !ge ? T.classList.add(w) : E < 1 && ge && T.classList.remove(w);
  }
  const k = getComputedStyle(T).getPropertyValue("--lexical-indent-base-value") || Xt;
  T.style.setProperty("padding-inline-start", E === 0 ? "" : `calc(${E} * ${k})`);
}
function Zt(T, E) {
  const w = T.style;
  E === 0 ? Gt(w, "") : E === D ? Gt(w, "left") : E === P ? Gt(w, "center") : E === F$1 ? Gt(w, "right") : E === L$1 ? Gt(w, "justify") : E === I$4 ? Gt(w, "start") : E === z$2 && Gt(w, "end");
}
function te(T, E) {
  const w = zt.get(T);
  w === void 0 && t(60);
  const k = w.createDOM(Ot$1, At);
  if (function(ge, Be, We) {
    const je = We._keyToDOMMap;
    (function(Je, Qe, Ze) {
      const dt = `__lexicalKey_${Qe._key}`;
      Je[dt] = Ze;
    })(Be, We, ge), je.set(ge, Be);
  }(T, k, At), sr(w) ? k.setAttribute("data-lexical-text", "true") : vi(w) && k.setAttribute("data-lexical-decorator", "true"), xi(w)) {
    const ge = w.__indent, Be = w.__size;
    if (ge !== 0 && Qt(k, ge), Be !== 0) {
      const je = Be - 1;
      (function(Je, Qe, Ze, dt) {
        const Xe = Wt;
        Wt = "", ee(Je, Ze, 0, Qe, Ze.getDOMSlot(dt)), ie(Ze, dt), Wt = Xe;
      })(oe(w, zt), je, w, k);
    }
    const We = w.__format;
    We !== 0 && Zt(k, We), w.isInline() || re(null, w, k), Zs(w) && (Bt += R$2, jt += R$2);
  } else {
    const ge = w.getTextContent();
    if (vi(w)) {
      const Be = w.decorate(At, Ot$1);
      Be !== null && ce(T, Be), k.contentEditable = "false";
    } else sr(w) && (w.isDirectionless() || (Wt += ge));
    Bt += ge, jt += ge;
  }
  return E !== null && E.insertChild(k), Ys(Rt, Dt$1, Pt, w, "created"), k;
}
function ee(T, E, w, k, ge) {
  const Be = Bt;
  Bt = "";
  let We = w;
  for (; We <= k; ++We) {
    te(T[We], ge);
    const je = zt.get(T[We]);
    je !== null && sr(je) && (Jt === null && (Jt = je.getFormat()), $t === "" && ($t = je.getStyle()));
  }
  Zs(E) && (Bt += R$2), ge.element.__lexicalTextContent = Bt, Bt = Be + Bt;
}
function ne(T, E) {
  if (T) {
    const w = T.__last;
    if (w) {
      const k = E.get(w);
      if (k) return Wn(k) ? "line-break" : vi(k) && k.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function re(T, E, w) {
  const k = ne(T, It), ge = ne(E, zt);
  k !== ge && E.getDOMSlot(w).setManagedLineBreak(ge);
}
function ie(T, E) {
  const w = E.__lexicalDirTextContent || "", k = E.__lexicalDir || "";
  if (w !== Wt || k !== Yt) {
    const ge = Wt === "", Be = ge ? Yt : function(We) {
      return $$1.test(We) ? "rtl" : j$1.test(We) ? "ltr" : null;
    }(Wt);
    if (Be !== k) {
      const We = E.classList, je = Ot$1.theme;
      let Je = k !== null ? je[k] : void 0, Qe = Be !== null ? je[Be] : void 0;
      if (Je !== void 0) {
        if (typeof Je == "string") {
          const Ze = d$1(Je);
          Je = je[k] = Ze;
        }
        We.remove(...Je);
      }
      if (Be === null || ge && Be === "ltr") E.removeAttribute("dir");
      else {
        if (Qe !== void 0) {
          if (typeof Qe == "string") {
            const Ze = d$1(Qe);
            Qe = je[Be] = Ze;
          }
          Qe !== void 0 && We.add(...Qe);
        }
        E.dir = Be;
      }
      Vt || (T.getWritable().__dir = Be);
    }
    Yt = Be, E.__lexicalDirTextContent = Wt, E.__lexicalDir = Be;
  }
}
function se(T, E, w) {
  const k = Wt;
  var ge;
  Wt = "", Jt = null, $t = "", function(Be, We, je) {
    const Je = Bt, Qe = Be.__size, Ze = We.__size;
    Bt = "";
    const dt = je.element;
    if (Qe === 1 && Ze === 1) {
      const Xe = Be.__first, Ar = We.__first;
      if (Xe === Ar) le(Xe, dt);
      else {
        const wr = fe(Xe), Pn = te(Ar, null);
        try {
          dt.replaceChild(Pn, wr);
        } catch (ci) {
          if (typeof ci == "object" && ci != null) {
            const gt = `${ci.toString()} Parent: ${dt.tagName}, new child: {tag: ${Pn.tagName} key: ${Ar}}, old child: {tag: ${wr.tagName}, key: ${Xe}}.`;
            throw new Error(gt);
          }
          throw ci;
        }
        Ht$1(Xe, null);
      }
      const tn = zt.get(Ar);
      sr(tn) && (Jt === null && (Jt = tn.getFormat()), $t === "" && ($t = tn.getStyle()));
    } else {
      const Xe = oe(Be, It), Ar = oe(We, zt);
      if (Xe.length !== Qe && t(227), Ar.length !== Ze && t(228), Qe === 0) Ze !== 0 && ee(Ar, We, 0, Ze - 1, je);
      else if (Ze === 0) {
        if (Qe !== 0) {
          const tn = je.after == null && je.before == null && je.element.__lexicalLineBreak == null;
          qt(Xe, 0, Qe - 1, tn ? null : dt), tn && (dt.textContent = "");
        }
      } else (function(tn, wr, Pn, ci, gt, St) {
        const Jr = ci - 1, Fi = gt - 1;
        let Wr, Di, $i = St.getFirstChild(), Oi = 0, Mi = 0;
        for (; Oi <= Jr && Mi <= Fi; ) {
          const Zi = wr[Oi], Ji = Pn[Mi];
          if (Zi === Ji) $i = ae(le(Ji, St.element)), Oi++, Mi++;
          else {
            Wr === void 0 && (Wr = new Set(wr)), Di === void 0 && (Di = new Set(Pn));
            const ji = Di.has(Zi), _s = Wr.has(Ji);
            if (ji) if (_s) {
              const Hs = to(At, Ji);
              Hs === $i ? $i = ae(le(Ji, St.element)) : (St.withBefore($i).insertChild(Hs), le(Ji, St.element)), Oi++, Mi++;
            } else te(Ji, St.withBefore($i)), Mi++;
            else $i = ae(fe(Zi)), Ht$1(Zi, St.element), Oi++;
          }
          const Us = zt.get(Ji);
          Us !== null && sr(Us) && (Jt === null && (Jt = Us.getFormat()), $t === "" && ($t = Us.getStyle()));
        }
        const Ui = Oi > Jr, Vi = Mi > Fi;
        if (Ui && !Vi) {
          const Zi = Pn[Fi + 1], Ji = Zi === void 0 ? null : At.getElementByKey(Zi);
          ee(Pn, tn, Mi, Fi, St.withBefore(Ji));
        } else Vi && !Ui && qt(wr, Oi, Jr, St.element);
      })(We, Xe, Ar, Qe, Ze, je);
    }
    Zs(We) && (Bt += R$2), dt.__lexicalTextContent = Bt, Bt = Je + Bt;
  }(T, E, E.getDOMSlot(w)), ie(E, w), ge = E, Jt == null || Jt === ge.__textFormat || Vt || ge.setTextFormat(Jt), function(Be) {
    $t === "" || $t === Be.__textStyle || Vt || Be.setTextStyle($t);
  }(E), Wt = k;
}
function oe(T, E) {
  const w = [];
  let k = T.__first;
  for (; k !== null; ) {
    const ge = E.get(k);
    ge === void 0 && t(101), w.push(k), k = ge.__next;
  }
  return w;
}
function le(T, E) {
  const w = It.get(T);
  let k = zt.get(T);
  w !== void 0 && k !== void 0 || t(61);
  const ge = Ut || Lt.has(T) || Ft$1.has(T), Be = to(At, T);
  if (w === k && !ge) {
    if (xi(w)) {
      const We = Be.__lexicalTextContent;
      We !== void 0 && (Bt += We, jt += We);
      const je = Be.__lexicalDirTextContent;
      je !== void 0 && (Wt += je);
    } else {
      const We = w.getTextContent();
      sr(w) && !w.isDirectionless() && (Wt += We), jt += We, Bt += We;
    }
    return Be;
  }
  if (w !== k && ge && Ys(Rt, Dt$1, Pt, k, "updated"), k.updateDOM(w, Be, Ot$1)) {
    const We = te(T, null);
    return E === null && t(62), E.replaceChild(We, Be), Ht$1(T, null), We;
  }
  if (xi(w) && xi(k)) {
    const We = k.__indent;
    We !== w.__indent && Qt(Be, We);
    const je = k.__format;
    je !== w.__format && Zt(Be, je), ge && (se(w, k, Be), ki(k) || k.isInline() || re(w, k, Be)), Zs(k) && (Bt += R$2, jt += R$2);
  } else {
    const We = k.getTextContent();
    if (vi(k)) {
      const je = k.decorate(At, Ot$1);
      je !== null && ce(T, je);
    } else sr(k) && !k.isDirectionless() && (Wt += We);
    Bt += We, jt += We;
  }
  if (!Vt && ki(k) && k.__cachedText !== jt) {
    const We = k.getWritable();
    We.__cachedText = jt, k = We;
  }
  return Be;
}
function ce(T, E) {
  let w = At._pendingDecorators;
  const k = At._decorators;
  if (w === null) {
    if (k[T] === E) return;
    w = Ns(At);
  }
  w[T] = E;
}
function ae(T) {
  let E = T.nextSibling;
  return E !== null && E === At._blockCursorElement && (E = E.nextSibling), E;
}
function ue(T, E, w, k, ge, Be) {
  Bt = "", jt = "", Wt = "", Ut = k === x, Yt = null, At = w, Ot$1 = w._config, Dt$1 = w._nodes, Pt = At._listeners.mutation, Ft$1 = ge, Lt = Be, It = T._nodeMap, zt = E._nodeMap, Vt = E._readOnly, Kt$1 = new Map(w._keyToDOMMap);
  const We = /* @__PURE__ */ new Map();
  return Rt = We, le("root", null), At = void 0, Dt$1 = void 0, Ft$1 = void 0, Lt = void 0, It = void 0, zt = void 0, Ot$1 = void 0, Kt$1 = void 0, Rt = void 0, We;
}
function fe(T) {
  const E = Kt$1.get(T);
  return E === void 0 && t(75, T), E;
}
function de(T) {
  return { type: T };
}
const he = de("SELECTION_CHANGE_COMMAND"), _e = de("CLICK_COMMAND"), pe = de("DELETE_CHARACTER_COMMAND"), ye$1 = de("INSERT_LINE_BREAK_COMMAND"), me = de("INSERT_PARAGRAPH_COMMAND"), xe$1 = de("CONTROLLED_TEXT_INSERTION_COMMAND"), Ce = de("PASTE_COMMAND"), Se = de("REMOVE_TEXT_COMMAND"), ve$1 = de("DELETE_WORD_COMMAND"), Te = de("DELETE_LINE_COMMAND"), ke$1 = de("FORMAT_TEXT_COMMAND"), Ne$1 = de("UNDO_COMMAND"), be$1 = de("REDO_COMMAND"), we$1 = de("KEYDOWN_COMMAND"), Ee$1 = de("KEY_ARROW_RIGHT_COMMAND"), Me$1 = de("MOVE_TO_END"), Oe$1 = de("KEY_ARROW_LEFT_COMMAND"), Ae$1 = de("MOVE_TO_START"), De = de("KEY_ARROW_UP_COMMAND"), Pe = de("KEY_ARROW_DOWN_COMMAND"), Fe$1 = de("KEY_ENTER_COMMAND"), Le = de("KEY_SPACE_COMMAND"), Ie = de("KEY_BACKSPACE_COMMAND"), ze = de("KEY_ESCAPE_COMMAND"), Ke$1 = de("KEY_DELETE_COMMAND"), Re$1 = de("KEY_TAB_COMMAND"), $e = de("DROP_COMMAND"), Ue = de("DRAGSTART_COMMAND"), Ve = de("DRAGOVER_COMMAND"), Ye = de("DRAGEND_COMMAND"), He = de("COPY_COMMAND"), qe = de("CUT_COMMAND"), Ge = de("SELECT_ALL_COMMAND"), en = de("FOCUS_COMMAND"), nn = de("BLUR_COMMAND"), rn$1 = de("KEY_MODIFIER_COMMAND"), sn$1 = Object.freeze({}), on$1 = 30, ln$1 = [["keydown", function(T, E) {
  if (cn = T.timeStamp, an$1 = T.key, !E.isComposing() && !Qs(E, we$1, T) && T.key != null) {
    if (yn && $s(T)) return _i(E, () => {
      wn(E, mn);
    }), yn = !1, void (mn = "");
    if (function(w) {
      return Bs(w, "ArrowRight", { shiftKey: "any" });
    }(T)) Qs(E, Ee$1, T);
    else if (function(w) {
      return Bs(w, "ArrowRight", Ws);
    }(T)) Qs(E, Me$1, T);
    else if (function(w) {
      return Bs(w, "ArrowLeft", { shiftKey: "any" });
    }(T)) Qs(E, Oe$1, T);
    else if (function(w) {
      return Bs(w, "ArrowLeft", Ws);
    }(T)) Qs(E, Ae$1, T);
    else if (function(w) {
      return Bs(w, "ArrowUp", { altKey: "any", shiftKey: "any" });
    }(T)) Qs(E, De, T);
    else if (function(w) {
      return Bs(w, "ArrowDown", { altKey: "any", shiftKey: "any" });
    }(T)) Qs(E, Pe, T);
    else if (function(w) {
      return Bs(w, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
    }(T)) _n = !0, Qs(E, Fe$1, T);
    else if (function(w) {
      return w.key === " ";
    }(T)) Qs(E, Le, T);
    else if (function(w) {
      return r && Bs(w, "o", { ctrlKey: !0 });
    }(T)) T.preventDefault(), _n = !0, Qs(E, ye$1, !0);
    else if (function(w) {
      return Bs(w, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
    }(T)) _n = !1, Qs(E, Fe$1, T);
    else if (function(w) {
      return Bs(w, "Backspace", { shiftKey: "any" }) || r && Bs(w, "h", { ctrlKey: !0 });
    }(T)) $s(T) ? Qs(E, Ie, T) : (T.preventDefault(), Qs(E, pe, !0));
    else if (function(w) {
      return w.key === "Escape";
    }(T)) Qs(E, ze, T);
    else if (function(w) {
      return Bs(w, "Delete", {}) || r && Bs(w, "d", { ctrlKey: !0 });
    }(T)) (function(w) {
      return w.key === "Delete";
    })(T) ? Qs(E, Ke$1, T) : (T.preventDefault(), Qs(E, pe, !1));
    else if (function(w) {
      return Bs(w, "Backspace", Js);
    }(T)) T.preventDefault(), Qs(E, ve$1, !0);
    else if (function(w) {
      return Bs(w, "Delete", Js);
    }(T)) T.preventDefault(), Qs(E, ve$1, !1);
    else if (function(w) {
      return r && Bs(w, "Backspace", { metaKey: !0 });
    }(T)) T.preventDefault(), Qs(E, Te, !0);
    else if (function(w) {
      return r && (Bs(w, "Delete", { metaKey: !0 }) || Bs(w, "k", { ctrlKey: !0 }));
    }(T)) T.preventDefault(), Qs(E, Te, !1);
    else if (function(w) {
      return Bs(w, "b", Ws);
    }(T)) T.preventDefault(), Qs(E, ke$1, "bold");
    else if (function(w) {
      return Bs(w, "u", Ws);
    }(T)) T.preventDefault(), Qs(E, ke$1, "underline");
    else if (function(w) {
      return Bs(w, "i", Ws);
    }(T)) T.preventDefault(), Qs(E, ke$1, "italic");
    else if (function(w) {
      return Bs(w, "Tab", { shiftKey: "any" });
    }(T)) Qs(E, Re$1, T);
    else if (function(w) {
      return Bs(w, "z", Ws);
    }(T)) T.preventDefault(), Qs(E, Ne$1, void 0);
    else if (function(w) {
      return r ? Bs(w, "z", { metaKey: !0, shiftKey: !0 }) : Bs(w, "y", { ctrlKey: !0 }) || Bs(w, "z", { ctrlKey: !0, shiftKey: !0 });
    }(T)) T.preventDefault(), Qs(E, be$1, void 0);
    else {
      const w = E._editorState._selection;
      w === null || _r(w) ? js(T) && (T.preventDefault(), Qs(E, Ge, T)) : function(k) {
        return Bs(k, "c", Ws);
      }(T) ? (T.preventDefault(), Qs(E, He, T)) : function(k) {
        return Bs(k, "x", Ws);
      }(T) ? (T.preventDefault(), Qs(E, qe, T)) : js(T) && (T.preventDefault(), Qs(E, Ge, T));
    }
    (function(w) {
      return w.ctrlKey || w.shiftKey || w.altKey || w.metaKey;
    })(T) && Qs(E, rn$1, T);
  }
}], ["pointerdown", function(T, E) {
  const w = T.target, k = T.pointerType;
  ko(w) && k !== "touch" && k !== "pen" && T.button === 0 && _i(E, () => {
    rs(w) || (gn = !0);
  });
}], ["compositionstart", function(T, E) {
  _i(E, () => {
    const w = Pr();
    if (_r(w) && !E.isComposing()) {
      const k = w.anchor, ge = w.anchor.getNode();
      xs(k.key), (T.timeStamp < cn + on$1 || k.type === "element" || !w.isCollapsed() || ge.getFormat() !== w.format || sr(ge) && ge.getStyle() !== w.style) && Qs(E, xe$1, B$1);
    }
  });
}], ["compositionend", function(T, E) {
  i ? pn = !0 : l$1 || !o && !f$2 ? _i(E, () => {
    wn(E, T.data);
  }) : (yn = !0, mn = T.data);
}], ["input", function(T, E) {
  T.stopPropagation(), _i(E, () => {
    if (To(T.target) && rs(T.target)) return;
    const w = Pr(), k = T.data, ge = bn(T);
    if (k != null && _r(w) && Sn(w, ge, k, T.timeStamp, !1)) {
      pn && (wn(E, k), pn = !1);
      const Be = w.anchor.getNode(), We = xo(co(E));
      if (We === null) return;
      const je = w.isBackward(), Je = je ? w.anchor.offset : w.focus.offset, Qe = je ? w.focus.offset : w.anchor.offset;
      s && !w.isCollapsed() && sr(Be) && We.anchorNode !== null && Be.getTextContent().slice(0, Je) + k + Be.getTextContent().slice(Je + Qe) === Ls(We.anchorNode) || Qs(E, xe$1, k);
      const Ze = k.length;
      i && Ze > 1 && T.inputType === "insertCompositionText" && !E.isComposing() && (w.anchor.offset -= Ze), o || l$1 || f$2 || !E.isComposing() || (cn = 0, xs(null));
    } else
      Is(!1, E, k !== null ? k : void 0), pn && (wn(E, k || void 0), pn = !1);
    (function() {
      Zr();
      const Be = ni();
      at$1(Be);
    })();
  }, { event: T }), fn = null;
}], ["click", function(T, E) {
  _i(E, () => {
    const w = Pr(), k = xo(co(E)), ge = Fr();
    if (k) {
      if (_r(w)) {
        const Be = w.anchor, We = Be.getNode();
        if (Be.type === "element" && Be.offset === 0 && w.isCollapsed() && !ki(We) && ws().getChildrenSize() === 1 && We.getTopLevelElementOrThrow().isEmpty() && ge !== null && w.is(ge)) k.removeAllRanges(), w.dirty = !0;
        else if (T.detail === 3 && !w.isCollapsed() && We !== w.focus.getNode()) {
          const je = function(Je, Qe) {
            let Ze = Je;
            for (; Ze !== ws() && Ze != null; ) {
              if (Qe(Ze)) return Ze;
              Ze = Ze.getParent();
            }
            return null;
          }(We, (Je) => xi(Je) && !Je.isInline());
          xi(je) && je.select(0);
        }
      } else if (T.pointerType === "touch" || T.pointerType === "pen") {
        const Be = k.anchorNode;
        (To(Be) || fs(Be)) && Ms(Dr(ge, k, E, T));
      }
    }
    Qs(E, _e, T);
  });
}], ["cut", sn$1], ["copy", sn$1], ["dragstart", sn$1], ["dragover", sn$1], ["dragend", sn$1], ["paste", sn$1], ["focus", sn$1], ["blur", sn$1], ["drop", sn$1]];
s && ln$1.push(["beforeinput", (T, E) => function(w, k) {
  const ge = w.inputType, Be = bn(w);
  ge === "deleteCompositionText" || i && Xs(k) || ge !== "insertCompositionText" && _i(k, () => {
    const We = Pr();
    if (ge === "deleteContentBackward") {
      if (We === null) {
        const Ar = Fr();
        if (!_r(Ar)) return;
        Ms(Ar.clone());
      }
      if (_r(We)) {
        const Ar = We.anchor.key === We.focus.key;
        if (je = w.timeStamp, an$1 === "MediaLast" && je < cn + on$1 && k.isComposing() && Ar) {
          if (xs(null), cn = 0, setTimeout(() => {
            _i(k, () => {
              xs(null);
            });
          }, on$1), _r(We)) {
            const tn = We.anchor.getNode();
            tn.markDirty(), sr(tn) || t(142), Nn(We, tn);
          }
        } else {
          xs(null), w.preventDefault();
          const tn = We.anchor.getNode(), wr = tn.getTextContent(), Pn = tn.canInsertTextAfter(), ci = We.anchor.offset === 0 && We.focus.offset === wr.length;
          let gt = u$1 && Ar && !ci && Pn;
          if (gt && We.isCollapsed() && (gt = !vi(Gs(We.anchor, !0))), !gt) {
            Qs(k, pe, !0);
            const St = Pr();
            u$1 && _r(St) && St.isCollapsed() && (xn = St, setTimeout(() => xn = null));
          }
        }
        return;
      }
    }
    var je;
    if (!_r(We)) return;
    const Je = w.data;
    fn !== null && Is(!1, k, fn), We.dirty && fn === null || !We.isCollapsed() || ki(We.anchor.getNode()) || Be === null || We.applyDOMRange(Be), fn = null;
    const Qe = We.anchor, Ze = We.focus, dt = Qe.getNode(), Xe = Ze.getNode();
    if (ge !== "insertText" && ge !== "insertTranspose") switch (w.preventDefault(), ge) {
      case "insertFromYank":
      case "insertFromDrop":
      case "insertReplacementText":
        Qs(k, xe$1, w);
        break;
      case "insertFromComposition":
        xs(null), Qs(k, xe$1, w);
        break;
      case "insertLineBreak":
        xs(null), Qs(k, ye$1, !1);
        break;
      case "insertParagraph":
        xs(null), _n && !l$1 ? (_n = !1, Qs(k, ye$1, !1)) : Qs(k, me, void 0);
        break;
      case "insertFromPaste":
      case "insertFromPasteAsQuotation":
        Qs(k, Ce, w);
        break;
      case "deleteByComposition":
        (function(Ar, tn) {
          return Ar !== tn || xi(Ar) || xi(tn) || !as(Ar) || !as(tn);
        })(dt, Xe) && Qs(k, Se, w);
        break;
      case "deleteByDrag":
      case "deleteByCut":
        Qs(k, Se, w);
        break;
      case "deleteContent":
        Qs(k, pe, !1);
        break;
      case "deleteWordBackward":
        Qs(k, ve$1, !0);
        break;
      case "deleteWordForward":
        Qs(k, ve$1, !1);
        break;
      case "deleteHardLineBackward":
      case "deleteSoftLineBackward":
        Qs(k, Te, !0);
        break;
      case "deleteContentForward":
      case "deleteHardLineForward":
      case "deleteSoftLineForward":
        Qs(k, Te, !1);
        break;
      case "formatStrikeThrough":
        Qs(k, ke$1, "strikethrough");
        break;
      case "formatBold":
        Qs(k, ke$1, "bold");
        break;
      case "formatItalic":
        Qs(k, ke$1, "italic");
        break;
      case "formatUnderline":
        Qs(k, ke$1, "underline");
        break;
      case "historyUndo":
        Qs(k, Ne$1, void 0);
        break;
      case "historyRedo":
        Qs(k, be$1, void 0);
    }
    else {
      if (Je === `
`) w.preventDefault(), Qs(k, ye$1, !1);
      else if (Je === R$2) w.preventDefault(), Qs(k, me, void 0);
      else if (Je == null && w.dataTransfer) {
        const Ar = w.dataTransfer.getData("text/plain");
        w.preventDefault(), We.insertRawText(Ar);
      } else Je != null && Sn(We, Be, Je, w.timeStamp, !0) ? (w.preventDefault(), Qs(k, xe$1, Je)) : fn = Je;
      un = w.timeStamp;
    }
  });
}(T, E)]);
let cn = 0, an$1 = null, un = 0, fn = null;
const dn$1 = /* @__PURE__ */ new WeakMap();
let hn$1 = !1, gn = !1, _n = !1, pn = !1, yn = !1, mn = "", xn = null, Cn = [0, "", 0, "root", 0];
function Sn(T, E, w, k, ge) {
  const Be = T.anchor, We = T.focus, je = Be.getNode(), Je = ni(), Qe = xo(co(Je)), Ze = Qe !== null ? Qe.anchorNode : null, dt = Be.key, Xe = Je.getElementByKey(dt), Ar = w.length;
  return dt !== We.key || !sr(je) || (!ge && (!s || un < k + 50) || je.isDirty() && Ar < 2 || Ds(w)) && Be.offset !== We.offset && !je.isComposing() || us(je) || je.isDirty() && Ar > 1 || (ge || !s) && Xe !== null && !je.isComposing() && Ze !== hs(Xe) || Qe !== null && E !== null && (!E.collapsed || E.startContainer !== Qe.anchorNode || E.startOffset !== Qe.anchorOffset) || je.getFormat() !== T.format || je.getStyle() !== T.style || function(tn, wr) {
    if (wr.isSegmented()) return !0;
    if (!tn.isCollapsed()) return !1;
    const Pn = tn.anchor.offset, ci = wr.getParentOrThrow(), gt = as(wr);
    return Pn === 0 ? !wr.canInsertTextBefore() || !ci.canInsertTextBefore() && !wr.isComposing() || gt || function(St) {
      const Jr = St.getPreviousSibling();
      return (sr(Jr) || xi(Jr) && Jr.isInline()) && !Jr.canInsertTextAfter();
    }(wr) : Pn === wr.getTextContentSize() && (!wr.canInsertTextAfter() || !ci.canInsertTextAfter() && !wr.isComposing() || gt);
  }(T, je);
}
function vn(T, E) {
  return fs(T) && T.nodeValue !== null && E !== 0 && E !== T.nodeValue.length;
}
function Tn(T, E, w) {
  const { anchorNode: k, anchorOffset: ge, focusNode: Be, focusOffset: We } = T;
  hn$1 && (hn$1 = !1, vn(k, ge) && vn(Be, We) && !xn) || _i(E, () => {
    if (!w) return void Ms(null);
    if (!ss(E, k, Be)) return;
    let je = Pr();
    if (xn && _r(je) && je.isCollapsed()) {
      const Je = je.anchor, Qe = xn.anchor;
      (Je.key === Qe.key && Je.offset === Qe.offset + 1 || Je.offset === 1 && Qe.getNode().is(Je.getNode().getPreviousSibling())) && (je = xn.clone(), Ms(je));
    }
    if (xn = null, _r(je)) {
      const Je = je.anchor, Qe = Je.getNode();
      if (je.isCollapsed()) {
        T.type === "Range" && T.anchorNode === T.focusNode && (je.dirty = !0);
        const Ze = co(E).event, dt = Ze ? Ze.timeStamp : performance.now(), [Xe, Ar, tn, wr, Pn] = Cn, ci = ws(), gt = E.isComposing() === !1 && ci.getTextContent() === "";
        if (dt < Pn + 200 && Je.offset === tn && Je.key === wr) kn(je, Xe, Ar);
        else if (Je.type === "text") sr(Qe) || t(141), Nn(je, Qe);
        else if (Je.type === "element" && !gt) {
          xi(Qe) || t(259);
          const St = Je.getNode();
          St.isEmpty() ? function(Jr, Fi) {
            const Wr = Fi.getTextFormat(), Di = Fi.getTextStyle();
            kn(Jr, Wr, Di);
          }(je, St) : kn(je, 0, "");
        }
      } else {
        const Ze = Je.key, dt = je.focus.key, Xe = je.getNodes(), Ar = Xe.length, tn = je.isBackward(), wr = tn ? We : ge, Pn = tn ? ge : We, ci = tn ? dt : Ze, gt = tn ? Ze : dt;
        let St = A, Jr = !1;
        for (let Fi = 0; Fi < Ar; Fi++) {
          const Wr = Xe[Fi], Di = Wr.getTextContentSize();
          if (sr(Wr) && Di !== 0 && !(Fi === 0 && Wr.__key === ci && wr === Di || Fi === Ar - 1 && Wr.__key === gt && Pn === 0) && (Jr = !0, St &= Wr.getFormat(), St === 0)) break;
        }
        je.format = Jr ? St : 0;
      }
    }
    Qs(E, he, void 0);
  });
}
function kn(T, E, w) {
  T.format === E && T.style === w || (T.format = E, T.style = w, T.dirty = !0);
}
function Nn(T, E) {
  kn(T, E.getFormat(), E.getStyle());
}
function bn(T) {
  if (!T.getTargetRanges) return null;
  const E = T.getTargetRanges();
  return E.length === 0 ? null : E[0];
}
function wn(T, E) {
  const w = T._compositionKey;
  if (xs(null), w !== null && E != null) {
    if (E === "") {
      const k = Ss(w), ge = hs(T.getElementByKey(w));
      return void (ge !== null && ge.nodeValue !== null && sr(k) && zs(k, ge.nodeValue, null, null, !0));
    }
    if (E[E.length - 1] === `
`) {
      const k = Pr();
      if (_r(k)) {
        const ge = k.focus;
        return k.anchor.set(ge.key, ge.offset, ge.type), void Qs(T, Fe$1, null);
      }
    }
  }
  Is(!0, T, E);
}
function En(T) {
  let E = T.__lexicalEventHandles;
  return E === void 0 && (E = [], T.__lexicalEventHandles = E), E;
}
const Mn = /* @__PURE__ */ new Map();
function On(T) {
  const E = Co(T.target);
  if (E === null) return;
  const w = ls(E.anchorNode);
  if (w === null) return;
  gn && (gn = !1, _i(w, () => {
    const Je = Fr(), Qe = E.anchorNode;
    (To(Qe) || fs(Qe)) && Ms(Dr(Je, E, w, T));
  }));
  const k = Ps(w), ge = k[k.length - 1], Be = ge._key, We = Mn.get(Be), je = We || ge;
  je !== w && Tn(E, je, !1), Tn(E, w, !0), w !== ge ? Mn.set(Be, w) : We && Mn.delete(Be);
}
function An(T) {
  T._lexicalHandled = !0;
}
function Dn(T) {
  return T._lexicalHandled === !0;
}
function Fn(T) {
  const E = T.ownerDocument, w = dn$1.get(E);
  if (w === void 0) return;
  const k = w - 1;
  k >= 0 || t(164), dn$1.set(E, k), k === 0 && E.removeEventListener("selectionchange", On);
  const ge = cs(T);
  os(ge) ? (function(We) {
    if (We._parentEditor !== null) {
      const je = Ps(We), Je = je[je.length - 1]._key;
      Mn.get(Je) === We && Mn.delete(Je);
    } else Mn.delete(We._key);
  }(ge), T.__lexicalEditor = null) : ge && t(198);
  const Be = En(T);
  for (let We = 0; We < Be.length; We++) Be[We]();
  T.__lexicalEventHandles = [];
}
function Ln(T, E, w) {
  Zr();
  const k = T.__key, ge = T.getParent();
  if (ge === null) return;
  const Be = function(je) {
    const Je = Pr();
    if (!_r(Je) || !xi(je)) return Je;
    const { anchor: Qe, focus: Ze } = Je, dt = Qe.getNode(), Xe = Ze.getNode();
    return oo(dt, je) && Qe.set(je.__key, 0, "element"), oo(Xe, je) && Ze.set(je.__key, 0, "element"), Je;
  }(T);
  let We = !1;
  if (_r(Be) && E) {
    const je = Be.anchor, Je = Be.focus;
    je.key === k && (zr(je, T, ge, T.getPreviousSibling(), T.getNextSibling()), We = !0), Je.key === k && (zr(Je, T, ge, T.getPreviousSibling(), T.getNextSibling()), We = !0);
  } else yr(Be) && E && T.isSelected() && T.selectPrevious();
  if (_r(Be) && E && !We) {
    const je = T.getIndexWithinParent();
    ys(T), Lr(Be, ge, je, -1);
  } else ys(T);
  w || fo(ge) || ge.canBeEmpty() || !ge.isEmpty() || Ln(ge, E), E && Be && ki(ge) && ge.isEmpty() && ge.selectEnd();
}
function In(T) {
  return T;
}
class zn {
  static getType() {
    const { ownNodeType: E } = Ro(this);
    return E === void 0 && t(64, this.name), E;
  }
  static clone(E) {
    t(65, this.name);
  }
  $config() {
    return {};
  }
  config(E, w) {
    const k = w.extends || Object.getPrototypeOf(this.constructor);
    return Object.assign(w, { extends: k, type: E }), { [E]: w };
  }
  afterCloneFrom(E) {
    this.__key === E.__key ? (this.__parent = E.__parent, this.__next = E.__next, this.__prev = E.__prev, this.__state = E.__state) : E.__state && (this.__state = E.__state.getWritable(this));
  }
  constructor(E) {
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), ps(this, E);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    t(137, this.constructor.name);
  }
  isAttached() {
    let E = this.__key;
    for (; E !== null; ) {
      if (E === "root") return !0;
      const w = Ss(E);
      if (w === null) break;
      E = w.__parent;
    }
    return !1;
  }
  isSelected(E) {
    const w = E || Pr();
    if (w == null) return !1;
    const k = w.getNodes().some((ge) => ge.__key === this.__key);
    if (sr(this)) return k;
    if (_r(w) && w.anchor.type === "element" && w.focus.type === "element") {
      if (w.isCollapsed()) return !1;
      const ge = this.getParent();
      if (vi(this) && this.isInline() && ge) {
        const Be = w.isBackward() ? w.focus : w.anchor;
        if (ge.is(Be.getNode()) && Be.offset === ge.getChildrenSize() && this.is(ge.getLastChild())) return !1;
      }
    }
    return k;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const E = this.getParent();
    if (E === null) return -1;
    let w = E.getFirstChild(), k = 0;
    for (; w !== null; ) {
      if (this.is(w)) return k;
      k++, w = w.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const E = this.getLatest().__parent;
    return E === null ? null : Ss(E);
  }
  getParentOrThrow() {
    const E = this.getParent();
    return E === null && t(66, this.__key), E;
  }
  getTopLevelElement() {
    let E = this;
    for (; E !== null; ) {
      const w = E.getParent();
      if (fo(w)) return xi(E) || E === this && vi(E) || t(194), E;
      E = w;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const E = this.getTopLevelElement();
    return E === null && t(67, this.__key), E;
  }
  getParents() {
    const E = [];
    let w = this.getParent();
    for (; w !== null; ) E.push(w), w = w.getParent();
    return E;
  }
  getParentKeys() {
    const E = [];
    let w = this.getParent();
    for (; w !== null; ) E.push(w.__key), w = w.getParent();
    return E;
  }
  getPreviousSibling() {
    const E = this.getLatest().__prev;
    return E === null ? null : Ss(E);
  }
  getPreviousSiblings() {
    const E = [], w = this.getParent();
    if (w === null) return E;
    let k = w.getFirstChild();
    for (; k !== null && !k.is(this); ) E.push(k), k = k.getNextSibling();
    return E;
  }
  getNextSibling() {
    const E = this.getLatest().__next;
    return E === null ? null : Ss(E);
  }
  getNextSiblings() {
    const E = [];
    let w = this.getNextSibling();
    for (; w !== null; ) E.push(w), w = w.getNextSibling();
    return E;
  }
  getCommonAncestor(E) {
    const w = xi(this) ? this : this.getParent(), k = xi(E) ? E : E.getParent(), ge = w && k ? Cl(w, k) : null;
    return ge ? ge.commonAncestor : null;
  }
  is(E) {
    return E != null && this.__key === E.__key;
  }
  isBefore(E) {
    const w = Cl(this, E);
    return w !== null && (w.type === "descendant" || (w.type === "branch" ? yl(w) === -1 : (w.type !== "same" && w.type !== "ancestor" && t(279), !1)));
  }
  isParentOf(E) {
    const w = Cl(this, E);
    return w !== null && w.type === "ancestor";
  }
  getNodesBetween(E) {
    const w = this.isBefore(E), k = [], ge = /* @__PURE__ */ new Set();
    let Be = this;
    for (; Be !== null; ) {
      const We = Be.__key;
      if (ge.has(We) || (ge.add(We), k.push(Be)), Be === E) break;
      const je = xi(Be) ? w ? Be.getFirstChild() : Be.getLastChild() : null;
      if (je !== null) {
        Be = je;
        continue;
      }
      const Je = w ? Be.getNextSibling() : Be.getPreviousSibling();
      if (Je !== null) {
        Be = Je;
        continue;
      }
      const Qe = Be.getParentOrThrow();
      if (ge.has(Qe.__key) || k.push(Qe), Qe === E) break;
      let Ze = null, dt = Qe;
      do {
        if (dt === null && t(68), Ze = w ? dt.getNextSibling() : dt.getPreviousSibling(), dt = dt.getParent(), dt === null) break;
        Ze !== null || ge.has(dt.__key) || k.push(dt);
      } while (Ze === null);
      Be = Ze;
    }
    return w || k.reverse(), k;
  }
  isDirty() {
    const E = ni()._dirtyLeaves;
    return E !== null && E.has(this.__key);
  }
  getLatest() {
    const E = Ss(this.__key);
    return E === null && t(113), E;
  }
  getWritable() {
    Zr();
    const E = ei(), w = ni(), k = E._nodeMap, ge = this.__key, Be = this.getLatest(), We = w._cloneNotNeeded, je = Pr();
    if (je !== null && je.setCachedNodes(null), We.has(ge)) return ms(Be), Be;
    const Je = Fo(Be);
    return We.add(ge), ms(Je), k.set(ge, Je), Je;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(E, w) {
    t(70);
  }
  updateDOM(E, w, k) {
    t(71);
  }
  exportDOM(E) {
    return { element: this.createDOM(E._config, E) };
  }
  exportJSON() {
    const E = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...E };
  }
  static importJSON(E) {
    t(18, this.name);
  }
  updateFromJSON(E) {
    return function(w, k) {
      const ge = w.getWritable(), Be = k.$;
      let We = Be;
      for (const je of xt$1(ge).flatKeys) je in k && (We !== void 0 && We !== Be || (We = { ...Be }), We[je] = k[je]);
      return (ge.__state || We) && mt$1(w).updateFromJSON(We), ge;
    }(this, E);
  }
  static transform() {
    return null;
  }
  remove(E) {
    Ln(this, !0, E);
  }
  replace(E, w) {
    Zr();
    let k = Pr();
    k !== null && (k = k.clone()), _o(this, E);
    const ge = this.getLatest(), Be = this.__key, We = E.__key, je = E.getWritable(), Je = this.getParentOrThrow().getWritable(), Qe = Je.__size;
    ys(je);
    const Ze = ge.getPreviousSibling(), dt = ge.getNextSibling(), Xe = ge.__prev, Ar = ge.__next, tn = ge.__parent;
    if (Ln(ge, !1, !0), Ze === null ? Je.__first = We : Ze.getWritable().__next = We, je.__prev = Xe, dt === null ? Je.__last = We : dt.getWritable().__prev = We, je.__next = Ar, je.__parent = tn, Je.__size = Qe, w && (xi(this) && xi(je) || t(139), this.getChildren().forEach((wr) => {
      je.append(wr);
    })), _r(k)) {
      Ms(k);
      const wr = k.anchor, Pn = k.focus;
      wr.key === Be && hr(wr, je), Pn.key === Be && hr(Pn, je);
    }
    return Cs() === Be && xs(We), je;
  }
  insertAfter(E, w = !0) {
    Zr(), _o(this, E);
    const k = this.getWritable(), ge = E.getWritable(), Be = ge.getParent(), We = Pr();
    let je = !1, Je = !1;
    if (Be !== null) {
      const Ar = E.getIndexWithinParent();
      if (ys(ge), _r(We)) {
        const tn = Be.__key, wr = We.anchor, Pn = We.focus;
        je = wr.type === "element" && wr.key === tn && wr.offset === Ar + 1, Je = Pn.type === "element" && Pn.key === tn && Pn.offset === Ar + 1;
      }
    }
    const Qe = this.getNextSibling(), Ze = this.getParentOrThrow().getWritable(), dt = ge.__key, Xe = k.__next;
    if (Qe === null ? Ze.__last = dt : Qe.getWritable().__prev = dt, Ze.__size++, k.__next = dt, ge.__next = Xe, ge.__prev = k.__key, ge.__parent = k.__parent, w && _r(We)) {
      const Ar = this.getIndexWithinParent();
      Lr(We, Ze, Ar + 1);
      const tn = Ze.__key;
      je && We.anchor.set(tn, Ar + 2, "element"), Je && We.focus.set(tn, Ar + 2, "element");
    }
    return E;
  }
  insertBefore(E, w = !0) {
    Zr(), _o(this, E);
    const k = this.getWritable(), ge = E.getWritable(), Be = ge.__key;
    ys(ge);
    const We = this.getPreviousSibling(), je = this.getParentOrThrow().getWritable(), Je = k.__prev, Qe = this.getIndexWithinParent();
    We === null ? je.__first = Be : We.getWritable().__next = Be, je.__size++, k.__prev = Be, ge.__prev = Je, ge.__next = k.__key, ge.__parent = k.__parent;
    const Ze = Pr();
    return w && _r(Ze) && Lr(Ze, this.getParentOrThrow(), Qe), E;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return Bi();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(E, w) {
    Zr();
    const k = this.getPreviousSibling(), ge = this.getParentOrThrow();
    if (k === null) return ge.select(0, 0);
    if (xi(k)) return k.select();
    if (!sr(k)) {
      const Be = k.getIndexWithinParent() + 1;
      return ge.select(Be, Be);
    }
    return k.select(E, w);
  }
  selectNext(E, w) {
    Zr();
    const k = this.getNextSibling(), ge = this.getParentOrThrow();
    if (k === null) return ge.select();
    if (xi(k)) return k.select(0, 0);
    if (!sr(k)) {
      const Be = k.getIndexWithinParent();
      return ge.select(Be, Be);
    }
    return k.select(E, w);
  }
  markDirty() {
    this.getWritable();
  }
  reconcileObservedMutation(E, w) {
    this.markDirty();
  }
}
class Kn extends zn {
  static getType() {
    return "linebreak";
  }
  static clone(E) {
    return new Kn(E.__key);
  }
  constructor(E) {
    super(E);
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return document.createElement("br");
  }
  updateDOM() {
    return !1;
  }
  isInline() {
    return !0;
  }
  static importDOM() {
    return { br: (E) => function(w) {
      const k = w.parentElement;
      if (k !== null && wo(k)) {
        const ge = k.firstChild;
        if (ge === w || ge.nextSibling === w && Jn(ge)) {
          const Be = k.lastChild;
          if (Be === w || Be.previousSibling === w && Jn(Be)) return !0;
        }
      }
      return !1;
    }(E) || function(w) {
      const k = w.parentElement;
      if (k !== null && wo(k)) {
        const ge = k.firstChild;
        if (ge === w || ge.nextSibling === w && Jn(ge)) return !1;
        const Be = k.lastChild;
        if (Be === w || Be.previousSibling === w && Jn(Be)) return !0;
      }
      return !1;
    }(E) ? null : { conversion: Rn, priority: 0 } };
  }
  static importJSON(E) {
    return Bn().updateFromJSON(E);
  }
}
function Rn(T) {
  return { node: Bn() };
}
function Bn() {
  return go(new Kn());
}
function Wn(T) {
  return T instanceof Kn;
}
function Jn(T) {
  return fs(T) && /^( |\t|\r?\n)+$/.test(T.textContent || "");
}
function $n(T, E) {
  return 16 & E ? "code" : E & O ? "mark" : 32 & E ? "sub" : 64 & E ? "sup" : null;
}
function jn(T, E) {
  return 1 & E ? "strong" : 2 & E ? "em" : "span";
}
function Un(T, E, w, k, ge) {
  const Be = k.classList;
  let We = Vs(ge, "base");
  We !== void 0 && Be.add(...We), We = Vs(ge, "underlineStrikethrough");
  let je = !1;
  const Je = E & b && E & N;
  We !== void 0 && (w & b && w & N ? (je = !0, Je || Be.add(...We)) : Je && Be.remove(...We));
  for (const Qe in U$2) {
    const Ze = U$2[Qe];
    if (We = Vs(ge, Qe), We !== void 0) if (w & Ze) {
      if (je && (Qe === "underline" || Qe === "strikethrough")) {
        E & Ze && Be.remove(...We);
        continue;
      }
      E & Ze && (!Je || Qe !== "underline") && Qe !== "strikethrough" || Be.add(...We);
    } else E & Ze && Be.remove(...We);
  }
}
function Vn(T, E, w) {
  const k = E.firstChild, ge = w.isComposing(), Be = T + (ge ? K$2 : "");
  if (k == null) E.textContent = Be;
  else {
    const We = k.nodeValue;
    if (We !== Be) if (ge || i) {
      const [je, Je, Qe] = function(Ze, dt) {
        const Xe = Ze.length, Ar = dt.length;
        let tn = 0, wr = 0;
        for (; tn < Xe && tn < Ar && Ze[tn] === dt[tn]; ) tn++;
        for (; wr + tn < Xe && wr + tn < Ar && Ze[Xe - wr - 1] === dt[Ar - wr - 1]; ) wr++;
        return [tn, Xe - tn - wr, dt.slice(tn, Ar - wr)];
      }(We, Be);
      Je !== 0 && k.deleteData(je, Je), k.insertData(je, Qe);
    } else k.nodeValue = Be;
  }
}
function Yn(T, E, w, k, ge, Be) {
  Vn(ge, T, E);
  const We = Be.theme.text;
  We !== void 0 && Un(0, 0, k, T, We);
}
function Hn(T, E) {
  const w = document.createElement(E);
  return w.appendChild(T), w;
}
class qn extends zn {
  static getType() {
    return "text";
  }
  static clone(E) {
    return new qn(E.__text, E.__key);
  }
  afterCloneFrom(E) {
    super.afterCloneFrom(E), this.__text = E.__text, this.__format = E.__format, this.__style = E.__style, this.__mode = E.__mode, this.__detail = E.__detail;
  }
  constructor(E = "", w) {
    super(w), this.__text = E, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const E = this.getLatest();
    return G$1[E.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Cs();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return !!(1 & this.getLatest().__detail);
  }
  isUnmergeable() {
    return !!(2 & this.getLatest().__detail);
  }
  hasFormat(E) {
    const w = U$2[E];
    return !!(this.getFormat() & w);
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(E, w) {
    return gs(this.getLatest().__format, E, w);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(E, w) {
    const k = this.__format, ge = $n(0, k), Be = jn(0, k), We = ge === null ? Be : ge, je = document.createElement(We);
    let Je = je;
    this.hasFormat("code") && je.setAttribute("spellcheck", "false"), ge !== null && (Je = document.createElement(Be), je.appendChild(Je)), Yn(Je, this, 0, k, this.__text, E);
    const Qe = this.__style;
    return Qe !== "" && (je.style.cssText = Qe), je;
  }
  updateDOM(E, w, k) {
    const ge = this.__text, Be = E.__format, We = this.__format, je = $n(0, Be), Je = $n(0, We), Qe = jn(0, Be), Ze = jn(0, We);
    if ((je === null ? Qe : je) !== (Je === null ? Ze : Je)) return !0;
    if (je === Je && Qe !== Ze) {
      const wr = w.firstChild;
      wr == null && t(48);
      const Pn = document.createElement(Ze);
      return Yn(Pn, this, 0, We, ge, k), w.replaceChild(Pn, wr), !1;
    }
    let dt = w;
    Je !== null && je !== null && (dt = w.firstChild, dt == null && t(49)), Vn(ge, dt, this);
    const Xe = k.theme.text;
    Xe !== void 0 && Be !== We && Un(0, Be, We, dt, Xe);
    const Ar = E.__style, tn = this.__style;
    return Ar !== tn && (w.style.cssText = tn), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: tr, priority: 0 }), b: () => ({ conversion: Xn, priority: 0 }), code: () => ({ conversion: rr, priority: 0 }), em: () => ({ conversion: rr, priority: 0 }), i: () => ({ conversion: rr, priority: 0 }), mark: () => ({ conversion: rr, priority: 0 }), s: () => ({ conversion: rr, priority: 0 }), span: () => ({ conversion: Gn, priority: 0 }), strong: () => ({ conversion: rr, priority: 0 }), sub: () => ({ conversion: rr, priority: 0 }), sup: () => ({ conversion: rr, priority: 0 }), u: () => ({ conversion: rr, priority: 0 }) };
  }
  static importJSON(E) {
    return ir().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setTextContent(E.text).setFormat(E.format).setDetail(E.detail).setMode(E.mode).setStyle(E.style);
  }
  exportDOM(E) {
    let { element: w } = super.exportDOM(E);
    return To(w) || t(132), w.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? w.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? w.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (w.style.textTransform = "capitalize"), this.hasFormat("bold") && (w = Hn(w, "b")), this.hasFormat("italic") && (w = Hn(w, "i")), this.hasFormat("strikethrough") && (w = Hn(w, "s")), this.hasFormat("underline") && (w = Hn(w, "u")), { element: w };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(E, w) {
  }
  setFormat(E) {
    const w = this.getWritable();
    return w.__format = typeof E == "string" ? U$2[E] : E, w;
  }
  setDetail(E) {
    const w = this.getWritable();
    return w.__detail = typeof E == "string" ? V[E] : E, w;
  }
  setStyle(E) {
    const w = this.getWritable();
    return w.__style = E, w;
  }
  toggleFormat(E) {
    const w = gs(this.getFormat(), E, null);
    return this.setFormat(w);
  }
  toggleDirectionless() {
    const E = this.getWritable();
    return E.__detail ^= 1, E;
  }
  toggleUnmergeable() {
    const E = this.getWritable();
    return E.__detail ^= 2, E;
  }
  setMode(E) {
    const w = q$1[E];
    if (this.__mode === w) return this;
    const k = this.getWritable();
    return k.__mode = w, k;
  }
  setTextContent(E) {
    if (this.__text === E) return this;
    const w = this.getWritable();
    return w.__text = E, w;
  }
  select(E, w) {
    Zr();
    let k = E, ge = w;
    const Be = Pr(), We = this.getTextContent(), je = this.__key;
    if (typeof We == "string") {
      const Je = We.length;
      k === void 0 && (k = Je), ge === void 0 && (ge = Je);
    } else k = 0, ge = 0;
    if (!_r(Be)) return Er(je, k, je, ge, "text", "text");
    {
      const Je = Cs();
      Je !== Be.anchor.key && Je !== Be.focus.key || xs(je), Be.setTextNodeRange(this, k, this, ge);
    }
    return Be;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    const E = this.getTextContentSize();
    return this.select(E, E);
  }
  spliceText(E, w, k, ge) {
    const Be = this.getWritable(), We = Be.__text, je = k.length;
    let Je = E;
    Je < 0 && (Je = je + Je, Je < 0 && (Je = 0));
    const Qe = Pr();
    if (ge && _r(Qe)) {
      const dt = E + je;
      Qe.setTextNodeRange(Be, dt, Be, dt);
    }
    const Ze = We.slice(0, Je) + k + We.slice(Je + w);
    return Be.__text = Ze, Be;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...E) {
    Zr();
    const w = this.getLatest(), k = w.getTextContent();
    if (k === "") return [];
    const ge = w.__key, Be = Cs(), We = k.length;
    E.sort(($i, Oi) => $i - Oi), E.push(We);
    const je = [], Je = E.length;
    for (let $i = 0, Oi = 0; $i < We && Oi <= Je; Oi++) {
      const Mi = E[Oi];
      Mi > $i && (je.push(k.slice($i, Mi)), $i = Mi);
    }
    const Qe = je.length;
    if (Qe === 1) return [w];
    const Ze = je[0], dt = w.getParent();
    let Xe;
    const Ar = w.getFormat(), tn = w.getStyle(), wr = w.__detail;
    let Pn = !1, ci = null, gt = null;
    const St = Pr();
    if (_r(St)) {
      const [$i, Oi] = St.isBackward() ? [St.focus, St.anchor] : [St.anchor, St.focus];
      $i.type === "text" && $i.key === ge && (ci = $i), Oi.type === "text" && Oi.key === ge && (gt = Oi);
    }
    w.isSegmented() ? (Xe = ir(Ze), Xe.__format = Ar, Xe.__style = tn, Xe.__detail = wr, Xe.__state = kt(w, Xe), Pn = !0) : Xe = w.setTextContent(Ze);
    const Jr = [Xe];
    for (let $i = 1; $i < Qe; $i++) {
      const Oi = ir(je[$i]);
      Oi.__format = Ar, Oi.__style = tn, Oi.__detail = wr, Oi.__state = kt(w, Oi);
      const Mi = Oi.__key;
      Be === ge && xs(Mi), Jr.push(Oi);
    }
    const Fi = ci ? ci.offset : null, Wr = gt ? gt.offset : null;
    let Di = 0;
    for (const $i of Jr) {
      if (!ci && !gt) break;
      const Oi = Di + $i.getTextContentSize();
      if (ci !== null && Fi !== null && Fi <= Oi && Fi >= Di && (ci.set($i.getKey(), Fi - Di, "text"), Fi < Oi && (ci = null)), gt !== null && Wr !== null && Wr <= Oi && Wr >= Di) {
        gt.set($i.getKey(), Wr - Di, "text");
        break;
      }
      Di = Oi;
    }
    if (dt !== null) {
      (function(Mi) {
        const Ui = Mi.getPreviousSibling(), Vi = Mi.getNextSibling();
        Ui !== null && ms(Ui), Vi !== null && ms(Vi);
      })(this);
      const $i = dt.getWritable(), Oi = this.getIndexWithinParent();
      Pn ? ($i.splice(Oi, 0, Jr), this.remove()) : $i.splice(Oi, 1, Jr), _r(St) && Lr(St, dt, Oi, Qe - 1);
    }
    return Jr;
  }
  mergeWithSibling(E) {
    const w = E === this.getPreviousSibling();
    w || E === this.getNextSibling() || t(50);
    const k = this.__key, ge = E.__key, Be = this.__text, We = Be.length;
    Cs() === ge && xs(k);
    const je = Pr();
    if (_r(je)) {
      const dt = je.anchor, Xe = je.focus;
      dt !== null && dt.key === ge && Kr(dt, w, k, E, We), Xe !== null && Xe.key === ge && Kr(Xe, w, k, E, We);
    }
    const Je = E.__text, Qe = w ? Je + Be : Be + Je;
    this.setTextContent(Qe);
    const Ze = this.getWritable();
    return E.remove(), Ze;
  }
  isTextEntity() {
    return !1;
  }
}
function Gn(T) {
  return { forChild: or(T.style), node: null };
}
function Xn(T) {
  const E = T, w = E.style.fontWeight === "normal";
  return { forChild: or(E.style, w ? void 0 : "bold"), node: null };
}
const Qn = /* @__PURE__ */ new WeakMap();
function Zn(T) {
  if (!To(T)) return !1;
  if (T.nodeName === "PRE") return !0;
  const E = T.style.whiteSpace;
  return typeof E == "string" && E.startsWith("pre");
}
function tr(T) {
  const E = T;
  T.parentElement === null && t(129);
  let w = E.textContent || "";
  if (function(k) {
    let ge, Be = k.parentNode;
    const We = [k];
    for (; Be !== null && (ge = Qn.get(Be)) === void 0 && !Zn(Be); ) We.push(Be), Be = Be.parentNode;
    const je = ge === void 0 ? Be : ge;
    for (let Je = 0; Je < We.length; Je++) Qn.set(We[Je], je);
    return je;
  }(E) !== null) {
    const k = w.split(/(\r?\n|\t)/), ge = [], Be = k.length;
    for (let We = 0; We < Be; We++) {
      const je = k[We];
      je === `
` || je === `\r
` ? ge.push(Bn()) : je === "	" ? ge.push(cr()) : je !== "" && ge.push(ir(je));
    }
    return { node: ge };
  }
  if (w = w.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), w === "") return { node: null };
  if (w[0] === " ") {
    let k = E, ge = !0;
    for (; k !== null && (k = er(k, !1)) !== null; ) {
      const Be = k.textContent || "";
      if (Be.length > 0) {
        /[ \t\n]$/.test(Be) && (w = w.slice(1)), ge = !1;
        break;
      }
    }
    ge && (w = w.slice(1));
  }
  if (w[w.length - 1] === " ") {
    let k = E, ge = !0;
    for (; k !== null && (k = er(k, !0)) !== null; )
      if ((k.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        ge = !1;
        break;
      }
    ge && (w = w.slice(0, w.length - 1));
  }
  return w === "" ? { node: null } : { node: ir(w) };
}
function er(T, E) {
  let w = T;
  for (; ; ) {
    let k;
    for (; (k = E ? w.nextSibling : w.previousSibling) === null; ) {
      const Be = w.parentElement;
      if (Be === null) return null;
      w = Be;
    }
    if (w = k, To(w)) {
      const Be = w.style.display;
      if (Be === "" && !bo(w) || Be !== "" && !Be.startsWith("inline")) return null;
    }
    let ge = w;
    for (; (ge = E ? w.firstChild : w.lastChild) !== null; ) w = ge;
    if (fs(w)) return w;
    if (w.nodeName === "BR") return null;
  }
}
const nr = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function rr(T) {
  const E = nr[T.nodeName.toLowerCase()];
  return E === void 0 ? { node: null } : { forChild: or(T.style, E), node: null };
}
function ir(T = "") {
  return go(new qn(T));
}
function sr(T) {
  return T instanceof qn;
}
function or(T, E) {
  const w = T.fontWeight, k = T.textDecoration.split(" "), ge = w === "700" || w === "bold", Be = k.includes("line-through"), We = T.fontStyle === "italic", je = k.includes("underline"), Je = T.verticalAlign;
  return (Qe) => (sr(Qe) && (ge && !Qe.hasFormat("bold") && Qe.toggleFormat("bold"), Be && !Qe.hasFormat("strikethrough") && Qe.toggleFormat("strikethrough"), We && !Qe.hasFormat("italic") && Qe.toggleFormat("italic"), je && !Qe.hasFormat("underline") && Qe.toggleFormat("underline"), Je !== "sub" || Qe.hasFormat("subscript") || Qe.toggleFormat("subscript"), Je !== "super" || Qe.hasFormat("superscript") || Qe.toggleFormat("superscript"), E && !Qe.hasFormat(E) && Qe.toggleFormat(E)), Qe);
}
class lr extends qn {
  static getType() {
    return "tab";
  }
  static clone(E) {
    return new lr(E.__key);
  }
  constructor(E) {
    super("	", E), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(E) {
    const w = super.createDOM(E), k = Vs(E.theme, "tab");
    return k !== void 0 && w.classList.add(...k), w;
  }
  static importJSON(E) {
    return cr().updateFromJSON(E);
  }
  setTextContent(E) {
    return E !== "	" && E !== "" && t(126), super.setTextContent("	");
  }
  spliceText(E, w, k, ge) {
    return k === "" && w === 0 || k === "	" && w === 1 || t(286), this;
  }
  setDetail(E) {
    return E !== 2 && t(127), this;
  }
  setMode(E) {
    return E !== "normal" && t(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function cr() {
  return go(new lr());
}
function ar(T) {
  return T instanceof lr;
}
class ur {
  constructor(E, w, k) {
    this._selection = null, this.key = E, this.offset = w, this.type = k;
  }
  is(E) {
    return this.key === E.key && this.offset === E.offset && this.type === E.type;
  }
  isBefore(E) {
    return this.key === E.key ? this.offset < E.offset : pl(Ol(Sl(this, "next")), Ol(Sl(E, "next"))) < 0;
  }
  getNode() {
    const E = Ss(this.key);
    return E === null && t(20), E;
  }
  set(E, w, k, ge) {
    const Be = this._selection, We = this.key;
    ge && this.key === E && this.offset === w && this.type === k || (this.key = E, this.offset = w, this.type = k, Qr() || (Cs() === We && xs(E), Be !== null && (Be.setCachedNodes(null), Be.dirty = !0)));
  }
}
function fr(T, E, w) {
  return new ur(T, E, w);
}
function dr(T, E) {
  let w = E.__key, k = T.offset, ge = "element";
  if (sr(E)) {
    ge = "text";
    const Be = E.getTextContentSize();
    k > Be && (k = Be);
  } else if (!xi(E)) {
    const Be = E.getNextSibling();
    if (sr(Be)) w = Be.__key, k = 0, ge = "text";
    else {
      const We = E.getParent();
      We && (w = We.__key, k = E.getIndexWithinParent() + 1);
    }
  }
  T.set(w, k, ge);
}
function hr(T, E) {
  if (xi(E)) {
    const w = E.getLastDescendant();
    xi(w) || sr(w) ? dr(T, w) : dr(T, E);
  } else dr(T, E);
}
class gr {
  constructor(E) {
    this._cachedNodes = null, this._nodes = E, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(E) {
    this._cachedNodes = E;
  }
  is(E) {
    if (!yr(E)) return !1;
    const w = this._nodes, k = E._nodes;
    return w.size === k.size && Array.from(w).every((ge) => k.has(ge));
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return !1;
  }
  getStartEndPoints() {
    return null;
  }
  add(E) {
    this.dirty = !0, this._nodes.add(E), this._cachedNodes = null;
  }
  delete(E) {
    this.dirty = !0, this._nodes.delete(E), this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
  }
  has(E) {
    return this._nodes.has(E);
  }
  clone() {
    return new gr(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(E) {
  }
  insertText() {
  }
  insertNodes(E) {
    const w = this.getNodes(), k = w.length, ge = w[k - 1];
    let Be;
    if (sr(ge)) Be = ge.select();
    else {
      const We = ge.getIndexWithinParent() + 1;
      Be = ge.getParentOrThrow().select(We, We);
    }
    Be.insertNodes(E);
    for (let We = 0; We < k; We++) w[We].remove();
  }
  getNodes() {
    const E = this._cachedNodes;
    if (E !== null) return E;
    const w = this._nodes, k = [];
    for (const ge of w) {
      const Be = Ss(ge);
      Be !== null && k.push(Be);
    }
    return Qr() || (this._cachedNodes = k), k;
  }
  getTextContent() {
    const E = this.getNodes();
    let w = "";
    for (let k = 0; k < E.length; k++) w += E[k].getTextContent();
    return w;
  }
  deleteNodes() {
    const E = this.getNodes();
    if ((Pr() || Fr()) === this && E[0]) {
      const w = nl(E[0], "next");
      Tl(gl(w, w));
    }
    for (const w of E) w.remove();
  }
}
function _r(T) {
  return T instanceof pr;
}
class pr {
  constructor(E, w, k, ge) {
    this.anchor = E, this.focus = w, E._selection = this, w._selection = this, this._cachedNodes = null, this.format = k, this.style = ge, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(E) {
    this._cachedNodes = E;
  }
  is(E) {
    return !!_r(E) && this.anchor.is(E.anchor) && this.focus.is(E.focus) && this.format === E.format && this.style === E.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const E = this._cachedNodes;
    if (E !== null) return E;
    const w = function(k) {
      const ge = [], [Be, We] = k.getTextSlices();
      Be && ge.push(Be.caret.origin);
      const je = /* @__PURE__ */ new Set(), Je = /* @__PURE__ */ new Set();
      for (const Qe of k) if (Qo(Qe)) {
        const { origin: Ze } = Qe;
        ge.length === 0 ? je.add(Ze) : (Je.add(Ze), ge.push(Ze));
      } else {
        const { origin: Ze } = Qe;
        xi(Ze) && Je.has(Ze) || ge.push(Ze);
      }
      if (We && ge.push(We.caret.origin), Xo(k.focus) && xi(k.focus.origin) && k.focus.getNodeAtCaret() === null) for (let Qe = ol(k.focus.origin, "previous"); Qo(Qe) && je.has(Qe.origin) && !Qe.origin.isEmpty() && Qe.origin.is(ge[ge.length - 1]); Qe = cl(Qe)) je.delete(Qe.origin), ge.pop();
      for (; ge.length > 1; ) {
        const Qe = ge[ge.length - 1];
        if (!xi(Qe) || Je.has(Qe) || Qe.isEmpty() || je.has(Qe)) break;
        ge.pop();
      }
      if (ge.length === 0 && k.isCollapsed()) {
        const Qe = Ol(k.anchor), Ze = Ol(k.anchor.getFlipped()), dt = (Ar) => qo(Ar) ? Ar.origin : Ar.getNodeAtCaret(), Xe = dt(Qe) || dt(Ze) || (k.anchor.getNodeAtCaret() ? Qe.origin : Ze.origin);
        ge.push(Xe);
      }
      return ge;
    }(Pl(Nl(this), "next"));
    return Qr() || (this._cachedNodes = w), w;
  }
  setTextNodeRange(E, w, k, ge) {
    this.anchor.set(E.__key, w, "text"), this.focus.set(k.__key, ge, "text");
  }
  getTextContent() {
    const E = this.getNodes();
    if (E.length === 0) return "";
    const w = E[0], k = E[E.length - 1], ge = this.anchor, Be = this.focus, We = ge.isBefore(Be), [je, Je] = xr(this);
    let Qe = "", Ze = !0;
    for (let dt = 0; dt < E.length; dt++) {
      const Xe = E[dt];
      if (xi(Xe) && !Xe.isInline()) Ze || (Qe += `
`), Ze = !Xe.isEmpty();
      else if (Ze = !1, sr(Xe)) {
        let Ar = Xe.getTextContent();
        Xe === w ? Xe === k ? ge.type === "element" && Be.type === "element" && Be.offset !== ge.offset || (Ar = je < Je ? Ar.slice(je, Je) : Ar.slice(Je, je)) : Ar = We ? Ar.slice(je) : Ar.slice(Je) : Xe === k && (Ar = We ? Ar.slice(0, Je) : Ar.slice(0, je)), Qe += Ar;
      } else !vi(Xe) && !Wn(Xe) || Xe === k && this.isCollapsed() || (Qe += Xe.getTextContent());
    }
    return Qe;
  }
  applyDOMRange(E) {
    const w = ni(), k = w.getEditorState()._selection, ge = br(E.startContainer, E.startOffset, E.endContainer, E.endOffset, w, k);
    if (ge === null) return;
    const [Be, We] = ge;
    this.anchor.set(Be.key, Be.offset, Be.type, !0), this.focus.set(We.key, We.offset, We.type, !0), Et$1(this);
  }
  clone() {
    const E = this.anchor, w = this.focus;
    return new pr(fr(E.key, E.offset, E.type), fr(w.key, w.offset, w.type), this.format, this.style);
  }
  toggleFormat(E) {
    this.format = gs(this.format, E, null), this.dirty = !0;
  }
  setFormat(E) {
    this.format = E, this.dirty = !0;
  }
  setStyle(E) {
    this.style = E, this.dirty = !0;
  }
  hasFormat(E) {
    const w = U$2[E];
    return !!(this.format & w);
  }
  insertRawText(E) {
    const w = E.split(/(\r?\n|\t)/), k = [], ge = w.length;
    for (let Be = 0; Be < ge; Be++) {
      const We = w[Be];
      We === `
` || We === `\r
` ? k.push(Bn()) : We === "	" ? k.push(cr()) : k.push(ir(We));
    }
    this.insertNodes(k);
  }
  insertText(E) {
    const w = this.anchor, k = this.focus, ge = this.format, Be = this.style;
    let We = w, je = k;
    !this.isCollapsed() && k.isBefore(w) && (We = k, je = w), We.type === "element" && function(Pn, ci, gt, St) {
      const Jr = Pn.getNode(), Fi = Jr.getChildAtIndex(Pn.offset), Wr = ir(), Di = ki(Jr) ? Bi().append(Wr) : Wr;
      Wr.setFormat(gt), Wr.setStyle(St), Fi === null ? Jr.append(Di) : Fi.insertBefore(Di), Pn.is(ci) && ci.set(Wr.__key, 0, "text"), Pn.set(Wr.__key, 0, "text");
    }(We, je, ge, Be), je.type === "element" && vl(je, Ol(Sl(je, "next")));
    const Je = We.offset;
    let Qe = je.offset;
    const Ze = this.getNodes(), dt = Ze.length;
    let Xe = Ze[0];
    sr(Xe) || t(26);
    const Ar = Xe.getTextContent().length, tn = Xe.getParentOrThrow();
    let wr = Ze[dt - 1];
    if (dt === 1 && je.type === "element" && (Qe = Ar, je.set(We.key, Qe, "text")), this.isCollapsed() && Je === Ar && (us(Xe) || !Xe.canInsertTextAfter() || !tn.canInsertTextAfter() && Xe.getNextSibling() === null)) {
      let Pn = Xe.getNextSibling();
      if (sr(Pn) && Pn.canInsertTextBefore() && !us(Pn) || (Pn = ir(), Pn.setFormat(ge), Pn.setStyle(Be), tn.canInsertTextAfter() ? Xe.insertAfter(Pn) : tn.insertAfter(Pn)), Pn.select(0, 0), Xe = Pn, E !== "") return void this.insertText(E);
    } else if (this.isCollapsed() && Je === 0 && (us(Xe) || !Xe.canInsertTextBefore() || !tn.canInsertTextBefore() && Xe.getPreviousSibling() === null)) {
      let Pn = Xe.getPreviousSibling();
      if (sr(Pn) && !us(Pn) || (Pn = ir(), Pn.setFormat(ge), tn.canInsertTextBefore() ? Xe.insertBefore(Pn) : tn.insertBefore(Pn)), Pn.select(), Xe = Pn, E !== "") return void this.insertText(E);
    } else if (Xe.isSegmented() && Je !== Ar) {
      const Pn = ir(Xe.getTextContent());
      Pn.setFormat(ge), Xe.replace(Pn), Xe = Pn;
    } else if (!this.isCollapsed() && E !== "") {
      const Pn = wr.getParent();
      if (!tn.canInsertTextBefore() || !tn.canInsertTextAfter() || xi(Pn) && (!Pn.canInsertTextBefore() || !Pn.canInsertTextAfter())) return this.insertText(""), Nr(this.anchor, this.focus, null), void this.insertText(E);
    }
    if (dt === 1) {
      if (as(Xe)) {
        const St = ir(E);
        return St.select(), void Xe.replace(St);
      }
      const Pn = Xe.getFormat(), ci = Xe.getStyle();
      if (Je !== Qe || Pn === ge && ci === Be) {
        if (ar(Xe)) {
          const St = ir(E);
          return St.setFormat(ge), St.setStyle(Be), St.select(), void Xe.replace(St);
        }
      } else {
        if (Xe.getTextContent() !== "") {
          const St = ir(E);
          if (St.setFormat(ge), St.setStyle(Be), St.select(), Je === 0) Xe.insertBefore(St, !1);
          else {
            const [Jr] = Xe.splitText(Je);
            Jr.insertAfter(St, !1);
          }
          return void (St.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= E.length));
        }
        Xe.setFormat(ge), Xe.setStyle(Be);
      }
      const gt = Qe - Je;
      Xe = Xe.spliceText(Je, gt, E, !0), Xe.getTextContent() === "" ? Xe.remove() : this.anchor.type === "text" && (Xe.isComposing() ? this.anchor.offset -= E.length : (this.format = Pn, this.style = ci));
    } else {
      const Pn = /* @__PURE__ */ new Set([...Xe.getParentKeys(), ...wr.getParentKeys()]), ci = xi(Xe) ? Xe : Xe.getParentOrThrow();
      let gt = xi(wr) ? wr : wr.getParentOrThrow(), St = wr;
      if (!ci.is(gt) && gt.isInline()) do
        St = gt, gt = gt.getParentOrThrow();
      while (gt.isInline());
      if (je.type === "text" && (Qe !== 0 || wr.getTextContent() === "") || je.type === "element" && wr.getIndexWithinParent() < Qe) if (sr(wr) && !as(wr) && Qe !== wr.getTextContentSize()) {
        if (wr.isSegmented()) {
          const $i = ir(wr.getTextContent());
          wr.replace($i), wr = $i;
        }
        ki(je.getNode()) || je.type !== "text" || (wr = wr.spliceText(0, Qe, "")), Pn.add(wr.__key);
      } else {
        const $i = wr.getParentOrThrow();
        $i.canBeEmpty() || $i.getChildrenSize() !== 1 ? wr.remove() : $i.remove();
      }
      else Pn.add(wr.__key);
      const Jr = gt.getChildren(), Fi = new Set(Ze), Wr = ci.is(gt), Di = ci.isInline() && Xe.getNextSibling() === null ? ci : Xe;
      for (let $i = Jr.length - 1; $i >= 0; $i--) {
        const Oi = Jr[$i];
        if (Oi.is(Xe) || xi(Oi) && Oi.isParentOf(Xe)) break;
        Oi.isAttached() && (!Fi.has(Oi) || Oi.is(St) ? Wr || Di.insertAfter(Oi, !1) : Oi.remove());
      }
      if (!Wr) {
        let $i = gt, Oi = null;
        for (; $i !== null; ) {
          const Mi = $i.getChildren(), Ui = Mi.length;
          (Ui === 0 || Mi[Ui - 1].is(Oi)) && (Pn.delete($i.__key), Oi = $i), $i = $i.getParent();
        }
      }
      if (as(Xe)) if (Je === Ar) Xe.select();
      else {
        const $i = ir(E);
        $i.select(), Xe.replace($i);
      }
      else Xe = Xe.spliceText(Je, Ar - Je, E, !0), Xe.getTextContent() === "" ? Xe.remove() : Xe.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= E.length);
      for (let $i = 1; $i < dt; $i++) {
        const Oi = Ze[$i], Mi = Oi.__key;
        Pn.has(Mi) || Oi.remove();
      }
    }
  }
  removeText() {
    const E = Pr() === this;
    kl(this, Ml(Nl(this))), E && Pr() !== this && Ms(this);
  }
  formatText(E, w = null) {
    if (this.isCollapsed()) return this.toggleFormat(E), void xs(null);
    const k = this.getNodes(), ge = [];
    for (const Jr of k) sr(Jr) && ge.push(Jr);
    const Be = (Jr) => {
      k.forEach((Fi) => {
        if (xi(Fi)) {
          const Wr = Fi.getFormatFlags(E, Jr);
          Fi.setTextFormat(Wr);
        }
      });
    }, We = ge.length;
    if (We === 0) return this.toggleFormat(E), xs(null), void Be(w);
    const je = this.anchor, Je = this.focus, Qe = this.isBackward(), Ze = Qe ? Je : je, dt = Qe ? je : Je;
    let Xe = 0, Ar = ge[0], tn = Ze.type === "element" ? 0 : Ze.offset;
    if (Ze.type === "text" && tn === Ar.getTextContentSize() && (Xe = 1, Ar = ge[1], tn = 0), Ar == null) return;
    const wr = Ar.getFormatFlags(E, w);
    Be(wr);
    const Pn = We - 1;
    let ci = ge[Pn];
    const gt = dt.type === "text" ? dt.offset : ci.getTextContentSize();
    if (Ar.is(ci)) {
      if (tn === gt) return;
      if (us(Ar) || tn === 0 && gt === Ar.getTextContentSize()) Ar.setFormat(wr);
      else {
        const Jr = Ar.splitText(tn, gt), Fi = tn === 0 ? Jr[0] : Jr[1];
        Fi.setFormat(wr), Ze.type === "text" && Ze.set(Fi.__key, 0, "text"), dt.type === "text" && dt.set(Fi.__key, gt - tn, "text");
      }
      return void (this.format = wr);
    }
    tn === 0 || us(Ar) || ([, Ar] = Ar.splitText(tn), tn = 0), Ar.setFormat(wr);
    const St = ci.getFormatFlags(E, wr);
    gt > 0 && (gt === ci.getTextContentSize() || us(ci) || ([ci] = ci.splitText(gt)), ci.setFormat(St));
    for (let Jr = Xe + 1; Jr < Pn; Jr++) {
      const Fi = ge[Jr], Wr = Fi.getFormatFlags(E, St);
      Fi.setFormat(Wr);
    }
    Ze.type === "text" && Ze.set(Ar.__key, tn, "text"), dt.type === "text" && dt.set(ci.__key, gt, "text"), this.format = wr | St;
  }
  insertNodes(E) {
    if (E.length === 0) return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const tn = Pr();
      return _r(tn) || t(134), tn.insertNodes(E);
    }
    const w = (this.isBackward() ? this.focus : this.anchor).getNode(), k = Mo(w, Eo), ge = E[E.length - 1];
    if (xi(k) && "__language" in k) {
      if ("__language" in E[0]) this.insertText(E[0].getTextContent());
      else {
        const tn = $r(this);
        k.splice(tn, 0, E), ge.selectEnd();
      }
      return;
    }
    if (!E.some((tn) => (xi(tn) || vi(tn)) && !tn.isInline())) {
      xi(k) || t(211, w.constructor.name, w.getType());
      const tn = $r(this);
      return k.splice(tn, 0, E), void ge.selectEnd();
    }
    const Be = function(tn) {
      const wr = Bi();
      let Pn = null;
      for (let ci = 0; ci < tn.length; ci++) {
        const gt = tn[ci], St = Wn(gt);
        if (St || vi(gt) && gt.isInline() || xi(gt) && gt.isInline() || sr(gt) || gt.isParentRequired()) {
          if (Pn === null && (Pn = gt.createParentElementNode(), wr.append(Pn), St)) continue;
          Pn !== null && Pn.append(gt);
        } else wr.append(gt), Pn = null;
      }
      return wr;
    }(E), We = Be.getLastDescendant(), je = Be.getChildren(), Je = !xi(k) || !k.isEmpty() ? this.insertParagraph() : null, Qe = je[je.length - 1];
    let Ze = je[0];
    var dt;
    xi(dt = Ze) && Eo(dt) && !dt.isEmpty() && xi(k) && (!k.isEmpty() || k.canMergeWhenEmpty()) && (xi(k) || t(211, w.constructor.name, w.getType()), k.append(...Ze.getChildren()), Ze = je[1]), Ze && (k === null && t(212, w.constructor.name, w.getType()), function(tn, wr, Pn) {
      const ci = wr.getParentOrThrow().getLastChild();
      let gt = wr;
      const St = [wr];
      for (; gt !== ci; ) gt.getNextSibling() || t(140), gt = gt.getNextSibling(), St.push(gt);
      let Jr = tn;
      for (const Fi of St) Jr = Jr.insertAfter(Fi);
    }(k, Ze));
    const Xe = Mo(We, Eo);
    Je && xi(Xe) && (Je.canMergeWhenEmpty() || Eo(Qe)) && (Xe.append(...Je.getChildren()), Je.remove()), xi(k) && k.isEmpty() && k.remove(), We.selectEnd();
    const Ar = xi(k) ? k.getLastChild() : null;
    Wn(Ar) && Xe !== k && Ar.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const We = Bi();
      return ws().splice(this.anchor.offset, 0, [We]), We.select(), We;
    }
    const E = $r(this), w = Mo(this.anchor.getNode(), Eo);
    xi(w) || t(213);
    const k = w.getChildAtIndex(E), ge = k ? [k, ...k.getNextSiblings()] : [], Be = w.insertNewAfter(this, !1);
    return Be ? (Be.append(...ge), Be.selectStart(), Be) : null;
  }
  insertLineBreak(E) {
    const w = Bn();
    if (this.insertNodes([w]), E) {
      const k = w.getParentOrThrow(), ge = w.getIndexWithinParent();
      k.select(ge, ge);
    }
  }
  extract() {
    const E = this.getNodes(), w = E.length, k = w - 1, ge = this.anchor, Be = this.focus;
    let We = E[0], je = E[k];
    const [Je, Qe] = xr(this);
    if (w === 0) return [];
    if (w === 1) {
      if (sr(We) && !this.isCollapsed()) {
        const dt = Je > Qe ? Qe : Je, Xe = Je > Qe ? Je : Qe, Ar = We.splitText(dt, Xe), tn = dt === 0 ? Ar[0] : Ar[1];
        return tn != null ? [tn] : [];
      }
      return [We];
    }
    const Ze = ge.isBefore(Be);
    if (sr(We)) {
      const dt = Ze ? Je : Qe;
      dt === We.getTextContentSize() ? E.shift() : dt !== 0 && ([, We] = We.splitText(dt), E[0] = We);
    }
    if (sr(je)) {
      const dt = je.getTextContent().length, Xe = Ze ? Qe : Je;
      Xe === 0 ? E.pop() : Xe !== dt && ([je] = je.splitText(Xe), E[k] = je);
    }
    return E;
  }
  modify(E, w, k) {
    if (Ur(this, E, w, k)) return;
    const ge = E === "move", Be = ni(), We = xo(co(Be));
    if (!We) return;
    const je = Be._blockCursorElement, Je = Be._rootElement, Qe = this.focus.getNode();
    if (Je === null || je === null || !xi(Qe) || Qe.isInline() || Qe.canBeEmpty() || mo(je, Be, Je), this.dirty) {
      let Ze = to(Be, this.anchor.key), dt = to(Be, this.focus.key);
      this.anchor.type === "text" && (Ze = hs(Ze)), this.focus.type === "text" && (dt = hs(dt)), Ze && dt && Rr(We, Ze, this.anchor.offset, dt, this.focus.offset);
    }
    if (function(Ze, dt, Xe, Ar) {
      Ze.modify(dt, Xe, Ar);
    }(We, E, w ? "backward" : "forward", k), We.rangeCount > 0) {
      const Ze = We.getRangeAt(0), dt = this.anchor.getNode(), Xe = ki(dt) ? dt : uo(dt);
      if (this.applyDOMRange(Ze), this.dirty = !0, !ge) {
        const Ar = this.getNodes(), tn = [];
        let wr = !1;
        for (let Pn = 0; Pn < Ar.length; Pn++) {
          const ci = Ar[Pn];
          oo(ci, Xe) ? tn.push(ci) : wr = !0;
        }
        if (wr && tn.length > 0) if (w) {
          const Pn = tn[0];
          xi(Pn) ? Pn.selectStart() : Pn.getParentOrThrow().selectStart();
        } else {
          const Pn = tn[tn.length - 1];
          xi(Pn) ? Pn.selectEnd() : Pn.getParentOrThrow().selectEnd();
        }
        We.anchorNode === Ze.startContainer && We.anchorOffset === Ze.startOffset || function(Pn) {
          const ci = Pn.focus, gt = Pn.anchor, St = gt.key, Jr = gt.offset, Fi = gt.type;
          gt.set(ci.key, ci.offset, ci.type, !0), ci.set(St, Jr, Fi, !0);
        }(this);
      }
    }
    k === "lineboundary" && Ur(this, E, w, k, "decorators");
  }
  forwardDeletion(E, w, k) {
    if (!k && (E.type === "element" && xi(w) && E.offset === w.getChildrenSize() || E.type === "text" && E.offset === w.getTextContentSize())) {
      const ge = w.getParent(), Be = w.getNextSibling() || (ge === null ? null : ge.getNextSibling());
      if (xi(Be) && Be.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(E) {
    const w = this.isCollapsed();
    if (this.isCollapsed()) {
      const k = this.anchor;
      let ge = k.getNode();
      if (this.forwardDeletion(k, ge, E)) return;
      const Be = dl(Sl(k, E ? "previous" : "next"));
      if (Be.getTextSlices().every((je) => je === null || je.distance === 0)) {
        let je = { type: "initial" };
        for (const Je of Be.iterNodeCarets("shadowRoot")) if (Qo(Je)) {
          if (!Je.origin.isInline()) {
            if (Je.origin.isShadowRoot()) {
              if (je.type === "merge-block") break;
              if (xi(Be.anchor.origin) && Be.anchor.origin.isEmpty()) {
                const Qe = Ol(Je);
                kl(this, gl(Qe, Qe)), Be.anchor.origin.remove();
              }
              return;
            }
            je.type !== "merge-next-block" && je.type !== "merge-block" || (je = { block: je.block, caret: Je, type: "merge-block" });
          }
        } else {
          if (je.type === "merge-block") break;
          if (Xo(Je)) {
            if (xi(Je.origin)) {
              if (Je.origin.isInline()) {
                if (!Je.origin.isParentOf(Be.anchor.origin)) break;
              } else je = { block: Je.origin, type: "merge-next-block" };
              continue;
            }
            if (vi(Je.origin)) {
              if (!Je.origin.isIsolated()) if (je.type === "merge-next-block" && (Je.origin.isKeyboardSelectable() || !Je.origin.isInline()) && xi(Be.anchor.origin) && Be.anchor.origin.isEmpty()) {
                Be.anchor.origin.remove();
                const Qe = Or();
                Qe.add(Je.origin.getKey()), Ms(Qe);
              } else Je.origin.remove();
              return;
            }
            break;
          }
        }
        if (je.type === "merge-block") {
          const { caret: Je, block: Qe } = je;
          return kl(this, gl(!Je.origin.isEmpty() && Qe.isEmpty() ? bl(nl(Qe, Je.direction)) : Be.anchor, Je)), this.removeText();
        }
      }
      const We = this.focus;
      if (this.modify("extend", E, "character"), this.isCollapsed()) {
        if (E && k.offset === 0 && Cr(this, k.getNode())) return;
      } else {
        const je = We.type === "text" ? We.getNode() : null;
        if (ge = k.type === "text" ? k.getNode() : null, je !== null && je.isSegmented()) {
          const Je = We.offset, Qe = je.getTextContentSize();
          if (je.is(ge) || E && Je !== Qe || !E && Je !== 0) return void vr(je, E, Je);
        } else if (ge !== null && ge.isSegmented()) {
          const Je = k.offset, Qe = ge.getTextContentSize();
          if (ge.is(je) || E && Je !== 0 || !E && Je !== Qe) return void vr(ge, E, Je);
        }
        (function(Je, Qe) {
          const Ze = Je.anchor, dt = Je.focus, Xe = Ze.getNode(), Ar = dt.getNode();
          if (Xe === Ar && Ze.type === "text" && dt.type === "text") {
            const tn = Ze.offset, wr = dt.offset, Pn = tn < wr, ci = Pn ? tn : wr, gt = Pn ? wr : tn, St = gt - 1;
            ci !== St && function(Jr) {
              return !(Ds(Jr) || Sr(Jr));
            }(Xe.getTextContent().slice(ci, gt)) && (Qe ? dt.set(dt.key, St, dt.type) : Ze.set(Ze.key, St, Ze.type));
          }
        })(this, E);
      }
    }
    if (this.removeText(), E && !w && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const k = this.anchor.getNode();
      k.isEmpty() && ki(k.getParent()) && k.getPreviousSibling() === null && Cr(this, k);
    }
  }
  deleteLine(E) {
    this.isCollapsed() && this.modify("extend", E, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(E) : this.removeText();
  }
  deleteWord(E) {
    if (this.isCollapsed()) {
      const w = this.anchor, k = w.getNode();
      if (this.forwardDeletion(w, k, E)) return;
      this.modify("extend", E, "word");
    }
    this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function yr(T) {
  return T instanceof gr;
}
function mr(T) {
  const E = T.offset;
  if (T.type === "text") return E;
  const w = T.getNode();
  return E === w.getChildrenSize() ? w.getTextContent().length : 0;
}
function xr(T) {
  const E = T.getStartEndPoints();
  if (E === null) return [0, 0];
  const [w, k] = E;
  return w.type === "element" && k.type === "element" && w.key === k.key && w.offset === k.offset ? [0, 0] : [mr(w), mr(k)];
}
function Cr(T, E) {
  for (let w = E; w; w = w.getParent()) {
    if (xi(w)) {
      if (w.collapseAtStart(T)) return !0;
      if (fo(w)) break;
    }
    if (w.getPreviousSibling()) break;
  }
  return !1;
}
const Sr = (() => {
  try {
    const T = new RegExp("\\p{Emoji}", "u"), E = T.test.bind(T);
    if (E("❤️") && E("#️⃣") && E("👍")) return E;
  } catch {
  }
  return () => !1;
})();
function vr(T, E, w) {
  const k = T, ge = k.getTextContent().split(/(?=\s)/g), Be = ge.length;
  let We = 0, je = 0;
  for (let Qe = 0; Qe < Be; Qe++) {
    const Ze = Qe === Be - 1;
    if (je = We, We += ge[Qe].length, E && We === w || We > w || Ze) {
      ge.splice(Qe, 1), Ze && (je = void 0);
      break;
    }
  }
  const Je = ge.join("").trim();
  Je === "" ? k.remove() : (k.setTextContent(Je), k.select(je, je));
}
function Tr(T, E, w, k) {
  let ge, Be = E;
  if (To(T)) {
    let We = !1;
    const je = T.childNodes, Je = je.length, Qe = k._blockCursorElement;
    Be === Je && (We = !0, Be = Je - 1);
    let Ze = je[Be], dt = !1;
    if (Ze === Qe) Ze = je[Be + 1], dt = !0;
    else if (Qe !== null) {
      const Xe = Qe.parentNode;
      T === Xe && E > Array.prototype.indexOf.call(Xe.children, Qe) && Be--;
    }
    if (ge = Os(Ze), sr(ge)) Be = As(ge, We);
    else {
      let Xe = Os(T);
      if (Xe === null) return null;
      if (xi(Xe)) {
        const Ar = k.getElementByKey(Xe.getKey());
        Ar === null && t(214), [Xe, Be] = Xe.getDOMSlot(Ar).resolveChildIndex(Xe, Ar, T, E), xi(Xe) || t(215), We && Be >= Xe.getChildrenSize() && (Be = Math.max(0, Xe.getChildrenSize() - 1));
        let wr = Xe.getChildAtIndex(Be);
        if (xi(wr) && function(Pn, ci, gt) {
          const St = Pn.getParent();
          return gt === null || St === null || !St.canBeEmpty() || St !== gt.getNode();
        }(wr, 0, w)) {
          const Pn = We ? wr.getLastDescendant() : wr.getFirstDescendant();
          Pn === null ? Xe = wr : (wr = Pn, Xe = xi(wr) ? wr : wr.getParentOrThrow()), Be = 0;
        }
        sr(wr) ? (ge = wr, Xe = null, Be = As(wr, We)) : wr !== Xe && We && !dt && (xi(Xe) || t(216), Be = Math.min(Xe.getChildrenSize(), Be + 1));
      } else {
        const Ar = Xe.getIndexWithinParent();
        Be = E === 0 && vi(Xe) && Os(T) === Xe ? Ar : Ar + 1, Xe = Xe.getParentOrThrow();
      }
      if (xi(Xe)) return fr(Xe.__key, Be, "element");
    }
  } else ge = Os(T);
  return sr(ge) ? fr(ge.__key, Be, "text") : null;
}
function kr(T, E, w) {
  const k = T.offset, ge = T.getNode();
  if (k === 0) {
    const Be = ge.getPreviousSibling(), We = ge.getParent();
    if (E) {
      if ((w || !E) && Be === null && xi(We) && We.isInline()) {
        const je = We.getPreviousSibling();
        sr(je) && T.set(je.__key, je.getTextContent().length, "text");
      }
    } else xi(Be) && !w && Be.isInline() ? T.set(Be.__key, Be.getChildrenSize(), "element") : sr(Be) && T.set(Be.__key, Be.getTextContent().length, "text");
  } else if (k === ge.getTextContent().length) {
    const Be = ge.getNextSibling(), We = ge.getParent();
    if (E && xi(Be) && Be.isInline()) T.set(Be.__key, 0, "element");
    else if ((w || E) && Be === null && xi(We) && We.isInline() && !We.canInsertTextAfter()) {
      const je = We.getNextSibling();
      sr(je) && T.set(je.__key, 0, "text");
    }
  }
}
function Nr(T, E, w) {
  if (T.type === "text" && E.type === "text") {
    const k = T.isBefore(E), ge = T.is(E);
    kr(T, k, ge), kr(E, !k, ge), ge && E.set(T.key, T.offset, T.type);
    const Be = ni();
    if (Be.isComposing() && Be._compositionKey !== T.key && _r(w)) {
      const We = w.anchor, je = w.focus;
      T.set(We.key, We.offset, We.type, !0), E.set(je.key, je.offset, je.type, !0);
    }
  }
}
function br(T, E, w, k, ge, Be) {
  if (T === null || w === null || !ss(ge, T, w)) return null;
  const We = Tr(T, E, _r(Be) ? Be.anchor : null, ge);
  if (We === null) return null;
  const je = Tr(w, k, _r(Be) ? Be.focus : null, ge);
  if (je === null) return null;
  if (We.type === "element" && je.type === "element") {
    const Je = Os(T), Qe = Os(w);
    if (vi(Je) && vi(Qe)) return null;
  }
  return Nr(We, je, Be), [We, je];
}
function Er(T, E, w, k, ge, Be) {
  const We = ei(), je = new pr(fr(T, E, ge), fr(w, k, Be), 0, "");
  return je.dirty = !0, We._selection = je, je;
}
function Mr() {
  const T = fr("root", 0, "element"), E = fr("root", 0, "element");
  return new pr(T, E, 0, "");
}
function Or() {
  return new gr(/* @__PURE__ */ new Set());
}
function Dr(T, E, w, k) {
  const ge = w._window;
  if (ge === null) return null;
  const Be = k || ge.event, We = Be ? Be.type : void 0, je = We === "selectionchange", Je = !et$1 && (je || We === "beforeinput" || We === "compositionstart" || We === "compositionend" || We === "click" && Be && Be.detail === 3 || We === "drop" || We === void 0);
  let Qe, Ze, dt, Xe;
  if (_r(T) && !Je) return T.clone();
  if (E === null) return null;
  if (Qe = E.anchorNode, Ze = E.focusNode, dt = E.anchorOffset, Xe = E.focusOffset, je && _r(T) && !ss(w, Qe, Ze)) return T.clone();
  const Ar = br(Qe, dt, Ze, Xe, w, T);
  if (Ar === null) return null;
  const [tn, wr] = Ar;
  return new pr(tn, wr, _r(T) ? T.format : 0, _r(T) ? T.style : "");
}
function Pr() {
  return ei()._selection;
}
function Fr() {
  return ni()._editorState._selection;
}
function Lr(T, E, w, k = 1) {
  const ge = T.anchor, Be = T.focus, We = ge.getNode(), je = Be.getNode();
  if (!E.is(We) && !E.is(je)) return;
  const Je = E.__key;
  if (T.isCollapsed()) {
    const Qe = ge.offset;
    if (w <= Qe && k > 0 || w < Qe && k < 0) {
      const Ze = Math.max(0, Qe + k);
      ge.set(Je, Ze, "element"), Be.set(Je, Ze, "element"), Ir(T);
    }
  } else {
    const Qe = T.isBackward(), Ze = Qe ? Be : ge, dt = Ze.getNode(), Xe = Qe ? ge : Be, Ar = Xe.getNode();
    if (E.is(dt)) {
      const tn = Ze.offset;
      (w <= tn && k > 0 || w < tn && k < 0) && Ze.set(Je, Math.max(0, tn + k), "element");
    }
    if (E.is(Ar)) {
      const tn = Xe.offset;
      (w <= tn && k > 0 || w < tn && k < 0) && Xe.set(Je, Math.max(0, tn + k), "element");
    }
  }
  Ir(T);
}
function Ir(T) {
  const E = T.anchor, w = E.offset, k = T.focus, ge = k.offset, Be = E.getNode(), We = k.getNode();
  if (T.isCollapsed()) {
    if (!xi(Be)) return;
    const je = Be.getChildrenSize(), Je = w >= je, Qe = Je ? Be.getChildAtIndex(je - 1) : Be.getChildAtIndex(w);
    if (sr(Qe)) {
      let Ze = 0;
      Je && (Ze = Qe.getTextContentSize()), E.set(Qe.__key, Ze, "text"), k.set(Qe.__key, Ze, "text");
    }
  } else {
    if (xi(Be)) {
      const je = Be.getChildrenSize(), Je = w >= je, Qe = Je ? Be.getChildAtIndex(je - 1) : Be.getChildAtIndex(w);
      if (sr(Qe)) {
        let Ze = 0;
        Je && (Ze = Qe.getTextContentSize()), E.set(Qe.__key, Ze, "text");
      }
    }
    if (xi(We)) {
      const je = We.getChildrenSize(), Je = ge >= je, Qe = Je ? We.getChildAtIndex(je - 1) : We.getChildAtIndex(ge);
      if (sr(Qe)) {
        let Ze = 0;
        Je && (Ze = Qe.getTextContentSize()), k.set(Qe.__key, Ze, "text");
      }
    }
  }
}
function zr(T, E, w, k, ge) {
  let Be = null, We = 0, je = null;
  k !== null ? (Be = k.__key, sr(k) ? (We = k.getTextContentSize(), je = "text") : xi(k) && (We = k.getChildrenSize(), je = "element")) : ge !== null && (Be = ge.__key, sr(ge) ? je = "text" : xi(ge) && (je = "element")), Be !== null && je !== null ? T.set(Be, We, je) : (We = E.getIndexWithinParent(), We === -1 && (We = w.getChildrenSize()), T.set(w.__key, We, "element"));
}
function Kr(T, E, w, k, ge) {
  T.type === "text" ? T.set(w, T.offset + (E ? 0 : ge), "text") : T.offset > k.getIndexWithinParent() && T.set(T.key, T.offset - 1, "element");
}
function Rr(T, E, w, k, ge) {
  try {
    T.setBaseAndExtent(E, w, k, ge);
  } catch {
  }
}
function Br(T, E, w, k, ge, Be, We) {
  const je = k.anchorNode, Je = k.focusNode, Qe = k.anchorOffset, Ze = k.focusOffset, dt = document.activeElement;
  if (ge.has(Pi) && dt !== Be || dt !== null && is(dt)) return;
  if (!_r(E)) return void (T !== null && ss(w, je, Je) && k.removeAllRanges());
  const Xe = E.anchor, Ar = E.focus, tn = Xe.key, wr = Ar.key, Pn = to(w, tn), ci = to(w, wr), gt = Xe.offset, St = Ar.offset, Jr = E.format, Fi = E.style, Wr = E.isCollapsed();
  let Di = Pn, $i = ci, Oi = !1;
  if (Xe.type === "text") {
    Di = hs(Pn);
    const Us = Xe.getNode();
    Oi = Us.getFormat() !== Jr || Us.getStyle() !== Fi;
  } else _r(T) && T.anchor.type === "text" && (Oi = !0);
  var Mi, Ui, Vi, Zi, Ji;
  if (Ar.type === "text" && ($i = hs(ci)), Di !== null && $i !== null && (Wr && (T === null || Oi || _r(T) && (T.format !== Jr || T.style !== Fi)) && (Mi = Jr, Ui = Fi, Vi = gt, Zi = tn, Ji = performance.now(), Cn = [Mi, Ui, Vi, Zi, Ji]), Qe !== gt || Ze !== St || je !== Di || Je !== $i || k.type === "Range" && Wr || (dt !== null && Be.contains(dt) || Be.focus({ preventScroll: !0 }), Xe.type === "element"))) {
    if (Rr(k, Di, gt, $i, St), !ge.has(Li) && E.isCollapsed() && Be !== null && Be === document.activeElement) {
      const Us = _r(E) && E.anchor.type === "element" ? Di.childNodes[gt] || null : k.rangeCount > 0 ? k.getRangeAt(0) : null;
      if (Us !== null) {
        let ji;
        if (Us instanceof Text) {
          const _s = document.createRange();
          _s.selectNode(Us), ji = _s.getBoundingClientRect();
        } else ji = Us.getBoundingClientRect();
        (function(_s, Hs, ro) {
          const Go = no(ro), ra = lo(Go);
          if (Go === null || ra === null) return;
          let { top: ho, bottom: oa } = Hs, So = 0, ea = 0, Bo = ro;
          for (; Bo !== null; ) {
            const na = Bo === Go.body;
            if (na) So = 0, ea = co(_s).innerHeight;
            else {
              const ia = Bo.getBoundingClientRect();
              So = ia.top, ea = ia.bottom;
            }
            let ta = 0;
            if (ho < So ? ta = -(So - ho) : oa > ea && (ta = oa - ea), ta !== 0) if (na) ra.scrollBy(0, ta);
            else {
              const ia = Bo.scrollTop;
              Bo.scrollTop += ta;
              const sa = Bo.scrollTop - ia;
              ho -= sa, oa -= sa;
            }
            if (na) break;
            Bo = eo(Bo);
          }
        })(w, ji, Be);
      }
    }
    hn$1 = !0;
  }
}
function $r(T) {
  let E = T;
  T.isCollapsed() || E.removeText();
  const w = Pr();
  _r(w) && (E = w), _r(E) || t(161);
  const k = E.anchor;
  let ge = k.getNode(), Be = k.offset;
  for (; !Eo(ge); ) {
    const We = ge;
    if ([ge, Be] = jr(ge, Be), We.is(ge)) break;
  }
  return Be;
}
function jr(T, E) {
  const w = T.getParent();
  if (!w) {
    const ge = Bi();
    return ws().append(ge), ge.select(), [ws(), 0];
  }
  if (sr(T)) {
    const ge = T.splitText(E);
    if (ge.length === 0) return [w, T.getIndexWithinParent()];
    const Be = E === 0 ? 0 : 1;
    return [w, ge[0].getIndexWithinParent() + Be];
  }
  if (!xi(T) || E === 0) return [w, T.getIndexWithinParent()];
  const k = T.getChildAtIndex(E);
  if (k) {
    const ge = new pr(fr(T.__key, E, "element"), fr(T.__key, E, "element"), 0, ""), Be = T.insertNewAfter(ge);
    Be && Be.append(k, ...k.getNextSiblings());
  }
  return [w, T.getIndexWithinParent() + 1];
}
function Ur(T, E, w, k, ge = "decorators-and-blocks") {
  if (E === "move" && k === "character" && !T.isCollapsed()) {
    const [Ze, dt] = w === T.isBackward() ? [T.focus, T.anchor] : [T.anchor, T.focus];
    return dt.set(Ze.key, Ze.offset, Ze.type), !0;
  }
  const Be = Sl(T.focus, w ? "previous" : "next"), We = k === "lineboundary", je = E === "move";
  let Je = Be, Qe = ge === "decorators-and-blocks";
  if (!Al(Je)) {
    for (const Ze of Je) {
      Qe = !1;
      const { origin: dt } = Ze;
      if (!vi(dt) || dt.isIsolated() || (Je = Ze, !We || !dt.isInline())) break;
    }
    if (Qe) for (const Ze of dl(Be).iterNodeCarets(E === "extend" ? "shadowRoot" : "root")) {
      if (Qo(Ze)) Ze.origin.isInline() || (Je = Ze);
      else {
        if (xi(Ze.origin)) continue;
        vi(Ze.origin) && !Ze.origin.isInline() && (Je = Ze);
      }
      break;
    }
  }
  if (Je === Be) return !1;
  if (je && !We && vi(Je.origin) && Je.origin.isKeyboardSelectable()) {
    const Ze = Or();
    return Ze.add(Je.origin.getKey()), Ms(Ze), !0;
  }
  return Je = Ol(Je), je && vl(T.anchor, Je), vl(T.focus, Je), Qe || !We;
}
let Vr = null, Yr = null, Hr = !1, qr = !1, Gr = 0;
const Xr = { characterData: !0, childList: !0, subtree: !0 };
function Qr() {
  return Hr || Vr !== null && Vr._readOnly;
}
function Zr() {
  Hr && t(13);
}
function ti() {
  Gr > 99 && t(14);
}
function ei() {
  return Vr === null && t(195, ri()), Vr;
}
function ni() {
  return Yr === null && t(196, ri()), Yr;
}
function ri() {
  let T = 0;
  const E = /* @__PURE__ */ new Set(), w = qi.version;
  if (typeof window < "u") for (const ge of document.querySelectorAll("[contenteditable]")) {
    const Be = cs(ge);
    if (os(Be)) T++;
    else if (Be) {
      let We = String(Be.constructor.version || "<0.17.1");
      We === w && (We += " (separately built, likely a bundler configuration issue)"), E.add(We);
    }
  }
  let k = ` Detected on the page: ${T} compatible editor(s) with version ${w}`;
  return E.size && (k += ` and incompatible editors with versions ${Array.from(E).join(", ")}`), k;
}
function ii() {
  return Yr;
}
function si(T, E, w) {
  const k = E.__type, ge = ts(T, k);
  let Be = w.get(k);
  Be === void 0 && (Be = Array.from(ge.transforms), w.set(k, Be));
  const We = Be.length;
  for (let je = 0; je < We && (Be[je](E), E.isAttached()); je++) ;
}
function oi(T, E) {
  return T !== void 0 && T.__key !== E && T.isAttached();
}
function li(T, E) {
  if (!E) return;
  const w = T._updateTags;
  let k = E;
  Array.isArray(E) || (k = [E]);
  for (const ge of k) w.add(ge);
}
function ai(T, E) {
  const w = T.type, k = E.get(w);
  k === void 0 && t(17, w);
  const ge = k.klass;
  T.type !== ge.getType() && t(18, ge.name);
  const Be = ge.importJSON(T), We = T.children;
  if (xi(Be) && Array.isArray(We)) for (let je = 0; je < We.length; je++) {
    const Je = ai(We[je], E);
    Be.append(Je);
  }
  return Be;
}
function ui(T, E, w) {
  const k = Vr, ge = Hr, Be = Yr;
  Vr = E, Hr = !0, Yr = T;
  try {
    return w();
  } finally {
    Vr = k, Hr = ge, Yr = Be;
  }
}
function fi(T, E) {
  const w = T._pendingEditorState, k = T._rootElement, ge = T._headless || k === null;
  if (w === null) return;
  const Be = T._editorState, We = Be._selection, je = w._selection, Je = T._dirtyType !== y, Qe = Vr, Ze = Hr, dt = Yr, Xe = T._updating, Ar = T._observer;
  let tn = null;
  if (T._pendingEditorState = null, T._editorState = w, !ge && Je && Ar !== null) {
    Yr = T, Vr = w, Hr = !1, T._updating = !0;
    try {
      const Wr = T._dirtyType, Di = T._dirtyElements, $i = T._dirtyLeaves;
      Ar.disconnect(), tn = ue(Be, w, T, Wr, Di, $i);
    } catch (Wr) {
      if (Wr instanceof Error && T._onError(Wr), qr) throw Wr;
      return Yi(T, null, k, w), ut$1(T), T._dirtyType = x, qr = !0, fi(T, Be), void (qr = !1);
    } finally {
      Ar.observe(k, Xr), T._updating = Xe, Vr = Qe, Hr = Ze, Yr = dt;
    }
  }
  w._readOnly || (w._readOnly = !0);
  const wr = T._dirtyLeaves, Pn = T._dirtyElements, ci = T._normalizedNodes, gt = T._updateTags, St = T._deferred;
  Je && (T._dirtyType = y, T._cloneNotNeeded.clear(), T._dirtyLeaves = /* @__PURE__ */ new Set(), T._dirtyElements = /* @__PURE__ */ new Map(), T._normalizedNodes = /* @__PURE__ */ new Set(), T._updateTags = /* @__PURE__ */ new Set()), function(Wr, Di) {
    const $i = Wr._decorators;
    let Oi = Wr._pendingDecorators || $i;
    const Mi = Di._nodeMap;
    let Ui;
    for (Ui in Oi) Mi.has(Ui) || (Oi === $i && (Oi = Ns(Wr)), delete Oi[Ui]);
  }(T, w);
  const Jr = ge ? null : xo(co(T));
  if (T._editable && Jr !== null && (Je || je === null || je.dirty) && k !== null && !gt.has(Ii)) {
    Yr = T, Vr = w;
    try {
      if (Ar !== null && Ar.disconnect(), Je || je === null || je.dirty) {
        const Wr = T._blockCursorElement;
        Wr !== null && mo(Wr, T, k), Br(We, je, T, Jr, gt, k);
      }
      (function(Wr, Di, $i) {
        let Oi = Wr._blockCursorElement;
        if (_r($i) && $i.isCollapsed() && $i.anchor.type === "element" && Di.contains(document.activeElement)) {
          const Mi = $i.anchor, Ui = Mi.getNode(), Vi = Mi.offset;
          let Zi = !1, Ji = null;
          if (Vi === Ui.getChildrenSize())
            yo(Ui.getChildAtIndex(Vi - 1)) && (Zi = !0);
          else {
            const Us = Ui.getChildAtIndex(Vi);
            if (Us !== null && yo(Us)) {
              const ji = Us.getPreviousSibling();
              (ji === null || yo(ji)) && (Zi = !0, Ji = Wr.getElementByKey(Us.__key));
            }
          }
          if (Zi) {
            const Us = Wr.getElementByKey(Ui.__key);
            return Oi === null && (Wr._blockCursorElement = Oi = function(ji) {
              const _s = ji.theme, Hs = document.createElement("div");
              Hs.contentEditable = "false", Hs.setAttribute("data-lexical-cursor", "true");
              let ro = _s.blockCursor;
              if (ro !== void 0) {
                if (typeof ro == "string") {
                  const Go = d$1(ro);
                  ro = _s.blockCursor = Go;
                }
                ro !== void 0 && Hs.classList.add(...ro);
              }
              return Hs;
            }(Wr._config)), Di.style.caretColor = "transparent", void (Ji === null ? Us.appendChild(Oi) : Us.insertBefore(Oi, Ji));
          }
        }
        Oi !== null && mo(Oi, Wr, Di);
      })(T, k, je);
    } finally {
      Ar !== null && Ar.observe(k, Xr), Yr = dt, Vr = Qe;
    }
  }
  tn !== null && function(Wr, Di, $i, Oi, Mi) {
    const Ui = Array.from(Wr._listeners.mutation), Vi = Ui.length;
    for (let Zi = 0; Zi < Vi; Zi++) {
      const [Ji, Us] = Ui[Zi];
      for (const ji of Us) {
        const _s = Di.get(ji);
        _s !== void 0 && Ji(_s, { dirtyLeaves: Oi, prevEditorState: Mi, updateTags: $i });
      }
    }
  }(T, tn, gt, wr, Be), _r(je) || je === null || We !== null && We.is(je) || T.dispatchCommand(he, void 0);
  const Fi = T._pendingDecorators;
  Fi !== null && (T._decorators = Fi, T._pendingDecorators = null, di("decorator", T, !0, Fi)), function(Wr, Di, $i) {
    const Oi = bs(Di), Mi = bs($i);
    Oi !== Mi && di("textcontent", Wr, !0, Mi);
  }(T, E || Be, w), di("update", T, !0, { dirtyElements: Pn, dirtyLeaves: wr, editorState: w, mutatedNodes: tn, normalizedNodes: ci, prevEditorState: E || Be, tags: gt }), function(Wr, Di) {
    if (Wr._deferred = [], Di.length !== 0) {
      const $i = Wr._updating;
      Wr._updating = !0;
      try {
        for (let Oi = 0; Oi < Di.length; Oi++) Di[Oi]();
      } finally {
        Wr._updating = $i;
      }
    }
  }(T, St), function(Wr) {
    const Di = Wr._updates;
    if (Di.length !== 0) {
      const $i = Di.shift();
      if ($i) {
        const [Oi, Mi] = $i;
        gi(Wr, Oi, Mi);
      }
    }
  }(T);
}
function di(T, E, w, ...k) {
  const ge = E._updating;
  E._updating = w;
  try {
    const Be = Array.from(E._listeners[T]);
    for (let We = 0; We < Be.length; We++) Be[We].apply(null, k);
  } finally {
    E._updating = ge;
  }
}
function hi(T, E) {
  const w = T._updates;
  let k = E || !1;
  for (; w.length !== 0; ) {
    const ge = w.shift();
    if (ge) {
      const [Be, We] = ge;
      let je;
      if (We !== void 0) {
        if (je = We.onUpdate, We.skipTransforms && (k = !0), We.discrete) {
          const Je = T._pendingEditorState;
          Je === null && t(191), Je._flushSync = !0;
        }
        je && T._deferred.push(je), li(T, We.tag);
      }
      Be();
    }
  }
  return k;
}
function gi(T, E, w) {
  const k = T._updateTags;
  let ge, Be = !1, We = !1;
  w !== void 0 && (ge = w.onUpdate, li(T, w.tag), Be = w.skipTransforms || !1, We = w.discrete || !1), ge && T._deferred.push(ge);
  const je = T._editorState;
  let Je = T._pendingEditorState, Qe = !1;
  (Je === null || Je._readOnly) && (Je = T._pendingEditorState = Ni(Je || je), Qe = !0), Je._flushSync = We;
  const Ze = Vr, dt = Hr, Xe = Yr, Ar = T._updating;
  Vr = Je, Hr = !1, T._updating = !0, Yr = T;
  const tn = T._headless || T.getRootElement() === null;
  Xi(null);
  try {
    Qe && (tn ? je._selection !== null && (Je._selection = je._selection.clone()) : Je._selection = function(gt, St) {
      const Jr = gt.getEditorState()._selection, Fi = xo(co(gt));
      return _r(Jr) || Jr == null ? Dr(Jr, Fi, gt, St) : Jr.clone();
    }(T, w && w.event || null));
    const Pn = T._compositionKey;
    E(), Be = hi(T, Be), function(gt, St) {
      const Jr = St.getEditorState()._selection, Fi = gt._selection;
      if (_r(Fi)) {
        const Wr = Fi.anchor, Di = Fi.focus;
        let $i;
        if (Wr.type === "text" && ($i = Wr.getNode(), $i.selectionTransform(Jr, Fi)), Di.type === "text") {
          const Oi = Di.getNode();
          $i !== Oi && Oi.selectionTransform(Jr, Fi);
        }
      }
    }(Je, T), T._dirtyType !== y && (Be ? function(gt, St) {
      const Jr = St._dirtyLeaves, Fi = gt._nodeMap;
      for (const Wr of Jr) {
        const Di = Fi.get(Wr);
        sr(Di) && Di.isAttached() && Di.isSimpleText() && !Di.isUnmergeable() && wt(Di);
      }
    }(Je, T) : function(gt, St) {
      const Jr = St._dirtyLeaves, Fi = St._dirtyElements, Wr = gt._nodeMap, Di = Cs(), $i = /* @__PURE__ */ new Map();
      let Oi = Jr, Mi = Oi.size, Ui = Fi, Vi = Ui.size;
      for (; Mi > 0 || Vi > 0; ) {
        if (Mi > 0) {
          St._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const Zi of Oi) {
            const Ji = Wr.get(Zi);
            sr(Ji) && Ji.isAttached() && Ji.isSimpleText() && !Ji.isUnmergeable() && wt(Ji), Ji !== void 0 && oi(Ji, Di) && si(St, Ji, $i), Jr.add(Zi);
          }
          if (Oi = St._dirtyLeaves, Mi = Oi.size, Mi > 0) {
            Gr++;
            continue;
          }
        }
        St._dirtyLeaves = /* @__PURE__ */ new Set(), St._dirtyElements = /* @__PURE__ */ new Map(), Ui.delete("root") && Ui.set("root", !0);
        for (const Zi of Ui) {
          const Ji = Zi[0], Us = Zi[1];
          if (Fi.set(Ji, Us), !Us) continue;
          const ji = Wr.get(Ji);
          ji !== void 0 && oi(ji, Di) && si(St, ji, $i);
        }
        Oi = St._dirtyLeaves, Mi = Oi.size, Ui = St._dirtyElements, Vi = Ui.size, Gr++;
      }
      St._dirtyLeaves = Jr, St._dirtyElements = Fi;
    }(Je, T), hi(T), function(gt, St, Jr, Fi) {
      const Wr = gt._nodeMap, Di = St._nodeMap, $i = [];
      for (const [Oi] of Fi) {
        const Mi = Di.get(Oi);
        Mi !== void 0 && (Mi.isAttached() || (xi(Mi) && Z$1(Mi, Oi, Wr, Di, $i, Fi), Wr.has(Oi) || Fi.delete(Oi), $i.push(Oi)));
      }
      for (const Oi of $i) Di.delete(Oi);
      for (const Oi of Jr) {
        const Mi = Di.get(Oi);
        Mi === void 0 || Mi.isAttached() || (Wr.has(Oi) || Jr.delete(Oi), Di.delete(Oi));
      }
    }(je, Je, T._dirtyLeaves, T._dirtyElements)), Pn !== T._compositionKey && (Je._flushSync = !0);
    const ci = Je._selection;
    if (_r(ci)) {
      const gt = Je._nodeMap, St = ci.anchor.key, Jr = ci.focus.key;
      gt.get(St) !== void 0 && gt.get(Jr) !== void 0 || t(19);
    } else yr(ci) && ci._nodes.size === 0 && (Je._selection = null);
  } catch (Pn) {
    return Pn instanceof Error && T._onError(Pn), T._pendingEditorState = je, T._dirtyType = x, T._cloneNotNeeded.clear(), T._dirtyLeaves = /* @__PURE__ */ new Set(), T._dirtyElements.clear(), void fi(T);
  } finally {
    Vr = Ze, Hr = dt, Yr = Xe, T._updating = Ar, Gr = 0;
  }
  T._dirtyType !== y || T._deferred.length > 0 || function(Pn, ci) {
    const gt = ci.getEditorState()._selection, St = Pn._selection;
    if (St !== null) {
      if (St.dirty || !St.is(gt)) return !0;
    } else if (gt !== null) return !0;
    return !1;
  }(Je, T) ? Je._flushSync ? (Je._flushSync = !1, fi(T)) : Qe && ns(() => {
    fi(T);
  }) : (Je._flushSync = !1, Qe && (k.clear(), T._deferred = [], T._pendingEditorState = null));
}
function _i(T, E, w) {
  Yr === T && w === void 0 ? E() : gi(T, E, w);
}
class pi {
  constructor(E, w, k) {
    this.element = E, this.before = w || null, this.after = k || null;
  }
  withBefore(E) {
    return new pi(this.element, E, this.after);
  }
  withAfter(E) {
    return new pi(this.element, this.before, E);
  }
  withElement(E) {
    return this.element === E ? this : new pi(E, this.before, this.after);
  }
  insertChild(E) {
    const w = this.before || this.getManagedLineBreak();
    return w !== null && w.parentElement !== this.element && t(222), this.element.insertBefore(E, w), this;
  }
  removeChild(E) {
    return E.parentElement !== this.element && t(223), this.element.removeChild(E), this;
  }
  replaceChild(E, w) {
    return w.parentElement !== this.element && t(224), this.element.replaceChild(E, w), this;
  }
  getFirstChild() {
    const E = this.after ? this.after.nextSibling : this.element.firstChild;
    return E === this.before || E === this.getManagedLineBreak() ? null : E;
  }
  getManagedLineBreak() {
    return this.element.__lexicalLineBreak || null;
  }
  setManagedLineBreak(E) {
    if (E === null) this.removeManagedLineBreak();
    else {
      const w = E === "decorator" && (l$1 || o);
      this.insertManagedLineBreak(w);
    }
  }
  removeManagedLineBreak() {
    const E = this.getManagedLineBreak();
    if (E) {
      const w = this.element, k = E.nodeName === "IMG" ? E.nextSibling : null;
      k && w.removeChild(k), w.removeChild(E), w.__lexicalLineBreak = void 0;
    }
  }
  insertManagedLineBreak(E) {
    const w = this.getManagedLineBreak();
    if (w) {
      if (E === (w.nodeName === "IMG")) return;
      this.removeManagedLineBreak();
    }
    const k = this.element, ge = this.before, Be = document.createElement("br");
    if (k.insertBefore(Be, ge), E) {
      const We = document.createElement("img");
      We.setAttribute("data-lexical-linebreak", "true"), We.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", We.alt = "", k.insertBefore(We, Be), k.__lexicalLineBreak = We;
    } else k.__lexicalLineBreak = Be;
  }
  getFirstChildOffset() {
    let E = 0;
    for (let w = this.after; w !== null; w = w.previousSibling) E++;
    return E;
  }
  resolveChildIndex(E, w, k, ge) {
    if (k === this.element) {
      const Je = this.getFirstChildOffset();
      return [E, Math.min(Je + E.getChildrenSize(), Math.max(Je, ge))];
    }
    const Be = yi(w, k);
    Be.push(ge);
    const We = yi(w, this.element);
    let je = E.getIndexWithinParent();
    for (let Je = 0; Je < We.length; Je++) {
      const Qe = Be[Je], Ze = We[Je];
      if (Qe === void 0 || Qe < Ze) break;
      if (Qe > Ze) {
        je += 1;
        break;
      }
    }
    return [E.getParentOrThrow(), je];
  }
}
function yi(T, E) {
  const w = [];
  let k = E;
  for (; k !== T && k !== null; k = k.parentNode) {
    let ge = 0;
    for (let Be = k.previousSibling; Be !== null; Be = Be.previousSibling) ge++;
    w.push(ge);
  }
  return k !== T && t(225), w.reverse();
}
class mi extends zn {
  constructor(E) {
    super(E), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
  }
  afterCloneFrom(E) {
    super.afterCloneFrom(E), this.__key === E.__key && (this.__first = E.__first, this.__last = E.__last, this.__size = E.__size), this.__indent = E.__indent, this.__format = E.__format, this.__style = E.__style, this.__dir = E.__dir, this.__textFormat = E.__textFormat, this.__textStyle = E.__textStyle;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const E = this.getFormat();
    return H$1[E] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const E = [];
    let w = this.getFirstChild();
    for (; w !== null; ) E.push(w), w = w.getNextSibling();
    return E;
  }
  getChildrenKeys() {
    const E = [];
    let w = this.getFirstChild();
    for (; w !== null; ) E.push(w.__key), w = w.getNextSibling();
    return E;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    const E = ni()._dirtyElements;
    return E !== null && E.has(this.__key);
  }
  isLastChild() {
    const E = this.getLatest(), w = this.getParentOrThrow().getLastChild();
    return w !== null && w.is(E);
  }
  getAllTextNodes() {
    const E = [];
    let w = this.getFirstChild();
    for (; w !== null; ) {
      if (sr(w) && E.push(w), xi(w)) {
        const k = w.getAllTextNodes();
        E.push(...k);
      }
      w = w.getNextSibling();
    }
    return E;
  }
  getFirstDescendant() {
    let E = this.getFirstChild();
    for (; xi(E); ) {
      const w = E.getFirstChild();
      if (w === null) break;
      E = w;
    }
    return E;
  }
  getLastDescendant() {
    let E = this.getLastChild();
    for (; xi(E); ) {
      const w = E.getLastChild();
      if (w === null) break;
      E = w;
    }
    return E;
  }
  getDescendantByIndex(E) {
    const w = this.getChildren(), k = w.length;
    if (E >= k) {
      const Be = w[k - 1];
      return xi(Be) && Be.getLastDescendant() || Be || null;
    }
    const ge = w[E];
    return xi(ge) && ge.getFirstDescendant() || ge || null;
  }
  getFirstChild() {
    const E = this.getLatest().__first;
    return E === null ? null : Ss(E);
  }
  getFirstChildOrThrow() {
    const E = this.getFirstChild();
    return E === null && t(45, this.__key), E;
  }
  getLastChild() {
    const E = this.getLatest().__last;
    return E === null ? null : Ss(E);
  }
  getLastChildOrThrow() {
    const E = this.getLastChild();
    return E === null && t(96, this.__key), E;
  }
  getChildAtIndex(E) {
    const w = this.getChildrenSize();
    let k, ge;
    if (E < w / 2) {
      for (k = this.getFirstChild(), ge = 0; k !== null && ge <= E; ) {
        if (ge === E) return k;
        k = k.getNextSibling(), ge++;
      }
      return null;
    }
    for (k = this.getLastChild(), ge = w - 1; k !== null && ge >= E; ) {
      if (ge === E) return k;
      k = k.getPreviousSibling(), ge--;
    }
    return null;
  }
  getTextContent() {
    let E = "";
    const w = this.getChildren(), k = w.length;
    for (let ge = 0; ge < k; ge++) {
      const Be = w[ge];
      E += Be.getTextContent(), xi(Be) && ge !== k - 1 && !Be.isInline() && (E += R$2);
    }
    return E;
  }
  getTextContentSize() {
    let E = 0;
    const w = this.getChildren(), k = w.length;
    for (let ge = 0; ge < k; ge++) {
      const Be = w[ge];
      E += Be.getTextContentSize(), xi(Be) && ge !== k - 1 && !Be.isInline() && (E += R$2.length);
    }
    return E;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  hasFormat(E) {
    if (E !== "") {
      const w = Y$1[E];
      return !!(this.getFormat() & w);
    }
    return !1;
  }
  hasTextFormat(E) {
    const w = U$2[E];
    return !!(this.getTextFormat() & w);
  }
  getFormatFlags(E, w) {
    return gs(this.getLatest().__textFormat, E, w);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(E, w) {
    Zr();
    const k = Pr();
    let ge = E, Be = w;
    const We = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (E === 0 && w === 0) {
        const Je = this.getFirstChild();
        if (sr(Je) || xi(Je)) return Je.select(0, 0);
      } else if (!(E !== void 0 && E !== We || w !== void 0 && w !== We)) {
        const Je = this.getLastChild();
        if (sr(Je) || xi(Je)) return Je.select();
      }
    }
    ge === void 0 && (ge = We), Be === void 0 && (Be = We);
    const je = this.__key;
    return _r(k) ? (k.anchor.set(je, ge, "element"), k.focus.set(je, Be, "element"), k.dirty = !0, k) : Er(je, ge, je, Be, "element", "element");
  }
  selectStart() {
    const E = this.getFirstDescendant();
    return E ? E.selectStart() : this.select();
  }
  selectEnd() {
    const E = this.getLastDescendant();
    return E ? E.selectEnd() : this.select();
  }
  clear() {
    const E = this.getWritable();
    return this.getChildren().forEach((w) => w.remove()), E;
  }
  append(...E) {
    return this.splice(this.getChildrenSize(), 0, E);
  }
  setDirection(E) {
    const w = this.getWritable();
    return w.__dir = E, w;
  }
  setFormat(E) {
    return this.getWritable().__format = E !== "" ? Y$1[E] : 0, this;
  }
  setStyle(E) {
    return this.getWritable().__style = E || "", this;
  }
  setTextFormat(E) {
    const w = this.getWritable();
    return w.__textFormat = E, w;
  }
  setTextStyle(E) {
    const w = this.getWritable();
    return w.__textStyle = E, w;
  }
  setIndent(E) {
    return this.getWritable().__indent = E, this;
  }
  splice(E, w, k) {
    const ge = k.length, Be = this.getChildrenSize(), We = this.getWritable();
    E + w <= Be || t(226, String(E), String(w), String(Be));
    const je = We.__key, Je = [], Qe = [], Ze = this.getChildAtIndex(E + w);
    let dt = null, Xe = Be - w + ge;
    if (E !== 0) if (E === Be) dt = this.getLastChild();
    else {
      const tn = this.getChildAtIndex(E);
      tn !== null && (dt = tn.getPreviousSibling());
    }
    if (w > 0) {
      let tn = dt === null ? this.getFirstChild() : dt.getNextSibling();
      for (let wr = 0; wr < w; wr++) {
        tn === null && t(100);
        const Pn = tn.getNextSibling(), ci = tn.__key;
        ys(tn.getWritable()), Qe.push(ci), tn = Pn;
      }
    }
    let Ar = dt;
    for (let tn = 0; tn < ge; tn++) {
      const wr = k[tn];
      Ar !== null && wr.is(Ar) && (dt = Ar = Ar.getPreviousSibling());
      const Pn = wr.getWritable();
      Pn.__parent === je && Xe--, ys(Pn);
      const ci = wr.__key;
      if (Ar === null) We.__first = ci, Pn.__prev = null;
      else {
        const gt = Ar.getWritable();
        gt.__next = ci, Pn.__prev = gt.__key;
      }
      wr.__key === je && t(76), Pn.__parent = je, Je.push(ci), Ar = wr;
    }
    if (E + w === Be)
      Ar !== null && (Ar.getWritable().__next = null, We.__last = Ar.__key);
    else if (Ze !== null) {
      const tn = Ze.getWritable();
      if (Ar !== null) {
        const wr = Ar.getWritable();
        tn.__prev = Ar.__key, wr.__next = Ze.__key;
      } else tn.__prev = null;
    }
    if (We.__size = Xe, Qe.length) {
      const tn = Pr();
      if (_r(tn)) {
        const wr = new Set(Qe), Pn = new Set(Je), { anchor: ci, focus: gt } = tn;
        Ci(ci, wr, Pn) && zr(ci, ci.getNode(), this, dt, Ze), Ci(gt, wr, Pn) && zr(gt, gt.getNode(), this, dt, Ze), Xe !== 0 || this.canBeEmpty() || fo(this) || this.remove();
      }
    }
    return We;
  }
  getDOMSlot(E) {
    return new pi(E);
  }
  exportDOM(E) {
    const { element: w } = super.exportDOM(E);
    if (To(w)) {
      const k = this.getIndent();
      k > 0 && (w.style.paddingInlineStart = 40 * k + "px");
      const ge = this.getDirection();
      ge && (w.dir = ge);
    }
    return { element: w };
  }
  exportJSON() {
    const E = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, w = this.getTextFormat(), k = this.getTextStyle();
    return w !== 0 && (E.textFormat = w), k !== "" && (E.textStyle = k), E;
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setFormat(E.format).setIndent(E.indent).setDirection(E.direction).setTextFormat(E.textFormat || 0).setTextStyle(E.textStyle || "");
  }
  insertNewAfter(E, w) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(E) {
    return !1;
  }
  excludeFromCopy(E) {
    return !1;
  }
  canReplaceWith(E) {
    return !0;
  }
  canInsertAfter(E) {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith(E) {
    return !1;
  }
  extractWithChild(E, w, k) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  reconcileObservedMutation(E, w) {
    const k = this.getDOMSlot(E);
    let ge = k.getFirstChild();
    for (let Be = this.getFirstChild(); Be; Be = Be.getNextSibling()) {
      const We = w.getElementByKey(Be.getKey());
      We !== null && (ge == null ? (k.insertChild(We), ge = We) : ge !== We && k.replaceChild(We, ge), ge = ge.nextSibling);
    }
  }
}
function xi(T) {
  return T instanceof mi;
}
function Ci(T, E, w) {
  let k = T.getNode();
  for (; k; ) {
    const ge = k.__key;
    if (E.has(ge) && !w.has(ge)) return !0;
    k = k.getParent();
  }
  return !1;
}
class Si extends zn {
  decorate(E, w) {
    t(47);
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
function vi(T) {
  return T instanceof Si;
}
class Ti extends mi {
  static getType() {
    return "root";
  }
  static clone() {
    return new Ti();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    t(51);
  }
  getTextContent() {
    const E = this.__cachedText;
    return !Qr() && ni()._dirtyType !== y || E === null ? super.getTextContent() : E;
  }
  remove() {
    t(52);
  }
  replace(E) {
    t(53);
  }
  insertBefore(E) {
    t(54);
  }
  insertAfter(E) {
    t(55);
  }
  updateDOM(E, w) {
    return !1;
  }
  splice(E, w, k) {
    for (const ge of k) xi(ge) || vi(ge) || t(282);
    return super.splice(E, w, k);
  }
  static importJSON(E) {
    return ws().updateFromJSON(E);
  }
  collapseAtStart() {
    return !0;
  }
}
function ki(T) {
  return T instanceof Ti;
}
function Ni(T) {
  return new Ei(new Map(T._nodeMap));
}
function bi() {
  return new Ei(/* @__PURE__ */ new Map([["root", new Ti()]]));
}
function wi(T) {
  const E = T.exportJSON(), w = T.constructor;
  if (E.type !== w.getType() && t(130, w.name), xi(T)) {
    const k = E.children;
    Array.isArray(k) || t(59, w.name);
    const ge = T.getChildren();
    for (let Be = 0; Be < ge.length; Be++) {
      const We = wi(ge[Be]);
      k.push(We);
    }
  }
  return E;
}
class Ei {
  constructor(E, w) {
    this._nodeMap = E, this._selection = w || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(E, w) {
    return ui(w && w.editor || null, this, E);
  }
  clone(E) {
    const w = new Ei(this._nodeMap, E === void 0 ? this._selection : E);
    return w._readOnly = !0, w;
  }
  toJSON() {
    return ui(null, this, () => ({ root: wi(ws()) }));
  }
}
const Ai = "history-merge", Pi = "collaboration", Li = "skip-scroll-into-view", Ii = "skip-dom-selection";
class zi extends mi {
  static getType() {
    return "artificial";
  }
  createDOM(E) {
    return document.createElement("div");
  }
}
class Ki extends mi {
  static getType() {
    return "paragraph";
  }
  static clone(E) {
    return new Ki(E.__key);
  }
  createDOM(E) {
    const w = document.createElement("p"), k = Vs(E.theme, "paragraph");
    return k !== void 0 && w.classList.add(...k), w;
  }
  updateDOM(E, w, k) {
    return !1;
  }
  static importDOM() {
    return { p: (E) => ({ conversion: Ri, priority: 0 }) };
  }
  exportDOM(E) {
    const { element: w } = super.exportDOM(E);
    if (To(w)) {
      this.isEmpty() && w.append(document.createElement("br"));
      const k = this.getFormatType();
      k && (w.style.textAlign = k);
    }
    return { element: w };
  }
  static importJSON(E) {
    return Bi().updateFromJSON(E);
  }
  exportJSON() {
    return { ...super.exportJSON(), textFormat: this.getTextFormat(), textStyle: this.getTextStyle() };
  }
  insertNewAfter(E, w) {
    const k = Bi();
    k.setTextFormat(E.format), k.setTextStyle(E.style);
    const ge = this.getDirection();
    return k.setDirection(ge), k.setFormat(this.getFormatType()), k.setStyle(this.getStyle()), this.insertAfter(k, w), k;
  }
  collapseAtStart() {
    const E = this.getChildren();
    if (E.length === 0 || sr(E[0]) && E[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function Ri(T) {
  const E = Bi();
  return T.style && (E.setFormat(T.style.textAlign), Lo(T, E)), { node: E };
}
function Bi() {
  return go(new Ki());
}
function Wi(T) {
  return T instanceof Ki;
}
function Yi(T, E, w, k) {
  const ge = T._keyToDOMMap;
  ge.clear(), T._editorState = bi(), T._pendingEditorState = k, T._compositionKey = null, T._dirtyType = y, T._cloneNotNeeded.clear(), T._dirtyLeaves = /* @__PURE__ */ new Set(), T._dirtyElements.clear(), T._normalizedNodes = /* @__PURE__ */ new Set(), T._updateTags = /* @__PURE__ */ new Set(), T._updates = [], T._blockCursorElement = null;
  const Be = T._observer;
  Be !== null && (Be.disconnect(), T._observer = null), E !== null && (E.textContent = ""), w !== null && (w.textContent = "", ge.set("root", w));
}
function Hi(T) {
  const E = T || {}, w = ii(), k = E.theme || {}, ge = T === void 0 ? w : E.parentEditor || null, Be = E.disableEvents || !1, We = bi(), je = E.namespace || (ge !== null ? ge._config.namespace : Fs()), Je = E.editorState, Qe = [Ti, qn, Kn, lr, Ki, zi, ...E.nodes || []], { onError: Ze, html: dt } = E, Xe = E.editable === void 0 || E.editable;
  let Ar;
  if (T === void 0 && w !== null) Ar = w._nodes;
  else {
    Ar = /* @__PURE__ */ new Map();
    for (let wr = 0; wr < Qe.length; wr++) {
      let Pn = Qe[wr], ci = null, gt = null;
      if (typeof Pn != "function") {
        const Di = Pn;
        Pn = Di.replace, ci = Di.with, gt = Di.withKlass || null;
      }
      const { ownNodeConfig: St } = Ro(Pn), Jr = Pn.getType(), Fi = Pn.transform(), Wr = /* @__PURE__ */ new Set();
      St && St.$transform && Wr.add(St.$transform), Fi !== null && Wr.add(Fi), Ar.set(Jr, { exportDOM: dt && dt.export ? dt.export.get(Pn) : void 0, klass: Pn, replace: ci, replaceWithKlass: gt, sharedNodeState: pt(Qe[wr]), transforms: Wr });
    }
  }
  const tn = new qi(We, ge, Ar, { disableEvents: Be, namespace: je, theme: k }, Ze || console.error, function(wr, Pn) {
    const ci = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Set(), St = (Jr) => {
      Object.keys(Jr).forEach((Fi) => {
        let Wr = ci.get(Fi);
        Wr === void 0 && (Wr = [], ci.set(Fi, Wr)), Wr.push(Jr[Fi]);
      });
    };
    return wr.forEach((Jr) => {
      const Fi = Jr.klass.importDOM;
      if (Fi == null || gt.has(Fi)) return;
      gt.add(Fi);
      const Wr = Fi.call(Jr.klass);
      Wr !== null && St(Wr);
    }), Pn && St(Pn), ci;
  }(Ar, dt ? dt.import : void 0), Xe, T);
  return Je !== void 0 && (tn._pendingEditorState = Je, tn._dirtyType = x), tn;
}
class qi {
  constructor(E, w, k, ge, Be, We, je, Je) {
    this._createEditorArgs = Je, this._parentEditor = w, this._rootElement = null, this._editorState = E, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = ge, this._nodes = k, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = y, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Fs(), this._onError = Be, this._htmlConversions = We, this._editable = je, this._headless = w !== null && w._headless, this._window = null, this._blockCursorElement = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(E) {
    const w = this._listeners.update;
    return w.add(E), () => {
      w.delete(E);
    };
  }
  registerEditableListener(E) {
    const w = this._listeners.editable;
    return w.add(E), () => {
      w.delete(E);
    };
  }
  registerDecoratorListener(E) {
    const w = this._listeners.decorator;
    return w.add(E), () => {
      w.delete(E);
    };
  }
  registerTextContentListener(E) {
    const w = this._listeners.textcontent;
    return w.add(E), () => {
      w.delete(E);
    };
  }
  registerRootListener(E) {
    const w = this._listeners.root;
    return E(this._rootElement, null), w.add(E), () => {
      E(null, this._rootElement), w.delete(E);
    };
  }
  registerCommand(E, w, k) {
    k === void 0 && t(35);
    const ge = this._commands;
    ge.has(E) || ge.set(E, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const Be = ge.get(E);
    Be === void 0 && t(36, String(E));
    const We = Be[k];
    return We.add(w), () => {
      We.delete(w), Be.every((je) => je.size === 0) && ge.delete(E);
    };
  }
  registerMutationListener(E, w, k) {
    const ge = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(E)).klass, Be = this._listeners.mutation;
    let We = Be.get(w);
    We === void 0 && (We = /* @__PURE__ */ new Set(), Be.set(w, We)), We.add(ge);
    const je = k && k.skipInitialization;
    return je !== void 0 && je || this.initializeMutationListener(w, ge), () => {
      We.delete(ge), We.size === 0 && Be.delete(w);
    };
  }
  getRegisteredNode(E) {
    const w = this._nodes.get(E.getType());
    return w === void 0 && t(37, E.name), w;
  }
  resolveRegisteredNodeAfterReplacements(E) {
    for (; E.replaceWithKlass; ) E = this.getRegisteredNode(E.replaceWithKlass);
    return E;
  }
  initializeMutationListener(E, w) {
    const k = this._editorState, ge = Po(k).get(w.getType());
    if (!ge) return;
    const Be = /* @__PURE__ */ new Map();
    for (const We of ge.keys()) Be.set(We, "created");
    Be.size > 0 && E(Be, { dirtyLeaves: /* @__PURE__ */ new Set(), prevEditorState: k, updateTags: /* @__PURE__ */ new Set(["registerMutationListener"]) });
  }
  registerNodeTransformToKlass(E, w) {
    const k = this.getRegisteredNode(E);
    return k.transforms.add(w), k;
  }
  registerNodeTransform(E, w) {
    const k = this.registerNodeTransformToKlass(E, w), ge = [k], Be = k.replaceWithKlass;
    if (Be != null) {
      const We = this.registerNodeTransformToKlass(Be, w);
      ge.push(We);
    }
    return function(We, je) {
      const Je = Po(We.getEditorState()), Qe = [];
      for (const Ze of je) {
        const dt = Je.get(Ze);
        dt && Qe.push(dt);
      }
      Qe.length !== 0 && We.update(() => {
        for (const Ze of Qe) for (const dt of Ze.keys()) {
          const Xe = Ss(dt);
          Xe && Xe.markDirty();
        }
      }, We._pendingEditorState === null ? { tag: Ai } : void 0);
    }(this, ge.map((We) => We.klass.getType())), () => {
      ge.forEach((We) => We.transforms.delete(w));
    };
  }
  hasNode(E) {
    return this._nodes.has(E.getType());
  }
  hasNodes(E) {
    return E.every(this.hasNode.bind(this));
  }
  dispatchCommand(E, w) {
    return Qs(this, E, w);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(E) {
    const w = this._rootElement;
    if (E !== w) {
      const k = Vs(this._config.theme, "root"), ge = this._pendingEditorState || this._editorState;
      if (this._rootElement = E, Yi(this, w, E, ge), w !== null && (this._config.disableEvents || Fn(w), k != null && w.classList.remove(...k)), E !== null) {
        const Be = lo(E), We = E.style;
        We.userSelect = "text", We.whiteSpace = "pre-wrap", We.wordBreak = "break-word", E.setAttribute("data-lexical-editor", "true"), this._window = Be, this._dirtyType = x, ut$1(this), this._updateTags.add(Ai), fi(this), this._config.disableEvents || function(je, Je) {
          const Qe = je.ownerDocument, Ze = dn$1.get(Qe);
          (Ze === void 0 || Ze < 1) && Qe.addEventListener("selectionchange", On), dn$1.set(Qe, (Ze || 0) + 1), je.__lexicalEditor = Je;
          const dt = En(je);
          for (let Xe = 0; Xe < ln$1.length; Xe++) {
            const [Ar, tn] = ln$1[Xe], wr = typeof tn == "function" ? (Pn) => {
              Dn(Pn) || (An(Pn), (Je.isEditable() || Ar === "click") && tn(Pn, Je));
            } : (Pn) => {
              if (Dn(Pn)) return;
              An(Pn);
              const ci = Je.isEditable();
              switch (Ar) {
                case "cut":
                  return ci && Qs(Je, qe, Pn);
                case "copy":
                  return Qs(Je, He, Pn);
                case "paste":
                  return ci && Qs(Je, Ce, Pn);
                case "dragstart":
                  return ci && Qs(Je, Ue, Pn);
                case "dragover":
                  return ci && Qs(Je, Ve, Pn);
                case "dragend":
                  return ci && Qs(Je, Ye, Pn);
                case "focus":
                  return ci && Qs(Je, en, Pn);
                case "blur":
                  return ci && Qs(Je, nn, Pn);
                case "drop":
                  return ci && Qs(Je, $e, Pn);
              }
            };
            je.addEventListener(Ar, wr), dt.push(() => {
              je.removeEventListener(Ar, wr);
            });
          }
        }(E, this), k != null && E.classList.add(...k);
      } else this._window = null, this._updateTags.add(Ai), fi(this);
      di("root", this, !1, E, w);
    }
  }
  getElementByKey(E) {
    return this._keyToDOMMap.get(E) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(E, w) {
    E.isEmpty() && t(38);
    let k = E;
    k._readOnly && (k = Ni(E), k._selection = E._selection ? E._selection.clone() : null), at$1(this);
    const ge = this._pendingEditorState, Be = this._updateTags, We = w !== void 0 ? w.tag : null;
    ge === null || ge.isEmpty() || (We != null && Be.add(We), fi(this)), this._pendingEditorState = k, this._dirtyType = x, this._dirtyElements.set("root", !1), this._compositionKey = null, We != null && Be.add(We), this._updating || fi(this);
  }
  parseEditorState(E, w) {
    return function(k, ge, Be) {
      const We = bi(), je = Vr, Je = Hr, Qe = Yr, Ze = ge._dirtyElements, dt = ge._dirtyLeaves, Xe = ge._cloneNotNeeded, Ar = ge._dirtyType;
      ge._dirtyElements = /* @__PURE__ */ new Map(), ge._dirtyLeaves = /* @__PURE__ */ new Set(), ge._cloneNotNeeded = /* @__PURE__ */ new Set(), ge._dirtyType = 0, Vr = We, Hr = !1, Yr = ge, Xi(null);
      try {
        const tn = ge._nodes;
        ai(k.root, tn), Be && Be(), We._readOnly = !0;
      } catch (tn) {
        tn instanceof Error && ge._onError(tn);
      } finally {
        ge._dirtyElements = Ze, ge._dirtyLeaves = dt, ge._cloneNotNeeded = Xe, ge._dirtyType = Ar, Vr = je, Hr = Je, Yr = Qe;
      }
      return We;
    }(typeof E == "string" ? JSON.parse(E) : E, this, w);
  }
  read(E) {
    return fi(this), this.getEditorState().read(E, { editor: this });
  }
  update(E, w) {
    (function(k, ge, Be) {
      k._updating ? k._updates.push([ge, Be]) : gi(k, ge, Be);
    })(this, E, w);
  }
  focus(E, w = {}) {
    const k = this._rootElement;
    k !== null && (k.setAttribute("autocapitalize", "off"), _i(this, () => {
      const ge = Pr(), Be = ws();
      ge !== null ? ge.dirty || Ms(ge.clone()) : Be.getChildrenSize() !== 0 && (w.defaultSelection === "rootStart" ? Be.selectStart() : Be.selectEnd()), io("focus"), so(() => {
        k.removeAttribute("autocapitalize"), E && E();
      });
    }), this._pendingEditorState === null && k.removeAttribute("autocapitalize"));
  }
  blur() {
    const E = this._rootElement;
    E !== null && E.blur();
    const w = xo(this._window);
    w !== null && w.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(E) {
    this._editable !== E && (this._editable = E, di("editable", this, !0, E));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
qi.version = "0.33.1+prod.esm";
let Gi = null;
function Xi(T) {
  Gi = T;
}
let Qi = 1;
function ts(T, E) {
  const w = es(T, E);
  return w === void 0 && t(30, E), w;
}
function es(T, E) {
  return T._nodes.get(E);
}
const ns = typeof queueMicrotask == "function" ? queueMicrotask : (T) => {
  Promise.resolve().then(T);
};
function rs(T) {
  return vi(ks(T));
}
function is(T) {
  const E = document.activeElement;
  if (!To(E)) return !1;
  const w = E.nodeName;
  return vi(ks(T)) && (w === "INPUT" || w === "TEXTAREA" || E.contentEditable === "true" && cs(E) == null);
}
function ss(T, E, w) {
  const k = T.getRootElement();
  try {
    return k !== null && k.contains(E) && k.contains(w) && E !== null && !is(E) && ls(E) === T;
  } catch {
    return !1;
  }
}
function os(T) {
  return T instanceof qi;
}
function ls(T) {
  let E = T;
  for (; E != null; ) {
    const w = cs(E);
    if (os(w)) return w;
    E = eo(E);
  }
  return null;
}
function cs(T) {
  return T ? T.__lexicalEditor : null;
}
function as(T) {
  return ar(T) || T.isToken();
}
function us(T) {
  return as(T) || T.isSegmented();
}
function fs(T) {
  return ko(T) && T.nodeType === g$1;
}
function ds(T) {
  return ko(T) && T.nodeType === _;
}
function hs(T) {
  let E = T;
  for (; E != null; ) {
    if (fs(E)) return E;
    E = E.firstChild;
  }
  return null;
}
function gs(T, E, w) {
  const k = U$2[E];
  if (w !== null && (T & k) == (w & k)) return T;
  let ge = T ^ k;
  return E === "subscript" ? ge &= -65 : E === "superscript" ? ge &= -33 : E === "lowercase" ? (ge &= -513, ge &= -1025) : E === "uppercase" ? (ge &= -257, ge &= -1025) : E === "capitalize" && (ge &= -257, ge &= -513), ge;
}
function ps(T, E) {
  const w = function() {
    const We = Gi;
    return Gi = null, We;
  }();
  if ((E = E || w && w.__key) != null) return void (T.__key = E);
  Zr(), ti();
  const k = ni(), ge = ei(), Be = "" + Qi++;
  ge._nodeMap.set(Be, T), xi(T) ? k._dirtyElements.set(Be, !0) : k._dirtyLeaves.add(Be), k._cloneNotNeeded.add(Be), k._dirtyType = m$1, T.__key = Be;
}
function ys(T) {
  const E = T.getParent();
  if (E !== null) {
    const w = T.getWritable(), k = E.getWritable(), ge = T.getPreviousSibling(), Be = T.getNextSibling(), We = Be !== null ? Be.__key : null, je = ge !== null ? ge.__key : null, Je = ge !== null ? ge.getWritable() : null, Qe = Be !== null ? Be.getWritable() : null;
    ge === null && (k.__first = We), Be === null && (k.__last = je), Je !== null && (Je.__next = We), Qe !== null && (Qe.__prev = je), w.__prev = null, w.__next = null, w.__parent = null, k.__size--;
  }
}
function ms(T) {
  ti();
  const E = T.getLatest(), w = E.__parent, k = ei(), ge = ni(), Be = k._nodeMap, We = ge._dirtyElements;
  w !== null && function(Je, Qe, Ze) {
    let dt = Je;
    for (; dt !== null; ) {
      if (Ze.has(dt)) return;
      const Xe = Qe.get(dt);
      if (Xe === void 0) break;
      Ze.set(dt, !1), dt = Xe.__parent;
    }
  }(w, Be, We);
  const je = E.__key;
  ge._dirtyType = m$1, xi(T) ? We.set(je, !0) : ge._dirtyLeaves.add(je);
}
function xs(T) {
  Zr();
  const E = ni(), w = E._compositionKey;
  if (T !== w) {
    if (E._compositionKey = T, w !== null) {
      const k = Ss(w);
      k !== null && k.getWritable();
    }
    if (T !== null) {
      const k = Ss(T);
      k !== null && k.getWritable();
    }
  }
}
function Cs() {
  return Qr() ? null : ni()._compositionKey;
}
function Ss(T, E) {
  const w = (E || ei())._nodeMap.get(T);
  return w === void 0 ? null : w;
}
function vs(T, E) {
  const w = Ts(T, ni());
  return w !== void 0 ? Ss(w, E) : null;
}
function Ts(T, E) {
  return T[`__lexicalKey_${E._key}`];
}
function ks(T, E) {
  let w = T;
  for (; w != null; ) {
    const k = vs(w, E);
    if (k !== null) return k;
    w = eo(w);
  }
  return null;
}
function Ns(T) {
  const E = T._decorators, w = Object.assign({}, E);
  return T._pendingDecorators = w, w;
}
function bs(T) {
  return T.read(() => ws().getTextContent());
}
function ws() {
  return Es(ei());
}
function Es(T) {
  return T._nodeMap.get("root");
}
function Ms(T) {
  Zr();
  const E = ei();
  T !== null && (T.dirty = !0, T.setCachedNodes(null)), E._selection = T;
}
function Os(T) {
  const E = ni(), w = function(k, ge) {
    let Be = k;
    for (; Be != null; ) {
      const We = Ts(Be, ge);
      if (We !== void 0) return We;
      Be = eo(Be);
    }
    return null;
  }(T, E);
  return w === null ? T === E.getRootElement() ? Ss("root") : null : Ss(w);
}
function As(T, E) {
  return E ? T.getTextContentSize() : 0;
}
function Ds(T) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(T);
}
function Ps(T) {
  const E = [];
  let w = T;
  for (; w !== null; ) E.push(w), w = w._parentEditor;
  return E;
}
function Fs() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Ls(T) {
  return fs(T) ? T.nodeValue : null;
}
function Is(T, E, w) {
  const k = xo(co(E));
  if (k === null) return;
  const ge = k.anchorNode;
  let { anchorOffset: Be, focusOffset: We } = k;
  if (ge !== null) {
    let je = Ls(ge);
    const Je = ks(ge);
    if (je !== null && sr(Je)) {
      if (je === K$2 && w) {
        const Qe = w.length;
        je = w, Be = Qe, We = Qe;
      }
      je !== null && zs(Je, je, Be, We, T);
    }
  }
}
function zs(T, E, w, k, ge) {
  let Be = T;
  if (Be.isAttached() && (ge || !Be.isDirty())) {
    const We = Be.isComposing();
    let je = E;
    (We || ge) && E[E.length - 1] === K$2 && (je = E.slice(0, -1));
    const Je = Be.getTextContent();
    if (ge || je !== Je) {
      if (je === "") {
        if (xs(null), o || l$1 || f$2) Be.remove();
        else {
          const wr = ni();
          setTimeout(() => {
            wr.update(() => {
              Be.isAttached() && Be.remove();
            });
          }, 20);
        }
        return;
      }
      const Qe = Be.getParent(), Ze = Fr(), dt = Be.getTextContentSize(), Xe = Cs(), Ar = Be.getKey();
      if (Be.isToken() || Xe !== null && Ar === Xe && !We || _r(Ze) && (Qe !== null && !Qe.canInsertTextBefore() && Ze.anchor.offset === 0 || Ze.anchor.key === T.__key && Ze.anchor.offset === 0 && !Be.canInsertTextBefore() && !We || Ze.focus.key === T.__key && Ze.focus.offset === dt && !Be.canInsertTextAfter() && !We)) return void Be.markDirty();
      const tn = Pr();
      if (!_r(tn) || w === null || k === null) return void Be.setTextContent(je);
      if (tn.setTextNodeRange(Be, w, Be, k), Be.isSegmented()) {
        const wr = ir(Be.getTextContent());
        Be.replace(wr), Be = wr;
      }
      Be.setTextContent(je);
    }
  }
}
function Ks(T, E, w) {
  const k = E[w] || !1;
  return k === "any" || k === T[w];
}
function Rs(T, E) {
  return Ks(T, E, "altKey") && Ks(T, E, "ctrlKey") && Ks(T, E, "shiftKey") && Ks(T, E, "metaKey");
}
function Bs(T, E, w) {
  return Rs(T, w) && T.key.toLowerCase() === E.toLowerCase();
}
const Ws = { ctrlKey: !r, metaKey: r }, Js = { altKey: r, ctrlKey: !r };
function $s(T) {
  return T.key === "Backspace";
}
function js(T) {
  return Bs(T, "a", Ws);
}
function Vs(T, E) {
  T.__lexicalClassNameCache === void 0 && (T.__lexicalClassNameCache = {});
  const w = T.__lexicalClassNameCache, k = w[E];
  if (k !== void 0) return k;
  const ge = T[E];
  if (typeof ge == "string") {
    const Be = d$1(ge);
    return w[E] = Be, Be;
  }
  return ge;
}
function Ys(T, E, w, k, ge) {
  if (w.size === 0) return;
  const Be = k.__type, We = k.__key, je = E.get(Be);
  je === void 0 && t(33, Be);
  const Je = je.klass;
  let Qe = T.get(Je);
  Qe === void 0 && (Qe = /* @__PURE__ */ new Map(), T.set(Je, Qe));
  const Ze = Qe.get(We), dt = Ze === "destroyed" && ge === "created";
  (Ze === void 0 || dt) && Qe.set(We, dt ? "updated" : ge);
}
function qs(T, E, w) {
  const k = T.getParent();
  let ge = w, Be = T;
  return k !== null && (w === 0 && (ge = Be.getIndexWithinParent(), Be = k)), Be.getChildAtIndex(ge - 1);
}
function Gs(T, E) {
  const w = T.offset;
  if (T.type === "element")
    return qs(T.getNode(), E, w);
  {
    const k = T.getNode();
    if (w === 0 || !E) {
      const ge = k.getPreviousSibling();
      return ge === null ? qs(k.getParentOrThrow(), E, k.getIndexWithinParent() + 0) : ge;
    }
  }
  return null;
}
function Xs(T) {
  const E = co(T).event, w = E && E.inputType;
  return w === "insertFromPaste" || w === "insertFromPasteAsQuotation";
}
function Qs(T, E, w) {
  return function(k, ge, Be) {
    const We = Ps(k);
    for (let je = 4; je >= 0; je--) for (let Je = 0; Je < We.length; Je++) {
      const Qe = We[Je], Ze = Qe._commands.get(ge);
      if (Ze !== void 0) {
        const dt = Ze[je];
        if (dt !== void 0) {
          const Xe = Array.from(dt), Ar = Xe.length;
          let tn = !1;
          if (_i(Qe, () => {
            for (let wr = 0; wr < Ar; wr++) if (Xe[wr](Be, k)) return void (tn = !0);
          }), tn) return tn;
        }
      }
    }
    return !1;
  }(T, E, w);
}
function Zs(T) {
  return !ki(T) && !T.isLastChild() && !T.isInline();
}
function to(T, E) {
  const w = T._keyToDOMMap.get(E);
  return w === void 0 && t(75, E), w;
}
function eo(T) {
  const E = T.assignedSlot || T.parentElement;
  return No(E) ? E.host : E;
}
function no(T) {
  return ds(T) ? T : To(T) ? T.ownerDocument : null;
}
function io(T) {
  Zr(), ni()._updateTags.add(T);
}
function so(T) {
  Zr(), ni()._deferred.push(T);
}
function oo(T, E) {
  let w = T.getParent();
  for (; w !== null; ) {
    if (w.is(E)) return !0;
    w = w.getParent();
  }
  return !1;
}
function lo(T) {
  const E = no(T);
  return E ? E.defaultView : null;
}
function co(T) {
  const E = T._window;
  return E === null && t(78), E;
}
function ao(T) {
  return xi(T) && T.isInline() || vi(T) && T.isInline();
}
function uo(T) {
  let E = T.getParentOrThrow();
  for (; E !== null; ) {
    if (fo(E)) return E;
    E = E.getParentOrThrow();
  }
  return E;
}
function fo(T) {
  return ki(T) || xi(T) && T.isShadowRoot();
}
function go(T) {
  const E = ni(), w = T.getType(), k = es(E, w);
  k === void 0 && t(200, T.constructor.name, w);
  const { replace: ge, replaceWithKlass: Be } = k;
  if (ge !== null) {
    const We = ge(T), je = We.constructor;
    return Be !== null ? We instanceof Be || t(201, Be.name, Be.getType(), je.name, je.getType(), T.constructor.name, w) : We instanceof T.constructor && je !== T.constructor || t(202, je.name, je.getType(), T.constructor.name, w), We.__key === T.__key && t(203, T.constructor.name, w, je.name, je.getType()), We;
  }
  return T;
}
function _o(T, E) {
  !ki(T.getParent()) || xi(E) || vi(E) || t(99);
}
function po(T) {
  const E = Ss(T);
  return E === null && t(63, T), E;
}
function yo(T) {
  return (vi(T) || xi(T) && !T.canBeEmpty()) && !T.isInline();
}
function mo(T, E, w) {
  w.style.removeProperty("caret-color"), E._blockCursorElement = null;
  const k = T.parentElement;
  k !== null && k.removeChild(T);
}
function xo(T) {
  return e ? (T || window).getSelection() : null;
}
function Co(T) {
  const E = lo(T);
  return E ? E.getSelection() : null;
}
function vo(T) {
  return To(T) && T.tagName === "A";
}
function To(T) {
  return ko(T) && T.nodeType === h$1;
}
function ko(T) {
  return typeof T == "object" && T !== null && "nodeType" in T && typeof T.nodeType == "number";
}
function No(T) {
  return ko(T) && T.nodeType === p$1;
}
function bo(T) {
  const E = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return T.nodeName.match(E) !== null;
}
function wo(T) {
  const E = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return T.nodeName.match(E) !== null;
}
function Eo(T) {
  if (vi(T) && !T.isInline()) return !0;
  if (!xi(T) || fo(T)) return !1;
  const E = T.getFirstChild(), w = E === null || Wn(E) || sr(E) || E.isInline();
  return !T.isInline() && T.canBeEmpty() !== !1 && w;
}
function Mo(T, E) {
  let w = T;
  for (; w !== null && w.getParent() !== null && !E(w); ) w = w.getParentOrThrow();
  return E(w) ? w : null;
}
function Oo() {
  return ni();
}
const Ao = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new Map();
function Po(T) {
  if (!T._readOnly && T.isEmpty()) return Do;
  T._readOnly || t(192);
  let E = Ao.get(T);
  return E || (E = function(w) {
    const k = /* @__PURE__ */ new Map();
    for (const [ge, Be] of w._nodeMap) {
      const We = Be.__type;
      let je = k.get(We);
      je || (je = /* @__PURE__ */ new Map(), k.set(We, je)), je.set(ge, Be);
    }
    return k;
  }(T), Ao.set(T, E)), E;
}
function Fo(T) {
  const E = T.constructor.clone(T);
  return E.afterCloneFrom(T), E;
}
function Lo(T, E) {
  const w = parseInt(T.style.paddingInlineStart, 10) || 0, k = Math.round(w / 40);
  E.setIndent(k);
}
function Io(T) {
  T.__lexicalUnmanaged = !0;
}
function zo(T) {
  return T.__lexicalUnmanaged === !0;
}
function Ko(T, E) {
  return function(w, k) {
    return Object.prototype.hasOwnProperty.call(w, k);
  }(T, E) && T[E] !== zn[E];
}
function Ro(T) {
  const E = Q$2 in T.prototype ? T.prototype[Q$2]() : void 0, w = /* @__PURE__ */ function(We) {
    return We === Si || We === mi || We === zn;
  }(T), k = !w && Ko(T, "getType") ? T.getType() : void 0;
  let ge, Be = k;
  if (E) if (k) ge = E[k];
  else for (const [We, je] of Object.entries(E)) Be = We, ge = je;
  if (!w && Be && (Ko(T, "getType") || (T.getType = () => Be), Ko(T, "clone") || (T.clone = (We) => (Xi(We), new T())), Ko(T, "importJSON") || (T.importJSON = ge && ge.$importJSON || ((We) => new T().updateFromJSON(We))), !Ko(T, "importDOM") && ge)) {
    const { importDOM: We } = ge;
    We && (T.importDOM = () => We);
  }
  return { ownNodeConfig: ge, ownNodeType: Be };
}
const Wo = { next: "previous", previous: "next" };
class Jo {
  constructor(E) {
    this.origin = E;
  }
  [Symbol.iterator]() {
    return _l({ hasNext: Xo, initial: this.getAdjacentCaret(), map: (E) => E, step: (E) => E.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return nl(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return nl(this.origin, this.direction);
  }
  remove() {
    const E = this.getNodeAtCaret();
    return E && E.remove(), this;
  }
  replaceOrInsert(E, w) {
    const k = this.getNodeAtCaret();
    return E.is(this.origin) || E.is(k) || (k === null ? this.insert(E) : k.replace(E, w)), this;
  }
  splice(E, w, k = "next") {
    const ge = k === this.direction ? w : Array.from(w).reverse();
    let Be = this;
    const We = this.getParentAtCaret(), je = /* @__PURE__ */ new Map();
    for (let Je = Be.getAdjacentCaret(); Je !== null && je.size < E; Je = Je.getAdjacentCaret()) {
      const Qe = Je.origin.getWritable();
      je.set(Qe.getKey(), Qe);
    }
    for (const Je of ge) {
      if (je.size > 0) {
        const Qe = Be.getNodeAtCaret();
        if (Qe) {
          if (je.delete(Qe.getKey()), je.delete(Je.getKey()), !(Qe.is(Je) || Be.origin.is(Je))) {
            const Ze = Je.getParent();
            Ze && Ze.is(We) && Je.remove(), Qe.replace(Je);
          }
        } else Qe === null && t(263, Array.from(je).join(" "));
      } else Be.insert(Je);
      Be = nl(Je, this.direction);
    }
    for (const Je of je.values()) Je.remove();
    return this;
  }
}
class $o extends Jo {
  type = "child";
  getLatest() {
    const E = this.origin.getLatest();
    return E === this.origin ? this : ol(E, this.direction);
  }
  getParentCaret(E = "root") {
    return nl(Vo(this.getParentAtCaret(), E), this.direction);
  }
  getFlipped() {
    const E = Uo(this.direction);
    return nl(this.getNodeAtCaret(), E) || ol(this.origin, E);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(E) {
    return E instanceof $o && this.direction === E.direction && this.origin.is(E.origin);
  }
  isSamePointCaret(E) {
    return this.isSameNodeCaret(E);
  }
}
const jo = { root: ki, shadowRoot: fo };
function Uo(T) {
  return Wo[T];
}
function Vo(T, E = "root") {
  return jo[E](T) ? null : T;
}
class Yo extends Jo {
  type = "sibling";
  getLatest() {
    const E = this.origin.getLatest();
    return E === this.origin ? this : nl(E, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return xi(this.origin) ? ol(this.origin, this.direction) : null;
  }
  getParentCaret(E = "root") {
    return nl(Vo(this.getParentAtCaret(), E), this.direction);
  }
  getFlipped() {
    const E = Uo(this.direction);
    return nl(this.getNodeAtCaret(), E) || ol(this.origin.getParentOrThrow(), E);
  }
  isSamePointCaret(E) {
    return E instanceof Yo && this.direction === E.direction && this.origin.is(E.origin);
  }
  isSameNodeCaret(E) {
    return (E instanceof Yo || E instanceof Ho) && this.direction === E.direction && this.origin.is(E.origin);
  }
}
class Ho extends Jo {
  type = "text";
  constructor(E, w) {
    super(E), this.offset = w;
  }
  getLatest() {
    const E = this.origin.getLatest();
    return E === this.origin ? this : rl(E, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(E = "root") {
    return nl(Vo(this.getParentAtCaret(), E), this.direction);
  }
  getFlipped() {
    return rl(this.origin, Uo(this.direction), this.offset);
  }
  isSamePointCaret(E) {
    return E instanceof Ho && this.direction === E.direction && this.origin.is(E.origin) && this.offset === E.offset;
  }
  isSameNodeCaret(E) {
    return (E instanceof Yo || E instanceof Ho) && this.direction === E.direction && this.origin.is(E.origin);
  }
  getSiblingCaret() {
    return nl(this.origin, this.direction);
  }
}
function qo(T) {
  return T instanceof Ho;
}
function Xo(T) {
  return T instanceof Yo;
}
function Qo(T) {
  return T instanceof $o;
}
const Zo = { next: class extends Ho {
  direction = "next";
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(T) {
    return this.origin.insertAfter(T), this;
  }
}, previous: class extends Ho {
  direction = "previous";
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(T) {
    return this.origin.insertBefore(T), this;
  }
} }, tl = { next: class extends Yo {
  direction = "next";
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(T) {
    return this.origin.insertAfter(T), this;
  }
}, previous: class extends Yo {
  direction = "previous";
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(T) {
    return this.origin.insertBefore(T), this;
  }
} }, el = { next: class extends $o {
  direction = "next";
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(T) {
    return this.origin.splice(0, 0, [T]), this;
  }
}, previous: class extends $o {
  direction = "previous";
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(T) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [T]), this;
  }
} };
function nl(T, E) {
  return T ? new tl[E](T) : null;
}
function rl(T, E, w) {
  return T ? new Zo[E](T, il(T, w)) : null;
}
function il(T, E) {
  const w = T.getTextContentSize();
  let k = E === "next" ? w : E === "previous" ? 0 : E;
  return (k < 0 || k > w) && (function(ge, ...Be) {
    const We = new URL("https://lexical.dev/docs/error"), je = new URLSearchParams();
    je.append("code", ge);
    for (const Je of Be) je.append("v", Je);
    We.search = je.toString(), console.warn(`Minified Lexical warning #${ge}; visit ${We.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(284, String(E), String(w), T.getKey()), k = k < 0 ? 0 : w), k;
}
function sl(T, E) {
  return new ul(T, E);
}
function ol(T, E) {
  return xi(T) ? new el[E](T) : null;
}
function ll(T) {
  return T && T.getChildCaret() || T;
}
function cl(T) {
  return T && ll(T.getAdjacentCaret());
}
class al {
  type = "node-caret-range";
  constructor(E, w, k) {
    this.anchor = E, this.focus = w, this.direction = k;
  }
  getLatest() {
    const E = this.anchor.getLatest(), w = this.focus.getLatest();
    return E === this.anchor && w === this.focus ? this : new al(E, w, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const E = (ge) => {
      const Be = this[ge].getLatest();
      return qo(Be) ? function(We, je) {
        const { direction: Je, origin: Qe } = We, Ze = il(Qe, je === "focus" ? Uo(Je) : Je);
        return sl(We, Ze - We.offset);
      }(Be, ge) : null;
    }, w = E("anchor"), k = E("focus");
    if (w && k) {
      const { caret: ge } = w, { caret: Be } = k;
      if (ge.isSameNodeCaret(Be)) return [sl(ge, Be.offset - ge.offset), null];
    }
    return [w, k];
  }
  iterNodeCarets(E = "root") {
    const w = qo(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), k = this.focus.getLatest(), ge = qo(k), Be = (We) => We.isSameNodeCaret(k) ? null : cl(We) || We.getParentCaret(E);
    return _l({ hasNext: (We) => We !== null && !(ge && k.isSameNodeCaret(We)), initial: w.isSameNodeCaret(k) ? null : Be(w), map: (We) => We, step: Be });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class ul {
  type = "slice";
  constructor(E, w) {
    this.caret = E, this.distance = w;
  }
  getSliceIndices() {
    const { distance: E, caret: { offset: w } } = this, k = w + E;
    return k < w ? [k, w] : [w, k];
  }
  getTextContent() {
    const [E, w] = this.getSliceIndices();
    return this.caret.origin.getTextContent().slice(E, w);
  }
  getTextContentSize() {
    return Math.abs(this.distance);
  }
  removeTextSlice() {
    const { caret: { origin: E, direction: w } } = this, [k, ge] = this.getSliceIndices(), Be = E.getTextContent();
    return rl(E.setTextContent(Be.slice(0, k) + Be.slice(ge)), w, k);
  }
}
function dl(T) {
  return gl(T, nl(ws(), T.direction));
}
function hl(T) {
  return gl(T, T);
}
function gl(T, E) {
  return T.direction !== E.direction && t(265), new al(T, E, T.direction);
}
function _l(T) {
  const { initial: E, hasNext: w, step: k, map: ge } = T;
  let Be = E;
  return { [Symbol.iterator]() {
    return this;
  }, next() {
    if (!w(Be)) return { done: !0, value: void 0 };
    const We = { done: !1, value: ge(Be) };
    return Be = k(Be), We;
  } };
}
function pl(T, E) {
  const w = Cl(T.origin, E.origin);
  switch (w === null && t(275, T.origin.getKey(), E.origin.getKey()), w.type) {
    case "same": {
      const k = T.type === "text", ge = E.type === "text";
      return k && ge ? function(Be, We) {
        return Math.sign(Be - We);
      }(T.offset, E.offset) : T.type === E.type ? 0 : k ? -1 : ge ? 1 : T.type === "child" ? -1 : 1;
    }
    case "ancestor":
      return T.type === "child" ? -1 : 1;
    case "descendant":
      return E.type === "child" ? 1 : -1;
    case "branch":
      return yl(w);
  }
}
function yl(T) {
  const { a: E, b: w } = T, k = E.__key, ge = w.__key;
  let Be = E, We = w;
  for (; Be && We; Be = Be.getNextSibling(), We = We.getNextSibling()) {
    if (Be.__key === ge) return -1;
    if (We.__key === k) return 1;
  }
  return Be === null ? 1 : -1;
}
function ml(T, E) {
  return E.is(T);
}
function xl(T) {
  return xi(T) ? [T.getLatest(), null] : [T.getParent(), T.getLatest()];
}
function Cl(T, E) {
  if (T.is(E)) return { commonAncestor: T, type: "same" };
  const w = /* @__PURE__ */ new Map();
  for (let [k, ge] = xl(T); k; ge = k, k = k.getParent()) w.set(k, ge);
  for (let [k, ge] = xl(E); k; ge = k, k = k.getParent()) {
    const Be = w.get(k);
    if (Be !== void 0) return Be === null ? (ml(T, k) || t(276), { commonAncestor: k, type: "ancestor" }) : ge === null ? (ml(E, k) || t(277), { commonAncestor: k, type: "descendant" }) : ((xi(Be) || ml(T, Be)) && (xi(ge) || ml(E, ge)) && k.is(Be.getParent()) && k.is(ge.getParent()) || t(278), { a: Be, b: ge, commonAncestor: k, type: "branch" });
  }
  return null;
}
function Sl(T, E) {
  const { type: w, key: k, offset: ge } = T, Be = po(T.key);
  return w === "text" ? (sr(Be) || t(266, Be.getType(), k), rl(Be, E, ge)) : (xi(Be) || t(267, Be.getType(), k), Fl(Be, T.offset, E));
}
function vl(T, E) {
  const { origin: w, direction: k } = E, ge = k === "next";
  qo(E) ? T.set(w.getKey(), E.offset, "text") : Xo(E) ? sr(w) ? T.set(w.getKey(), il(w, k), "text") : T.set(w.getParentOrThrow().getKey(), w.getIndexWithinParent() + (ge ? 1 : 0), "element") : (Qo(E) && xi(w) || t(268), T.set(w.getKey(), ge ? 0 : w.getChildrenSize(), "element"));
}
function Tl(T) {
  const E = Pr(), w = _r(E) ? E : Mr();
  return kl(w, T), Ms(w), w;
}
function kl(T, E) {
  vl(T.anchor, E.anchor), vl(T.focus, E.focus);
}
function Nl(T) {
  const { anchor: E, focus: w } = T, k = Sl(E, "next"), ge = Sl(w, "next"), Be = pl(k, ge) <= 0 ? "next" : "previous";
  return gl(Dl(k, Be), Dl(ge, Be));
}
function bl(T) {
  const { direction: E, origin: w } = T, k = nl(w, Uo(E)).getNodeAtCaret();
  return k ? nl(k, E) : ol(w.getParentOrThrow(), E);
}
function wl(T, E = "root") {
  const w = [T];
  for (let k = Qo(T) ? T.getParentCaret(E) : T.getSiblingCaret(); k !== null; k = k.getParentCaret(E)) w.push(bl(k));
  return w;
}
function El(T) {
  return !!T && T.origin.isAttached();
}
function Ml(T, E = "removeEmptySlices") {
  if (T.isCollapsed()) return T;
  const w = "root", k = "next";
  let ge = E;
  const Be = Pl(T, k), We = wl(Be.anchor, w), je = wl(Be.focus.getFlipped(), w), Je = /* @__PURE__ */ new Set(), Qe = [];
  for (const tn of Be.iterNodeCarets(w)) if (Qo(tn)) Je.add(tn.origin.getKey());
  else if (Xo(tn)) {
    const { origin: wr } = tn;
    xi(wr) && !Je.has(wr.getKey()) || Qe.push(wr);
  }
  for (const tn of Qe) tn.remove();
  for (const tn of Be.getTextSlices()) {
    if (!tn) continue;
    const { origin: wr } = tn.caret, Pn = wr.getTextContentSize(), ci = bl(nl(wr, k)), gt = wr.getMode();
    if (Math.abs(tn.distance) === Pn && ge === "removeEmptySlices" || gt === "token" && tn.distance !== 0) ci.remove();
    else if (tn.distance !== 0) {
      ge = "removeEmptySlices";
      let St = tn.removeTextSlice();
      const Jr = tn.caret.origin;
      if (gt === "segmented") {
        const Fi = St.origin, Wr = ir(Fi.getTextContent()).setStyle(Fi.getStyle()).setFormat(Fi.getFormat());
        ci.replaceOrInsert(Wr), St = rl(Wr, k, St.offset);
      }
      Jr.is(We[0].origin) && (We[0] = St), Jr.is(je[0].origin) && (je[0] = St.getFlipped());
    }
  }
  let Ze, dt;
  for (const tn of We) if (El(tn)) {
    Ze = Ol(tn);
    break;
  }
  for (const tn of je) if (El(tn)) {
    dt = Ol(tn);
    break;
  }
  const Xe = function(tn, wr, Pn) {
    if (!tn || !wr) return null;
    const ci = tn.getParentAtCaret(), gt = wr.getParentAtCaret();
    if (!ci || !gt) return null;
    const St = ci.getParents().reverse();
    St.push(ci);
    const Jr = gt.getParents().reverse();
    Jr.push(gt);
    const Fi = Math.min(St.length, Jr.length);
    let Wr;
    for (Wr = 0; Wr < Fi && St[Wr] === Jr[Wr]; Wr++) ;
    const Di = (Mi, Ui) => {
      let Vi;
      for (let Zi = Wr; Zi < Mi.length; Zi++) {
        const Ji = Mi[Zi];
        if (fo(Ji)) return;
        !Vi && Ui(Ji) && (Vi = Ji);
      }
      return Vi;
    }, $i = Di(St, Eo), Oi = $i && Di(Jr, (Mi) => Pn.has(Mi.getKey()) && Eo(Mi));
    return $i && Oi ? [$i, Oi] : null;
  }(Ze, dt, Je);
  if (Xe) {
    const [tn, wr] = Xe;
    ol(tn, "previous").splice(0, wr.getChildren()), wr.remove();
  }
  const Ar = [Ze, dt, ...We, ...je].find(El);
  if (Ar)
    return hl(Dl(Ol(Ar), T.direction));
  t(269, JSON.stringify(We.map((tn) => tn.origin.__key)));
}
function Ol(T) {
  const E = function(ge) {
    let Be = ge;
    for (; Qo(Be); ) {
      const We = cl(Be);
      if (!Qo(We)) break;
      Be = We;
    }
    return Be;
  }(T.getLatest()), { direction: w } = E;
  if (sr(E.origin)) return qo(E) ? E : rl(E.origin, w, w);
  const k = E.getAdjacentCaret();
  return Xo(k) && sr(k.origin) ? rl(k.origin, w, Uo(w)) : E;
}
function Al(T) {
  return qo(T) && T.offset !== il(T.origin, T.direction);
}
function Dl(T, E) {
  return T.direction === E ? T : T.getFlipped();
}
function Pl(T, E) {
  return T.direction === E ? T : gl(Dl(T.focus, E), Dl(T.anchor, E));
}
function Fl(T, E, w) {
  let k = ol(T, "next");
  for (let ge = 0; ge < E; ge++) {
    const Be = k.getAdjacentCaret();
    if (Be === null) break;
    k = Be;
  }
  return Dl(k, w);
}
const m = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, u = m ? useLayoutEffect : useEffect, p = { tag: Ai };
function f$1({ initialConfig: T, children: E }) {
  const w = useMemo(() => {
    const { theme: k, namespace: ge, nodes: Be, onError: We, editorState: je, html: Je } = T, Qe = t$1(null, k), Ze = Hi({ editable: T.editable, html: Je, namespace: ge, nodes: Be, onError: (dt) => We(dt, Ze), theme: k });
    return function(dt, Xe) {
      if (Xe !== null) {
        if (Xe === void 0) dt.update(() => {
          const Ar = ws();
          if (Ar.isEmpty()) {
            const tn = Bi();
            Ar.append(tn);
            const wr = m ? document.activeElement : null;
            (Pr() !== null || wr !== null && wr === dt.getRootElement()) && tn.select();
          }
        }, p);
        else if (Xe !== null) switch (typeof Xe) {
          case "string": {
            const Ar = dt.parseEditorState(Xe);
            dt.setEditorState(Ar, p);
            break;
          }
          case "object":
            dt.setEditorState(Xe, p);
            break;
          case "function":
            dt.update(() => {
              ws().isEmpty() && Xe(dt);
            }, p);
        }
      }
    }(Ze, je), [Ze, Qe];
  }, []);
  return u(() => {
    const k = T.editable, [ge] = w;
    ge.setEditable(k === void 0 || k);
  }, []), jsx(r$1.Provider, { value: w, children: E });
}
const C = /* @__PURE__ */ new Map();
function I$3(T) {
  const E = {};
  if (!T) return E;
  const w = T.split(";");
  for (const k of w) if (k !== "") {
    const [ge, Be] = k.split(/:([^]+)/);
    ge && Be && (E[ge.trim()] = Be.trim());
  }
  return E;
}
function B(T) {
  let E = C.get(T);
  return E === void 0 && (E = I$3(T), C.set(T, E)), E;
}
const M$2 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, R$1 = M$2 && "documentMode" in document ? document.documentMode : null;
!(!M$2 || !("InputEvent" in window) || R$1) && "getTargetRanges" in new window.InputEvent("input");
function I$2(...T) {
  const E = [];
  for (const w of T) if (w && typeof w == "string") for (const [k] of w.matchAll(/\S+/g)) E.push(k);
  return E;
}
function rt$1(T, ...E) {
  const w = I$2(...E);
  w.length > 0 && T.classList.add(...w);
}
function it$2(T, ...E) {
  const w = I$2(...E);
  w.length > 0 && T.classList.remove(...w);
}
function ct$2(T) {
  return T ? T.getAdjacentCaret() : null;
}
function _t$1(T, E) {
  const w = [], k = Array.from(T).reverse();
  for (let ge = k.pop(); ge !== void 0; ge = k.pop()) if (E(ge)) w.push(ge);
  else if (xi(ge)) for (const Be of Kt(ge)) k.push(Be);
  return w;
}
function Kt(T) {
  return Ht(ol(T, "previous"));
}
function Ht(T) {
  return _l({ hasNext: Xo, initial: T.getAdjacentCaret(), map: (E) => E.origin.getLatest(), step: (E) => E.getAdjacentCaret() });
}
const mt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ft = mt && "documentMode" in document ? document.documentMode : null;
!(!mt || !("InputEvent" in window) || ft) && "getTargetRanges" in new window.InputEvent("input");
class Dt extends mi {
  static getType() {
    return "quote";
  }
  static clone(E) {
    return new Dt(E.__key);
  }
  createDOM(E) {
    const w = document.createElement("blockquote");
    return rt$1(w, E.theme.quote), w;
  }
  updateDOM(E, w) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (E) => ({ conversion: Tt, priority: 0 }) };
  }
  exportDOM(E) {
    const { element: w } = super.exportDOM(E);
    if (To(w)) {
      this.isEmpty() && w.append(document.createElement("br"));
      const k = this.getFormatType();
      k && (w.style.textAlign = k);
      const ge = this.getDirection();
      ge && (w.dir = ge);
    }
    return { element: w };
  }
  static importJSON(E) {
    return xt().updateFromJSON(E);
  }
  insertNewAfter(E, w) {
    const k = Bi(), ge = this.getDirection();
    return k.setDirection(ge), this.insertAfter(k, w), k;
  }
  collapseAtStart() {
    const E = Bi();
    return this.getChildren().forEach((w) => E.append(w)), this.replace(E), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function xt() {
  return go(new Dt());
}
class Nt extends mi {
  static getType() {
    return "heading";
  }
  static clone(E) {
    return new Nt(E.__tag, E.__key);
  }
  constructor(E, w) {
    super(w), this.__tag = E;
  }
  getTag() {
    return this.__tag;
  }
  setTag(E) {
    const w = this.getWritable();
    return this.__tag = E, w;
  }
  createDOM(E) {
    const w = this.__tag, k = document.createElement(w), ge = E.theme.heading;
    if (ge !== void 0) {
      const Be = ge[w];
      rt$1(k, Be);
    }
    return k;
  }
  updateDOM(E, w, k) {
    return E.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (E) => ({ conversion: Ot, priority: 0 }), h2: (E) => ({ conversion: Ot, priority: 0 }), h3: (E) => ({ conversion: Ot, priority: 0 }), h4: (E) => ({ conversion: Ot, priority: 0 }), h5: (E) => ({ conversion: Ot, priority: 0 }), h6: (E) => ({ conversion: Ot, priority: 0 }), p: (E) => {
      const w = E.firstChild;
      return w !== null && Et(w) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (E) => Et(E) ? { conversion: (w) => ({ node: _t("h1") }), priority: 3 } : null };
  }
  exportDOM(E) {
    const { element: w } = super.exportDOM(E);
    if (To(w)) {
      this.isEmpty() && w.append(document.createElement("br"));
      const k = this.getFormatType();
      k && (w.style.textAlign = k);
      const ge = this.getDirection();
      ge && (w.dir = ge);
    }
    return { element: w };
  }
  static importJSON(E) {
    return _t(E.tag).updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setTag(E.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(E, w = !0) {
    const k = E ? E.anchor.offset : 0, ge = this.getLastDescendant(), Be = !ge || E && E.anchor.key === ge.getKey() && k === ge.getTextContentSize() || !E ? Bi() : _t(this.getTag()), We = this.getDirection();
    if (Be.setDirection(We), this.insertAfter(Be, w), k === 0 && !this.isEmpty() && E) {
      const je = Bi();
      je.select(), this.replace(je, !0);
    }
    return Be;
  }
  collapseAtStart() {
    const E = this.isEmpty() ? Bi() : _t(this.getTag());
    return this.getChildren().forEach((w) => E.append(w)), this.replace(E), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function Et(T) {
  return T.nodeName.toLowerCase() === "span" && T.style.fontSize === "26pt";
}
function Ot(T) {
  const E = T.nodeName.toLowerCase();
  let w = null;
  return E !== "h1" && E !== "h2" && E !== "h3" && E !== "h4" && E !== "h5" && E !== "h6" || (w = _t(E), T.style !== null && (Lo(T, w), w.setFormat(T.style.textAlign))), { node: w };
}
function Tt(T) {
  const E = xt();
  return T.style !== null && (E.setFormat(T.style.textAlign), Lo(T, E)), { node: E };
}
function _t(T = "h1") {
  return go(new Nt(T));
}
function I$1(T, ...E) {
  const w = new URL("https://lexical.dev/docs/error"), k = new URLSearchParams();
  k.append("code", T);
  for (const ge of E) k.append("v", ge);
  throw w.search = k.toString(), Error(`Minified Lexical error #${T}; visit ${w.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function M$1(T) {
  let E = 1, w = T.getParent();
  for (; w != null; ) {
    if (nt(w)) {
      const k = w.getParent();
      if (at(k)) {
        E++, w = k.getParent();
        continue;
      }
      I$1(40);
    }
    return E;
  }
  return E;
}
function K$1(T) {
  return nt(T) && at(T.getFirstChild());
}
function W$1(T) {
  return et().append(T);
}
function U$1(T, E) {
  T.splice(T.getChildrenSize(), 0, E);
}
function z$1(T, E) {
  const w = T.getLastChild(), k = E.getFirstChild();
  w && k && K$1(w) && K$1(k) && (z$1(w.getFirstChild(), k.getFirstChild()), k.remove());
  const ge = E.getChildren();
  ge.length > 0 && T.append(...ge), E.remove();
}
function H(T) {
  const E = T.getListType() !== "check";
  let w = T.getStart();
  for (const k of T.getChildren()) nt(k) && (k.getValue() !== w && k.setValue(w), E && k.getLatest().__checked != null && k.setChecked(void 0), at(k.getFirstChild()) || w++);
}
function X$1(T) {
  const E = /* @__PURE__ */ new Set();
  if (K$1(T) || E.has(T.getKey())) return;
  const w = T.getParent(), k = T.getNextSibling(), ge = T.getPreviousSibling();
  if (K$1(k) && K$1(ge)) {
    const Be = ge.getFirstChild();
    if (at(Be)) {
      Be.append(T);
      const We = k.getFirstChild();
      at(We) && (U$1(Be, We.getChildren()), k.remove(), E.add(k.getKey()));
    }
  } else if (K$1(k)) {
    const Be = k.getFirstChild();
    if (at(Be)) {
      const We = Be.getFirstChild();
      We !== null && We.insertBefore(T);
    }
  } else if (K$1(ge)) {
    const Be = ge.getFirstChild();
    at(Be) && Be.append(T);
  } else if (at(w)) {
    const Be = et().setTextFormat(T.getTextFormat()).setTextStyle(T.getTextStyle()), We = ct$1(w.getListType()).setTextFormat(w.getTextFormat()).setTextStyle(w.getTextStyle());
    Be.append(We), We.append(T), ge ? ge.insertAfter(Be) : k ? k.insertBefore(Be) : w.append(Be);
  }
}
function j(T) {
  if (K$1(T)) return;
  const E = T.getParent(), w = E ? E.getParent() : void 0;
  if (at(w ? w.getParent() : void 0) && nt(w) && at(E)) {
    const k = E ? E.getFirstChild() : void 0, ge = E ? E.getLastChild() : void 0;
    if (T.is(k)) w.insertBefore(T), E.isEmpty() && w.remove();
    else if (T.is(ge)) w.insertAfter(T), E.isEmpty() && w.remove();
    else {
      const Be = E.getListType(), We = et(), je = ct$1(Be);
      We.append(je), T.getPreviousSiblings().forEach((Ze) => je.append(Ze));
      const Je = et(), Qe = ct$1(Be);
      Je.append(Qe), U$1(Qe, T.getNextSiblings()), w.insertBefore(We), w.insertAfter(Je), w.replace(T);
    }
  }
}
function Q$1(...T) {
  const E = [];
  for (const w of T) if (w && typeof w == "string") for (const [k] of w.matchAll(/\S+/g)) E.push(k);
  return E;
}
class Y extends mi {
  $config() {
    return this.config("listitem", { $transform: (E) => {
      if (E.__checked == null) return;
      const w = E.getParent();
      at(w) && w.getListType() !== "check" && E.getChecked() != null && E.setChecked(void 0);
    }, extends: mi, importDOM: { li: () => ({ conversion: Z, priority: 0 }) } });
  }
  constructor(E = 1, w = void 0, k) {
    super(k), this.__value = E === void 0 ? 1 : E, this.__checked = w;
  }
  afterCloneFrom(E) {
    super.afterCloneFrom(E), this.__value = E.__value, this.__checked = E.__checked;
  }
  createDOM(E) {
    const w = document.createElement("li");
    return this.updateListItemDOM(null, w, E), w;
  }
  updateListItemDOM(E, w, k) {
    const ge = this.getParent();
    at(ge) && ge.getListType() === "check" && function(je, Je, Qe, Ze) {
      at(Je.getFirstChild()) ? (je.removeAttribute("role"), je.removeAttribute("tabIndex"), je.removeAttribute("aria-checked")) : (je.setAttribute("role", "checkbox"), je.setAttribute("tabIndex", "-1"), Qe && Je.__checked === Qe.__checked || je.setAttribute("aria-checked", Je.getChecked() ? "true" : "false"));
    }(w, this, E), w.value = this.__value, function(je, Je, Qe) {
      const Ze = [], dt = [], Xe = Je.list, Ar = Xe ? Xe.listitem : void 0;
      let tn;
      if (Xe && Xe.nested && (tn = Xe.nested.listitem), Ar !== void 0 && Ze.push(...Q$1(Ar)), Xe) {
        const wr = Qe.getParent(), Pn = at(wr) && wr.getListType() === "check", ci = Qe.getChecked();
        Pn && !ci || dt.push(Xe.listitemUnchecked), Pn && ci || dt.push(Xe.listitemChecked), Pn && Ze.push(ci ? Xe.listitemChecked : Xe.listitemUnchecked);
      }
      if (tn !== void 0) {
        const wr = Q$1(tn);
        Qe.getChildren().some((Pn) => at(Pn)) ? Ze.push(...wr) : dt.push(...wr);
      }
      dt.length > 0 && it$2(je, ...dt), Ze.length > 0 && rt$1(je, ...Ze);
    }(w, k.theme, this);
    const Be = E ? E.__style : "", We = this.__style;
    Be !== We && (We === "" ? w.removeAttribute("style") : w.style.cssText = We), function(je, Je, Qe) {
      const Ze = B(Je.__textStyle);
      for (const dt in Ze) je.style.setProperty(`--listitem-marker-${dt}`, Ze[dt]);
      if (Qe) for (const dt in B(Qe.__textStyle)) dt in Ze || je.style.removeProperty(`--listitem-marker-${dt}`);
    }(w, this, E);
  }
  updateDOM(E, w, k) {
    const ge = w;
    return this.updateListItemDOM(E, ge, k), !1;
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setValue(E.value).setChecked(E.checked);
  }
  exportDOM(E) {
    const w = this.createDOM(E._config), k = this.getFormatType();
    k && (w.style.textAlign = k);
    const ge = this.getDirection();
    return ge && (w.dir = ge), { element: w };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), value: this.getValue() };
  }
  append(...E) {
    for (let w = 0; w < E.length; w++) {
      const k = E[w];
      if (xi(k) && this.canMergeWith(k)) {
        const ge = k.getChildren();
        this.append(...ge), k.remove();
      } else super.append(k);
    }
    return this;
  }
  replace(E, w) {
    if (nt(E)) return super.replace(E);
    this.setIndent(0);
    const k = this.getParentOrThrow();
    if (!at(k)) return E;
    if (k.__first === this.getKey()) k.insertBefore(E);
    else if (k.__last === this.getKey()) k.insertAfter(E);
    else {
      const ge = ct$1(k.getListType());
      let Be = this.getNextSibling();
      for (; Be; ) {
        const We = Be;
        Be = Be.getNextSibling(), ge.append(We);
      }
      k.insertAfter(E), E.insertAfter(ge);
    }
    return w && (xi(E) || I$1(139), this.getChildren().forEach((ge) => {
      E.append(ge);
    })), this.remove(), k.getChildrenSize() === 0 && k.remove(), E;
  }
  insertAfter(E, w = !0) {
    const k = this.getParentOrThrow();
    if (at(k) || I$1(39), nt(E)) return super.insertAfter(E, w);
    const ge = this.getNextSiblings();
    if (k.insertAfter(E, w), ge.length !== 0) {
      const Be = ct$1(k.getListType());
      ge.forEach((We) => Be.append(We)), E.insertAfter(Be, w);
    }
    return E;
  }
  remove(E) {
    const w = this.getPreviousSibling(), k = this.getNextSibling();
    super.remove(E), w && k && K$1(w) && K$1(k) && (z$1(w.getFirstChild(), k.getFirstChild()), k.remove());
  }
  insertNewAfter(E, w = !0) {
    const k = et().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(k, w), k;
  }
  collapseAtStart(E) {
    const w = Bi();
    this.getChildren().forEach((We) => w.append(We));
    const k = this.getParentOrThrow(), ge = k.getParentOrThrow(), Be = nt(ge);
    if (k.getChildrenSize() === 1) if (Be) k.remove(), ge.select();
    else {
      k.insertBefore(w), k.remove();
      const We = E.anchor, je = E.focus, Je = w.getKey();
      We.type === "element" && We.getNode().is(this) && We.set(Je, We.offset, "element"), je.type === "element" && je.getNode().is(this) && je.set(Je, je.offset, "element");
    }
    else k.insertBefore(w), this.remove();
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(E) {
    const w = this.getWritable();
    return w.__value = E, w;
  }
  getChecked() {
    const E = this.getLatest();
    let w;
    const k = this.getParent();
    return at(k) && (w = k.getListType()), w === "check" ? !!E.__checked : void 0;
  }
  setChecked(E) {
    const w = this.getWritable();
    return w.__checked = E, w;
  }
  toggleChecked() {
    const E = this.getWritable();
    return E.setChecked(!E.__checked);
  }
  getIndent() {
    const E = this.getParent();
    if (E === null || !this.isAttached()) return this.getLatest().__indent;
    let w = E.getParentOrThrow(), k = 0;
    for (; nt(w); ) w = w.getParentOrThrow().getParentOrThrow(), k++;
    return k;
  }
  setIndent(E) {
    typeof E != "number" && I$1(117), (E = Math.floor(E)) >= 0 || I$1(199);
    let w = this.getIndent();
    for (; w !== E; ) w < E ? (X$1(this), w++) : (j(this), w--);
    return this;
  }
  canInsertAfter(E) {
    return nt(E);
  }
  canReplaceWith(E) {
    return nt(E);
  }
  canMergeWith(E) {
    return nt(E) || Wi(E);
  }
  extractWithChild(E, w) {
    if (!_r(w)) return !1;
    const k = w.anchor.getNode(), ge = w.focus.getNode();
    return this.isParentOf(k) && this.isParentOf(ge) && this.getTextContent().length === w.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return ct$1("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function Z(T) {
  if (T.classList.contains("task-list-item")) {
    for (const w of T.children) if (w.tagName === "INPUT") return tt(w);
  }
  const E = T.getAttribute("aria-checked");
  return { node: et(E === "true" || E !== "false" && void 0) };
}
function tt(T) {
  return T.getAttribute("type") !== "checkbox" ? { node: null } : { node: et(T.hasAttribute("checked")) };
}
function et(T) {
  return go(new Y(void 0, T));
}
function nt(T) {
  return T instanceof Y;
}
class rt extends mi {
  $config() {
    return this.config("list", { $transform: (E) => {
      (function(w) {
        const k = w.getNextSibling();
        at(k) && w.getListType() === k.getListType() && z$1(w, k);
      })(E), H(E);
    }, extends: mi, importDOM: { ol: () => ({ conversion: ot$1, priority: 0 }), ul: () => ({ conversion: ot$1, priority: 0 }) } });
  }
  constructor(E = "number", w = 1, k) {
    super(k);
    const ge = lt$1[E] || E;
    this.__listType = ge, this.__tag = ge === "number" ? "ol" : "ul", this.__start = w;
  }
  afterCloneFrom(E) {
    super.afterCloneFrom(E), this.__listType = E.__listType, this.__tag = E.__tag, this.__start = E.__start;
  }
  getTag() {
    return this.getLatest().__tag;
  }
  setListType(E) {
    const w = this.getWritable();
    return w.__listType = E, w.__tag = E === "number" ? "ol" : "ul", w;
  }
  getListType() {
    return this.getLatest().__listType;
  }
  getStart() {
    return this.getLatest().__start;
  }
  setStart(E) {
    const w = this.getWritable();
    return w.__start = E, w;
  }
  createDOM(E, w) {
    const k = this.__tag, ge = document.createElement(k);
    return this.__start !== 1 && ge.setAttribute("start", String(this.__start)), ge.__lexicalListType = this.__listType, it$1(ge, E.theme, this), ge;
  }
  updateDOM(E, w, k) {
    return E.__tag !== this.__tag || (it$1(w, k.theme, this), !1);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setListType(E.listType).setStart(E.start);
  }
  exportDOM(E) {
    const w = this.createDOM(E._config, E);
    return To(w) && (this.__start !== 1 && w.setAttribute("start", String(this.__start)), this.__listType === "check" && w.setAttribute("__lexicalListType", "check")), { element: w };
  }
  exportJSON() {
    return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag() };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  splice(E, w, k) {
    let ge = k;
    for (let Be = 0; Be < k.length; Be++) {
      const We = k[Be];
      nt(We) || (ge === k && (ge = [...k]), ge[Be] = et().append(!xi(We) || at(We) || We.isInline() ? We : ir(We.getTextContent())));
    }
    return super.splice(E, w, ge);
  }
  extractWithChild(E) {
    return nt(E);
  }
}
function it$1(T, E, w) {
  const k = [], ge = [], Be = E.list;
  if (Be !== void 0) {
    const We = Be[`${w.__tag}Depth`] || [], je = M$1(w) - 1, Je = je % We.length, Qe = We[Je], Ze = Be[w.__tag];
    let dt;
    const Xe = Be.nested, Ar = Be.checklist;
    if (Xe !== void 0 && Xe.list && (dt = Xe.list), Ze !== void 0 && k.push(Ze), Ar !== void 0 && w.__listType === "check" && k.push(Ar), Qe !== void 0) {
      k.push(...Q$1(Qe));
      for (let tn = 0; tn < We.length; tn++) tn !== Je && ge.push(w.__tag + tn);
    }
    if (dt !== void 0) {
      const tn = Q$1(dt);
      je > 1 ? k.push(...tn) : ge.push(...tn);
    }
  }
  ge.length > 0 && it$2(T, ...ge), k.length > 0 && rt$1(T, ...k);
}
function st$1(T) {
  const E = [];
  for (let w = 0; w < T.length; w++) {
    const k = T[w];
    if (nt(k)) {
      E.push(k);
      const ge = k.getChildren();
      ge.length > 1 && ge.forEach((Be) => {
        at(Be) && E.push(W$1(Be));
      });
    } else E.push(W$1(k));
  }
  return E;
}
function ot$1(T) {
  const E = T.nodeName.toLowerCase();
  let w = null;
  return E === "ol" ? w = ct$1("number", T.start) : E === "ul" && (w = function(k) {
    if (k.getAttribute("__lexicallisttype") === "check" || k.classList.contains("contains-task-list")) return !0;
    for (const ge of k.childNodes) if (To(ge) && ge.hasAttribute("aria-checked")) return !0;
    return !1;
  }(T) ? ct$1("check") : ct$1("bullet")), { after: st$1, node: w };
}
const lt$1 = { ol: "number", ul: "bullet" };
function ct$1(T = "number", E = 1) {
  return go(new rt(T, E));
}
function at(T) {
  return T instanceof rt;
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, prism = { exports: {} };
(function(T) {
  var E = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var w = function(k) {
    var ge = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, Be = 0, We = {}, je = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: k.Prism && k.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: k.Prism && k.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function gt(St) {
          return St instanceof Je ? new Je(St.type, gt(St.content), St.alias) : Array.isArray(St) ? St.map(gt) : St.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(gt) {
          return Object.prototype.toString.call(gt).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(gt) {
          return gt.__id || Object.defineProperty(gt, "__id", { value: ++Be }), gt.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function gt(St, Jr) {
          Jr = Jr || {};
          var Fi, Wr;
          switch (je.util.type(St)) {
            case "Object":
              if (Wr = je.util.objId(St), Jr[Wr])
                return Jr[Wr];
              Fi = /** @type {Record<string, any>} */
              {}, Jr[Wr] = Fi;
              for (var Di in St)
                St.hasOwnProperty(Di) && (Fi[Di] = gt(St[Di], Jr));
              return (
                /** @type {any} */
                Fi
              );
            case "Array":
              return Wr = je.util.objId(St), Jr[Wr] ? Jr[Wr] : (Fi = [], Jr[Wr] = Fi, /** @type {Array} */
              /** @type {any} */
              St.forEach(function($i, Oi) {
                Fi[Oi] = gt($i, Jr);
              }), /** @type {any} */
              Fi);
            default:
              return St;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(gt) {
          for (; gt; ) {
            var St = ge.exec(gt.className);
            if (St)
              return St[1].toLowerCase();
            gt = gt.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(gt, St) {
          gt.className = gt.className.replace(RegExp(ge, "gi"), ""), gt.classList.add("language-" + St);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (Fi) {
            var gt = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(Fi.stack) || [])[1];
            if (gt) {
              var St = document.getElementsByTagName("script");
              for (var Jr in St)
                if (St[Jr].src == gt)
                  return St[Jr];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(gt, St, Jr) {
          for (var Fi = "no-" + St; gt; ) {
            var Wr = gt.classList;
            if (Wr.contains(St))
              return !0;
            if (Wr.contains(Fi))
              return !1;
            gt = gt.parentElement;
          }
          return !!Jr;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: We,
        plaintext: We,
        text: We,
        txt: We,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(gt, St) {
          var Jr = je.util.clone(je.languages[gt]);
          for (var Fi in St)
            Jr[Fi] = St[Fi];
          return Jr;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(gt, St, Jr, Fi) {
          Fi = Fi || /** @type {any} */
          je.languages;
          var Wr = Fi[gt], Di = {};
          for (var $i in Wr)
            if (Wr.hasOwnProperty($i)) {
              if ($i == St)
                for (var Oi in Jr)
                  Jr.hasOwnProperty(Oi) && (Di[Oi] = Jr[Oi]);
              Jr.hasOwnProperty($i) || (Di[$i] = Wr[$i]);
            }
          var Mi = Fi[gt];
          return Fi[gt] = Di, je.languages.DFS(je.languages, function(Ui, Vi) {
            Vi === Mi && Ui != gt && (this[Ui] = Di);
          }), Di;
        },
        // Traverse a language definition with Depth First Search
        DFS: function gt(St, Jr, Fi, Wr) {
          Wr = Wr || {};
          var Di = je.util.objId;
          for (var $i in St)
            if (St.hasOwnProperty($i)) {
              Jr.call(St, $i, St[$i], Fi || $i);
              var Oi = St[$i], Mi = je.util.type(Oi);
              Mi === "Object" && !Wr[Di(Oi)] ? (Wr[Di(Oi)] = !0, gt(Oi, Jr, null, Wr)) : Mi === "Array" && !Wr[Di(Oi)] && (Wr[Di(Oi)] = !0, gt(Oi, Jr, $i, Wr));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(gt, St) {
        je.highlightAllUnder(document, gt, St);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(gt, St, Jr) {
        var Fi = {
          callback: Jr,
          container: gt,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        je.hooks.run("before-highlightall", Fi), Fi.elements = Array.prototype.slice.apply(Fi.container.querySelectorAll(Fi.selector)), je.hooks.run("before-all-elements-highlight", Fi);
        for (var Wr = 0, Di; Di = Fi.elements[Wr++]; )
          je.highlightElement(Di, St === !0, Fi.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(gt, St, Jr) {
        var Fi = je.util.getLanguage(gt), Wr = je.languages[Fi];
        je.util.setLanguage(gt, Fi);
        var Di = gt.parentElement;
        Di && Di.nodeName.toLowerCase() === "pre" && je.util.setLanguage(Di, Fi);
        var $i = gt.textContent, Oi = {
          element: gt,
          language: Fi,
          grammar: Wr,
          code: $i
        };
        function Mi(Vi) {
          Oi.highlightedCode = Vi, je.hooks.run("before-insert", Oi), Oi.element.innerHTML = Oi.highlightedCode, je.hooks.run("after-highlight", Oi), je.hooks.run("complete", Oi), Jr && Jr.call(Oi.element);
        }
        if (je.hooks.run("before-sanity-check", Oi), Di = Oi.element.parentElement, Di && Di.nodeName.toLowerCase() === "pre" && !Di.hasAttribute("tabindex") && Di.setAttribute("tabindex", "0"), !Oi.code) {
          je.hooks.run("complete", Oi), Jr && Jr.call(Oi.element);
          return;
        }
        if (je.hooks.run("before-highlight", Oi), !Oi.grammar) {
          Mi(je.util.encode(Oi.code));
          return;
        }
        if (St && k.Worker) {
          var Ui = new Worker(je.filename);
          Ui.onmessage = function(Vi) {
            Mi(Vi.data);
          }, Ui.postMessage(JSON.stringify({
            language: Oi.language,
            code: Oi.code,
            immediateClose: !0
          }));
        } else
          Mi(je.highlight(Oi.code, Oi.grammar, Oi.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(gt, St, Jr) {
        var Fi = {
          code: gt,
          grammar: St,
          language: Jr
        };
        if (je.hooks.run("before-tokenize", Fi), !Fi.grammar)
          throw new Error('The language "' + Fi.language + '" has no grammar.');
        return Fi.tokens = je.tokenize(Fi.code, Fi.grammar), je.hooks.run("after-tokenize", Fi), Je.stringify(je.util.encode(Fi.tokens), Fi.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(gt, St) {
        var Jr = St.rest;
        if (Jr) {
          for (var Fi in Jr)
            St[Fi] = Jr[Fi];
          delete St.rest;
        }
        var Wr = new dt();
        return Xe(Wr, Wr.head, gt), Ze(gt, Wr, St, Wr.head, 0), tn(Wr);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(gt, St) {
          var Jr = je.hooks.all;
          Jr[gt] = Jr[gt] || [], Jr[gt].push(St);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(gt, St) {
          var Jr = je.hooks.all[gt];
          if (!(!Jr || !Jr.length))
            for (var Fi = 0, Wr; Wr = Jr[Fi++]; )
              Wr(St);
        }
      },
      Token: Je
    };
    k.Prism = je;
    function Je(gt, St, Jr, Fi) {
      this.type = gt, this.content = St, this.alias = Jr, this.length = (Fi || "").length | 0;
    }
    Je.stringify = function gt(St, Jr) {
      if (typeof St == "string")
        return St;
      if (Array.isArray(St)) {
        var Fi = "";
        return St.forEach(function(Mi) {
          Fi += gt(Mi, Jr);
        }), Fi;
      }
      var Wr = {
        type: St.type,
        content: gt(St.content, Jr),
        tag: "span",
        classes: ["token", St.type],
        attributes: {},
        language: Jr
      }, Di = St.alias;
      Di && (Array.isArray(Di) ? Array.prototype.push.apply(Wr.classes, Di) : Wr.classes.push(Di)), je.hooks.run("wrap", Wr);
      var $i = "";
      for (var Oi in Wr.attributes)
        $i += " " + Oi + '="' + (Wr.attributes[Oi] || "").replace(/"/g, "&quot;") + '"';
      return "<" + Wr.tag + ' class="' + Wr.classes.join(" ") + '"' + $i + ">" + Wr.content + "</" + Wr.tag + ">";
    };
    function Qe(gt, St, Jr, Fi) {
      gt.lastIndex = St;
      var Wr = gt.exec(Jr);
      if (Wr && Fi && Wr[1]) {
        var Di = Wr[1].length;
        Wr.index += Di, Wr[0] = Wr[0].slice(Di);
      }
      return Wr;
    }
    function Ze(gt, St, Jr, Fi, Wr, Di) {
      for (var $i in Jr)
        if (!(!Jr.hasOwnProperty($i) || !Jr[$i])) {
          var Oi = Jr[$i];
          Oi = Array.isArray(Oi) ? Oi : [Oi];
          for (var Mi = 0; Mi < Oi.length; ++Mi) {
            if (Di && Di.cause == $i + "," + Mi)
              return;
            var Ui = Oi[Mi], Vi = Ui.inside, Zi = !!Ui.lookbehind, Ji = !!Ui.greedy, Us = Ui.alias;
            if (Ji && !Ui.pattern.global) {
              var ji = Ui.pattern.toString().match(/[imsuy]*$/)[0];
              Ui.pattern = RegExp(Ui.pattern.source, ji + "g");
            }
            for (var _s = Ui.pattern || Ui, Hs = Fi.next, ro = Wr; Hs !== St.tail && !(Di && ro >= Di.reach); ro += Hs.value.length, Hs = Hs.next) {
              var Go = Hs.value;
              if (St.length > gt.length)
                return;
              if (!(Go instanceof Je)) {
                var ra = 1, ho;
                if (Ji) {
                  if (ho = Qe(_s, ro, gt, Zi), !ho || ho.index >= gt.length)
                    break;
                  var Bo = ho.index, oa = ho.index + ho[0].length, So = ro;
                  for (So += Hs.value.length; Bo >= So; )
                    Hs = Hs.next, So += Hs.value.length;
                  if (So -= Hs.value.length, ro = So, Hs.value instanceof Je)
                    continue;
                  for (var ea = Hs; ea !== St.tail && (So < oa || typeof ea.value == "string"); ea = ea.next)
                    ra++, So += ea.value.length;
                  ra--, Go = gt.slice(ro, So), ho.index -= ro;
                } else if (ho = Qe(_s, 0, Go, Zi), !ho)
                  continue;
                var Bo = ho.index, na = ho[0], ta = Go.slice(0, Bo), ia = Go.slice(Bo + na.length), sa = ro + Go.length;
                Di && sa > Di.reach && (Di.reach = sa);
                var aa = Hs.prev;
                ta && (aa = Xe(St, aa, ta), ro += ta.length), Ar(St, aa, ra);
                var ua = new Je($i, Vi ? je.tokenize(na, Vi) : na, Us, na);
                if (Hs = Xe(St, aa, ua), ia && Xe(St, Hs, ia), ra > 1) {
                  var la = {
                    cause: $i + "," + Mi,
                    reach: sa
                  };
                  Ze(gt, St, Jr, Hs.prev, ro, la), Di && la.reach > Di.reach && (Di.reach = la.reach);
                }
              }
            }
          }
        }
    }
    function dt() {
      var gt = { value: null, prev: null, next: null }, St = { value: null, prev: gt, next: null };
      gt.next = St, this.head = gt, this.tail = St, this.length = 0;
    }
    function Xe(gt, St, Jr) {
      var Fi = St.next, Wr = { value: Jr, prev: St, next: Fi };
      return St.next = Wr, Fi.prev = Wr, gt.length++, Wr;
    }
    function Ar(gt, St, Jr) {
      for (var Fi = St.next, Wr = 0; Wr < Jr && Fi !== gt.tail; Wr++)
        Fi = Fi.next;
      St.next = Fi, Fi.prev = St, gt.length -= Wr;
    }
    function tn(gt) {
      for (var St = [], Jr = gt.head.next; Jr !== gt.tail; )
        St.push(Jr.value), Jr = Jr.next;
      return St;
    }
    if (!k.document)
      return k.addEventListener && (je.disableWorkerMessageHandler || k.addEventListener("message", function(gt) {
        var St = JSON.parse(gt.data), Jr = St.language, Fi = St.code, Wr = St.immediateClose;
        k.postMessage(je.highlight(Fi, je.languages[Jr], Jr)), Wr && k.close();
      }, !1)), je;
    var wr = je.util.currentScript();
    wr && (je.filename = wr.src, wr.hasAttribute("data-manual") && (je.manual = !0));
    function Pn() {
      je.manual || je.highlightAll();
    }
    if (!je.manual) {
      var ci = document.readyState;
      ci === "loading" || ci === "interactive" && wr && wr.defer ? document.addEventListener("DOMContentLoaded", Pn) : window.requestAnimationFrame ? window.requestAnimationFrame(Pn) : window.setTimeout(Pn, 16);
    }
    return je;
  }(E);
  T.exports && (T.exports = w), typeof commonjsGlobal < "u" && (commonjsGlobal.Prism = w), w.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, w.languages.markup.tag.inside["attr-value"].inside.entity = w.languages.markup.entity, w.languages.markup.doctype.inside["internal-subset"].inside = w.languages.markup, w.hooks.add("wrap", function(k) {
    k.type === "entity" && (k.attributes.title = k.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(w.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(ge, Be) {
      var We = {};
      We["language-" + Be] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: w.languages[Be]
      }, We.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var je = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: We
        }
      };
      je["language-" + Be] = {
        pattern: /[\s\S]+/,
        inside: w.languages[Be]
      };
      var Je = {};
      Je[ge] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return ge;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: je
      }, w.languages.insertBefore("markup", "cdata", Je);
    }
  }), Object.defineProperty(w.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(k, ge) {
      w.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + k + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [ge, "language-" + ge],
                inside: w.languages[ge]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), w.languages.html = w.languages.markup, w.languages.mathml = w.languages.markup, w.languages.svg = w.languages.markup, w.languages.xml = w.languages.extend("markup", {}), w.languages.ssml = w.languages.xml, w.languages.atom = w.languages.xml, w.languages.rss = w.languages.xml, function(k) {
    var ge = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    k.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + ge.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + ge.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + ge.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + ge.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: ge,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, k.languages.css.atrule.inside.rest = k.languages.css;
    var Be = k.languages.markup;
    Be && (Be.tag.addInlined("style", "css"), Be.tag.addAttribute("style", "css"));
  }(w), w.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, w.languages.javascript = w.languages.extend("clike", {
    "class-name": [
      w.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), w.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, w.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: w.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: w.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: w.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: w.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: w.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), w.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: w.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), w.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), w.languages.markup && (w.languages.markup.tag.addInlined("script", "javascript"), w.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), w.languages.js = w.languages.javascript, function() {
    if (typeof w > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var k = "Loading…", ge = function(wr, Pn) {
      return "✖ Error " + wr + " while fetching file: " + Pn;
    }, Be = "✖ Error: File does not exist or is empty", We = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, je = "data-src-status", Je = "loading", Qe = "loaded", Ze = "failed", dt = "pre[data-src]:not([" + je + '="' + Qe + '"]):not([' + je + '="' + Je + '"])';
    function Xe(wr, Pn, ci) {
      var gt = new XMLHttpRequest();
      gt.open("GET", wr, !0), gt.onreadystatechange = function() {
        gt.readyState == 4 && (gt.status < 400 && gt.responseText ? Pn(gt.responseText) : gt.status >= 400 ? ci(ge(gt.status, gt.statusText)) : ci(Be));
      }, gt.send(null);
    }
    function Ar(wr) {
      var Pn = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(wr || "");
      if (Pn) {
        var ci = Number(Pn[1]), gt = Pn[2], St = Pn[3];
        return gt ? St ? [ci, Number(St)] : [ci, void 0] : [ci, ci];
      }
    }
    w.hooks.add("before-highlightall", function(wr) {
      wr.selector += ", " + dt;
    }), w.hooks.add("before-sanity-check", function(wr) {
      var Pn = (
        /** @type {HTMLPreElement} */
        wr.element
      );
      if (Pn.matches(dt)) {
        wr.code = "", Pn.setAttribute(je, Je);
        var ci = Pn.appendChild(document.createElement("CODE"));
        ci.textContent = k;
        var gt = Pn.getAttribute("data-src"), St = wr.language;
        if (St === "none") {
          var Jr = (/\.(\w+)$/.exec(gt) || [, "none"])[1];
          St = We[Jr] || Jr;
        }
        w.util.setLanguage(ci, St), w.util.setLanguage(Pn, St);
        var Fi = w.plugins.autoloader;
        Fi && Fi.loadLanguages(St), Xe(
          gt,
          function(Wr) {
            Pn.setAttribute(je, Qe);
            var Di = Ar(Pn.getAttribute("data-range"));
            if (Di) {
              var $i = Wr.split(/\r\n?|\n/g), Oi = Di[0], Mi = Di[1] == null ? $i.length : Di[1];
              Oi < 0 && (Oi += $i.length), Oi = Math.max(0, Math.min(Oi - 1, $i.length)), Mi < 0 && (Mi += $i.length), Mi = Math.max(0, Math.min(Mi, $i.length)), Wr = $i.slice(Oi, Mi).join(`
`), Pn.hasAttribute("data-start") || Pn.setAttribute("data-start", String(Oi + 1));
            }
            ci.textContent = Wr, w.highlightElement(ci);
          },
          function(Wr) {
            Pn.setAttribute(je, Ze), ci.textContent = Wr;
          }
        );
      }
    }), w.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(Pn) {
        for (var ci = (Pn || document).querySelectorAll(dt), gt = 0, St; St = ci[gt++]; )
          w.highlightElement(St);
      }
    };
    var tn = !1;
    w.fileHighlight = function() {
      tn || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), tn = !0), w.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(prism);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(T) {
  T.type === "entity" && (T.attributes.title = T.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(E, w) {
    var k = {};
    k["language-" + w] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[w]
    }, k.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var ge = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: k
      }
    };
    ge["language-" + w] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[w]
    };
    var Be = {};
    Be[E] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return E;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: ge
    }, Prism.languages.insertBefore("markup", "cdata", Be);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(T, E) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + T + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [E, "language-" + E],
              inside: Prism.languages[E]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(T) {
  var E = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function w(Ze) {
    return Ze = Ze.replace(/<inner>/g, function() {
      return E;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + Ze + ")");
  }
  var k = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, ge = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return k;
  }), Be = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  T.languages.markdown = T.languages.extend("markup", {}), T.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: T.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + ge + Be + "(?:" + ge + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + ge + Be + ")(?:" + ge + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(k),
              inside: T.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + ge + ")" + Be + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + ge + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(k),
              alias: "important",
              inside: T.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: w(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: w(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: w(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: w(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(Ze) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(dt) {
      Ze !== dt && (T.languages.markdown[Ze].inside.content.inside[dt] = T.languages.markdown[dt]);
    });
  }), T.hooks.add("after-tokenize", function(Ze) {
    if (Ze.language !== "markdown" && Ze.language !== "md")
      return;
    function dt(Xe) {
      if (!(!Xe || typeof Xe == "string"))
        for (var Ar = 0, tn = Xe.length; Ar < tn; Ar++) {
          var wr = Xe[Ar];
          if (wr.type !== "code") {
            dt(wr.content);
            continue;
          }
          var Pn = wr.content[1], ci = wr.content[3];
          if (Pn && ci && Pn.type === "code-language" && ci.type === "code-block" && typeof Pn.content == "string") {
            var gt = Pn.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            gt = (/[a-z][\w-]*/i.exec(gt) || [""])[0].toLowerCase();
            var St = "language-" + gt;
            ci.alias ? typeof ci.alias == "string" ? ci.alias = [ci.alias, St] : ci.alias.push(St) : ci.alias = [St];
          }
        }
    }
    dt(Ze.tokens);
  }), T.hooks.add("wrap", function(Ze) {
    if (Ze.type === "code-block") {
      for (var dt = "", Xe = 0, Ar = Ze.classes.length; Xe < Ar; Xe++) {
        var tn = Ze.classes[Xe], wr = /language-(.+)/.exec(tn);
        if (wr) {
          dt = wr[1];
          break;
        }
      }
      var Pn = T.languages[dt];
      if (Pn)
        Ze.content = T.highlight(Qe(Ze.content), Pn, dt);
      else if (dt && dt !== "none" && T.plugins.autoloader) {
        var ci = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        Ze.attributes.id = ci, T.plugins.autoloader.loadLanguages(dt, function() {
          var gt = document.getElementById(ci);
          gt && (gt.innerHTML = T.highlight(gt.textContent, T.languages[dt], dt));
        });
      }
    }
  });
  var We = RegExp(T.languages.markup.tag.pattern.source, "gi"), je = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, Je = String.fromCodePoint || String.fromCharCode;
  function Qe(Ze) {
    var dt = Ze.replace(We, "");
    return dt = dt.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(Xe, Ar) {
      if (Ar = Ar.toLowerCase(), Ar[0] === "#") {
        var tn;
        return Ar[1] === "x" ? tn = parseInt(Ar.slice(2), 16) : tn = Number(Ar.slice(1)), Je(tn);
      } else {
        var wr = je[Ar];
        return wr || Xe;
      }
    }), dt;
  }
  T.languages.md = T.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(T) {
  var E = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  T.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + E.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + E.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + E.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + E.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: E,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, T.languages.css.atrule.inside.rest = T.languages.css;
  var w = T.languages.markup;
  w && (w.tag.addInlined("style", "css"), w.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(T) {
  var E = T.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  E.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: E
    },
    boolean: E.boolean,
    variable: E.variable
  };
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(T) {
  for (var E = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, w = 0; w < 2; w++)
    E = E.replace(/<self>/g, function() {
      return E;
    });
  E = E.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), T.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + E),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, T.languages.rust["closure-params"].inside.rest = T.languages.rust, T.languages.rust.attribute.inside.string = T.languages.rust.string;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(T) {
  T.inside.interpolation.inside = Prism.languages.swift;
});
(function(T) {
  T.languages.typescript = T.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), T.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete T.languages.typescript.parameter, delete T.languages.typescript["literal-property"];
  var E = T.languages.extend("typescript", {});
  delete E["class-name"], T.languages.typescript["class-name"].inside = E, T.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: E
        }
      }
    }
  }), T.languages.ts = T.languages.typescript;
})(Prism);
(function(T) {
  var E = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, w = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, k = {
    pattern: RegExp(/(^|[^\w.])/.source + w + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  T.languages.java = T.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      k,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + w + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: k.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + w + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: k.inside
      }
    ],
    keyword: E,
    function: [
      T.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), T.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), T.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": k,
        keyword: E,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + w + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: k.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + w + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: k.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return E.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(T) {
  var E = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, w = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return E.source;
  });
  T.languages.cpp = T.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return E.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: E,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), T.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return w;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), T.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: T.languages.cpp
        }
      }
    }
  }), T.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), T.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: T.languages.extend("cpp", {})
    }
  }), T.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, T.languages.cpp["base-clause"]);
})(Prism);
(function(T) {
  T.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
  var E = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
  Object.keys(E).forEach(function(w) {
    var k = E[w], ge = [];
    /^\w+$/.test(w) || ge.push(/\w+/.exec(w)[0]), w === "diff" && ge.push("bold"), T.languages.diff[w] = { pattern: RegExp("^(?:[" + k + `].*(?:\r
?|
|(?![\\s\\S])))+`, "m"), alias: ge, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(w)[0] } } };
  }), Object.defineProperty(T.languages.diff, "PREFIXES", { value: E });
})(Prism);
const z = globalThis.Prism || window.Prism, M = (T) => {
  const E = /^diff-([\w-]+)/i;
  try {
    if (!T) return !1;
    const w = E.exec(T);
    return w ? z.languages.hasOwnProperty("diff") && z.languages.hasOwnProperty(w[1]) : z.languages.hasOwnProperty(T);
  } catch {
    return !1;
  }
};
function J(T, E) {
  for (const w of T.childNodes) {
    if (To(w) && w.tagName === E) return !0;
    J(w, E);
  }
  return !1;
}
const F = "data-language", R = "data-highlight-language";
class I extends mi {
  static getType() {
    return "code";
  }
  static clone(E) {
    return new I(E.__language, E.__key);
  }
  constructor(E, w) {
    super(w), this.__language = E || void 0, this.__isSyntaxHighlightSupported = M(E);
  }
  createDOM(E) {
    const w = document.createElement("code");
    rt$1(w, E.theme.code), w.setAttribute("spellcheck", "false");
    const k = this.getLanguage();
    return k && (w.setAttribute(F, k), this.getIsSyntaxHighlightSupported() && w.setAttribute(R, k)), w;
  }
  updateDOM(E, w, k) {
    const ge = this.__language, Be = E.__language;
    return ge ? ge !== Be && (w.setAttribute(F, ge), this.__isSyntaxHighlightSupported && w.setAttribute(R, ge)) : Be && (w.removeAttribute(F), E.__isSyntaxHighlightSupported && w.removeAttribute(R)), !1;
  }
  exportDOM(E) {
    const w = document.createElement("pre");
    rt$1(w, E._config.theme.code), w.setAttribute("spellcheck", "false");
    const k = this.getLanguage();
    return k && (w.setAttribute(F, k), this.getIsSyntaxHighlightSupported() && w.setAttribute(R, k)), { element: w };
  }
  static importDOM() {
    return { code: (E) => E.textContent != null && (/\r?\n/.test(E.textContent) || J(E, "BR")) ? { conversion: q, priority: 1 } : null, div: () => ({ conversion: U, priority: 1 }), pre: () => ({ conversion: q, priority: 0 }), table: (E) => G(E) ? { conversion: W, priority: 3 } : null, td: (E) => {
      const w = E, k = w.closest("table");
      return w.classList.contains("js-file-line") || k && G(k) ? { conversion: X, priority: 3 } : null;
    }, tr: (E) => {
      const w = E.closest("table");
      return w && G(w) ? { conversion: X, priority: 3 } : null;
    } };
  }
  static importJSON(E) {
    return K().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setLanguage(E.language);
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage() };
  }
  insertNewAfter(E, w = !0) {
    const k = this.getChildren(), ge = k.length;
    if (ge >= 2 && k[ge - 1].getTextContent() === `
` && k[ge - 2].getTextContent() === `
` && E.isCollapsed() && E.anchor.key === this.__key && E.anchor.offset === ge) {
      k[ge - 1].remove(), k[ge - 2].remove();
      const Je = Bi();
      return this.insertAfter(Je, w), Je;
    }
    const { anchor: Be, focus: We } = E, je = (Be.isBefore(We) ? Be : We).getNode();
    if (sr(je)) {
      let Je = ut(je);
      const Qe = [];
      for (; ; ) if (ar(Je)) Qe.push(cr()), Je = Je.getNextSibling();
      else {
        if (!lt(Je)) break;
        {
          let Pn = 0;
          const ci = Je.getTextContent(), gt = Je.getTextContentSize();
          for (; Pn < gt && ci[Pn] === " "; ) Pn++;
          if (Pn !== 0 && Qe.push(st(" ".repeat(Pn))), Pn !== gt) break;
          Je = Je.getNextSibling();
        }
      }
      const Ze = je.splitText(Be.offset)[0], dt = Be.offset === 0 ? 0 : 1, Xe = Ze.getIndexWithinParent() + dt, Ar = je.getParentOrThrow(), tn = [Bn(), ...Qe];
      Ar.splice(Xe, 0, tn);
      const wr = Qe[Qe.length - 1];
      wr ? wr.select() : Be.offset === 0 ? Ze.selectPrevious() : Ze.getNextSibling().selectNext(0, 0);
    }
    if ($(je)) {
      const { offset: Je } = E.anchor;
      je.splice(Je, 0, [Bn()]), je.select(Je + 1, Je + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const E = Bi();
    return this.getChildren().forEach((w) => E.append(w)), this.replace(E), !0;
  }
  setLanguage(E) {
    const w = this.getWritable();
    return w.__language = E || void 0, w.__isSyntaxHighlightSupported = M(E), w;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
}
function K(T) {
  return go(new I(T));
}
function $(T) {
  return T instanceof I;
}
function q(T) {
  return { node: K(T.getAttribute(F)) };
}
function U(T) {
  const E = T, w = Q(E);
  return w || function(k) {
    let ge = k.parentElement;
    for (; ge !== null; ) {
      if (Q(ge)) return !0;
      ge = ge.parentElement;
    }
    return !1;
  }(E) ? { node: w ? K() : null } : { node: null };
}
function W() {
  return { node: K() };
}
function X() {
  return { node: null };
}
function Q(T) {
  return T.style.fontFamily.match("monospace") !== null;
}
function G(T) {
  return T.classList.contains("js-file-line-container");
}
class ot extends qn {
  constructor(E = "", w, k) {
    super(E, k), this.__highlightType = w;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(E) {
    return new ot(E.__text, E.__highlightType || void 0, E.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  setHighlightType(E) {
    const w = this.getWritable();
    return w.__highlightType = E || void 0, w;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(E) {
    const w = super.createDOM(E), k = it(E.theme, this.__highlightType);
    return rt$1(w, k), w;
  }
  updateDOM(E, w, k) {
    const ge = super.updateDOM(E, w, k), Be = it(k.theme, E.__highlightType), We = it(k.theme, this.__highlightType);
    return Be !== We && (Be && it$2(w, Be), We && rt$1(w, We)), ge;
  }
  static importJSON(E) {
    return st().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setHighlightType(E.highlightType);
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType() };
  }
  setFormat(E) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return K();
  }
}
function it(T, E) {
  return E && T && T.codeHighlight && T.codeHighlight[E];
}
function st(T = "", E) {
  return go(new ot(T, E));
}
function lt(T) {
  return T instanceof ot;
}
function ct(T, E) {
  let w = T;
  for (let k = nl(T, E); k && (lt(k.origin) || ar(k.origin)); k = ct$2(k)) w = k.origin;
  return w;
}
function ut(T) {
  return ct(T, "previous");
}
const we = /^(\d+(?:\.\d+)?)px$/, be = { BOTH: 3, NO_STATUS: 0, ROW: 1 };
class ye extends mi {
  static getType() {
    return "tablecell";
  }
  static clone(E) {
    return new ye(E.__headerState, E.__colSpan, E.__width, E.__key);
  }
  afterCloneFrom(E) {
    super.afterCloneFrom(E), this.__rowSpan = E.__rowSpan, this.__backgroundColor = E.__backgroundColor, this.__verticalAlign = E.__verticalAlign;
  }
  static importDOM() {
    return { td: (E) => ({ conversion: xe, priority: 0 }), th: (E) => ({ conversion: xe, priority: 0 }) };
  }
  static importJSON(E) {
    return ve().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setHeaderStyles(E.headerState).setColSpan(E.colSpan || 1).setRowSpan(E.rowSpan || 1).setWidth(E.width || void 0).setBackgroundColor(E.backgroundColor || null).setVerticalAlign(E.verticalAlign || void 0);
  }
  constructor(E = be.NO_STATUS, w = 1, k, ge) {
    super(ge), this.__colSpan = w, this.__rowSpan = 1, this.__headerState = E, this.__width = k, this.__backgroundColor = null, this.__verticalAlign = void 0;
  }
  createDOM(E) {
    const w = document.createElement(this.getTag());
    return this.__width && (w.style.width = `${this.__width}px`), this.__colSpan > 1 && (w.colSpan = this.__colSpan), this.__rowSpan > 1 && (w.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (w.style.backgroundColor = this.__backgroundColor), Ne(this.__verticalAlign) && (w.style.verticalAlign = this.__verticalAlign), rt$1(w, E.theme.tableCell, this.hasHeader() && E.theme.tableCellHeader), w;
  }
  exportDOM(E) {
    const w = super.exportDOM(E);
    if (To(w.element)) {
      const k = w.element;
      k.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), k.style.border = "1px solid black", this.__colSpan > 1 && (k.colSpan = this.__colSpan), this.__rowSpan > 1 && (k.rowSpan = this.__rowSpan), k.style.width = `${this.getWidth() || 75}px`, k.style.verticalAlign = this.getVerticalAlign() || "top", k.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (k.style.backgroundColor = "#f2f3f5");
    }
    return w;
  }
  exportJSON() {
    return { ...super.exportJSON(), ...Ne(this.__verticalAlign) && { verticalAlign: this.__verticalAlign }, backgroundColor: this.getBackgroundColor(), colSpan: this.__colSpan, headerState: this.__headerState, rowSpan: this.__rowSpan, width: this.getWidth() };
  }
  getColSpan() {
    return this.getLatest().__colSpan;
  }
  setColSpan(E) {
    const w = this.getWritable();
    return w.__colSpan = E, w;
  }
  getRowSpan() {
    return this.getLatest().__rowSpan;
  }
  setRowSpan(E) {
    const w = this.getWritable();
    return w.__rowSpan = E, w;
  }
  getTag() {
    return this.hasHeader() ? "th" : "td";
  }
  setHeaderStyles(E, w = be.BOTH) {
    const k = this.getWritable();
    return k.__headerState = E & w | k.__headerState & ~w, k;
  }
  getHeaderStyles() {
    return this.getLatest().__headerState;
  }
  setWidth(E) {
    const w = this.getWritable();
    return w.__width = E, w;
  }
  getWidth() {
    return this.getLatest().__width;
  }
  getBackgroundColor() {
    return this.getLatest().__backgroundColor;
  }
  setBackgroundColor(E) {
    const w = this.getWritable();
    return w.__backgroundColor = E, w;
  }
  getVerticalAlign() {
    return this.getLatest().__verticalAlign;
  }
  setVerticalAlign(E) {
    const w = this.getWritable();
    return w.__verticalAlign = E || void 0, w;
  }
  toggleHeaderStyle(E) {
    const w = this.getWritable();
    return (w.__headerState & E) === E ? w.__headerState -= E : w.__headerState += E, w;
  }
  hasHeaderState(E) {
    return (this.getHeaderStyles() & E) === E;
  }
  hasHeader() {
    return this.getLatest().__headerState !== be.NO_STATUS;
  }
  updateDOM(E) {
    return E.__headerState !== this.__headerState || E.__width !== this.__width || E.__colSpan !== this.__colSpan || E.__rowSpan !== this.__rowSpan || E.__backgroundColor !== this.__backgroundColor || E.__verticalAlign !== this.__verticalAlign;
  }
  isShadowRoot() {
    return !0;
  }
  collapseAtStart() {
    return !0;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function Ne(T) {
  return T === "middle" || T === "bottom";
}
function xe(T) {
  const E = T, w = T.nodeName.toLowerCase();
  let k;
  we.test(E.style.width) && (k = parseFloat(E.style.width));
  const ge = ve(w === "th" ? be.ROW : be.NO_STATUS, E.colSpan, k);
  ge.__rowSpan = E.rowSpan;
  const Be = E.style.backgroundColor;
  Be !== "" && (ge.__backgroundColor = Be);
  const We = E.style.verticalAlign;
  Ne(We) && (ge.__verticalAlign = We);
  const je = E.style, Je = (je && je.textDecoration || "").split(" "), Qe = je.fontWeight === "700" || je.fontWeight === "bold", Ze = Je.includes("line-through"), dt = je.fontStyle === "italic", Xe = Je.includes("underline");
  return { after: (Ar) => {
    const tn = [];
    let wr = null;
    const Pn = () => {
      if (wr) {
        const ci = wr.getFirstChild();
        Wn(ci) && wr.getChildrenSize() === 1 && ci.remove();
      }
    };
    for (const ci of Ar) ao(ci) || sr(ci) || Wn(ci) ? (sr(ci) && (Qe && ci.toggleFormat("bold"), Ze && ci.toggleFormat("strikethrough"), dt && ci.toggleFormat("italic"), Xe && ci.toggleFormat("underline")), wr ? wr.append(ci) : (wr = Bi().append(ci), tn.push(wr))) : (tn.push(ci), Pn(), wr = null);
    return Pn(), tn.length === 0 && tn.push(Bi()), tn;
  }, node: ge };
}
function ve(T = be.NO_STATUS, E = 1, w) {
  return go(new ye(T, E, w));
}
function Re(T) {
  return T instanceof ye;
}
function Fe(T, ...E) {
  const w = new URL("https://lexical.dev/docs/error"), k = new URLSearchParams();
  k.append("code", T);
  for (const ge of E) k.append("v", ge);
  throw w.search = k.toString(), Error(`Minified Lexical error #${T}; visit ${w.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
class Oe extends mi {
  static getType() {
    return "tablerow";
  }
  static clone(E) {
    return new Oe(E.__height, E.__key);
  }
  static importDOM() {
    return { tr: (E) => ({ conversion: Ae, priority: 0 }) };
  }
  static importJSON(E) {
    return Ke().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setHeight(E.height);
  }
  constructor(E, w) {
    super(w), this.__height = E;
  }
  exportJSON() {
    const E = this.getHeight();
    return { ...super.exportJSON(), ...E === void 0 ? void 0 : { height: E } };
  }
  createDOM(E) {
    const w = document.createElement("tr");
    return this.__height && (w.style.height = `${this.__height}px`), rt$1(w, E.theme.tableRow), w;
  }
  extractWithChild(E, w, k) {
    return k === "html";
  }
  isShadowRoot() {
    return !0;
  }
  setHeight(E) {
    const w = this.getWritable();
    return w.__height = E, w;
  }
  getHeight() {
    return this.getLatest().__height;
  }
  updateDOM(E) {
    return E.__height !== this.__height;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function Ae(T) {
  const E = T;
  let w;
  return we.test(E.style.height) && (w = parseFloat(E.style.height)), { after: (k) => _t$1(k, Re), node: Ke(w) };
}
function Ke(T) {
  return go(new Oe(T));
}
function Ee(T) {
  return T instanceof Oe;
}
const ke = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Me = ke && "documentMode" in document ? document.documentMode : null;
ke && "InputEvent" in window && !Me && new window.InputEvent("input");
function ht(T, E, w) {
  const k = [];
  let ge = null, Be = null;
  function We(Je) {
    let Qe = k[Je];
    return Qe === void 0 && (k[Je] = Qe = []), Qe;
  }
  const je = T.getChildren();
  for (let Je = 0; Je < je.length; Je++) {
    const Qe = je[Je];
    Ee(Qe) || Fe(209);
    const Ze = We(Je);
    for (let dt = Qe.getFirstChild(), Xe = 0; dt != null; dt = dt.getNextSibling()) {
      for (Re(dt) || Fe(147); Ze[Xe] !== void 0; ) Xe++;
      const Ar = { cell: dt, startColumn: Xe, startRow: Je }, { __rowSpan: tn, __colSpan: wr } = dt;
      for (let Pn = 0; Pn < tn && !(Je + Pn >= je.length); Pn++) {
        const ci = We(Je + Pn);
        for (let gt = 0; gt < wr; gt++) ci[Xe + gt] = Ar;
      }
    }
  }
  return [k, ge, Be];
}
function vt(T) {
  return To(T) && T.nodeName === "TABLE";
}
function Ft(T, E) {
  for (let w = E, k = null; w !== null; w = w.getParent()) {
    if (T.is(w)) return k;
    Re(w) && (k = w);
  }
  return null;
}
function on(T, E, w) {
  return Ft(T, ks(E, w));
}
function rn(T, E, w) {
  if (!E.theme.tableAlignment) return;
  const k = [], ge = [];
  for (const Be of ["center", "right"]) {
    const We = E.theme.tableAlignment[Be];
    We && (Be === w ? ge : k).push(We);
  }
  it$2(T, ...k), rt$1(T, ...ge);
}
const ln = /* @__PURE__ */ new WeakSet();
function sn(T = Oo()) {
  return ln.has(T);
}
class an extends mi {
  static getType() {
    return "table";
  }
  getColWidths() {
    return this.getLatest().__colWidths;
  }
  setColWidths(E) {
    const w = this.getWritable();
    return w.__colWidths = E, w;
  }
  static clone(E) {
    return new an(E.__key);
  }
  afterCloneFrom(E) {
    super.afterCloneFrom(E), this.__colWidths = E.__colWidths, this.__rowStriping = E.__rowStriping, this.__frozenColumnCount = E.__frozenColumnCount, this.__frozenRowCount = E.__frozenRowCount;
  }
  static importDOM() {
    return { table: (E) => ({ conversion: hn, priority: 1 }) };
  }
  static importJSON(E) {
    return dn().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setRowStriping(E.rowStriping || !1).setFrozenColumns(E.frozenColumnCount || 0).setFrozenRows(E.frozenRowCount || 0).setColWidths(E.colWidths);
  }
  constructor(E) {
    super(E), this.__rowStriping = !1, this.__frozenColumnCount = 0, this.__frozenRowCount = 0;
  }
  exportJSON() {
    return { ...super.exportJSON(), colWidths: this.getColWidths(), frozenColumnCount: this.__frozenColumnCount ? this.__frozenColumnCount : void 0, frozenRowCount: this.__frozenRowCount ? this.__frozenRowCount : void 0, rowStriping: this.__rowStriping ? this.__rowStriping : void 0 };
  }
  extractWithChild(E, w, k) {
    return k === "html";
  }
  getDOMSlot(E) {
    const w = vt(E) ? E : E.querySelector("table");
    return vt(w) || Fe(229), super.getDOMSlot(E).withElement(w).withAfter(w.querySelector("colgroup"));
  }
  createDOM(E, w) {
    const k = document.createElement("table");
    this.__style && (k.style.cssText = this.__style);
    const ge = document.createElement("colgroup");
    if (k.appendChild(ge), Io(ge), rt$1(k, E.theme.table), this.updateTableElement(null, k, E), sn(w)) {
      const Be = document.createElement("div"), We = E.theme.tableScrollableWrapper;
      return We ? rt$1(Be, We) : Be.style.cssText = "overflow-x: auto;", Be.appendChild(k), this.updateTableWrapper(null, Be, k, E), Be;
    }
    return k;
  }
  updateTableWrapper(E, w, k, ge) {
    this.__frozenColumnCount !== (E ? E.__frozenColumnCount : 0) && function(Be, We, je, Je) {
      Je > 0 ? (rt$1(Be, je.theme.tableFrozenColumn), We.setAttribute("data-lexical-frozen-column", "true")) : (it$2(Be, je.theme.tableFrozenColumn), We.removeAttribute("data-lexical-frozen-column"));
    }(w, k, ge, this.__frozenColumnCount), this.__frozenRowCount !== (E ? E.__frozenRowCount : 0) && function(Be, We, je, Je) {
      Je > 0 ? (rt$1(Be, je.theme.tableFrozenRow), We.setAttribute("data-lexical-frozen-row", "true")) : (it$2(Be, je.theme.tableFrozenRow), We.removeAttribute("data-lexical-frozen-row"));
    }(w, k, ge, this.__frozenRowCount);
  }
  updateTableElement(E, w, k) {
    this.__style !== (E ? E.__style : "") && (w.style.cssText = this.__style), this.__rowStriping !== (!!E && E.__rowStriping) && function(ge, Be, We) {
      We ? (rt$1(ge, Be.theme.tableRowStriping), ge.setAttribute("data-lexical-row-striping", "true")) : (it$2(ge, Be.theme.tableRowStriping), ge.removeAttribute("data-lexical-row-striping"));
    }(w, k, this.__rowStriping), function(ge, Be, We, je) {
      const Je = ge.querySelector("colgroup");
      if (!Je) return;
      const Qe = [];
      for (let Ze = 0; Ze < We; Ze++) {
        const dt = document.createElement("col"), Xe = je && je[Ze];
        Xe && (dt.style.width = `${Xe}px`), Qe.push(dt);
      }
      Je.replaceChildren(...Qe);
    }(w, 0, this.getColumnCount(), this.getColWidths()), rn(w, k, this.getFormatType());
  }
  updateDOM(E, w, k) {
    const ge = this.getDOMSlot(w).element;
    return w === ge === sn() || (To(Be = w) && Be.nodeName === "DIV" && this.updateTableWrapper(E, w, ge, k), this.updateTableElement(E, ge, k), !1);
    var Be;
  }
  exportDOM(E) {
    const w = super.exportDOM(E), { element: k } = w;
    return { after: (ge) => {
      if (w.after && (ge = w.after(ge)), !vt(ge) && To(ge) && (ge = ge.querySelector("table")), !vt(ge)) return null;
      rn(ge, E._config, this.getFormatType());
      const [Be] = ht(this), We = /* @__PURE__ */ new Map();
      for (const Ze of Be) for (const dt of Ze) {
        const Xe = dt.cell.getKey();
        We.has(Xe) || We.set(Xe, { colSpan: dt.cell.getColSpan(), startColumn: dt.startColumn });
      }
      const je = /* @__PURE__ */ new Set();
      for (const Ze of ge.querySelectorAll(":scope > tr > [data-temporary-table-cell-lexical-key]")) {
        const dt = Ze.getAttribute("data-temporary-table-cell-lexical-key");
        if (dt) {
          const Xe = We.get(dt);
          if (Ze.removeAttribute("data-temporary-table-cell-lexical-key"), Xe) {
            We.delete(dt);
            for (let Ar = 0; Ar < Xe.colSpan; Ar++) je.add(Ar + Xe.startColumn);
          }
        }
      }
      const Je = ge.querySelector(":scope > colgroup");
      if (Je) {
        const Ze = Array.from(ge.querySelectorAll(":scope > colgroup > col")).filter((dt, Xe) => je.has(Xe));
        Je.replaceChildren(...Ze);
      }
      const Qe = ge.querySelectorAll(":scope > tr");
      if (Qe.length > 0) {
        const Ze = document.createElement("tbody");
        for (const dt of Qe) Ze.appendChild(dt);
        ge.append(Ze);
      }
      return ge;
    }, element: !vt(k) && To(k) ? k.querySelector("table") : k };
  }
  canBeEmpty() {
    return !1;
  }
  isShadowRoot() {
    return !0;
  }
  getCordsFromCellNode(E, w) {
    const { rows: k, domRows: ge } = w;
    for (let Be = 0; Be < k; Be++) {
      const We = ge[Be];
      if (We != null) for (let je = 0; je < We.length; je++) {
        const Je = We[je];
        if (Je == null) continue;
        const { elem: Qe } = Je, Ze = on(this, Qe);
        if (Ze !== null && E.is(Ze)) return { x: je, y: Be };
      }
    }
    throw new Error("Cell not found in table.");
  }
  getDOMCellFromCords(E, w, k) {
    const { domRows: ge } = k, Be = ge[w];
    if (Be == null) return null;
    const We = Be[E < Be.length ? E : Be.length - 1];
    return We ?? null;
  }
  getDOMCellFromCordsOrThrow(E, w, k) {
    const ge = this.getDOMCellFromCords(E, w, k);
    if (!ge) throw new Error("Cell not found at cords.");
    return ge;
  }
  getCellNodeFromCords(E, w, k) {
    const ge = this.getDOMCellFromCords(E, w, k);
    if (ge == null) return null;
    const Be = ks(ge.elem);
    return Re(Be) ? Be : null;
  }
  getCellNodeFromCordsOrThrow(E, w, k) {
    const ge = this.getCellNodeFromCords(E, w, k);
    if (!ge) throw new Error("Node at cords not TableCellNode.");
    return ge;
  }
  getRowStriping() {
    return !!this.getLatest().__rowStriping;
  }
  setRowStriping(E) {
    const w = this.getWritable();
    return w.__rowStriping = E, w;
  }
  setFrozenColumns(E) {
    const w = this.getWritable();
    return w.__frozenColumnCount = E, w;
  }
  getFrozenColumns() {
    return this.getLatest().__frozenColumnCount;
  }
  setFrozenRows(E) {
    const w = this.getWritable();
    return w.__frozenRowCount = E, w;
  }
  getFrozenRows() {
    return this.getLatest().__frozenRowCount;
  }
  canSelectBefore() {
    return !0;
  }
  canIndent() {
    return !1;
  }
  getColumnCount() {
    const E = this.getFirstChild();
    if (!E) return 0;
    let w = 0;
    return E.getChildren().forEach((k) => {
      Re(k) && (w += k.getColSpan());
    }), w;
  }
}
function hn(T) {
  const E = dn();
  T.hasAttribute("data-lexical-row-striping") && E.setRowStriping(!0), T.hasAttribute("data-lexical-frozen-column") && E.setFrozenColumns(1), T.hasAttribute("data-lexical-frozen-row") && E.setFrozenRows(1);
  const w = T.querySelector(":scope > colgroup");
  if (w) {
    let k = [];
    for (const ge of w.querySelectorAll(":scope > col")) {
      let Be = ge.style.width || "";
      if (!we.test(Be) && (Be = ge.getAttribute("width") || "", !/^\d+$/.test(Be))) {
        k = void 0;
        break;
      }
      k.push(parseFloat(Be));
    }
    k && E.setColWidths(k);
  }
  return { after: (k) => _t$1(k, Ee), node: E };
}
function dn() {
  return go(new an());
}
const h = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class g extends mi {
  static getType() {
    return "link";
  }
  static clone(E) {
    return new g(E.__url, { rel: E.__rel, target: E.__target, title: E.__title }, E.__key);
  }
  constructor(E = "", w = {}, k) {
    super(k);
    const { target: ge = null, rel: Be = null, title: We = null } = w;
    this.__url = E, this.__target = ge, this.__rel = Be, this.__title = We;
  }
  createDOM(E) {
    const w = document.createElement("a");
    return this.updateLinkDOM(null, w, E), rt$1(w, E.theme.link), w;
  }
  updateLinkDOM(E, w, k) {
    if (vo(w)) {
      E && E.__url === this.__url || (w.href = this.sanitizeUrl(this.__url));
      for (const ge of ["target", "rel", "title"]) {
        const Be = `__${ge}`, We = this[Be];
        E && E[Be] === We || (We ? w[ge] = We : w.removeAttribute(ge));
      }
    }
  }
  updateDOM(E, w, k) {
    return this.updateLinkDOM(E, w, k), !1;
  }
  static importDOM() {
    return { a: (E) => ({ conversion: f, priority: 1 }) };
  }
  static importJSON(E) {
    return d().updateFromJSON(E);
  }
  updateFromJSON(E) {
    return super.updateFromJSON(E).setURL(E.url).setRel(E.rel || null).setTarget(E.target || null).setTitle(E.title || null);
  }
  sanitizeUrl(E) {
    E = S(E);
    try {
      const w = new URL(S(E));
      if (!h.has(w.protocol)) return "about:blank";
    } catch {
      return E;
    }
    return E;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), url: this.getURL() };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(E) {
    const w = this.getWritable();
    return w.__url = E, w;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(E) {
    const w = this.getWritable();
    return w.__target = E, w;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(E) {
    const w = this.getWritable();
    return w.__rel = E, w;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(E) {
    const w = this.getWritable();
    return w.__title = E, w;
  }
  insertNewAfter(E, w = !0) {
    const k = d(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(k, w), k;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(E, w, k) {
    if (!_r(w)) return !1;
    const ge = w.anchor.getNode(), Be = w.focus.getNode();
    return this.isParentOf(ge) && this.isParentOf(Be) && w.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
}
function f(T) {
  let E = null;
  if (vo(T)) {
    const w = T.textContent;
    (w !== null && w !== "" || T.children.length > 0) && (E = d(T.getAttribute("href") || "", { rel: T.getAttribute("rel"), target: T.getAttribute("target"), title: T.getAttribute("title") }));
  }
  return { node: E };
}
function d(T = "", E) {
  return go(new g(T, E));
}
const L = /^\+?[0-9\s()-]{5,}$/;
function S(T) {
  return T.match(/^[a-z][a-z0-9+.-]*:/i) || T.match(/^[/#.]/) ? T : T.includes("@") ? `mailto:${T}` : L.test(T) ? `tel:${T}` : `https://${T}`;
}
const l = {
  center: "[-94.5, 41.25]",
  zoom: "8.3",
  datasetId: "ct-ch4-monthgrid-v2023",
  layerId: "total-ch4",
  dateTime: "2020-12-31",
  compareDateTime: "2015-12-31",
  compareLabel: "2020 VS 2015",
  attrUrl: "",
  attrAuthor: "",
  caption: ""
}, DataContext = createContext({});
function updateMapLabels(data) {
  return data.map((dataset) => (dataset.metadata && dataset.metadata.layers && dataset.metadata.layers.forEach((layer) => {
    layer.mapLabel && (layer.mapLabel = eval(layer.mapLabel)), layer.compare && layer.compare.mapLabel && (layer.compare.mapLabel = eval(layer.compare.mapLabel));
  }), dataset));
}
function DataProvider({
  initialDatasets: T = void 0,
  children: E
}) {
  const [w, k] = useState(
    updateMapLabels(T)
  ), ge = {
    datasets: w,
    setDatasets: k
  };
  return /* @__PURE__ */ jsx(DataContext.Provider, { value: ge, children: /* @__PURE__ */ jsx(ReactQueryProvider, { children: E }) });
}
function VedaUIConfigProvider({ children: T }) {
  return /* @__PURE__ */ jsx(
    VedaUIProvider$1,
    {
      config: {
        envMapboxToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
        envApiStacEndpoint: process.env.NEXT_PUBLIC_API_STAC_ENDPOINT ?? "",
        envApiRasterEndpoint: process.env.NEXT_PUBLIC_API_RASTER_ENDPOINT ?? "",
        navigation: {
          LinkComponent: Link,
          linkProps: {
            pathAttributeKeyName: "href"
          }
        }
      },
      children: T
    }
  );
}
const VEDA_OVERRIDE_THEME = {
  zIndices: {
    hide: -1,
    docked: 10,
    sticky: 900,
    dropdown: 1550,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  color: {
    base: "#2c3e50",
    primary: "#d83933",
    link: "#6f3331",
    danger: "#FC3D21",
    infographicA: "#fcab10",
    infographicB: "#f4442e",
    infographicC: "#b62b6e",
    infographicD: "#2ca58d",
    infographicE: "#2276ac"
  },
  type: {
    base: {
      leadSize: "1.25rem",
      extrabold: "800",
      line: "inherit",
      // Increments to the type.base.size for each media breakpoint.
      sizeIncrement: {
        small: "0rem",
        medium: "0rem",
        large: "0.25rem",
        xlarge: "0.25rem"
      }
    },
    heading: {
      settings: '"wdth" 100, "wght" 700'
    }
  },
  layout: {
    min: "384px",
    max: "1440px",
    glspMultiplier: {
      xsmall: 1,
      small: 1,
      medium: 1.5,
      large: 2,
      xlarge: 2
    }
  }
};
function DevseedUIThemeProvider({
  children: T
}) {
  return /* @__PURE__ */ jsx(DevseedUiThemeProvider$1, { theme: createUITheme(VEDA_OVERRIDE_THEME), children: T });
}
const MapBlock = dynamic(() => import("./index-CQRLZB_T.js").then((T) => T.MapBlock), {
  ssr: !1,
  loading: () => /* @__PURE__ */ jsx("div", { className: "h-[250px] flex items-center justify-center", children: "Loading map..." })
});
function ClientMapBlock(T) {
  const E = T.datasets || T.allAvailableDatasets || [], w = transformToVedaData(E);
  return /* @__PURE__ */ jsx(DevseedUIThemeProvider, { children: /* @__PURE__ */ jsx(VedaUIConfigProvider, { children: /* @__PURE__ */ jsx(DataProvider, { initialDatasets: [E], children: /* @__PURE__ */ jsx("div", { className: "relative w-full h-[250px]", children: /* @__PURE__ */ jsx(
    MapBlock,
    {
      ...T,
      datasets: w
    }
  ) }) }) }) });
}
const createPlaceholderNode = () => ({
  __type: "placeholder",
  __key: "placeholder",
  __parent: null,
  __prev: null,
  __next: null
}), MapEditorWithPreview = (T) => {
  useMapContext();
  const [E, w] = useState(!0), k = () => {
    try {
      const ji = T.mdastNode || T?.props?.mdastNode;
      if (!ji?.attributes)
        return console.warn("Missing mdastNode attributes, using default props"), { ...l };
      const _s = ji.attributes.reduce(
        (Hs, ro) => (ro && ro.name && ro.value !== void 0 && (Hs[ro.name] = ro.value), Hs),
        {}
      );
      return _s.center && _s.layerId && _s.zoom && _s.datasetId && _s.dateTime ? { ..._s } : { ...l };
    } catch (ji) {
      return console.error("Error in initialMapProps:", ji), { ...l };
    }
  }, [ge, Be] = useState(k()), [We, je] = useState({
    defaultDateFormat: "%Y-%m-%d",
    dateTime: ge.dateTime,
    compareDateTime: ge.compareDateTime,
    center: ge.center
  }), [Je, Qe] = useState({
    dateTime: !1,
    compareDateTime: !1,
    center: !1
  }), {
    center: Ze,
    layerId: dt,
    zoom: Xe,
    datasetId: Ar,
    dateTime: tn,
    compareDateTime: wr,
    compareLabel: Pn,
    attrAuthor: ci,
    attrUrl: gt,
    caption: St
  } = ge, Jr = typeof Ze == "string" ? Ze.startsWith("[") ? JSON.parse(Ze) : [-94.5, 41.25] : Ze, Fi = typeof Xe == "string" ? parseFloat(Xe) || 8.3 : Xe, Wr = useMdastNodeUpdater(), Di = T.mdastNode || T?.props?.mdastNode, $i = T.allAvailableDatasets, Oi = React.useMemo(
    () => $i?.map((ji) => ({
      value: ji.metadata.id,
      label: ji.metadata.name
    })) || [],
    [$i]
  ), Mi = React.useMemo(
    () => $i?.find((ji) => ji.metadata.id === Ar),
    [$i, Ar]
  ), Ui = React.useMemo(
    () => Mi?.metadata.layers.map((ji) => ({
      value: ji.id,
      label: ji.name
    })) || [],
    [Mi]
  ), Vi = Object.entries(ge).map(([ji, _s]) => ({
    type: "mdxJsxAttribute",
    name: ji,
    value: String(_s)
  }));
  useEffect(() => {
    setTimeout(() => {
      Wr({ ...Di, attributes: Vi });
    }, 0);
  }, [ge]), useEffect(() => {
    Mi && Mi.metadata.layers.length > 0 && (Mi.metadata.layers.some(
      (_s) => _s.id === dt
    ) || Be((_s) => ({
      ..._s,
      layerId: Mi.metadata.layers[0].id
    })));
  }, [Ar, Mi, dt]);
  const Zi = [
    { fieldName: "*Dataset ID", propName: "datasetId", isRequired: !0 },
    { fieldName: "*Layer ID", propName: "layerId", isRequired: !0 },
    {
      fieldName: "*Center",
      propName: "center",
      isRequired: !0,
      validateAgainst: "centerFormat"
    },
    { fieldName: "*Zoom", propName: "zoom", isRequired: !0 },
    {
      fieldName: "*Date Time",
      propName: "dateTime",
      isRequired: !0,
      validateAgainst: "defaultDateFormat"
    }
  ], Ji = [
    { fieldName: "Compare Label", propName: "compareLabel" },
    {
      fieldName: "Compare Date",
      propName: "compareDateTime",
      validateAgainst: "defaultDateFormat"
    }
  ], Us = [
    { fieldName: "Author Attribution", propName: "attrAuthor" },
    { fieldName: "Attribution Url", propName: "attrUrl" },
    {
      fieldName: "Caption",
      propName: "caption",
      type: "area",
      customClass: "flex flex-fill"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: " border-05 border-primary rounded-lg overflow-hidden shadow-sm bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "padding-2 grid-container w-full maxw-full margin-2 bg-gray-10 radius-lg", children: [
      E && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: `font-medium ${E ? "text-blue-700" : "text-gray-500"} text-sm`,
            children: "Map Properties"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid-row flex-align-end grid-gap-2", children: Zi.map((ji) => {
          const { propName: _s } = ji, Hs = {
            ...ji,
            value: ge[_s],
            onChange: Be,
            componentProps: ge,
            draftInputs: We,
            inputErrors: Je,
            setInputErrors: Qe,
            setDraftInputs: je,
            options: _s === "datasetId" ? Oi : _s === "layerId" ? Ui : void 0
          };
          return /* @__PURE__ */ jsx(InputField, { ...Hs }, _s);
        }) }),
        /* @__PURE__ */ jsx("h4", { children: "Map Comparison" }),
        /* @__PURE__ */ jsx("div", { className: "grid-row flex-align-end grid-gap-2", children: Ji.map((ji) => {
          const _s = {
            ...ji,
            value: ge[ji.propName],
            onChange: Be,
            componentProps: ge,
            draftInputs: We,
            setDraftInputs: je,
            inputErrors: Je,
            setInputErrors: Qe
          };
          return /* @__PURE__ */ jsx(InputField, { ..._s }, ji.propName);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "grid-row flex-align-start grid-gap-2", children: Us.map((ji) => {
          const _s = {
            ...ji,
            value: ge[ji.propName],
            onChange: Be,
            componentProps: ge
          };
          return /* @__PURE__ */ jsx(InputField, { ..._s }, ji.propName);
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `${E && "padding-top-2"}`, children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          onClick: () => w(!E),
          children: E ? "Collapse Map Editor" : "Open Map Editor"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
      ClientMapBlock,
      {
        ...ge,
        center: Jr,
        zoom: Fi,
        allAvailableDatasets: $i
      },
      `map-${Ar}-${dt}-${JSON.stringify(Jr)}-${Fi}-${tn}`
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("figcaption", { className: "text-gray-30 flex padding-top-2", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("p", { className: "display-inline", children: ge.caption }) }) }) })
  ] }) });
}, MapEditorWrapper = (T) => {
  const E = T.parentEditor, w = {
    namespace: `MapEditor-${T.mdastNode.name}`,
    editable: !1,
    parentEditor: E,
    nodes: [
      Nt,
      Dt,
      rt,
      Y,
      I,
      an,
      Oe,
      ye,
      g
    ],
    onError: (k) => {
      console.error("Map Sandbox Editor Error:", k);
    }
  };
  return /* @__PURE__ */ jsx(f$1, { initialConfig: w, children: /* @__PURE__ */ jsx(
    MapContextProvider,
    {
      value: {
        parentEditor: E,
        lexicalNode: T.node || createPlaceholderNode()
      },
      children: /* @__PURE__ */ jsx(MapEditorWithPreview, { ...T })
    }
  ) });
};
export {
  ClientMapBlock,
  MapBlockInteractiveEditor,
  MapEditorWrapper
};
//# sourceMappingURL=index.js.map
