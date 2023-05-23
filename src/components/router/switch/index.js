import React from "react";
import Menu from "../../private/pages/menu";
import Login from "../../public/login";
import Page404 from "../../private/pages/page404";
import User from "../../private/pages/user";
const Switch = ({ page, key, addPrivilege = true, delPrivilege = true, updatePrivilege = true }) => {
  switch (page) {
    case "login":
      return <Login key={key} addPrivilege={addPrivilege} delPrivilege={delPrivilege} updatePrivilege={updatePrivilege} />;
    case "menu":
      return <Menu key={key} addPrivilege={addPrivilege} delPrivilege={delPrivilege} updatePrivilege={updatePrivilege} />;
    case "user":
      return <User key={key} addPrivilege={addPrivilege} delPrivilege={delPrivilege} updatePrivilege={updatePrivilege} />;
    default:
      return <Page404 key={key}>Invalid page</Page404>;
  }
};

export default Switch;
