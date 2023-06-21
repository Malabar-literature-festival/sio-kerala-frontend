import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Blog = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Blog - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      // Type of input, in this case, a text input
      type: "text",
      // Placeholder text for the input field
      placeholder: "Title",
      // Name of the input field
      name: "title",
      // Validation rules for the input
      validation: "",
      // Default value for the input field
      default: "",
      // Label text for the input field
      label: "Title",
      // Indicates if the input field is required
      required: true,
      // Indicates if the input field should be displayed in the view mode
      view: true,
      // Indicates if the input field should be displayed in the add mode
      add: true,
      // Indicates if the input field should be displayed in the update mode
      update: true,
    },
    {
      type: "text",
      placeholder: "Author",
      name: "author",
      validation: "",
      default: "",
      tag: true,
      label: "Author",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Content",
      name: "content",
      validation: "",
      default: "",
      tag: true,
      label: "Content",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "date",
      placeholder: "Date",
      name: "date",
      validation: "",
      default: "",
      tag: true,
      label: "Date",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Featured Image",
      name: "featuredImage",
      validation: "",
      default: "",
      tag: true,
      label: "Featured Image",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "post-category/select",
      placeholder: "category",
      name: "category",
      showItem: "name",
      validation: "",
      default: "",
      label: "category",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    {
      type: "select",
      apiType: "API",
      selectApi: "franchise/select",
      placeholder: "Franchise",
      name: "franchise",
      showItem: "name",
      validation: "",
      default: "",
      label: "Franchise",
      required: true,
      view: true,
      add: true,
      update: true,
      filter: false,
    },
    // {
    //   type: "text",
    //   placeholder: "category",
    //   name: "category",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "category",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
    // {
    //   type: "text",
    //   placeholder: "franchise",
    //   name: "franchise",
    //   validation: "",
    //   default: "",
    //   tag: true,
    //   label: "franchise",
    //   required: true,
    //   view: true,
    //   add: true,
    //   update: true,
    // },
  ]);
  // const [timingAttributes] = useState([
  //   {
  //     type: "text",
  //     placeholder: "Label",
  //     name: "label",
  //     validation: "",
  //     default: "",
  //     label: "Label",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "number",
  //     placeholder: "Sequence",
  //     name: "sequence",
  //     validation: "",
  //     default: "",
  //     label: "Sequence",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Icon",
  //     name: "icon",
  //     validation: "",
  //     default: "",
  //     label: "Icon",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Path",
  //     name: "path",
  //     validation: "",
  //     default: "",
  //     label: "Path",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "Element Name",
  //     name: "element",
  //     validation: "",
  //     default: "",
  //     label: "Element Name",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "checkbox",
  //     placeholder: "Status",
  //     name: "status",
  //     validation: "",
  //     default: "true",
  //     label: "Status",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  //   {
  //     type: "checkbox",
  //     placeholder: "Is Link",
  //     name: "isLink",
  //     validation: "",
  //     default: "false",
  //     label: "Is Link",
  //     required: true,
  //     view: true,
  //     add: true,
  //     update: true,
  //   },
  // ]);

  // const [actions] = useState([
  //   {
  //     // Element type for rendering
  //     element: "button",
  //     // Type of action, in this case a sublist
  //     type: "subList",
  //     // Unique identifier for the submenu
  //     id: "sub-menu",
  //     // Displayed item title
  //     itemTitle: "title",
  //     // Title of the submenu
  //     title: "Sub Menu",
  //     // Additional attributes for timing
  //     attributes: timingAttributes,
  //     // Parameters for API and submenu configuration
  //     params: {
  //       // API endpoint for submenu data
  //       api: `sub-menu`,
  //       // Parent reference for the submenu
  //       parentReference: "menu",
  //       // Property name for the submenu item title
  //       itemTitle: "label",
  //       // Short name for the submenu
  //       shortName: "Sub Menu",
  //       // Privileges for adding submenu items
  //       addPrivilege: true,
  //       // Privileges for deleting submenu items
  //       delPrivilege: true,
  //       // Privileges for updating submenu items
  //       updatePrivilege: true,
  //       // Custom CSS class for styling
  //       customClass: "medium",
  //     },
  //   },
  // ]);
  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return (
    <Container className="noshadow">
      {/* Render a ListTable component */}
      <ListTable
        // Actions to be displayed in the ListTable
        // actions={actions}
        // API endpoint for fetching menu data
        api={`post-management`}
        // Property name for the title of each menu item
        // itemTitle={`label`}
        // Short name or label for the menu
        itemTitle={{
          name: "title",
          type: "text",
          collection: "",
        }}
        shortName={`Blog`}
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
export default Layout(Blog);
