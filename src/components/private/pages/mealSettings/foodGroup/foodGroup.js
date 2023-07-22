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
      placeholder: "Meal Goup",
      name: "title",
      validation: "",
      default: "",
      tag: false,
      label: "Meal Goup",
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
      selectApi: "recipe/select",
      // // updateOn: "mealTimeCategory",
      // iconImage: { collection: "", item: "photo" },
      tags: [
        {
          type: "text",
          item: "description",
          title: "Description",
          collection: "",
        },
      ],
      placeholder: "Recipe",
      name: "recipe",
      validation: "",
      showItem: "recipe",
      default: "",
      tag: true,
      label: "Recipe",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "recipe-variant/select",
      placeholder: "Recipe Variant",
      name: "recipeVariant",
      validation: "",
      updateOn: "recipe",
      showItem: "price",
      collection: "recipeVariant",
      default: "",
      tag: true,
      label: "Recipe Variant",
      required: true,
      view: false,
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
        name: "variant",
        type: "text",
        collection: "recipeVariant",
      },
      title: "Recipe Items",
      attributes: foodGroupItem,
      params: {
        api: `food-group-item`,
        parentReference: "foodGroup",
        // itemTitle: "username",
        itemTitle: {
          name: "variant",
          type: "text",
          collection: "recipeVariant",
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
        parentReference="foodGroup"
        // Property name for the title of each menu item
        // itemTitle={`label`}
        itemTitle={{ name: "title", type: "text", collection: "" }}
        // Short name or label for the menu
        shortName={`Meal Group`}
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
