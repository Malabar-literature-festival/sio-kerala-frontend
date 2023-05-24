import React from "react";
import Menu from "../../private/pages/menu";
import Franchise from "../../private/pages/franchise";
import Login from "../../public/login";
import Page404 from "../../private/pages/page404";
import Meal from "../../private/pages/meal";
import UserType from "../../private/pages/user/userType";
import OrderStatus from "../../private/pages/dispatch/orderStatus";
import UserList from "../../private/pages/user/userList";
/**
 * Switch component to render different pages based on the provided page prop.
 * @param {string} page - The page to be rendered.
 * @param {string} key - The key prop for React's list reconciliation.
 * @param {boolean} addPrivilege - Flag indicating whether the user has add privilege.
 * @param {boolean} delPrivilege - Flag indicating whether the user has delete privilege.
 * @param {boolean} updatePrivilege - Flag indicating whether the user has update privilege.
 * @returns {JSX.Element} - The JSX element representing the rendered page.
 */
const Switch = ({
  page,
  key,
  addPrivilege = true,
  delPrivilege = true,
  updatePrivilege = true,
}) => {
  switch (page) {
    case "login":
      return <Login key={key} />;
    case "menu":
      return (
        <Menu
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "franchise":
      return (
        <Franchise
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "recepe":
      return (
        <Meal
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "user-role":
      return (
        <UserType
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "user-list":
      return (
        <UserList
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "order-status":
      return (
        <OrderStatus
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    default:
      return <Page404 key={key}></Page404>;
  }
};

export default Switch;
