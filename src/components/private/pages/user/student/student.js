import React, { useEffect, useState } from "react";
//
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file

const Student = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Student - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    // {
    //   type: "text",
    //   placeholder: "CPR/Mobile",
    //   name: "username",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "CPR/Mobile",
    //   required: true,
    //   view: false,
    //   add: true,
    //   update: true,
    // },
    {
      type: "text",
      placeholder: "Name",
      name: "username",
      validation: "",
      default: "",
      // tag: true,
      label: "Name",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "School",
      name: "school",
      validation: "",
      default: "",
      tag: true,
      label: "School",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Roll Number",
      name: "rollNumber",
      validation: "",
      default: "",
      tag: true,
      label: "Roll Number",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "number",
      placeholder: "Grade",
      name: "grade",
      validation: "",
      default: "",
      tag: true,
      label: "Grade",
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
        api={`student`}
        // itemTitle={`userDisplayName`}
        itemTitle={{ name: "username", type: "text", collection: "" }}
        shortName={`Student`}
        parentReference={"userType"}
        referenceId={"648d248ac86cf9225e35a794"}
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
export default Layout(Student);
