import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const AddMeal = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Meal - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Meal",
      name: "mealName",
      validation: "",
      default: "",
      label: "Meal",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Description",
      name: "mealDescription",
      validation: "",
      default: "",
      tag: true,
      label: "Description",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Preparation Time",
      name: "mealPreparationTime",
      validation: "",
      default: "",
      tag: true,
      label: "Preparation Time",
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
      showItem: "proteinCategoriesName",
      default: "",
      tag: true,
      label: "Protein Category",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "cuisine-category/select",
      placeholder: "Cuisine Category",
      name: "cuisineCategory",
      validation: "",
      showItem: "cuisineCategoriesName",
      default: "",
      tag: true,
      label: "Cuisine Category",
      required: true,
      view: true,
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
      showItem: "mealtimeCategoriesName",
      default: "",
      tag: true,
      label: "Meal Time Category",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "meal-tag/select",
      placeholder: "Meal Tag",
      name: "mealTag",
      validation: "",
      showItem: "mealTagName",
      default: "",
      tag: true,
      label: "Meal Tag",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "franchise/select",
    //   placeholder: "Franchise",
    //   name: "franchise",
    //   validation: "",
    //   showItem: "",
    //   default: "",
    //   tag: true,
    //   label: "Franchise",
    //   required: true,
    //   view: false,
    //   add: false,
    //   update: true,
    //   filter: false,
    // },
    {
      type: "image",
      placeholder: "Meal",
      name: "mealPhoto",
      validation: "",
      default: "",
      tag: true,
      label: "Meal",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    // {
    //   type: "text",
    //   placeholder: "delete",
    //   name: "delete",
    //   validation: "",
    //   default: "",
    //   label: "delete",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
  ]);

  const [addVariant] = useState([
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "meal/select",
    //   placeholder: "Meal",
    //   name: "mealName",
    //   validation: "",
    //   showItem: "mealName",
    //   default: "",
    //   tag: true,
    //   label: "Meal",
    //   required: true,
    //   view: true,
    //   add: false,
    //   update: false,
    //   filter: false,
    // },
    {
      type: "select",
      apiType: "API",
      selectApi: "variant-group/select",
      showItem: "variantGroupName",
      placeholder: "Variant Group",
      name: "variantGroup",
      validation: "",
      default: "",
      tag: true,
      label: "variant Group",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "variant-level/select",
      placeholder: "Variant Level",
      name: "variantLevel",
      validation: "",
      showItem: "variantLevelName",
      default: "",
      tag: true,
      label: "variant Level",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      placeholder: "Meal Price",
      name: "mealPrice",
      validation: "",
      default: "",
      tag: true,
      label: "Meal Price",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Meal OfferPrice",
      name: "mealOfferPrice",
      validation: "",
      default: "",
      tag: true,
      label: "Meal OfferPrice",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Number of Persons",
      name: "numberOfPersons",
      validation: "",
      default: "",
      tag: true,
      label: "Number of Persons",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [mealIngredient] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "meal/select",
      placeholder: "Meal",
      name: "meal",
      validation: "",
      showItem: "mealName",
      default: "",
      tag: true,
      label: "Meal",
      required: true,
      view: false,
      add: false,
      update: false,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "ingredient/select",
      placeholder: "Ingredient",
      name: "ingredient",
      collection: "ingredient",
      validation: "",
      showItem: "ingredientsName",
      default: "",
      tag: true,
      label: "Ingredient",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "number",
      placeholder: "Quantity",
      name: "ingredientQuantity",
      validation: "",
      default: "",
      tag: true,
      label: "Quantity",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [actions] = useState([
    {
      element: "button",
      type: "subList",
      id: "meal-variant",
      itemTitle: { name: "mealName", type: "text", collection: "meal" },
      title: "Meal Variant",
      attributes: addVariant,
      params: {
        api: `meal-variant`,
        parentReference: "meal",
        itemTitle: { name: "mealName", type: "text", collection: "meal" },
        shortName: "Meal Variant",
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
      id: "meal-ingredients",
      itemTitle: { name: "mealName", type: "text", collection: "meal" },
      title: "Meal Ingredient",
      attributes: mealIngredient,
      params: {
        api: `meal-ingredients`,
        parentReference: "meal",
        itemTitle: { name: "mealName", type: "text", collection: "meal" },
        shortName: "Meal Ingredient",
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
        actions={actions}
        api={`meal`}
        // itemTitle={`Meal`}
        itemTitle={{ name: "mealName", type: "text", collection: "" }}
        shortName={`Meal`}
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
export default Layout(AddMeal);
