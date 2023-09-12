import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Event = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Event - DataHex SIO Kerala Portal`;
    }, []);

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
            tag: true,
            required: false,
            view: true,
            add: true,
            update: true,
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
            selectApi: "Seminar,Workshop,Reading Session",
        },
        {
            type: "checkbox",
            placeholder: "Is Registration Open",
            name: "theme",
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
            required: true,
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
    ]);

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
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(Event);
