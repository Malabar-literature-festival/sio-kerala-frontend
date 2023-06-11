import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";

const AdmissionRecord = (props) => {
  useEffect(() => {
    document.title = `Admission Record List - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "type-of-diet/select",
      placeholder: "Type of Diet",
      name: "typeOfDiet",
      validation: "",
      showItem: "role",
      default: "",
      label: "Type of Diet",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      placeholder: "Type of Diet",
      name: "typeOfDiet",
      showItem: "typeOfDietName",
      validation: "",
      default: "",
      label: "Type of Diet",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "datetime",
      placeholder: "Start Date & Time",
      name: "startDate",
      showItem: "",
      validation: "",
      default: "",
      label: "Start Date",
      required: true,
      view: true,
      add: true,
      update: false,
    },
    {
      type: "datetime",
      placeholder: "End Date & Time",
      name: "endDate",
      showItem: "",
      validation: "",
      default: "",
      label: "End Date",
      required: true,
      view: true,
      add: true,
      update: false,
    },
    {
      type: "text",
      placeholder: "Calories",
      name: "calories",
      showItem: "",
      validation: "",
      default: "",
      label: "Calories",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "Visit Shedule",
      name: "visitShedule",
      showItem: "",
      validation: "",
      default: "",
      label: "Visit Shedule",
      required: true,
      view: true,
      add: true,
      update: false,
    },
    {
      type: "string",
      placeholder: "Remarks",
      name: "remarks",
      showItem: "",
      validation: "",
      default: "remark",
      label: "Remarks",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Dietician Visit",
      name: "dieticianVisit",
      validation: "",
      default: "false",
      label: "Dietician Visit",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Admission Type",
      name: "admissionType",
      validation: "",
      default: "",
      label: "Admission Type",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Diagnosis",
      name: "diagnosis",
      validation: "",
      default: "",
      label: "Diagnosis",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "Admission Date",
      name: "admissionDate",
      validation: "",
      default: "",
      label: "Admission Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    // {
    //   type: "date",
    //   placeholder: "Discharge Date",
    //   name: "dischargeDate",
    //   validation: "",
    //   default: "",
    //   label: "Discharge Date",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    {
      type: "text",
      placeholder: "Room Number",
      name: "roomNumber",
      validation: "",
      default: "",
      label: "Room Number",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    // {
    //   type: "boolean",
    //   placeholder: "Is Active",
    //   name: "isActive",
    //   validation: "",
    //   default: "",
    //   label: "Is Active",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        api={`patient-diet`}
        itemTitle={`username`}
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
export default Layout(AdmissionRecord);