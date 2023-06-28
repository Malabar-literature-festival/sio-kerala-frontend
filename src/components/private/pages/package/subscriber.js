import React, { useEffect, useState } from "react";
//
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

const SubscriberPackage = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Subscriber Package List - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select",
      placeholder: "User",
      name: "user",
      showItem: "userDisplayName",
      validation: "",
      default: "",
      tag: true,
      label: "User",
      required: false,
      view: false,
      filter: false,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Email",
      name: "user",
      showItem: "email",
      validation: "",
      default: "",
      tag: true,
      label: "Email",
      required: false,
      view: true,
      filter: false,
      add: false,
      update: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "package/select",
      placeholder: "Package",
      name: "packageName",
      showItem: "packageName",
      validation: "",
      default: "",
      tag: true,
      label: "Package",
      required: false,
      view: true,
      filter: false,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "Start Date",
      name: "planStartDate",
      validation: "",
      default: "",
      tag: true,
      label: "Start Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "End Date",
      name: "planEndDate",
      validation: "",
      default: "",
      tag: true,
      label: "End Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Skipped Days Count",
      name: "skippedDaysCount",
      validation: "",
      default: "",
      tag: true,
      label: "Skipped Days Count",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    // {
    //   type: "text",
    //   placeholder: "Skipped Days",
    //   name: "skippedDays",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "Skipped Days",
    //   required: false,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    {
      type: "text",
      placeholder: "Skipped Days",
      name: "skippedDays",
      validation: "",
      default: "",
      tag: true,
      label: "Skipped Days",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Status",
      name: "isActive",
      validation: "",
      default: "",
      tag: true,
      label: "Status",
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
        api={`subscriber-package`}
        // itemTitle={`userDisplayName`}
        itemTitle={{
          name: "userDisplayName",
          type: "text",
          collection: "user",
        }}
        // preFilter={{ userType: "6471b3849fb2b29fe045887b" }}
        shortName={`Subscriber Package`}
        // parentReference={"userType"}
        // referenceId={"6471b3849fb2b29fe045887b"}
        // formMode={`single`}
        formMode={`double`}
        datefilter={true}
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
export default Layout(SubscriberPackage);
