import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Header, Nav, SubMenu } from "./styels";
import { useTranslation } from "react-i18next"; // react-i18next hook for translations
import { useDispatch, useSelector } from "react-redux";
import { currentMenu, menuStatus } from "../../../../../store/actions/common";
import { GetIcon, LogoutIcon } from "../../../../../icons";
import LanguageTooltip from "../../../../elements/tooltip";
import { Logo, Logout, User } from "../header/styels";
import { clearLogin } from "../../../../../store/actions/login";
import { logo } from "../../../../../images";
const Menu = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const themeColors = useSelector((state) => state.themeColors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Logo src={logo} alt="logo" />
      <Header className="hd">
        <User>{props.user.user.email}</User>
        <Logout
          onClick={() => {
            dispatch(clearLogin());
            navigate("/");
          }}
        >
          <LogoutIcon />
        </Logout>
        <LanguageTooltip></LanguageTooltip>
      </Header>
      <Nav theme={themeColors}>
        {/* Link to the home page */}
        {props.user.menu?.map((menuItem) => (
          <div key={menuItem._id}>
            {menuItem.submenus.length > 0 ? (
              <React.Fragment>
                <a
                  onClick={() => {
                    // dispatch(menuStatus(false));
                    // dispatch(currentMenu(menuItem.label));
                  }}
                  className={location.pathname === menuItem.path ? "open active" : "open"}
                >
                  <GetIcon icon={`home`} /> {t(menuItem.label)}
                </a>
                <SubMenu>
                  {menuItem.submenus?.map((submenu) => (
                    <Link
                      key={submenu._id} // Use submenu.label as the key
                      onClick={() => {
                        dispatch(menuStatus(false));
                        dispatch(currentMenu(submenu.label)); // Use submenu.label in currentMenu dispatch
                      }}
                      className={location.pathname === submenu.path ? "main active" : "main"} // Use submenu.path for the active class
                      to={submenu.path} // Use submenu.path for the link destination
                    >
                      <GetIcon icon={`home`} /> {t(submenu.label)} {/* Use submenu.label for the link text */}
                    </Link>
                  ))}
                </SubMenu>
              </React.Fragment>
            ) : (
              <Link
                onClick={() => {
                  dispatch(menuStatus(false));
                  dispatch(currentMenu(menuItem.label));
                }}
                className={location.pathname === menuItem.path ? "main active" : "main"}
                to={menuItem.path}
              >
                <GetIcon icon={`home`} /> {t(menuItem.label)}
              </Link>
            )}
          </div>
        ))}
      </Nav>
    </>
  );
};

export default Menu;
