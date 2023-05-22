import React from "react";
import { Link } from "react-router-dom";
import { Copy, FooterContainer, Nav } from "./styles";
import { useTranslation } from "react-i18next"; // react-i18next hook for translations

const Footer = () => {
  // useTranslation hook to get the i18n instance and t function for translations
  const { t } = useTranslation();

  return (
    <FooterContainer>
      {/* Copyright information */}
      <Copy>©2023 innopark24 GmbH & Co. KG</Copy>
      {/* Navigation links */}
      <Nav>
        {/* Link to the privacy page */}
        <Link to="https://www.innopark24.de/datenschutz">{t("privacy")}</Link>
        {/* Link to the imprint page */}
        <Link to="https://www.innopark24.de/impressum">{t("imprint")}</Link>
      </Nav>
    </FooterContainer>
  );
};

// Export Footer component as the default export of the module
export default Footer;
