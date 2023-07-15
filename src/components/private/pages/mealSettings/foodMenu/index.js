import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const FoodMenu = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Food Menu - Diet Food Management Portal`;
  }, []);
  // title: {
  //     type: String,
  //   },
  //   dietCategory: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "DietCategory",
  //   },
  //   menuType: {
  //     type: String,
  //     enum: ["Breakfast", "Lunch", "Dinner"],
  //   },
  //   franchise: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Franchise",
  //   },
  //   enable: {
  //     type: Boolean,
  //   },
  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Title",
      name: "title",
      validation: "",
      default: "",
      tag: true,
      label: "Title",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "Diet Category",
      name: "dietCategory",
      validation: "",
      default: "",
      tag: true,
      label: "Diet Category",
      required: false,
      view: true,
      add: true,
      update: true,
      apiType: "API",
      selectApi: "type-of-diet/select",
    },
    {
      type: "select",
      placeholder: "Menu Type",
      name: "menuType",
      validation: "",
      default: "",
      tag: true,
      label: "Menu Type",
      required: true,
      view: true,
      add: true,
      update: true,
      apiType: 'CSV',
      selectApi: "Fixed,Optional,Dynamic",
    },
    {
      type: "checkbox",
      placeholder: "Enable",
      name: "enable",
      validation: "",
      default: "",
      tag: true,
      label: "Enable",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [foodGroupItem] = useState([
    //MEAL IS A RECIPE//
    {
      type: "select",
      apiType: "API",
      selectApi: "meal/select",
      updateOn: "mealTimeCategory",
      iconImage: { collection: "", item: "mealPhoto" },
      tags: [
        { type: "text", item: "proteinCategoriesName", title: "Protein Category", collection: "proteinCategory" },
        { type: "text", item: "mealDescription", title: "Description", collection: "" },
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
      placeholder: "Recipe Variant",
      name: "mealVariant",
      validation: "",
      showItem: "mealPrice",
      default: "",
      tag: true,
      label: "Recipe Variant",
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
      type: "callback",
      callback: () => { alert("yes") },
      // itemTitle: "username",
      itemTitle: {
        name: "mealName",
        type: "text",
        collection: "meal",
      },
      title: "Recipe Items",
      attributes: foodGroupItem,
      params: {
        api: `food-group-item`,
        parentReference: "",
        // itemTitle: "username",
        itemTitle: {
          name: "mealName",
          type: "text",
          collection: "meal",
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
        api={`food-menu`}
        displayColumn="single"
        // Property name for the title of each menu item
        // itemTitle={`label`}
        itemTitle={{ name: "title", type: "text", collection: "" }}
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
export default Layout(FoodMenu);
