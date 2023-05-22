import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import { useTranslation } from "react-i18next";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
const User = (props) => {
  const { t } = useTranslation();
  const [attributes] = useState([
    {
      type: "text",
      placeholder: "firstName",
      name: "firstName",
      validation: "",
      default: "",
      label: "firstName",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "lastName",
      name: "lastName",
      validation: "",
      default: "",
      label: "lastName",
      required: true,
      view: true,
      add: true,
      update: true,
    },

    {
      type: "text",
      placeholder: "mobileNumber",
      name: "mobileNumber",
      validation: "mobile",
      default: "",
      label: "mobileNumber",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "status",
      name: "status",
      validation: "",
      default: "",
      label: "status",
      required: false,
      view: true,
      add: false,
      update: true,
      apiType: "CSV",
      selectApi: "Active,Inactive",
    },
    {
      type: "text",
      placeholder: "addedBy",
      name: "addedBy",
      validation: "",
      default: "",
      label: "addedBy",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "select",
      placeholder: "shift",
      name: "shift",
      validation: "",
      default: "",
      label: "shift",
      required: true,
      view: true,
      add: true,
      update: true,
      apiType: "API",
      selectApi: "shift/select",
    },
    {
      type: "select",
      placeholder: "place",
      name: "place",
      validation: "",
      default: "",
      label: "place",
      required: true,
      view: true,
      add: true,
      update: true,
      apiType: "API",
      selectApi: "place/select",
    },
  ]);
  //to update the page title
  useEffect(() => {
    document.title = `Users - Diet Food Management Portal`;
  }, [t]);

  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return (
    <Container className="noshadow">
      <ListTable {...props} api={`user`} itemTitle={`firstName`} shortName={`employee`} addPrivilege={true} delPrivilege={true} updatePrivilege={true} attributes={attributes}></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(User);
