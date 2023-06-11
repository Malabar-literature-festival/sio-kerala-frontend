import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const VariantGroup = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `variant Group - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "variant Group",
      name: "variantGroupName",
      validation: "",
      default: "",
      title: true,
      // title when true it will show as title fild for the view, view should be true then only it will work
      label: "Variant Group Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [addVariantLevel] = useState([
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

  const [actions] = useState([
    {
      element: "button",
      type: "subList",
      id: "sub-menu",
      itemTitle: "title",
      title: "Variant Level",
      attributes: addVariantLevel,
      params: {
        api: `sub-menu`,
        parentReference: "menu",
        itemTitle: "label",
        shortName: "Sub Menu",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        actions={actions}
        api={`variant-group`}
        itemTitle={`label`}
        shortName={`Variant Group`}
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(VariantGroup);
