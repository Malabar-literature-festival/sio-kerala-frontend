import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const Testimonial = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Testimonial - DataHex SIO Kerala Portal`;
    }, []);

    const [attributes] = useState([
        {
            type: "text",
            placeholder: "Title",
            name: "title",
            validation: "",
            default: "",
            label: "Title",
            // tag: true,
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
            label: "Content",
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
            type: "text",
            placeholder: "Author",
            name: "author",
            validation: "",
            default: "",
            label: "Author",
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
                api={`testimonial`}
                itemTitle={{ name: "title", type: "text", collection: "" }}
                shortName={`Testimonial`}
                formMode={`single`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(Testimonial);
