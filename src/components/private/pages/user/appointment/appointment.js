import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Appointment = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Appointment - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Booking ID",
      name: "bookingId",
      validation: "",
      default: "",
      label: "Booking ID",
      required: true,
      view: true,
      add: true,
      update: true,
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
      label: "User",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "date",
      placeholder: "Booking Date",
      name: "bookingDate",
      validation: "",
      default: "",
      label: "Booking Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "booking-slot/select",
      placeholder: "Time Slot",
      name: "bookingSlot",
      showItem: "bookingSlotsName",
      validation: "",
      default: "",
      label: "Time Slot",
      required: true,
      view: true,
      add: true,
      update: true,
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
      label: "Dietician",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: true,
    },
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "user-type/select",
    //   placeholder: "User Type",
    //   name: "userType",
    //   validation: "",
    //   showItem: "role",
    //   default: "",
    //   label: "User Type",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
  ]);
  // const [timingAttributes] = useState([
  //   {
  //     type: "text",
  //     placeholder: "Label",
  //     name: "label",
  //     validation: "",
  //     default: "",
  //     label: "Label",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Sequence",
  //     name: "sequence",
  //     validation: "",
  //     default: "",
  //     label: "Sequence",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Icon",
  //     name: "icon",
  //     validation: "",
  //     default: "",
  //     label: "Icon",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Path",
  //     name: "path",
  //     validation: "",
  //     default: "",
  //     label: "Path",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Element Name",
  //     name: "element",
  //     validation: "",
  //     default: "",
  //     label: "Element Name",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "checkbox",
  //     placeholder: "Status",
  //     name: "status",
  //     validation: "",
  //     default: "true",
  //     label: "Status",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "checkbox",
  //     placeholder: "Is Link",
  //     name: "isLink",
  //     validation: "",
  //     default: "false",
  //     label: "Is Link",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  // ]);

  // const [actions] = useState([
  //   {
  //     element: "button",
  //     type: "subList",
  //     id: "sub-menu",
  //     itemTitle: "userDisplayName",
  //     title: "Sub Menu1",
  //     // attributes: timingAttributes,
  //     params: {
  //       api: `sub-menu`,
  //       parentReference: "menu",
  //       itemTitle: "userDisplayName",
  //       shortName: "Sub Menu2",
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
        itemTitle={`label`}
        shortName={`Appointment`}
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
export default Layout(Appointment);
