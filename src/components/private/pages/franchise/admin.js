import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Admin = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Admin - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "franchise/select",
      placeholder: "Franchise",
      name: "franchise",
      validation: "",
      showItem: "",
      default: "",
      label: "Franchise",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      placeholder: "User Name",
      name: "username",
      validation: "",
      default: "",
      tag: true,
      label: "User Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Name",
      name: "userDisplayName",
      validation: "",
      default: "",
      tag: true,
      label: "Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "email",
      placeholder: "E-Mail",
      name: "email",
      validation: "",
      default: "",
      tag: true,
      label: "E-Mail",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
      validation: "",
      default: "",
      tag: true,
      label: "Password",
      required: false,
      view: false,
      add: true,
      update: false,
    },
    {
      type: "hidden",
      apiType: "",
      selectApi: "",
      placeholder: "User Type",
      name: "userType",
      validation: "",
      showItem: "",
      default: "6459f25d7f6e9664fbd7486f",
      tag: true,
      label: "User Type",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        // actions={actions}
        api={`user`}
        // itemTitle={`label`}
        itemTitle={{ name: "name", type: "text", collection: "franchise" }}
        preFilter={{ userType: "6459f25d7f6e9664fbd7486f" }}
        shortName={`Admin`}
        formMode={`double`}
        attributes={attributes}
        {...props}
      ></ListTable>
    </Container>
  );
};

export default Layout(Admin);
