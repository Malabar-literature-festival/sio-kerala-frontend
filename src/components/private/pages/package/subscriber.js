import React, { useEffect, useState } from "react";
//
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

const Patient = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Patient List - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Fathername",
      name: "fathername",
      validation: "",
      default: "",
      tag: true,
      label: "Fathername",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Mothername",
      name: "mothername",
      validation: "",
      default: "",
      tag: true,
      label: "Mothername",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Nationality",
      name: "nationality",
      validation: "",
      default: "",
      tag: true,
      label: "Nationality",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Mobile Number",
      name: "mobileNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Mobile Number",
      required: true,
      view: true,
      add: true,
      update: true,
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
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "Gender",
      name: "gender",
      validation: "",
      default: "",
      tag: true,
      label: "Gender",
      showItem: "Gender",
      required: false,
      view: false,
      filter: false,
      add: true,
      update: false,
      apiType: "CSV",
      selectApi: "Male,Female",
    },
    // {
    //   type: "text",
    //   placeholder: "Email ID",
    //   name: "emailId",
    //   validation: "email",
    //   default: "",
    //   tag: true,
    //   label: "Email ID",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    {
      type: "text",
      placeholder: "Landmark",
      name: "landmark",
      validation: "",
      default: "",
      tag: true,
      label: "Landmark",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "Gender",
      name: "gender",
      validation: "",
      default: "",
      tag: true,
      label: "Gender",
      showItem: "Gender",
      required: false,
      view: true,
      filter: false,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "Male,Female",
    },
    {
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Address",
      name: "address",
      validation: "",
      showItem: "address",
      default: "",
      tag: true,
      label: "Address",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Occupation",
      name: "occupation",
      validation: "",
      default: "",
      tag: true,
      label: "Occupation",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Office Number",
      name: "officeNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Office Number",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Office Address",
      name: "officeAddress",
      validation: "",
      default: "",
      tag: true,
      label: "Office Address",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Marital Status",
      name: "maritalStatus",
      validation: "",
      default: "",
      tag: true,
      label: "Marital Status",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Number of Children",
      name: "numberOfChildren",
      validation: "",
      default: "",
      tag: true,
      label: "Number of Children",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  //   const [actions] = useState([
  //     {
  //       element: "button",
  //       type: "subItem",
  //       id: "patient-details",
  //       itemTitle: "username",
  //       title: "Details",
  //       attributes: details,
  //       // formMode: `double`,
  //       params: {
  //         api: `user/subscriber`,
  //         parentReference: "user",
  //         itemTitle: {
  //           name: "mobileNumber",
  //           type: "text",
  //           collection: "",
  //         },
  //         shortName: "Patient Details",
  //         addPrivilege: true,
  //         delPrivilege: true,
  //         updatePrivilege: true,
  //         customClass: "medium",
  //         formMode: `double`,
  //       },
  //     },
  //   ]);

  return (
    <Container className="noshadow">
      <ListTable
        // actions={actions}
        api={`user/subscriber`}
        // itemTitle={`userDisplayName`}
        itemTitle={{
          name: "userDisplayName",
          type: "text",
          collection: "user",
        }}
        // preFilter={{ userType: "6471b3849fb2b29fe045887b" }}
        shortName={`Subscriber`}
        // parentReference={"userType"}
        // referenceId={"6471b3849fb2b29fe045887b"}
        // formMode={`single`}
        formMode={`double`}
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
export default Layout(Patient);
