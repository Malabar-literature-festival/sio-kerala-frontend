import React from "react";
import Menu from "../../private/pages/menu";
import Franchise from "../../private/pages/franchise";
import Login from "../../public/login";
import Page404 from "../../private/pages/page404";
import UserType from "../../private/pages/user/userType";
import Dashboard from "../../private/pages/dashboard";
import Admin from "../../private/pages/franchise/admin";
import AboutUs from "../../private/pages/aboutUs";
import Faq from "../../private/pages/faq";
import Gallery from "../../private/pages/gallery";
import News from "../../private/pages/news";
import Speakers from "../../private/pages/speakers";
import Registration from "../../private/pages/registration";
import Testimonial from "../../private/pages/testimonial";
import Event from "../../private/pages/event";
import EventUser from "../../private/pages/eventUser";
import Article from "../../private/pages/article";
import Deconquista from "../../private/pages/deconquista";
import LeadersNote from "../../private/pages/leadersNote";


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
  addPrivilege = false,
  delPrivilege = false,
  updatePrivilege = false,
  exportPrivilege = false,
}) => {
  console.log(page);
  switch (page) {
    case "login":
      return <Login key={key} />;
    case "menu":
      return (
        <Menu
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "franchise":
      return (
        <Franchise
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "user-role":
      return (
        <UserType
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "dashboard":
      return (
        <Dashboard
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "admin":
      return (
        <Admin
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "about-us":
      return (
        <AboutUs
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "faq":
      return (
        <Faq
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "gallery":
      return (
        <Gallery
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "news":
      return (
        <News
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "article":
      return (
        <Article
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "speakers":
      return (
        <Speakers
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "registration":
      return (
        <Registration
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "testimonial":
      return (
        <Testimonial
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "leadersNote":
      return (
        <LeadersNote
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "event":
      return (
        <Event
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "deconquista":
      return (
        <Deconquista
          key={key}
          exportPrivilege={exportPrivilege}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "event-user":
      return (
        <EventUser
          key={key}
          exportPrivilege={exportPrivilege}
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
