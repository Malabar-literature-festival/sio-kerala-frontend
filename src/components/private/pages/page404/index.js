import React, { useEffect } from "react";
import Layout from "../../common/layout";
import {  MainContainer } from "../../common/layout/styels";
const Page404 = (props) => {
  //to update the page title
  useEffect(() => {
    document.title = `404 - Diet Food Management Portal`;
  }, []);

  // Use the useTranslation hook from react-i18next to handle translations
  // const parkingDuration = totalDuration > 120 ? (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes + t("m")) : totalDuration.toFixed(0) + ` ` + t("minutes");
  return <MainContainer className="center">Page is not found</MainContainer>;
};
// exporting the page with parent container layout..
export default Layout(Page404);
