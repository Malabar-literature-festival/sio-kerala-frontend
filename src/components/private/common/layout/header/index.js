import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Logout, MNav, Status, Title, User } from "./styels";
import { menuStatus } from "../../../../../store/actions/common";
import { CloseIcon, LogoutIcon, MenuIcon } from "../../../../../icons";
import LanguageTooltip from "../../../../elements/tooltip";
import { clearLogin } from "../../../../../store/actions/login";
const Header = (props) => {
  const dispatch = useDispatch();
  const menuCurrentStatus = useSelector((state) => state.menuStatus);
  // const currentMenu = useSelector((state) => state.currentMenu);
  const selectedMenuItem = useSelector((state) => state.selectedMenu);

  const navigate = useNavigate();
  return (
    <Container>
      <MNav
        onClick={() => {
          dispatch(menuStatus());
        }}
      >
        {menuCurrentStatus ? <CloseIcon /> : <MenuIcon />}
      </MNav>
      <Status>
        <Title>{selectedMenuItem.label}</Title>
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
      </Status>
    </Container>
  );
};

export default Header;
