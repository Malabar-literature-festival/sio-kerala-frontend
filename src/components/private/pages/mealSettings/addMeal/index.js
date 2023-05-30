import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const AddMeal = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Add Meal - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "MealName",
      name: "mealName",
      validation: "",
      default: "",
      label: "MealName",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Meal Description",
      name: "mealDescription",
      validation: "",
      default: "",
      label: "Meal Description",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Meal Photo",
      name: "mealPhoto	",
      validation: "",
      default: "",
      label: "Meal Photo",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Meal Preparation Time",
      name: "mealPreparationTime",
      validation: "",
      default: "",
      label: "Meal Preparation Time",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "protein-categories/select",
      placeholder: "Protein Category",
      name: "proteinCategory",
      validation: "",
      default: "",
      label: "Protein Category",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "cuisine-categories/select",
      placeholder: "Cuisine Category",
      name: "cuisineCategory",
      validation: "",
      default: "",
      label: "Cuisine Category",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "mealtime-category/select",
      placeholder: "Meal Time Category",
      name: "mealTimeCategory",
      validation: "",
      default: "",
      label: "Meal Time Category",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "",
      placeholder: "Meal Tag",
      name: "mealTag",
      validation: "",
      default: "",
      label: "Meal Tag",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "",
      placeholder: "Franchise",
      name: "franchise",
      validation: "",
      default: "",
      label: "Franchise",
      required: true,
      view: true,
      add: false,
      update: false,
    },
  ]);

  const [actions] = useState([
    {
      // Element type for rendering
      element: "button",
      // Type of action, in this case a sublist
      type: "subList",
      // Unique identifier for the submenu
      id: "sub-menu",
      // Displayed item title
      itemTitle: "title",
      // Title of the submenu
      title: "Sub Menu",
      // Additional attributes for timing
      // attributes: timingAttributes,
      // Parameters for API and submenu configuration
      params: {
        // API endpoint for submenu data
        api: `sub-menu`,
        // Parent reference for the submenu
        parentReference: "menu",
        // Property name for the submenu item title
        itemTitle: "label",
        // Short name for the submenu
        shortName: "Sub Menu",
        // Privileges for adding submenu items
        addPrivilege: true,
        // Privileges for deleting submenu items
        delPrivilege: true,
        // Privileges for updating submenu items
        updatePrivilege: true,
        // Custom CSS class for styling
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
        // API endpoint for fetching meal data
        api={`meal`}
        // Property name for the title of each menu item
        itemTitle={`label`}
        // Short name or label for the menu
        shortName={`Add Meal`}
        // Privilege flag indicating whether the user can add menu items
        {...props}
        // Additional attributes related to the menu
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(AddMeal);
