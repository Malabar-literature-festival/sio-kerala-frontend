import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Gallery = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Gallery - DataHex Security Website Portal`;
    }, []);

    const [attributes] = useState([
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
            type: "select",
            placeholder: "Language",
            name: "language",
            validation: "",
            default: "",
            tag: true,
            label: "Language",
            required: true,
            view: true,
            filter: true,
            add: true,
            update: true,
            apiType: "CSV",
            selectApi: "English,Arabic,Urdu",
        },
    ]);

    return (
        <Container className="noshadow">
            <ListTable
                // actions={actions}
                api={`gallery`}
                itemTitle={{ name: "title", type: "text", collection: "" }}
                shortName={`Gallery`}
                formMode={`single`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(Gallery);
