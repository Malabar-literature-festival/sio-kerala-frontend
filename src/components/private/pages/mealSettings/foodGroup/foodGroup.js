import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

// FOOD GROUP IS A MEAL //

const FoodGroup = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Meal - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Package Name",
      name: "packageName",
      validation: "",
      default: "",
      tag: true,
      label: "Package Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Description",
      name: "description",
      validation: "",
      default: "",
      tag: true,
      label: "Description",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Calories",
      name: "calories",
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
      type: "number",
      placeholder: "Price",
      name: "price",
      validation: "",
      default: "",
      tag: true,
      label: "Price",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [foodGroupItem] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "meal/select",
      // updateOn: "mealTimeCategory",
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
      placeholder: "Recipe",
      name: "meal",
      validation: "",
      showItem: "mealName",
      default: "",
      tag: true,
      label: "Recipe",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "meal-variant/select",
      placeholder: "Meal Variant",
      name: "mealVariant",
      validation: "",
      showItem: "mealPrice",
      default: "",
      tag: true,
      label: "Meal Variant",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "number",
      apiType: "",
      selectApi: "",
      placeholder: "Quantity",
      name: "quantity",
      validation: "",
      showItem: "",
      default: "",
      tag: true,
      label: "Quantity",
      required: false,
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
      id: "food-group-item",
      // itemTitle: "username",
      itemTitle: {
        name: "quantity",
        type: "text",
        collection: "",
      },
      title: "Recipe Items",
      attributes: foodGroupItem,
      params: {
        api: `food-group-item`,
        parentReference: "",
        // itemTitle: "username",
        itemTitle: {
          name: "quantity",
          type: "text",
          collection: "",
        },
        shortName: "Recipe Items",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        // formMode: "double",
      },
    },
  ]);

  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // Actions to be displayed in the ListTable
        actions={actions}
        // API endpoint for fetching menu data
        api={`food-group`}
        displayColumn="double"
        // Property name for the title of each menu item
        // itemTitle={`label`}
        itemTitle={{ name: "packageName", type: "text", collection: "" }}
        // Short name or label for the menu
        shortName={`Meal`}
        formMode={`double`}
        // Privilege flag indicating whether the user can add menu items
        {...props}
        // Additional attributes related to the menu
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(FoodGroup);
