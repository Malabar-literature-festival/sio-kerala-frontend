import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const TypeOfDiet = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Type Of Diet - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      // Type of input, in this case, a text input
      type: "text",
      // Placeholder text for the input field
      placeholder: "Type Of Diet",
      // Name of the input field
      name: "typeOfDietName",
      // Validation rules for the input
      validation: "",
      // Default value for the input field
      default: "",
      // Label text for the input field
      label: "Type Of Diet",
      // Indicates if the input field is required
      required: true,
      // Indicates if the input field should be displayed in the view mode
      view: true,
      // Indicates if the input field should be displayed in the add mode
      add: true,
      // Indicates if the input field should be displayed in the update mode
      update: true,
    },
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
  const [dietPlan] = useState([
    {
      type: "text",
      apiType: "",
      selectApi: "",
      placeholder: "Diet Plan",
      name: "dietPlan",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Diet Plan",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },

    {
      type: "select",
      apiType: "API",
      selectApi: "type-of-diet/select",
      placeholder: "Type of Diet",
      name: "dietPlanCategory",
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
  ]);

  const [actions] = useState([
    {
      element: "button",
      type: "subList",
      id: "dietPlan",
      // itemTitle: "username",
      itemTitle: {
        name: "dietPlan",
        type: "text",
        collection: "dietPlan",
      },
      title: "Diet Plan",
      attributes: dietPlan,
      params: {
        api: `diet-plan`,
        parentReference: "",
        // itemTitle: "username",
        itemTitle: {
          name: "dietPlan",
          type: "text",
          collection: "",
        },
        shortName: "Diet Plan",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
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
        api={`type-of-diet`}
        displayColumn="double"
        // Property name for the title of each menu item
        // itemTitle={`label`}
        itemTitle={{ name: "typeOfDietName", type: "text", collection: "" }}
        // Short name or label for the menu
        shortName={`Type Of Diet`}
        // Privilege flag indicating whether the user can add menu items
        {...props}
        // Additional attributes related to the menu
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(TypeOfDiet);
