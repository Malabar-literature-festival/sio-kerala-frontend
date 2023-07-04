import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ListTable from "../../../elements/list/list";
import { Container } from "../../common/layout/styels";

const TomorrowOrder = (props) => {
    useEffect(() => {
        document.title = `Today Order - Diet Food Management Portal`;
    }, []);

    const [attributes] = useState([
        {
            type: "select",
            apiType: "API",
            selectApi: "user/select",
            placeholder: "User",
            name: "user",
            validation: "",
            tag: true,
            showItem: "username",
            default: "",
            label: "User",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: false,
        },
        {
            type: "date",
            placeholder: "Order Date",
            name: "orderDate",
            validation: "",
            default: "",
            tag: true,
            label: "Order Date",
            required: true,
            view: true,
            add: true,
            update: true,
        },
        {
            type: "select",
            apiType: "API",
            selectApi: "dayof-week/select",
            placeholder: "Day of week",
            name: "dayOfWeek",
            validation: "",
            showItem: "day",
            default: "",
            tag: true,
            label: "Day of week",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: false,
        },
        {
            type: "select",
            apiType: "API",
            selectApi: "mealtime-category/select",
            placeholder: "Meal-time Category",
            name: "mealTimeCategory",
            validation: "",
            showItem: "mealtimeCategoriesName",
            default: "",
            tag: true,
            label: "Meal-time Category",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: true,
        },
        // {
        //   type: "select",
        //   apiType: "API",
        //   selectApi: "meal/select",
        //   placeholder: "Meal",
        //   name: "meal",
        //   validation: "",
        //   showItem: "mealName",
        //   default: "",
        //   tag: true,
        //   label: "Meal",
        //   required: true,
        //   view: true,
        //   add: true,
        //   update: true,
        //   filter: false,
        // },
        {
            type: "select",
            apiType: "API",
            selectApi: "meal/select",
            updateOn: "mealTimeCategory",
            iconImage: { collection: "", item: "mealPhoto" },
            tags: [
                { type: "text", item: "proteinCategoriesName", title: "Protein Category", collection: "proteinCategory" },
                { type: "text", item: "mealDescription", title: "Description", collection: "" },
            ],
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
            selectApi: "order-statuses/select",
            placeholder: "Order Status",
            name: "orderStatus",
            showItem: "orderStatus",
            validation: "",
            default: "",
            tag: true,
            label: "Order Status",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: true,
        },
        {
            type: "hidden",
            apiType: "",
            selectApi: "",
            placeholder: "",
            name: "date",
            showItem: "",
            validation: "",
            default: new Date(),
            tag: true,
            label: "",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: true,
        },
    ]);

    const [dispatch] = useState([
        {
            type: "select",
            apiType: "API",
            selectApi: "user/select",
            placeholder: "Delivery Men",
            name: "deliveryMen",
            showItem: "username",
            validation: "",
            default: "",
            tag: true,
            label: "Delivery Men",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: false,
        },
        {
            type: "select",
            apiType: "API",
            selectApi: "delivery-instruction/select",
            placeholder: "Delivery Instruction",
            name: "deliveryInstruction",
            showItem: "deliveryInstructionName",
            validation: "",
            default: "",
            tag: true,
            label: "Delivery Instruction",
            required: true,
            view: true,
            add: true,
            update: true,
            filter: false,
        },
    ]);

    const [actions] = useState([
        {
            element: "button",
            type: "subList",
            id: "dispatch",
            itemTitle: {
                name: "userDisplayName",
                type: "text",
                collection: "deliveryMen",
            },
            title: "Dispatch",
            attributes: dispatch,
            params: {
                api: `dispatch`,
                parentReference: "weeklyMealPlanEntry",
                itemTitle: {
                    name: "userDisplayName",
                    type: "text",
                    collection: "deliveryMen",
                },
                shortName: "Dispatch",
                addPrivilege: true,
                delPrivilege: true,
                updatePrivilege: true,
                customClass: "medium",
                formMode: "double",
            },
        },
    ]);

    const today = new Date();
    const startOfDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0,
        0,
        0
    );
    const endOfDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59
    );

    return (
        <Container className="noshadow">
            <ListTable
                actions={actions}
                api="weekly-meal-plan-entry/tomorrow-order"
                preFilter={{ startDate: startOfDay, endDate: endOfDay }}
                itemTitle={{
                    name: "userDisplayName",
                    type: "text",
                    collection: "user",
                }}
                shortName="Order"
                formMode="double"
                {...props}
                attributes={attributes}
            />
        </Container>
    );
};
export default Layout(TomorrowOrder);
