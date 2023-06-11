import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const RedeemCoupon = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Redeem Coupon - Diet Food Management Portal`;
  }, []);

  const [attributes] = useState([
    {
      // Type of input, in this case, a text input
      type: "text",
      // Placeholder text for the input field
      placeholder: "Coupon",
      // Name of the input field
      name: "title",
      // Validation rules for the input
      validation: "",
      // Default value for the input field
      default: "",
      // Coupon text for the input field
      label: "Coupon",
      // Indicates if the input field is required
      title: true,
      // title when true it will show as title fild for the view, view should be true then only it will work
      required: true,
      // Indicates if the input field should be displayed in the view mode
      view: true,
      // Indicates if the input field should be displayed in the add mode
      add: true,
      // Indicates if the input field should be displayed in the update mode
      update: true,
    },
    {
      type: "number",
      placeholder: "Coupon Code",
      name: "code",
      validation: "",
      default: "",
      label: "Coupon Code",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Coupon Type",
      name: "type",
      validation: "",
      default: "",
      label: "Coupon Type",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Uses Count",
      name: "usesCount",
      validation: "",
      default: "",
      label: "Uses Count",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Min Purchase",
      name: "minPurchase",
      validation: "",
      default: "",
      label: "Min Purchase",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Max Purchase",
      name: "maxDiscount",
      validation: "",
      default: "",
      label: "Max Purchase",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Discount",
      name: "discount",
      validation: "",
      default: "",
      label: "Discount",
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Customer Type",
      name: "customerType",
      validation: "",
      default: "",
      label: "Customer Type",
      required: true,
      view: true,
      add: true,
      update: true,
    },
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
        api={`redeem-coupon`}
        // Property name for the title of each menu item
        itemTitle={`redeem coupon`}
        // Short name or label for the menu
        shortName={`redeem coupon`}
        // Privilege flag indicating whether the user can add menu items
        {...props}
        // Additional attributes related to the menu
        attributes={attributes}
      ></ListTable>
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(RedeemCoupon);
