import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const DeliveryMan = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Deliveryman- Diet Food Management Portal`;
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
      default: "1223@gmail.com",
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
      type: "number",
      placeholder: "Mobile Number",
      name: "mobile",
      validation: "",
      default: "",
      label: "Mobile Number",
      required: true,
      view: true,
      add: true,
      update: true,
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
      type: "select",
      placeholder: "Identity Type",
      name: "identityType",
      validation: "",
      default: "",
      label: "Identity Type",
      required: true,
      view: false,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "Password,Ecoma",
    },
    {
      type: "image",
      placeholder: "Identity Image",
      name: "identityImage",
      validation: "",
      default: "",
      label: "Identity Image",
      required: true,
      view: false,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "Password,Ecoma",
    },
    {
      type: "text",
      placeholder: "Identity Number",
      name: "identityNumber",
      validation: "",
      default: "",
      label: "Identity Number",
      required: true,
      view: false,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "Vechile Category",
      name: "vehicleCategory",
      validation: "",
      default: "",
      label: "Vechile Category",
      required: true,
      view: true,
      add: true,
      update: true,
      apiType: "API",
      selectApi: "delivery-men",
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

  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // Actions to be displayed in the ListTable
        // actions={actions}
        // API endpoint for fetching menu data
        api={`delivery-men`}
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
export default Layout(DeliveryMan);
