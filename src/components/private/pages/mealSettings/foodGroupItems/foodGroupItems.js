import React, { useEffect, useState } from "react";
import Layout from "../../../common/layout";
import ListTable from "../../../../elements/list/list";
import { Container } from "../../../common/layout/styels";
//src/components/styles/page/index.js
//if you want to write custom style wirte in above file
const FoodGroupItems = (props) => {
    //to update the page title
    useEffect(() => {
        document.title = `Food Group Items - Diet Food Management Portal`;
    }, []);

    const [attributes] = useState([
        {
            type: "select",
            apiType: "API",
            selectApi: "meal/select",
            placeholder: "Meal",
            name: "meal",
            validation: "",
            showItem: "mealName",
            default: "",
            tag: true,
            label: "Meal",
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
            placeholder: "Meal Variant",
            name: "mealVariant",
            validation: "",
            showItem: "variantGroupName",
            default: "",
            tag: true,
            label: "Meal Variant",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: false,
        },
        {
            type: "number",
            placeholder: "Quantity",
            name: "quantity",
            validation: "",
            default: "",
            tag: true,
            label: "Quantity",
            required: true,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "select",
            apiType: "API",
            selectApi: "food-group/select",
            placeholder: "Food Group",
            name: "foodGroup",
            validation: "",
            showItem: "packageName",
            default: "",
            tag: true,
            label: "Food Group",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: false,
        },
    ]);

    return (
        <Container className="noshadow">
            {/* Render a ListTable component */}
            <ListTable
                // Actions to be displayed in the ListTable
                // actions={actions}
                // API endpoint for fetching menu data
                api={``}
                displayColumn="double"
                // Property name for the title of each menu item
                // itemTitle={`label`}
                itemTitle={{ name: "mealName", type: "text", collection: "meal" }}
                // Short name or label for the menu
                shortName={`Food Group Items`}
                formMode={`double`}
                // Privilege flag indicating whether the user can add menu items
                {...props}
                // Additional attributes related to the menu
                attributes={attributes}
            ></ListTable>
        </Container>
    );
};
// exporting the page with parent container layout..
export default Layout(FoodGroupItems);
