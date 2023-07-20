// Import necessary dependencies and components (not included in this snippet)
import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
import { useSelector } from "react-redux";
import PopupView from "../../../../elements/popupview";
import SetupMenu from "./setupMenu";

// FoodMenu Component
const FoodMenu = (props) => {
  // Get the theme colors from the Redux store
  const themeColors = useSelector((state) => state.themeColors);

  // Update the page title on component mount
  useEffect(() => {
    document.title = `Food Menu - Diet Food Management Portal`;
  }, []);

  // Attributes for the main page representing the food menu items
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
      apiType: "CSV",
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
    // More attributes for diet menu items...
  ]);

<<<<<<< HEAD
  const [foodGroupItem] = useState([
    //MEAL IS A RECIPE//
    {
      type: "select",
      apiType: "API",
      selectApi: "meal/select",
      updateOn: "mealTimeCategory",
      iconImage: { collection: "", item: "mealPhoto" },
      tags: [
        {
          type: "text",
          item: "proteinCategoriesName",
          title: "Protein Category",
          collection: "proteinCategory",
        },
        {
          type: "text",
          item: "mealDescription",
          title: "Description",
          collection: "",
        },
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
  const [menuSetup, setMenuSetup] = useState(false);
  const [openData, setOpenData] = useState(null);
=======
  // State to control the display of the SetupMenu popup
  const [openMenuSetup, setOpenMenuSetup] = useState(false);

  // State to store the data for the item that was clicked on in the ListTable
  const [openItemData, setOpenItemData] = useState(null);

  // Function to close the SetupMenu popup
>>>>>>> origin/master
  const closeModal = () => {
    setOpenMenuSetup(false);
    setOpenItemData(null);
  };

  // Actions to be displayed for each menu item in the ListTable
  const [actions] = useState([
    {
      element: "button",
      type: "callback",
      callback: (item, data) => {
        // Set the data for the clicked item and open the SetupMenu popup
        setOpenItemData({ item, data });
        setOpenMenuSetup(true);
      },
      itemTitle: {
        name: "mealName",
        type: "text",
        collection: "meal",
      },
      icon: "menu",
      title: "Setup Menu",
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
    // More actions...
  ]);

  return (
    <Container className="noshadow">
      {/* Render a ListTable component to display the food menu items */}
      <ListTable
        // Actions to be displayed in the ListTable
        actions={actions}
        // API endpoint for fetching menu data
        api={`food-menu`}
        // Display mode for the ListTable (single-column or double-column)
        displayColumn="single"
        // Property name for the title of each menu item
        // itemTitle={`label`}
        itemTitle={{ name: "title", type: "text", collection: "" }}
        // Short name or label for the menu
        shortName={`Meal`}
        // Form mode for the ListTable (single or double)
        formMode={`double`}
        // Privilege flag indicating whether the user can add menu items
        {...props}
        // Additional attributes related to the menu
        attributes={attributes}
      ></ListTable>
<<<<<<< HEAD
      {menuSetup && openData && (
        <PopupView
          popupData={<SetupMenu openData={openData}></SetupMenu>}
          themeColors={themeColors}
          closeModal={closeModal}
          itemTitle={{ name: "title", type: "text", collection: "" }}
          openData={openData}
=======
      {/* Render the SetupMenu popup when openMenuSetup is true and openItemData is not null */}
      {openMenuSetup && openItemData && (
        <PopupView
          // Popup data is a JSX element which is binding to the Popup Data Area like HOC
          popupData={
            <SetupMenu
              openData={openItemData}
              // Pass selected item data (Menu Title) to the popup for setting the time
            ></SetupMenu>
          }
          themeColors={themeColors}
          closeModal={closeModal}
          itemTitle={{ name: "title", type: "text", collection: "" }}
          openData={openItemData} // Pass selected item data to the popup for setting the time and taking menu id and other required data from the list item
>>>>>>> origin/master
          customClass={"large"}
        ></PopupView>
      )}
    </Container>
  );
};

// Export the page wrapped with the Layout component
export default Layout(FoodMenu);
