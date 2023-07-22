import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const AddRecipe = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Recipe - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Recipe",
      name: "title",
      validation: "",
      default: "",
      label: "Recipe",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Preparation Time (Minutes)",
      name: "preparationTime",
      validation: "",
      default: "",
      tag: true,
      label: "Preparation Time (Minutes)",
      required: true,
      view: true,
      add: true,
      update: true,
    },

    {
      type: "select",
      apiType: "CSV",
      selectApi: "Millilitre,Portion,Gram",
      placeholder: "Measurement Type",
      name: "measurementType",
      validation: "",
      default: "",
      tag: true,
      label: "Measurement Type",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "text",
      placeholder: "Default Variant",
      name: "variant",
      validation: "",
      default: "",
      label: "Default Variant",
      required: true,
      view: false,
      add: true,
      update: false,
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
      view: false,
      add: true,
      update: false,
    },
    {
      type: "number",
      placeholder: "Offer Price",
      name: "offerPrice",
      validation: "",
      default: "",
      tag: true,
      label: "Offer Price",
      required: true,
      view: false,
      add: true,
      update: false,
    },
    {
      type: "textarea",
      placeholder: "Description",
      name: "description",
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
      selectApi: "recipe-tag/select",
      placeholder: "Recipe Tag",
      collection: "recipeTag",
      name: "recipeTag",
      validation: "",
      showItem: "recipeTag",
      default: "",
      tag: true,
      label: "Recipe Tag",
      required: false,
      view: true,
      add: true,
      update: true,
      filter: false,
    },

    {
      type: "image",
      placeholder: "Recipe",
      name: "photo",
      validation: "",
      default: "",
      tag: true,
      label: "Recipe",
      required: false,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [addVariant] = useState([
    {
      type: "text",
      placeholder: "Variant",
      name: "variant",
      validation: "",
      default: "",
      label: "Default Variant",
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
    {
      type: "number",
      placeholder: "Offer Price",
      name: "offerPrice",
      validation: "",
      default: "",
      tag: true,
      label: "Offer Price",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Level",
      name: "percentage",
      validation: "",
      default: "",
      tag: true,
      label: "Level",
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
      selectApi: "ingredient/select",
      placeholder: "Ingredient",
      apiSearch: true,
      name: "ingredient",
      collection: "ingredient",
      validation: "",
      showItem: "ingredientsName",
      default: "",
      tag: false,
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
      name: "percentage",
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
      id: "recipe-variant",
      itemTitle: { name: "title", type: "text", collection: "recipe" },
      title: "Recipe Variant",
      attributes: addVariant,
      params: {
        api: `recipe-variant`,
        parentReference: "recipe",
        itemTitle: { name: "variant", type: "text", collection: "" },
        shortName: "Recipe Variant",
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
      id: "recipe-ingredients",
      itemTitle: { name: "mealName", type: "text", collection: "meal" },
      title: "Recipe Ingredient",
      attributes: mealIngredient,
      params: {
        api: `recipe-ingredients`,
        parentReference: "recipe",
        itemTitle: { name: "ingredientsName", type: "text", collection: "ingredient" },
        shortName: "Recipe Ingredient",
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
        api={`recipe`}
        // itemTitle={`Recipe`}
        itemTitle={{ name: "title", type: "text", collection: "" }}
        shortName={`Recipe`}
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
export default Layout(AddRecipe);
