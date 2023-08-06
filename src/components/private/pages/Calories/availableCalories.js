import React, { useEffect, useState } from "react";
//
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

const AvailableCalories = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Available Calories - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
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
    // {
    //   type: "text",
    //   placeholder: "Dietition Value",
    //   name: "dietitionValue",
    //   validation: "",
    //   default: "",
    //   label: "Dietition Value",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    // {
    //   type: "text",
    //   placeholder: "Kitchen Value",
    //   name: "kitchenValue",
    //   validation: "",
    //   default: "",
    //   label: "Kitchen Value",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    {
      type: "text",
      placeholder: "Erly Mornign Snacks",
      name: "erlyMornignSnacks",
      validation: "",
      tag: true,
      default: "",
      label: "Erly Mornign Snacks",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Breakfast",
      name: "breakfast",
      validation: "",
      tag: true,
      default: "",
      label: "Breakfast",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Lunch",
      name: "lunch",
      validation: "",
      tag: true,
      default: "",
      label: "Lunch",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Evening Snacks",
      name: "eveningSnacks",
      validation: "",
      tag: true,
      default: "",
      label: "Evening Snacks",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Dinner",
      name: "dinner",
      validation: "",
      tag: true,
      default: "",
      label: "Dinner",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "franchise/select",
      placeholder: "Franchise",
      name: "franchise",
      validation: "",
      showItem: "name",
      default: "name",
      tag: true,
      label: "Franchise",
      required: false,
      view: false,
      add: false,
      update: false,
      filter: false,
    },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        // actions={actions}
        api={`available-calories`}
        displayColumn="double"
        // itemTitle={`userDisplayName`}
        itemTitle={{ name: "calories", type: "text", collection: "" }}
        shortName={`Available Calories`}
        // parentReference={"userType"}
        // referenceId={"64815bde89e0a44fc31c53b0"}
        formMode={`single`}
        // formMode={`double`}
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
export default Layout(AvailableCalories);
