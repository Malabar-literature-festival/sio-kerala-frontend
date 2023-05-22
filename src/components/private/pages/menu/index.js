import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import { useTranslation } from "react-i18next";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
const Menu = (props) => {
  const { t } = useTranslation();
  const [attributes] = useState([
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
    },{
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
  //to update the page title
  useEffect(() => {
    document.title = `Menu - Diet Food Management Portal`;
  }, [t]);
  const [actions] = useState([{ element: "button", type: "subList", id: "sub-menu", itemTitle: "title", title: "Sub Mennu", attributes: timingAttributes, params: { api: `sub-menu`, parentReference: "menu", itemTitle: "label", shortName: "Sub Menu", addPrivilege: true, delPrivilege: true, updatePrivilege: true, customClass: "medium" } }]);
  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return (
    <Container className="noshadow">
      <ListTable {...props} actions={actions} api={`menu`} itemTitle={`label`} shortName={`Menu`} addPrivilege={true} delPrivilege={true} updatePrivilege={true} attributes={attributes}></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(Menu);
