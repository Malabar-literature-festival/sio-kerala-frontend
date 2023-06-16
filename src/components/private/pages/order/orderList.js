import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const OrderList = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Order List - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select",
      placeholder: "User",
      name: "user",
      validation: "",
      tag: true,
      showItem: "username",
      default: "",
      label: "User",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "date",
      placeholder: "Order Date",
      name: "orderDate",
      validation: "",
      default: "",
      tag: true,
      label: "Order Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "dayof-week/select",
      placeholder: "Day of week",
      name: "dayOfWeek",
      validation: "",
      showItem: "day",
      default: "",
      tag: true,
      label: "Day of week",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    // {
    //   type: "date",
    //   apiType: "API",
    //   selectApi: "",
    //   placeholder: "Week Start",
    //   name: "weeklyMealPlanId",
    //   validation: "",
    //   showItem: "weekStartDate",
    //   default: "",
    //   label: "Week Start",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    //   filter: false,
    // },
    // {
    //   type: "date",
    //   apiType: "API",
    //   selectApi: "",
    //   placeholder: "Week End",
    //   name: "weeklyMealPlanId",
    //   validation: "",
    //   showItem: "weekEndDate",
    //   default: "",
    //   label: "Week End",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    //   filter: false,
    // },
    {
      type: "select",
      apiType: "API",
      selectApi: "mealtime-category/select",
      placeholder: "Meal-time Category",
      name: "mealTimeCategory",
      validation: "",
      showItem: "mealtimeCategoriesName",
      default: "",
      tag: true,
      label: "Meal-time Category",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: true,
    },
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
      view: true,
      add: true,
      update: true,
      filter: false,
    },
<<<<<<< HEAD
=======
  ]);

  const [mealVariant] = useState([
    {
      type: "text",
      placeholder: "Calories",
      name: "calories",
      showItem: "",
      validation: "",
      default: "",
      tag: true,
      label: "Calories",
      required: false,
      view: true,
      add: false,
      update: false,
    },
    {
      type: "text",
      placeholder: "Variant Level",
      name: "variantLevel",
      showItem: "variantLevelName",
      validation: "",
      default: "",
      tag: true,
      label: "Variant Level",
      required: false,
      view: true,
      add: false,
      update: false,
    },
>>>>>>> origin/kavya
    {
      type: "select",
      apiType: "API",
      selectApi: "order-statuses/select",
      placeholder: "Order Status",
      name: "orderStatus",
      showItem: "orderStatus",
      validation: "",
      default: "",
      tag: true,
<<<<<<< HEAD
      label: "Order Status",
=======
      label: "variant Group",
      required: true,
      view: false,
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
      default: "",
      tag: true,
      label: "variant Level",
      required: true,
      view: false,
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
>>>>>>> origin/kavya
      required: true,
      view: true,
      add: true,
      update: true,
      filter: true,
    },
  ]);

  const [dispatch] = useState([
    // {
    //   type: "text",
    //   placeholder: "Delivery Men",
    //   name: "deliveryMen",
    //   showItem: "username",
    //   validation: "",
    //   default: "",
    //   label: "Delivery Men",
    //   required: false,
    //   view: true,
    //   add: false,
    //   update: false,
    // },
    {
      type: "select",
      apiType: "API",
      selectApi: "user/select",
      placeholder: "Delivery Men",
      name: "deliveryMen",
      showItem: "username",
      validation: "",
      default: "",
      tag: true,
      label: "Delivery Men",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "delivery-instruction/select",
      placeholder: "Delivery Instruction",
      name: "deliveryInstruction",
      showItem: "deliveryInstructionName",
      validation: "",
      default: "",
      tag: true,
      label: "Delivery Instruction",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
<<<<<<< HEAD
    // {
    //   type: "select",
    //   apiType: "API",
    //   selectApi: "order-statuses/select",
    //   placeholder: "Order Status",
    //   name: "orderStatus",
    //   showItem: "orderStatus",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "Order Status",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    //   filter: false,
    // },
=======
    {
      type: "select",
      apiType: "API",
      selectApi: "delivery-slot/select",
      placeholder: "Delivery Slot",
      name: "deliverySlot",
      showItem: "slot",
      validation: "",
      default: "",
      tag: true,
      label: "Delivery Slot",
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
      default: "",
      tag: true,
      label: "variant Level",
      required: true,
      view: false,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "order-statuses/select",
      placeholder: "Order Status",
      name: "orderStatus",
      showItem: "orderStatus",
      validation: "",
      default: "",
      tag: true,
      label: "Order Status",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
>>>>>>> origin/kavya
  ]);

  const [actions] = useState([
    {
      element: "button",
      type: "subList",
<<<<<<< HEAD
=======
      id: "meal-variant",
      itemTitle: "orderDate",
      title: "Variants",
      attributes: mealVariant,
      params: {
        api: `user/meal-variant`,
        parentReference: "meal",
        itemTitle: "orderDate",
        shortName: "Variants",
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
>>>>>>> origin/kavya
      id: "dispatch",
      // itemTitle: "orderDate",
      itemTitle: {
        name: "userDisplayName",
        type: "text",
        collection: "deliveryMen",
      },
      title: "Dispatch",
      attributes: dispatch,
      params: {
        api: `dispatch`,
        parentReference: "weeklyMealPlanEntry",
        // itemTitle: "orderDate",
        itemTitle: {
          name: "userDisplayName",
          type: "text",
          collection: "deliveryMen",
        },
        shortName: "Dispatch",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "double",
      },
    },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        actions={actions}
        api={`weekly-meal-plan-entry`}
        // itemTitle={`Weekly Meal Plan Entry`}
<<<<<<< HEAD
        itemTitle={{
          name: "userDisplayName",
          type: "text",
          collection: "user",
        }}
        shortName={`Order`}
=======
        itemTitle={{ name: "username", type: "text", collection: "user" }}
        shortName={`Weekly Meal Plan Entry`}
>>>>>>> origin/kavya
        // formMode={`single`}
        formMode={`double`}
        datefilter={true}
        //
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
export default Layout(OrderList);
