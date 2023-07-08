import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const PackageManagement = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `PackageManagement - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Package Name",
      name: "packageName",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Package Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Description",
      name: "description",
      validation: "",
      default: "",
      tag: true,
      label: "Description",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Calories",
      name: "calories",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Calories",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Days",
      name: "days",
      validation: "",
      default: "",
      label: "Days",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "mealtime-category/select",
      placeholder: "Meal Time Category",
      name: "mealTimeCategory",
      showItem: "mealtimeCategoriesName",
      validation: "",
      default: "",
      tag: true,
      label: "Meal Time Category",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      placeholder: "Price",
      name: "price",
      validation: "",
      default: "",
      tag: true,
      label: "Price",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Offer Price",
      name: "offerPrice",
      validation: "",
      default: "",
      tag: true,
      label: "Offer Price",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "Expiry Date",
      name: "expiryDate",
      validation: "",
      default: "",
      tag: true,
      label: "Expiry Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Currency",
      name: "currency",
      validation: "",
      default: "",
      tag: true,
      label: "Currency",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Image",
      name: "packageImage",
      validation: "",
      default: "",
      tag: true,
      label: "Image",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Is Active",
      name: "isActive",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Is Active",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // actions={actions}
        api={`package`}
        // itemTitle={`label`}
        itemTitle={{ name: "packageName", type: "text", collection: "" }}
        shortName={`Package`}
        formMode={`double`}
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(PackageManagement);
