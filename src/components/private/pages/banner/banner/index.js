import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Banner = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Banner - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      apiType: "",
      selectApi: "",
      placeholder: "Title",
      name: "title",
      showItem: "",
      validation: "",
      default: "",
      label: "Title",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "banner-type/select",
      placeholder: "Banner Type",
      name: "bannerType",
      showItem: "bannerTypesName",
      validation: "",
      default: "",
      label: "Banner Type",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "franchise/select",
      placeholder: "Franchise",
      name: "franchise",
      showItem: "name",
      validation: "",
      default: "",
      label: "Franchise",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      apiType: "",
      selectApi: "",
      placeholder: "URL",
      name: "link",
      showItem: "",
      validation: "",
      default: "",
      label: "URL",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "checkbox",
      placeholder: "Status",
      name: "status",
      validation: "",
      default: "false",
      label: "Status",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      apiType: "",
      selectApi: "",
      placeholder: "Banner Image",
      name: "bannerImage",
      showItem: "",
      validation: "",
      default: "",
      label: "Banner Image",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
  ]);
  const [timingAttributes] = useState([
    {
      type: "text",
      placeholder: "Label",
      name: "label",
      validation: "",
      default: "",
      label: "Label",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Sequence",
      name: "sequence",
      validation: "",
      default: "",
      label: "Sequence",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Icon",
      name: "icon",
      validation: "",
      default: "",
      label: "Icon",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Path",
      name: "path",
      validation: "",
      default: "",
      label: "Path",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Element Name",
      name: "element",
      validation: "",
      default: "",
      label: "Element Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Status",
      name: "status",
      validation: "",
      default: "true",
      label: "Status",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Is Link",
      name: "isLink",
      validation: "",
      default: "false",
      label: "Is Link",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        // actions={actions}
        api={`banner`}
        itemTitle={`Banner`}
        shortName={`Banner`}
        // formMode={`single`}
        formMode={`double`}
        //
        {...props}
        attributes={attributes}
      />
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(Banner);
