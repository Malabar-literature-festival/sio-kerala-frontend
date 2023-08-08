import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const OurTeam = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Our Team - DataHex Security Website Portal`;
    }, []);

    const [attributes] = useState([
        {
            type: "text",
            placeholder: "Name",
            name: "name",
            validation: "",
            default: "",
            label: "Name",
            // tag: true,
            required: true,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "text",
            placeholder: "Designation",
            name: "designation",
            validation: "",
            default: "",
            tag: true,
            label: "Designation",
            required: true,
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
            required: true,
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
            required: true,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "checkbox",
            placeholder: "Active",
            name: "active",
            validation: "",
            default: "false",
            label: "Active",
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
                api={`our-team`}
                itemTitle={{ name: "name", type: "text", collection: "" }}
                shortName={`Our Team`}
                formMode={`single`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(OurTeam);
