import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const SpeakerPoster = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `News - DataHex SIO Kerala Portal`;
    }, []);

    const [attributes] = useState([
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
    ]);

    return (
        <Container className="noshadow">
            <ListTable
                // actions={actions}
                api={`speaker-poster`}
                itemTitle={{ name: "title", type: "text", collection: "" }}
                shortName={`News`}
                formMode={`single`}
                {...props}
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(SpeakerPoster);
