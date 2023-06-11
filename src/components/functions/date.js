import moment from "moment";
export const dateTimeFormat = (date) => {
  return moment(date).format("DD/MM/YYYY hh:mm a");
};

export const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};