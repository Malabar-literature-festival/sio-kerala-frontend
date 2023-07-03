import React, { useEffect, useState } from "react";
//
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

const Student = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Student - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    // {
    //   type: "text",
    //   placeholder: "CPR/Mobile",
    //   name: "username",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "CPR/Mobile",
    //   required: true,
    //   view: false,
    //   add: true,
    //   update: true,
    // },
    {
      type: "text",
      placeholder: "Name",
      name: "username",
      validation: "",
      default: "",
      // tag: true,
      label: "Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "School",
      name: "school",
      validation: "",
      default: "",
      tag: true,
      label: "School",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Roll Number",
      name: "rollNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Roll Number",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Division",
      name: "division",
      validation: "",
      default: "",
      tag: true,
      label: "Division",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Grade",
      name: "grade",
      validation: "",
      default: "",
      tag: true,
      label: "Grade",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Mobile",
      name: "mobileNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Mobile",
      required: false,
      view: false,
      add: true,
      update: false,
    },
    {
      type: "number",
      placeholder: "Mobile",
      name: "subscriber",
      showItem: "mobileNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Mobile",
      required: false,
      view: true,
      add: false,
      update: false,
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
      type: "text",
      apiType: "API",
      selectApi: "",
      placeholder: "Meal",
      name: "meal",
      validation: "",
      showItem: "mealName",
      default: "",
      tag: true,
      label: "Meal",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "weekly-meal-plan/select",
    //   placeholder: "Weekly Meal Plan",
    //   name: "weeklyMealPlanId",
    //   validation: "",
    //   showItem: "",
    //   default: "",
    // tag: true//
    // label: "Weekly Meal Plan",
    //   required: true,
    //   view: false,
    //   add: true,
    //   update: true,
    //   filter: false,
    // },
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
      placeholder: "Meal",
      name: "meal",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Meal",
      required: true,
      view: false,
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

  const [studentPackage] = useState([
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "user/select",
    //   placeholder: "User",
    //   name: "user",
    //   showItem: "userDisplayName",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "User",
    //   required: false,
    //   view: false,
    //   filter: false,
    //   add: true,
    //   update: true,
    // },
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
      name: "package",
      showItem: "",
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
    // {
    //   type: "date",
    //   placeholder: "End Date",
    //   name: "planEndDate",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "End Date",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    // {
    //   type: "text",
    //   placeholder: "Skipped Days Count",
    //   name: "skippedDaysCount",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "Skipped Days Count",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
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
      id: "weekly-meal-plan-entry",
      // itemTitle: "username",
      itemTitle: {
        name: "username",
        type: "text",
        collection: "user",
      },
      title: "Package",
      attributes: studentPackage,
      params: {
        api: `subscriber-package`,
        // api: `weekly-meal-plan-entry`,
        parentReference: "user",
        // itemTitle: "username",
        itemTitle: {
          name: "username",
          type: "text",
          collection: "user",
        },
        shortName: "Package",
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
      <ListTable
        actions={actions}
        // displayColumn="double"
        api={`student`}
        // itemTitle={`userDisplayName`}
        itemTitle={{ name: "username", type: "text", collection: "" }}
        shortName={`Student`}
        parentReference={"userType"}
        referenceId={"648d248ac86cf9225e35a794"}
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
export default Layout(Student);
