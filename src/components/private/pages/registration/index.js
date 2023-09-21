import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Registration = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Registration - DataHex SIO Kerala Portal`;
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
            type: "number",
            placeholder: "Mobile Number",
            name: "mobileNumber",
            validation: "",
            default: "",
            tag: true,
            label: "Mobile Number",
            required: true,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "email",
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
            type: "password",
            placeholder: "Password",
            name: "password",
            validation: "",
            default: "",
            // tag: true,
            label: "Password",
            required: true,
            view: false,
            add: true,
            update: true,
        },
        {
            type: "select",
            placeholder: "Gender",
            name: "gender",
            validation: "",
            default: "",
            tag: true,
            label: "Gender",
            showItem: "Gender",
            required: false,
            view: true,
            filter: false,
            add: true,
            update: true,
            apiType: "CSV",
            selectApi: "Male,Female",
        },
        {
            type: "date",
            placeholder: "Date Of Birth",
            name: "dateOfBirth",
            validation: "",
            default: "",
            label: "Date Of Birth",
            tag: true,
            required: false,
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
            tag: true,
            label: "Place",
            required: false,
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
            tag: true,
            label: "District",
            required: false,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "text",
            placeholder: "Profession",
            name: "profession",
            validation: "",
            default: "",
            tag: true,
            label: "Profession",
            required: false,
            view: true,
            add: true,
            update: true,
        },
        // {
        //     type: "image",
        //     placeholder: "Image",
        //     name: "image",
        //     validation: "",
        //     default: "false",
        //     tag: true,
        //     label: "Image",
        //     required: false,
        //     view: true,
        //     add: true,
        //     update: true,
        // },
    ]);

    return (
        <Container className="noshadow">
            <ListTable
                // actions={actions}
                api={`registration`}
                itemTitle={{ name: "name", type: "text", collection: "" }}
                shortName={`Registration`}
                formMode={`double`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(Registration);
