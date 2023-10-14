import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import PopupView from "../../../elements/popupview";
import { Container } from "../../common/layout/styels";
import moment from "moment";
import SetupRecipe from "./setup";
import { useSelector } from "react-redux";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Event = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `Event - DataHex SIO Kerala Portal`;
  }, []);

  const themeColors = useSelector((state) => state.themeColors);

  const [attributes] = useState([
    {
      type: "text",
      placeholder: "Title",
      name: "title",
      validation: "",
      default: "",
      label: "Title",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Venue",
      name: "venue",
      validation: "",
      default: "",
      label: "Venue",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Short Description",
      name: "shortDescription",
      validation: "",
      default: "",
      label: "Short Description",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Description",
      name: "description",
      validation: "",
      default: "",
      label: "Description",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Theme",
      name: "theme",
      validation: "",
      default: "",
      label: "Theme",
      tag: true,
      required: false,
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
      label: "Date",
      minDate: moment().add(-70, "years").toDate(),
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "time",
      placeholder: "Time",
      name: "time",
      validation: "",
      default: "",
      label: "Time",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "select",
      placeholder: "Event Mode",
      name: "eventMode",
      validation: "",
      default: "",
      label: "Event Mode",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "Online, Offline, Hybrid",
    },
    {
      type: "select",
      placeholder: "Month",
      name: "month",
      validation: "",
      default: "",
      label: "month",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi: "September,October,November,December",
    },
    {
      type: "select",
      placeholder: "Event Type",
      name: "eventType",
      validation: "",
      default: "",
      label: "Event Type",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
      apiType: "CSV",
      selectApi:
        "Seminar,Workshop,Public Discussion,Reading Session,Academic Conference,Book Talks,Online Academic Conclaves",
    },
    {
      type: "checkbox",
      placeholder: "Is Registration Open",
      name: "isEnroll",
      validation: "",
      default: "",
      label: "Is Registration Open",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Header Image",
      name: "headerImage",
      validation: "",
      default: "false",
      tag: true,
      label: "Header Image",
      required: false,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Image",
      name: "image",
      validation: "",
      default: "false",
      tag: true,
      label: "Image",
      required: false,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [faqDetails] = useState([
    {
      type: "text",
      placeholder: "event id",
      name: "event",
      validation: "",
      default: "",
      label: "event id",
      required: false,
      view: true,
      // tag: true,
    },
    {
      type: "text",
      placeholder: "Question",
      name: "question",
      validation: "",
      default: "",
      label: "Question",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Answer",
      name: "answer",
      validation: "",
      default: "",
      label: "Answer",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [speakerDetails] = useState([
    {
      type: "text",
      placeholder: "event id",
      name: "event",
      validation: "",
      default: "",
      label: "event id",
      required: false,
      view: true,
      // tag: true,
    },
    {
      type: "text",
      placeholder: "Name",
      name: "name",
      validation: "",
      default: "",
      label: "Name",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "textarea",
      placeholder: "Designation",
      name: "designation",
      validation: "",
      default: "",
      label: "Designation",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Image",
      name: "photo",
      validation: "",
      default: "",
      label: "Image",
      tag: true,
      required: false,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [materialDetails] = useState([
    {
      type: "text",
      placeholder: "event id",
      name: "event",
      validation: "",
      default: "",
      label: "event id",
      required: false,
      view: true,
      // tag: true,
    },
    {
      type: "text",
      placeholder: "Title",
      name: "title",
      validation: "",
      default: "",
      label: "Title",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "image",
      placeholder: "Image",
      name: "materialUpload",
      validation: "",
      default: "",
      label: "Image",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [registeredUser] = useState([
    {
      type: "text",
      placeholder: "Name",
      name: "name",
      validation: "",
      default: "",
      label: "Name",
      required: false,
      view: true,
      // tag: true,
    },
    {
      type: "Number",
      placeholder: "Age",
      name: "age",
      validation: "",
      default: "",
      label: "Age",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Mobile",
      name: "mobileNumber",
      validation: "",
      default: "",
      label: "Mobile",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Email",
      name: "email",
      validation: "",
      default: "",
      label: "Email",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "District",
      name: "district",
      validation: "",
      default: "",
      label: "District",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Place",
      name: "place",
      validation: "",
      default: "",
      label: "Place",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
  ]);

  const [attendedUsers] = useState([
    {
      type: "text",
      placeholder: "Name",
      name: "name",
      validation: "",
      default: "",
      label: "Name",
      required: false,
      view: true,
      // tag: true,
    },
    {
      type: "Number",
      placeholder: "Age",
      name: "age",
      validation: "",
      default: "",
      label: "Age",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Mobile Number",
      name: "mobileNumber",
      validation: "",
      default: "",
      label: "Mobile Number",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Email",
      name: "email",
      validation: "",
      default: "",
      label: "Email",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "District",
      name: "district",
      validation: "",
      default: "",
      label: "District",
      tag: true,
      required: true,
      view: true,
      add: true,
      update: true,
    },
    {
      type: "text",
      placeholder: "Place",
      name: "place",
      validation: "",
      default: "",
      label: "Place",
      tag: true,
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
      id: "faq",
      itemTitle: {
        name: "title",
        type: "text",
        collection: "",
      },
      title: "faq",
      attributes: faqDetails,
      params: {
        api: `faq`,
        parentReference: "event",
        itemTitle: {
          name: "question",
          type: "text",
          collection: "",
        },
        shortName: "Faq Details",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "single",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "speaker",
      itemTitle: {
        name: "name",
        type: "text",
        collection: "",
      },
      title: "speaker",
      attributes: speakerDetails,
      params: {
        api: `speakers`,
        parentReference: "event",
        itemTitle: {
          name: "name",
          type: "text",
          collection: "",
        },
        shortName: "Speaker Details",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "single",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "material",
      itemTitle: {
        name: "title",
        type: "text",
        collection: "",
      },
      title: "Material",
      attributes: materialDetails,
      params: {
        api: `material`,
        parentReference: "event",
        itemTitle: {
          name: "title",
          type: "text",
          collection: "",
        },
        shortName: "Material Details",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
        formMode: "single",
      },
    },
    {
      element: "button",
      type: "subList",
      id: "registeredUser",
      itemTitle: {
        name: "name",
        type: "text",
        collection: "",
      },
      title: "Registered User",
      attributes: registeredUser,
      params: {
        api: `eventRegUser`,
        parentReference: "event",
        itemTitle: {
          name: "name",
          type: "text",
          collection: "",
        },
        shortName: "Registered User Data",
        addPrivilege: false,
        delPrivilege: false,
        updatePrivilege: false,
        customClass: "medium",
        formMode: "single",
        exportPrivilege: true,
        printPrivilege:true,
      },
    },
    {
      element: "button",
      type: "subList",
      id: "attendedUsers",
      itemTitle: {
        name: "name",
        type: "text",
        collection: "",
      },
      title: "Attended Users",
      attributes: attendedUsers,
      params: {
        api: `attended-users`,
        parentReference: "event",
        itemTitle: {
          name: "name",
          type: "text",
          collection: "",
        },
        shortName: "Attended Users Data",
        addPrivilege: false,
        delPrivilege: false,
        updatePrivilege: false,
        customClass: "medium",
        formMode: "single",
        exportPrivilege: true,
      },
    },
    {
      element: "button",
      type: "callback",
      callback: (item, data) => {
        // Set the data for the clicked item and open the SetupMenu popup
        console.log(item, data);
        setOpenItemData({ item, data });
        setOpenMenuSetup(true);
      },
      itemTitle: {
        name: "user",
        type: "text",
        collection: "",
      },
      icon: "menu",
      title: "Scan",
      params: {
        api: `scanning`,
        parentReference: "",
        itemTitle: {
          name: "user",
          type: "text",
          collection: "",
        },
        shortName: "Scan",
        addPrivilege: true,
        delPrivilege: true,
        updatePrivilege: true,
        customClass: "medium",
      },
    },
  ]);
  // State to control the display of the SetupMenu popup
  const [openMenuSetup, setOpenMenuSetup] = useState(false);

  // State to store the data for the item that was clicked on in the ListTable
  const [openItemData, setOpenItemData] = useState(null);

  // Function to close the SetupMenu popup
  const closeModal = () => {
    setOpenMenuSetup(false);
    setOpenItemData(null);
  };
  return (
    <Container className="noshadow">
      <ListTable
        parentReference={"event"}
        actions={actions}
        api={`event`}
        itemTitle={{ name: "title", type: "text", collection: "" }}
        shortName={`Event`}
        formMode={`double`}
        {...props}
        attributes={attributes}
      ></ListTable>
      {openMenuSetup && openItemData && (
        <PopupView
          // Popup data is a JSX element which is binding to the Popup Data Area like HOC
          popupData={
            <SetupRecipe
              openData={openItemData}
              setMessage={props.setMessage}
              // Pass selected item data (Menu Title) to the popup for setting the time
            ></SetupRecipe>
          }
          themeColors={themeColors}
          closeModal={closeModal}
          itemTitle={{ name: "title", type: "text", collection: "" }}
          openData={openItemData} // Pass selected item data to the popup for setting the time and taking menu id and other required data from the list item
          customClass={"scan"}
        ></PopupView>
      )}
    </Container>
  );
};
// exporting the page with parent container layout..
export default Layout(Event);
