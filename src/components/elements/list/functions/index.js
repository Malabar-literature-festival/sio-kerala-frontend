import { dateFormat, dateTimeFormat } from "../../../functions/date";
import { Img } from "../styles";
export function convertMinutesToHHMM(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);

  const hoursStr = hours.toString().padStart(2, "0");
  const minsStr = mins.toString().padStart(2, "0");

  return `${hoursStr}:${minsStr}`;
}
export const getValue = (attribute, itemValue) => {
  let response = "";
  switch (attribute.type) {
    case "minute":
      response = convertMinutesToHHMM(parseFloat(itemValue ?? 0));
      break;
    case "image":
      response = <Img src={process.env.REACT_APP_CDN + itemValue} />;
      break;
    case "datetime":
      response = dateTimeFormat(itemValue);
      break;
    case "date":
      response = dateFormat(itemValue);
      break;
    case "textarea":
      response = itemValue?.substring(0, 200);
      break;
    case "icon":
      response = <i className={`fa-light ${itemValue}`} />;
      break;
    default:
      switch (typeof itemValue) {
        case "undefined":
          response = "--";
          break;
        case "object":
          response = itemValue?.[attribute.showItem] ?? "--";
          break;
        case "boolean":
          response = itemValue.toString();
          break;
        case "string":
        case "number":
        default:
          if (attribute.type === "select" && attribute.apiType === "JSON") {
            attribute.selectApi.filter((item) => item.id.toString() === itemValue?.toString()).map((filteredItem) => (response = filteredItem.value));
          } else {
            response = itemValue?.toString().substring(0, 200);
          }
          break;
      }
  }
  return response;
};
