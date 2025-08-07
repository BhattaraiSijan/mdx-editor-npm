import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { usePublisher as a, insertJsx$ as n, Button as o } from "@mdxeditor/editor";
import { Icon as c } from "@trussworks/react-uswds";
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
}, d = {
  dataPath: "",
  dateFormat: "%Y-%m-%d",
  idKey: "id",
  xKey: "date",
  yKey: "value",
  yAxisLabel: "Value",
  xAxisLabel: "Date",
  highlightStart: "",
  highlightEnd: "",
  highlightLabel: "",
  availableDomain: "",
  altTitle: "Chart",
  colorScheme: "default",
  colors: "",
  altDesc: "A data visualization chart"
}, g = () => {
  const e = a(n);
  return /* @__PURE__ */ s(
    o,
    {
      onClick: () => {
        try {
          e({
            name: "MapBlock",
            kind: "flow",
            props: {
              datasetId: l.datasetId,
              layerId: l.layerId,
              dateTime: l.dateTime
            }
          });
        } catch (t) {
          console.error("Error inserting Map component:", t), alert("Could not insert Map component. See console for details.");
        }
      },
      title: "Insert Map",
      className: "text-sm display-flex flex-align-center padding-1",
      children: [
        /* @__PURE__ */ r(c.Map, { className: "margin-right-05 width-3 height-3", "aria-hidden": "true" }),
        "Add Map"
      ]
    }
  );
}, f = () => {
  const e = a(n);
  return /* @__PURE__ */ s(
    o,
    {
      onClick: () => {
        try {
          e({
            name: "Chart",
            kind: "flow",
            props: { ...d }
          });
        } catch (t) {
          console.error("Error inserting Chart component:", t), alert("Could not insert chart component. See console for details.");
        }
      },
      title: "Insert Line Graph",
      className: "text-sm display-flex flex-align-center padding-1",
      children: [
        /* @__PURE__ */ r(c.Insights, { className: "margin-right-05 width-3 height-3", "aria-hidden": "true" }),
        "line graph"
      ]
    }
  );
}, x = () => {
  const e = a(n);
  return /* @__PURE__ */ r(
    o,
    {
      onClick: () => {
        try {
          e({
            name: "Break",
            kind: "text",
            props: {}
          });
        } catch (t) {
          console.error("Error inserting Break component:", t), alert("Could not insert break component. See console for details.");
        }
      },
      title: "Insert Break",
      className: "text-sm display-flex flex-align-center padding-1",
      children: "Insert Break"
    }
  );
}, k = () => {
  const e = a(n);
  return /* @__PURE__ */ r(
    o,
    {
      onClick: () => {
        try {
          e({
            name: "iframe",
            kind: "flow",
            props: {
              src: "https://example.com",
              width: "100%",
              height: "400",
              frameBorder: "0",
              title: "Embedded Content"
            }
          });
        } catch (t) {
          console.error("Error inserting iframe component:", t), alert("Could not insert iframe. See console for details.");
        }
      },
      title: "Insert Iframe",
      className: "text-sm display-flex flex-align-center padding-1",
      children: "Insert Iframe"
    }
  );
};
export {
  d as DEFAULT_CHART_PROPS,
  l as DEFAULT_MAP_PROPS,
  k as InsertIframe,
  f as InsertLineGraph,
  g as InsertMapButton,
  x as InsertSectionBreak
};
//# sourceMappingURL=index.js.map
