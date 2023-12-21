import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Attendance = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `News - DataHex SIO Kerala Portal`;
    }, []);

    const [attributes] = useState([
        {
            type: "select",
            apiType: "API",
            placeholder: "User",
            name: "user",
            showItem: "name",
            validation: "",
            default: "",
            tag: true,
            label: "User",
            required: false,
            view: true,
            add: true,
            update: true,
            filter: false,
      
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
            type: "date",
            placeholder: "Date",
            name: "date",
            validation: "",
            default: "",
            label: "Date",
            tag: true,
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
                api={`attendance`}
                itemTitle={{ name: "name", type: "text", collection: "user" }}
                shortName={`News`}
                formMode={`single`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(Attendance);
