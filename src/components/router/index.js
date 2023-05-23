import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page404 from "../public/page404"; // 404 page component

import Switch from "./switch";
import { useSelector } from "react-redux";

const PageRouter = () => {
  const user = useSelector((state) => state.login);
  const createRouter = (router) => {
    return (
      <Route
        key={`${router._id}`}
        path={`${router.path}`}
        element={<Switch key={`${router._id}`} page={router.element} />}
      />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Switch page="login" />} />

        {user?.data?.menu?.map((menu) => {
          if (menu.submenus?.length > 0) {
            return (
              <React.Fragment key={menu._id}>
                {createRouter(menu)}
                {menu.submenus.map((submenu) => createRouter(submenu))}
              </React.Fragment>
            );
          }
          return createRouter(menu);
        })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export PageRouter component as the default export of the module
export default PageRouter;
