import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
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
      placeholder: "CPR/Mobile",
      name: "username",
      validation: "",
      default: "",
      label: "CPR/Mobile",
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
      validation: "",
      default: "",
      label: "Gender",
      showItem: "Gender",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
      apiType: "JSON",
      selectApi: "Male,Female",
    },
    // {
    //   type: "select",
    //   placeholder: "Gender",
    //   name: "subscriber",
    //   validation: "",
    //   default: "",
    //   label: "Gender",
    //   showItem: "Gender",
    //   required: false,
    //   view: true,
    //   filter: false,
    //   add: false,
    //   update: false,
    //   apiType: "API",
    //   selectApi: "Male,Female",
    // },
    {
      type: "date",
      apiType: "API",
      selectApi: "",
      placeholder: "DOB",
      name: "subscriber",
      validation: "",
      showItem: "dateOfBirth",
      default: "",
      label: "DOB",
      required: true,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "text",
      placeholder: "YYYY/MM/DD",
      name: "dateOfBirth",
      validation: "",
      default: "",
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
      default: "",
      label: "Address",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "user-type/select",
      placeholder: "User Type",
      name: "userType",
      validation: "",
      showItem: "role",
      default: "",
      label: "User Type",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "franchise/select",
      placeholder: "Franchise",
      name: "franchise",
      validation: "",
      showItem: "name",
      default: "",
      label: "Franchise",
      required: true,
      view: true,
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
      label: "Image",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [subscriberProfile] = useState([
    {
      type: "text",
      placeholder: "Subscriber ID",
      name: "subscriberId",
      validation: "",
      default: "",
      label: "Subscriber ID",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Fathername",
      name: "subscriberFathername",
      validation: "",
      default: "",
      label: "Fathername",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Mothername",
      name: "subscriberMothername",
      validation: "",
      default: "",
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
      label: "Mobile Number",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Email ID",
      name: "emailId",
      validation: "",
      default: "",
      label: "Email ID",
      required: true,
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
      label: "Landmark",
      required: true,
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
      label: "Office Address",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "boolean",
      placeholder: "Marital Status",
      name: "maritalStatus",
      validation: "",
      default: "",
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
      label: "Number of Children",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Height",
      name: "height",
      validation: "",
      default: "",
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
      label: "BMI",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "BMR",
      name: "bmr",
      validation: "",
      default: "",
      label: "BMR",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "User Activeness Status",
      name: "userActivenessStatus",
      validation: "",
      default: "",
      label: "User Activeness Status",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "aimof-programs/select",
      placeholder: "Aim of Programs",
      name: "aimOfProgram",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Aim of Programs",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "medical-conditions/select",
      placeholder: "Medical Condition",
      name: "foodLikeList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Medical Condition",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "foodlike-lists/select",
      placeholder: "Food Like List",
      name: "foodLikeList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Food Like List",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "fooddislike-lists/select",
      placeholder: "Food Dislike Like",
      name: "foodDislikeList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Food Dislike Like",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "addiction-lists/select",
      placeholder: "Addiction List",
      name: "addictionList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Addiction List",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "using-any-supplement/select",
      placeholder: "Supplement List",
      name: "supplement",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Supplement List",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "under-any-medication/select",
      placeholder: "Medication",
      name: "medication",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Medication",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
  ]);

  const [medicalRecord] = useState([
    {
      type: "number",
      placeholder: "test",
      name: "height",
      validation: "",
      default: "",
      label: "test",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Height",
      name: "height",
      validation: "",
      default: "",
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
      label: "BMI",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "BMR",
      name: "bmr",
      validation: "",
      default: "",
      label: "BMR",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "User Activeness Status",
      name: "userActivenessStatus",
      validation: "",
      default: "",
      label: "User Activeness Status",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "aimof-programs/select",
      placeholder: "Aim of Programs",
      name: "aimOfProgram",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Aim of Programs",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "medical-conditions/select",
      placeholder: "Medical Condition",
      name: "foodLikeList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Medical Condition",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "foodlike-lists/select",
      placeholder: "Food Like List",
      name: "foodLikeList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Food Like List",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "fooddislike-lists/select",
      placeholder: "Food Dislike Like",
      name: "foodDislikeList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Food Dislike Like",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "addiction-lists/select",
      placeholder: "Addiction List",
      name: "addictionList",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Addiction List",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "using-any-supplement/select",
      placeholder: "Supplement List",
      name: "supplement",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Supplement List",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "under-any-medication/select",
      placeholder: "Medication",
      name: "medication",
      validation: "",
      // showItem: "role",
      default: "",
      label: "Medication",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
  ]);

  const [admissionHistory] = useState([
    {
      type: "text",
      placeholder: "MR Number",
      name: "mrNumber",
      validation: "",
      default: "",
      label: "MR Number",
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
      placeholder: "Type of Diet",
      name: "typeOfDiet",
      showItem: "typeOfDietName",
      validation: "",
      default: "",
      label: "Type of Diet",
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
      type: "text",
      placeholder: "Remarks",
      name: "remarks",
      validation: "",
      default: "",
      label: "Remarks",
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
      update: false,
    },
    {
      type: "date",
      placeholder: "Discharge Date",
      name: "dischargeDate",
      validation: "",
      default: "",
      label: "Discharge Date",
      required: true,
      view: true,
      add: true,
      update: false,
    },
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
    {
      type: "boolean",
      placeholder: "Is Active",
      name: "isActive",
      validation: "",
      default: "",
      label: "Is Active",
      required: true,
      view: true,
      add: true,
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
      type: "date",
      placeholder: "Start Date",
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
      type: "date",
      placeholder: "Start Time",
      name: "startTime",
      showItem: "",
      validation: "",
      default: "",
      label: "Start Time",
      required: true,
      view: true,
      add: true,
      update: false,
    },
    {
      type: "date",
      placeholder: "End Date",
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
      type: "date",
      placeholder: "End Time",
      name: "endTime",
      showItem: "",
      validation: "",
      default: "",
      label: "End Time",
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
  ]);

  const [addMeal] = useState([
    {
      type: "date",
      placeholder: "Week Start Date",
      name: "startDate",
      showItem: "",
      validation: "",
      default: "",
      label: "Week Start Date",
      required: true,
      view: true,
      add: true,
      update: false,
    },
    {
      type: "date",
      placeholder: "Week End Date",
      name: "endDate",
      showItem: "",
      validation: "",
      default: "",
      label: "Week End Date",
      required: true,
      view: true,
      add: true,
      update: false,
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
      placeholder: "Day of Week",
      name: "mealTimeCategory",
      validation: "",
      showItem: "mealtimeCategoriesName",
      default: "",
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
      placeholder: "Day of Week",
      name: "meal",
      validation: "",
      showItem: "mealName",
      default: "",
      label: "Day of Week",
      required: false,
      view: true,
      add: false,
      update: false,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "weekly-meal-plan/select",
      placeholder: "Weekly Meal Plan",
      name: "weeklyMealPlanId",
      validation: "",
      showItem: "",
      default: "",
      label: "Weekly Meal Plan",
      required: true,
      view: false,
      add: true,
      update: true,
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
      label: "Meal",
      required: true,
      view: false,
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
      label: "Booking ID",
      required: false,
      view: true,
      add: true,
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
      selectApi: "user/select",
      placeholder: "Dietician",
      name: "dietician",
      validation: "",
      showItem: "",
      default: "",
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
      attributes: subscriberProfile,
      params: {
        api: `user/subscriber`,
        parentReference: "user",
        itemTitle: "username",
        shortName: "Patient Details",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "patient-history",
      itemTitle: "title",
      title: "Medical Record",
      attributes: medicalRecord,
      params: {
        api: `patient-history`,
        parentReference: "user",
        itemTitle: "label",
        shortName: "Medical Record",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "patient-history",
      itemTitle: "title",
      title: "Admission History",
      attributes: admissionHistory,
      params: {
        api: `patient-history`,
        parentReference: "user",
        itemTitle: "label",
        shortName: "Admission History",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "patient-diet",
      itemTitle: "username",
      title: "Diet",
      attributes: patientDiet,
      params: {
        api: `patient-diet`,
        parentReference: "user",
        itemTitle: "username",
        shortName: "Diet",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "weekly-meal-plan-entry",
      itemTitle: "username",
      title: "Add Meal",
      attributes: addMeal,
      params: {
        api: `weekly-meal-plan-entry`,
        parentReference: "user",
        itemTitle: "username",
        shortName: "Add Meal",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "appointment",
      itemTitle: "username",
      title: "Appointment",
      attributes: appointment,
      params: {
        api: `appointment`,
        parentReference: "user",
        itemTitle: "username",
        shortName: "Appointment",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
  ]);

  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // Actions to be displayed in the ListTable
        actions={actions}
        // API endpoint for fetching menu data
        api={`user`}
        // Property name for the title of each menu item
        itemTitle={`username`}
        // Short name or label for the menu
        shortName={`User`}
        // Privilege flag indicating whether the user can add menu items
        // formMode={`single`}
        formMode={`double`}
        //
        {...props}
        // Additional attributes related to the menu
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(Patient);
