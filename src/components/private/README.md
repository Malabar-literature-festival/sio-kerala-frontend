Pages: The pages inside the private folder are only accessible to authenticated users who have entered a valid vehicle license plate and file number. These pages may contain sensitive information such as personal details or financial data.

//Input type Text
{
    type: "text",
    placeholder: "arrivalTime", //showing text in the text box
    name: "arrivalTime", // db attribute name
    validation: "time", // validation we can create if required
    default: "10:00",
    label: "arrivalTime", //showing text in the label
    required: true,
    view: true,
    add: true,
    update: true,
},
{
    type: "text",
    placeholder: "email",
    name: "email",
    validation: "email",
    default: "",
    label: "email",
    minimum: 5,
    maximum: 40,
    required: true,
},
{
    type: "password",
    placeholder: "password",
    name: "password",
    validation: "password",
    default: "",
    label: "password",
    minimum: 6,
    maximum: 16,
    required: true,
},
//select with CSV
{
    type: "select",
    placeholder: "arrivalDay",
    name: "arrivalDay",
    validation: "",
    default: "",
    label: "arrivalDay",
    required: true,
    view: true, //if true for show
    add: true, //if true for enable in add form
    update: true, //if true enable update
    apiType: "CSV",
    selectApi: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
},
//select with JSON Data
{
    type: "select",
    placeholder: "arrivalPadding",
    name: "arrivalPadding",
    validation: "",
    default: "",
    label: "arrivalPadding",
    required: true,
    view: true,
    add: true,
    update: true,
    filter: false,
    apiType: "JSON",
    selectApi: [
    { value: "30 minutes", id: 30 },
    { value: "60 minutes", id: 60 },
    { value: "120 minutes", id: 120 },
    { value: "180 minutes", id: 180 },
    { value: "240 minutes", id: 240 },
    { value: "300 minutes", id: 300 },
    ],
},
//select with API
{
    type: "select",
    placeholder: "shift",
    name: "shift",
    validation: "",
    default: "",
    label: "shift",
    required: true,
    view: true,
    add: true,
    update: true,
    apiType: "API", //set API for data load from API
    selectApi: "shift/select", //set the API url slug
},
