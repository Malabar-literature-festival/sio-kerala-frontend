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
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "user/select",
    //   placeholder: "User",
    //   name: "user",
    //   validation: "",
    //   showItem: "userDisplayName",
    //   default: "",
    //   tag: true,
    //   label: "User",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: false,
    //   filter: false,
    // },
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select?userType=6471b3849fb2b29fe045887b",
      placeholder: "Patient",
      name: "user",
      validation: "",
      showItem: "userDisplayName",
      default: "",
      // tag: true,
      label: "Patient",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select?userType=6471b34d9fb2b29fe0458878",
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
    {
      type: "date",
      placeholder: "Booking Date",
      name: "bookingDate",
      showItem: "",
      validation: "",
      default: "null",
      tag: true,
      label: "Booking Date",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "date",
      placeholder: "Admission Date",
      name: "admissionDate",
      showItem: "",
      validation: "",
      default: "null",
      tag: true,
      label: "Admission Date",
      required: false,
      view: true,
      add: true,
      update: true,
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

  const [details] = useState([
    {
      type: "text",
      placeholder: "Father",
      name: "fathername",
      validation: "",
      default: "",
      tag: true,
      label: "Father",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Mother",
      name: "mothername",
      validation: "",
      default: "",
      tag: true,
      label: "Mother",
      required: false,
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
      type: "textarea",
      apiType: "API",
      selectApi: "",
      placeholder: "Address",
      name: "address",
      validation: "",
      showItem: "address",
      default: "",
      tag: true,
      label: "Address",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Office Address",
      name: "officeAddress",
      validation: "",
      default: "",
      tag: true,
      label: "Office Address",
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
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Landmark",
      name: "landmark",
      validation: "",
      default: "",
      tag: true,
      label: "Landmark",
      required: false,
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
      required: false,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [medicalRecord] = useState([
    {
      type: "date",
      apiType: "API",
      selectApi: "",
      placeholder: "DOB",
      // collection: "subscriber",
      name: "dateOfBirth",
      showItem: "",
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
      placeholder: "",
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
      type: "number",
      placeholder: "Height",
      name: "height",
      validation: "",
      default: "",
      // minimum: 20,
      // maximum: 150,
      label: "Height",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Present Weight",
      name: "presentWeight",
      validation: "",
      default: "",
      // minimum: 10,
      // maximum: 150,
      tag: true,
      label: "Present Weight",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Target Weight",
      name: "targetWeight",
      validation: "",
      default: "",
      // minimum: 10,
      // maximum: 150,
      tag: true,
      label: "Target Weight",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "BMI",
      name: "bmi",
      validation: "",
      default: "",
      tag: true,
      label: "BMI",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "text",
      placeholder: "BMR",
      name: "bmr",
      validation: "",
      default: "",
      tag: true,
      label: "BMR",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "activeness-status/select",
      placeholder: "User Activeness Status",
      name: "userActivenessStatus",
      showItem: "activenessStatusName",
      validation: "",
      default: "",
      tag: true,
      label: "User Activeness Status",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "aimof-programs/select",
      placeholder: "Aim of Programs",
      name: "aimOfProgram",
      showItem: "aimofProgramName",
      validation: "",
      default: "",
      tag: true,
      label: "Aim of Programs",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "medical-conditions/select",
      placeholder: "Medical Condition",
      name: "medicalCondition",
      showItem: "medicalConditionsName",
      validation: "",
      default: "",
      tag: true,
      label: "Medical Condition",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "foodlike-lists/select",
      placeholder: "Food Like List",
      name: "foodLikeList",
      validation: "",
      showItem: "foodLikeListName",
      default: "",
      tag: true,
      label: "Food Like List",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "fooddislike-lists/select",
      placeholder: "Food Dislike Like",
      name: "foodDisLikeList",
      validation: "",
      showItem: "foodDislikeListName",
      default: "",
      tag: true,
      label: "Food Dislike Like",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "addiction-lists/select",
      placeholder: "Addiction List",
      name: "addictionList",
      validation: "",
      showItem: "addictionListName",
      default: "",
      tag: true,
      label: "Addiction List",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "using-any-supplement/select",
      placeholder: "Supplement List",
      name: "usingAnySupplement",
      validation: "",
      showItem: "usingAnySupplementName",
      default: "",
      tag: true,
      label: "Supplement List",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "multiSelect",
      apiType: "API",
      selectApi: "under-any-medication/select",
      placeholder: "Medication",
      name: "underAnyMedication",
      validation: "",
      showItem: "underAnyMedicationName",
      default: "",
      tag: true,
      label: "Medication",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
  ]);

  const [admissionHistory] = useState([
    {
      type: "select",
      placeholder: "Admission Type",
      name: "admissionType",
      validation: "",
      default: "",
      tag: true,
      label: "Admission Type",
      showItem: "Admission Type",
      required: false,
      view: true,
      filter: false,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "IN,OUT",
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
    {
      type: "datetime",
      placeholder: "Admission Date",
      name: "admissionDate",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Admission Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "datetime",
      placeholder: "Discharge",
      name: "dischargeDate",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Discharge Date",
      required: false,
      view: true,
      add: false,
      update: true,
    },
    {
      type: "text",
      placeholder: "Remarks",
      name: "remarks",
      showItem: "",
      validation: "",
      default: "",
      // tag: true,
      label: "Remarks",
      required: true,
      view: true,
      add: false,
      update: true,
    },
  ]);

  const [patientDiet] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "type-of-diet/select",
      placeholder: "Type of Diet",
      name: "typeOfDiet",
      validation: "",
      showItem: "typeOfDietName",
      default: "",
      tag: true,
      label: "Type of Diet",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "datetime",
      placeholder: "Start Date & Time",
      name: "startDate",
      showItem: "",
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
      type: "datetime",
      placeholder: "End Date & Time",
      name: "endDate",
      showItem: "",
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
      placeholder: "Calories",
      name: "calories",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Calories",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Remarks",
      name: "remarks",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Remarks",
      required: false,
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
      tag: true,
      label: "Dietician Visit",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "Visit Shedule",
      name: "visitShedule",
      condition: {
        item: "dieticianVisit",
        if: true,
        then: "enabled",
        else: "disabled",
      },
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Visit Shedule",
      required: false,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [addMeal] = useState([
    {
      type: "date",
      placeholder: "Order Date",
      name: "orderDate",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Order Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Day of Week",
      name: "dayOfWeek",
      validation: "",
      showItem: "day",
      default: "",
      tag: true,
      label: "Day of Week",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
    {
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Meal Time Category",
      name: "mealTimeCategory",
      validation: "",
      showItem: "mealtimeCategoriesName",
      default: "",
      tag: true,
      label: "Meal Time Category",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "dayof-week/select",
      placeholder: "Day of Week",
      name: "dayOfWeek",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Day of Week",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "mealtime-category/select",
      placeholder: "Meal Time Category",
      name: "mealTimeCategory",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Meal Time Category",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "meal/select",
      updateOn: "mealTimeCategory",
      iconImage: { collection: "", item: "mealPhoto" },
      tags: [
        {
          type: "text",
          item: "proteinCategoriesName",
          title: "Protein Category",
          collection: "proteinCategory",
        },
        {
          type: "text",
          item: "mealDescription",
          title: "Description",
          collection: "",
        },
      ],
      placeholder: "Meal",
      name: "meal",
      validation: "",
      showItem: "mealName",
      default: "",
      tag: true,
      label: "Meal",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "preparation-instruction/select",
      placeholder: "Preparation Instruction",
      name: "preparationInstruction",
      validation: "",
      showItem: "instruction",
      default: "",
      tag: true,
      label: "Preparation Instruction",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
  ]);

  const [appointment] = useState([
    {
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Booking ID",
      name: "bookingId",
      validation: "",
      showItem: "day",
      default: "",
      tag: true,
      label: "Booking ID",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
    {
      type: "date",
      placeholder: "Booking Date",
      name: "bookingDate",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
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
      placeholder: "Booking Slot",
      name: "bookingSlot",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Booking Slot",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      apiType: "",
      selectApi: "",
      placeholder: "Booking Slot",
      name: "bookingSlot",
      validation: "",
      showItem: "bookingSlotsName",
      default: "",
      tag: true,
      label: "Booking Slot",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select?userType=6471b34d9fb2b29fe0458878",
      placeholder: "Dietician",
      name: "dietician",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Dietician",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      apiType: "",
      selectApi: "",
      placeholder: "Dietician",
      name: "dietician",
      validation: "",
      showItem: "username",
      default: "",
      tag: true,
      label: "Dietician",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
  ]);

  const [actions] = useState([
    {
      element: "button",
      type: "subItem",
      id: "patient-details",
      itemTitle: "username",
      title: "Details",
      attributes: details,
      // formMode: `double`,
      params: {
        api: `user/subscriber`,
        parentReference: "user",
        itemTitle: {
          name: "mobileNumber",
          type: "text",
          collection: "",
        },
        shortName: "Patient Details",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: `double`,
      },
    },
    {
      element: "button",
      type: "subItem",
      id: "user/subscriber",
      // itemTitle: "username",
      itemTitle: {
        name: "username",
        type: "text",
        collection: "user",
      },
      title: "Medical Record",
      attributes: medicalRecord,
      params: {
        api: `user/subscriber`,
        parentReference: "user",
        itemTitle: {
          name: "username",
          type: "text",
          collection: "user",
        },
        shortName: "Medical Record",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "patient-history",
      itemTitle: { name: "userDisplayName", type: "text", collection: "user" },
      title: "Admission History",
      attributes: admissionHistory,
      params: {
        api: `appointment`,
        parentReference: "user",
        itemTitle: {
          name: "userDisplayName",
          type: "text",
          collection: "user",
        },
        shortName: "Admission History",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "patient-diet",
      itemTitle: {
        name: "typeOfDietName",
        type: "text",
        collection: "typeOfDiet",
      },
      // itemTitle: "username",
      title: "Diet",
      attributes: patientDiet,
      params: {
        api: `patient-diet`,
        parentReference: "user",
        itemTitle: {
          name: "typeOfDietName",
          type: "text",
          collection: "typeOfDiet",
        },
        // itemTitle: "username",
        shortName: "Diet",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "weekly-meal-plan-entry",
      // itemTitle: "username",
      itemTitle: {
        name: "mealName",
        type: "text",
        collection: "meal",
      },
      title: "Meals",
      attributes: addMeal,
      params: {
        api: `weekly-meal-plan-entry`,
        parentReference: "user",
        // itemTitle: "username",
        itemTitle: {
          name: "mealName",
          type: "text",
          collection: "meal",
        },
        shortName: "Meals",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "appointment",
      // itemTitle: "username",
      itemTitle: {
        name: "username",
        type: "text",
        collection: "dietician",
      },
      title: "Appointment",
      attributes: appointment,
      params: {
        api: `appointment`,
        parentReference: "user",
        // itemTitle: "username",
        itemTitle: {
          name: "username",
          type: "text",
          collection: "dietician",
        },
        shortName: "Appointment",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
      },
    },
  ]);
  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        actions={actions}
        api={`appointment`}
        // itemTitle={`label`}
        itemTitle={{
          name: "username",
          type: "text",
          collection: "user",
        }}
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
export default Layout(AdmissionHistory);
