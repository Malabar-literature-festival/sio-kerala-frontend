import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";

const AdmissionHistory = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Admission History - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Booking ID",
      name: "bookingId",
      title: true,
      validation: "",
      default: "",
      tag: true,
      label: "Booking ID",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select",
      placeholder: "User",
      name: "user",
      validation: "",
      showItem: "userDisplayName",
      default: "",
      tag: true,
      label: "User",
      required: true,
      view: true,
      add: true,
      update: false,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select",
      placeholder: "Dietician",
      name: "dietician",
      validation: "",
      showItem: "userDisplayName",
      default: "",
      tag: true,
      label: "Dietician",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: true,
    },
    {
      type: "select",
      placeholder: "Admission Type",
      name: "admissionType",
      validation: "",
      default: "",
      tag: true,
      label: "Admission Type",
      showItem: "",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
      apiType: "CSV",
      selectApi: "IN,OUT",
    },
    // {
    //   type: "date",
    //   placeholder: "Admission Date",
    //   name: "admissionDate",
    //   validation: "",
    //   default: "",
    //   label: "Admission Date",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    {
      type: "datetime",
      placeholder: "Discharge Date",
      name: "dischargeDate",
      showItem: "",
      validation: "",
      default: "null",
      tag: true,
      label: "Discharge Date",
      required: false,
      view: true,
      add: false,
      update: true,
    },
    {
      type: "text",
      placeholder: "Room Number",
      name: "roomNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Room Number",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  // const [discharge] = useState([
  //   {
  //     type: "datetime",
  //     placeholder: "Discharge",
  //     name: "dischargeDate",
  //     showItem: "",
  //     validation: "",
  //     default: "",
  //     label: "Discharge Date",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   // {
  //   //   type: "text",
  //   //   placeholder: "Remarks",
  //   //   name: "remarks",
  //   //   showItem: "",
  //   //   validation: "",
  //   //   default: "",
  //   //   label: "Remarks",
  //   //   required: true,
  //   //   view: true,
  //   //   add: true,
  //   //   update: true,
  //   // },
  // ]);

  // const [actions] = useState([
  //   {
  //     element: "button",
  //     type: "subList",
  //     id: "appointment",
  //     itemTitle: "username",
  //     title: "Discharge",
  //     attributes: discharge,
  //     params: {
  //       api: `appointment`,
  //       parentReference: "appointment",
  //       itemTitle: "username",
  //       shortName: "Discharge",
  //       addPrivilege: true,
  //       delPrivilege: true,
  //       updatePrivilege: true,
  //       customClass: "medium",
  //     },
  //   },
  // ]);

  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // actions={actions}
        api={`appointment`}
        // itemTitle={`label`}
        itemTitle={{
          name: "userDisplayName",
          type: "text",
          collection: "user",
        }}
        shortName={`ppointment`}
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
export default Layout(AdmissionHistory);
