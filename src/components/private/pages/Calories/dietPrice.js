import React, { useEffect, useState } from "react";
//
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

const DietPrice = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Diet Price - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Liquid",
      name: "liquid",
      validation: "",
      default: "",
      label: "Liquid",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Soft",
      name: "soft",
      validation: "",
      default: "",
      label: "Soft",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Lowcarb",
      name: "lowcarb",
      validation: "",
      default: "",
      label: "Lowcarb",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Regular",
      name: "regular",
      validation: "",
      default: "",
      label: "Regular",
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  return (
    <Container className="noshadow">
      <ListTable
        // actions={actions}
        api={`diet-price`}
        displayColumn="double"
        // itemTitle={`userDisplayName`}
        itemTitle={{ name: "regular", type: "text", collection: "" }}
        shortName={`Diet price`}
        // parentReference={"userType"}
        // referenceId={"64815bde89e0a44fc31c53b0"}
        // formMode={`single`}
        formMode={`double`}
        {...props}
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
export default Layout(DietPrice);
