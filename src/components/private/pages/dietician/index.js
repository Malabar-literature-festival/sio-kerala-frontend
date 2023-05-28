import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Dietician = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Dietician- Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
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
      type: "text",
      placeholder: "UserName",
      name: "username",
      validation: "",
      default: "",
      label: "UserName",
      required: true,
      view: false,
      add: true,
      update: true,
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
      validation: "",
      default: "",
      label: "Password",
      required: true,
      view: false,
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
      // required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "Gender",
      name: "",
      validation: "",
      default: "",
      label: "Gender",
      required: true,
      view: true,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "Male,Female",
    },
    {
      type: "text",
      placeholder: "AuthKey",
      name: "authKey",
      validation: "",
      default: "",
      label: "AuthKey",
      //required: true,
      // view: true,
      // add: true,
      // update: true,
    },
    {
      type: "text",
      placeholder: "userType",
      name: "userType",
      validation: "",
      default: "6471b34d9fb2b29fe0458878",
      label: "UserType",
      required: true,
      // view: true,
      // add: true,
      // update: true,
    },

    {
      type: "image",
      placeholder: "Image",
      name: "userImage",
      validation: "",
      default: "",
      label: "Image",
      // required: true,
      view: true,
      add: true,
      update: true,
    },

    {
      type: "text",
      placeholder: "Franchise",
      name: "franchise",
      validation: "",
      showItem: "role",
      default: "",
      label: "Franchise",
      required: true,
      // view: true,
      // add: true,
      // update: true,
    },
  ]);
  // const [timingAttributes] = useState([
  //   {
  //     type: "text",
  //     placeholder: "Subscriber ID",
  //     name: "subscriberId",
  //     validation: "",
  //     default: "",
  //     label: "Subscriber ID",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Fathername",
  //     name: "subscriberFathername",
  //     validation: "",
  //     default: "",
  //     label: "Fathername",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Mothername",
  //     name: "subscriberMothername",
  //     validation: "",
  //     default: "",
  //     label: "Mothername",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Nationality",
  //     name: "nationality",
  //     validation: "",
  //     default: "",
  //     label: "Nationality",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Mobile Number",
  //     name: "mobileNumber",
  //     validation: "",
  //     default: "",
  //     label: "Mobile Number",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Email ID",
  //     name: "emailId",
  //     validation: "",
  //     default: "",
  //     label: "Email ID",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Landmark",
  //     name: "landmark",
  //     validation: "",
  //     default: "",
  //     label: "Landmark",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Occupation",
  //     name: "occupation",
  //     validation: "",
  //     default: "",
  //     label: "Occupation",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Office Number",
  //     name: "officeNumber",
  //     validation: "",
  //     default: "",
  //     label: "Office Number",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Office Address",
  //     name: "officeAddress",
  //     validation: "",
  //     default: "",
  //     label: "Office Address",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "boolean",
  //     placeholder: "Marital Status",
  //     name: "maritalStatus",
  //     validation: "",
  //     default: "",
  //     label: "Marital Status",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Number of Children",
  //     name: "numberOfChildren",
  //     validation: "",
  //     default: "",
  //     label: "Number of Children",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Height",
  //     name: "height",
  //     validation: "",
  //     default: "",
  //     label: "Height",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Present Weight",
  //     name: "presentWeight",
  //     validation: "",
  //     default: "",
  //     label: "Present Weight",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Target Weight",
  //     name: "targetWeight",
  //     validation: "",
  //     default: "",
  //     label: "Target Weight",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "BMI",
  //     name: "bmi",
  //     validation: "",
  //     default: "",
  //     label: "BMI",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "BMR",
  //     name: "bmr",
  //     validation: "",
  //     default: "",
  //     label: "BMR",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "User Activeness Status",
  //     name: "userActivenessStatus",
  //     validation: "",
  //     default: "",
  //     label: "User Activeness Status",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Aim of Program",
  //     name: "aimOfProgram",
  //     validation: "",
  //     default: "",
  //     label: "Aim of Program",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "User Medical Condition",
  //     name: "userMedicalCondition",
  //     validation: "",
  //     default: "",
  //     label: "User Medical Condition",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "User Food Like List",
  //     name: "userFoodLikeList",
  //     validation: "",
  //     default: "",
  //     label: "User Food Like List",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "User Dislike Like",
  //     name: "userDislikeLike",
  //     validation: "",
  //     default: "",
  //     label: "User Dislike Like",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "User Addiction List",
  //     name: "userAddictionList",
  //     validation: "",
  //     default: "",
  //     label: "User Addiction List",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Using Any Supplement",
  //     name: "usingAnySupplement",
  //     validation: "",
  //     default: "",
  //     label: "User Addiction List",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "User Addiction List",
  //     name: "userAddictionList",
  //     validation: "",
  //     default: "",
  //     label: "User Addiction List",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  // ]);

  // const [actions] = useState([
  //   {
  //     // Element type for rendering
  //     element: "button",
  //     // Type of action, in this case a sublist
  //     type: "subList",
  //     // Unique identifier for the submenu
  //     id: "sub-menu",
  //     // Displayed item title
  //     itemTitle: "title",
  //     // Title of the submenu
  //     title: "Details",
  //     // Additional attributes for timing
  //     // attributes: timingAttributes,
  //     // Parameters for API and submenu configuration
  //     params: {
  //       // API endpoint for submenu data
  //       api: `sub-menu`,
  //       // Parent reference for the submenu
  //       parentReference: "menu",
  //       // Property name for the submenu item title
  //       itemTitle: "label",
  //       // Short name for the submenu
  //       shortName: "Sub Menu2",
  //       // Privileges for adding submenu items
  //       addPrivilege: true,
  //       // Privileges for deleting submenu items
  //       delPrivilege: true,
  //       // Privileges for updating submenu items
  //       updatePrivilege: true,
  //       // Custom CSS class for styling
  //       customClass: "medium",
  //     },
  //   },
  // ]);
  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // Actions to be displayed in the ListTable
        // actions={actions}
        // API endpoint for fetching menu data
        api={`user`}
        // Property name for the title of each menu item
        itemTitle={`label`}
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
export default Layout(Dietician);
