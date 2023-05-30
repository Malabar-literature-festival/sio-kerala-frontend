import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Ingredient = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Ingredient - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",

      placeholder: "Ingredient",
      name: "ingredientName",
      validation: "",
      showItem: "",
      default: "",
      label: "Ingredient",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "boolean",

      placeholder: "Delete",
      name: "delete",
      validation: "",
      showItem: "",
      default: "",
      label: "Delete",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Calories",
      name: " calories",
      validation: "",
      showItem: "",
      default: "",
      label: "Calories",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Protein",
      name: "protein",
      validation: "",
      showItem: "",
      default: "",
      label: "Protein",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "SatFat",
      name: "satFat",
      validation: "",
      showItem: "",
      default: "",
      label: "SatFat",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "UnSatFat",
      name: "unSatFat",
      validation: "",
      showItem: "",
      default: "",
      label: "UnSatFat",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "TotalFat",
      name: "totalFat",
      validation: "",
      showItem: "",
      default: "",
      label: "TotalFat",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Cholesterol",
      name: " cholesterol",
      validation: "",
      showItem: "",
      default: "",
      label: "Cholesterol",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Fiber",
      name: "fiber",
      validation: "",
      showItem: "",
      default: "",
      label: "Fiber",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Carbohydrate",
      name: "carbohydrate",
      validation: "",
      showItem: "",
      default: "",
      label: "Carbohydrate",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Sugar",
      name: "sugars",
      validation: "",
      showItem: "",
      default: "",
      label: "Sugar",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Iron",
      name: "iron",
      validation: "",
      showItem: "",
      default: "",
      label: "Iron",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",

      placeholder: "Calcium",
      name: "calcium",
      validation: "",
      showItem: "",
      default: "",
      label: "Calcium",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",

      placeholder: "Vitamin A	",
      name: "vitaminA",
      validation: "",
      showItem: "",
      default: "",
      label: "Vitamin A",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",

      placeholder: "Vitamin C	",
      name: "VitaminC",
      validation: "",
      showItem: "",
      default: "",
      label: "Vitamin C",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "checkbox",
      placeholder: "Vitamin E	",
      name: "vitaminE",
      validation: "",
      showItem: "",
      default: "",
      label: "Vitamin E",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "",
      placeholder: "varientGroup",
      name: "varientGroup",
      validation: "",
      showItem: "",
      default: "",
      label: "varientGroup",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "ingredient/select",
      placeholder: "Ingredient",
      name: "varientGroup",
      validation: "",
      showItem: "",
      default: "",
      label: "Ingredient",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "",
      placeholder: "varientLevel",
      name: "ingredientName",
      validation: "",
      showItem: "",
      default: "",
      label: "varientLevel",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "string",
      placeholder: "Quantity",
      name: "quantity",
      validation: "",
      showItem: "",
      default: "",
      label: "Quantity",
      required: true,
      view: true,
      add: true,
      update: true,
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
        api={`recipe-ingredients`}
        // Property name for the title of each menu item
        itemTitle={`label`}
        // Short name or label for the menu
        shortName={`Ingredient Management`}
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
export default Layout(Ingredient);
