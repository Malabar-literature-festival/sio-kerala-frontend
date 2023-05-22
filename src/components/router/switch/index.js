import React from "react";
import Menu from "../../private/pages/menu";
import Login from "../../public/login";
import Page404 from "../../private/pages/page404";
import User from "../../private/pages/user";
const Switch = ({ page, key }) => {
  console.log(page)
  switch (page) {
    case "login":
      return <Login key={key}/>;
    case "menu":
      return <Menu  key={key}/>;
    case "user":
      return <User  key={key}/>;
    default:
      return <Page404  key={key}>Invalid page</Page404>;
  }
};

export default Switch;
