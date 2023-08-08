import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const ContactUs = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Contact Us - DataHex Security Website Portal`;
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
            placeholder: "Email",
            name: "email",
            validation: "",
            default: "",
            tag: true,
            label: "Email",
            required: true,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "textarea",
            placeholder: "Message",
            name: "message",
            validation: "",
            default: "",
            tag: true,
            label: "Message",
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
                api={`contact-us`}
                itemTitle={{ name: "name", type: "text", collection: "" }}
                shortName={`Contact Us`}
                formMode={`single`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(ContactUs);
