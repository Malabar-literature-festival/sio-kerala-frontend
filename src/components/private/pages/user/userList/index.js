import React, { useEffect, useState } from "react";
// import { customAlphabet } from "nanoid";
//
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

// const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7);

const UserList = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `User List - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "hidden",
      placeholder: "CPR/Mobile",
      name: "username",
      validation: "",
      default: "username",
      label: "CPR/Mobile",
      required: true,
      view: false,
      add: false,
      update: true,
    },
    {
      type: "text",
      placeholder: "CPR/Mobile",
      name: "subscriber",
      showItem: "cprNumber",
      tag: true,
      validation: "",
      default: "",
      label: "CPR/Mobile",
      required: false,
      view: true,
      add: false,
      update: true,
    },
    // {
    //   type: "text",
    //   placeholder: "CPR/Mobile",
    //   name: "cprNumber",
    //   showItem: "",
    //   tag: true,
    //   validation: "",
    //   default: "",
    //   label: "CPR/Mobile",
    //   required: true,
    //   view: false,
    //   add: true,
    //   update: true,
    // },
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
      type: "select",
      placeholder: "Gender",
      name: "subscriber",
      showItem: "gender",
      tag: true,
      validation: "",
      default: "",
      label: "Gender",
      required: false,
      view: true,
      add: false,
      update: true,
      filter: false,
      apiType: "CSV",
      selectApi: "Male,Female",
    },
    {
      type: "select",
      placeholder: "Gender",
      name: "gender",
      showItem: "",
      tag: true,
      validation: "",
      default: "",
      label: "Gender",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
      apiType: "CSV",
      selectApi: "Male,Female",
    },
    {
      type: "date",
      apiType: "API",
      selectApi: "",
      placeholder: "DOB",
      name: "subscriber",
      showItem: "dateOfBirth",
      tag: true,
      validation: "",
      default: "",
      label: "DOB",
      required: true,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "date",
      placeholder: "YYYY/MM/DD",
      name: "dateOfBirth",
      validation: "",
      default: "",
      tag: true,
      label: "DOB",
      required: true,
      view: false,
      add: true,
      update: true,
    },
    {
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Address",
      name: "subscriber",
      validation: "",
      showItem: "address",
      tag: true,
      default: "",
      label: "Address",
      required: false,
      view: true,
      add: false,
      update: true,
    },
    {
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Address",
      name: "address",
      validation: "",
      showItem: "",
      tag: true,
      default: "",
      label: "Address",
      required: false,
      view: false,
      add: true,
      update: true,
    },
    {
      type: "hidden",
      apiType: "API",
      selectApi: "user-type/select",
      placeholder: "User Type",
      name: "userType",
      validation: "",
      showItem: "role",
      tag: true,
      default: "role",
      label: "User Type",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "user-type/select",
      placeholder: "Role",
      name: "userType",
      validation: "",
      showItem: "roleDisplayName",
      tag: true,
      default: "",
      label: "Role",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "image",
      placeholder: "Image",
      name: "userImage",
      validation: "",
      default: "",
      tag: true,
      label: "Image",
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
        api={`user`}
        // itemTitle={`userDisplayName`}
        itemTitle={{ name: "userDisplayName", type: "text", collection: "" }}
        shortName={`User`}
        // formMode={`single`}
        formMode={`double`}
        //
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(UserList);
