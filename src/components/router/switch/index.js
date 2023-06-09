import React from "react";
import Menu from "../../private/pages/menu";
import Franchise from "../../private/pages/franchise";
import Login from "../../public/login";
import Page404 from "../../private/pages/page404";
import Meal from "../../private/pages/meal";
import UserType from "../../private/pages/user/userType";
import OrderStatus from "../../private/pages/dispatch/orderStatus";
import UserList from "../../private/pages/user/userList";
import ProteinCategory from "../../private/pages/mealSettings/proteinCategory";
import MealTimeCategory from "../../private/pages/mealSettings/mealTimeCategory";
import MealTag from "../../private/pages/mealSettings/mealTag";
import VariantGroup from "../../private/pages/mealSettings/variantGroup";
import VaraiantLevel from "../../private/pages/mealSettings/varaiantLevel";
import DayOfWeek from "../../private/pages/mealSettings/dayOfWeek";
import AimOfProgram from "../../private/pages/registrationSettings/aimOfProgram";
import MedicalCondition from "../../private/pages/registrationSettings/medicalCondition";
import FoodlikeList from "../../private/pages/registrationSettings/foodlikeList";
import FoodDislikeList from "../../private/pages/registrationSettings/foodDislikeList";
import AddictionList from "../../private/pages/registrationSettings/addictionList";
import DeliverySlot from "../../private/pages/dispatch/deliverySlot";
import DeliveryInstruction from "../../private/pages/dispatch/deliveryInstruction";
import TypeOfDiet from "../../private/pages/diet/typeOfDiet";
import WeeklyMealPlan from "../../private/pages/mealSettings/weeklyMealPlan";
import RedeemCoupen from "../../private/pages/dispatch/redeemCoupon";
import Patient from "../../private/pages/user/patient";
import MedicationList from "../../private/pages/registrationSettings/medicationList";
import PackageManagement from "../../private/pages/packageManagement";
import Supplement from "../../private/pages/registrationSettings/supplement";
import DeliveryStatus from "../../private/pages/dispatch/deliveryStatus";
import CuisineCategory from "../../private/pages/mealSettings/cuisineCategory";
import ActivenessStatus from "../../private/pages/registrationSettings/activenessStatus";
import DiscountTypeName from "../../private/pages/dispatch/discountType";
import Banner from "../../private/pages/banner/banner";
import BannerType from "../../private/pages/banner/bannerType";
import MealIngredient from "../../private/pages/mealSettings/mealIngredient";
import Dietician from "../../private/pages/dietician";
import Deliveryman from "../../private/pages/dispatch/deliveryman";
import Ingredient from "../../private/pages/mealSettings/Ingredient/ingredient";
import AddMeal from "../../private/pages/mealSettings/addMeal";
import VehicleCategory from "../../private/pages/dispatch/vechileCategory";
import MedicalRecord from "../../private/pages/user/medicalRecord";
import AddVariant from "../../private/pages/mealSettings/addVariant";
import Appointment from "../../private/pages/user/appointment/appointment";
import OrderList from "../../private/pages/order/orderList";
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
    case "delivery-slot":
      return (
        <DeliverySlot
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "protein-category":
      return (
        <ProteinCategory
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "delivery-instruction":
      return (
        <DeliveryInstruction
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "type-of-diet":
      return (
        <TypeOfDiet
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
    case "mealtime-category":
      return (
        <MealTimeCategory
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "meal-tag":
      return (
        <MealTag
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "variant-group":
      return (
        <VariantGroup
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "variant-level":
      return (
        <VaraiantLevel
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "day-of-week":
      return (
        <DayOfWeek
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "aimof-program":
      return (
        <AimOfProgram
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "medical-condition":
      return (
        <MedicalCondition
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "foodlike-list":
      return (
        <FoodlikeList
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "fooddislike-list":
      return (
        <FoodDislikeList
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "addiction-list":
      return (
        <AddictionList
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "weekly-meal-plan":
      return (
        <WeeklyMealPlan
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "redeem-coupon":
      return (
        <RedeemCoupen
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "patient":
      return (
        <Patient
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "Cuisine-Category":
      return (
        <CuisineCategory
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "medication-list":
      return (
        <MedicationList
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "activeness-Status":
      return (
        <ActivenessStatus
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "package-management":
      return (
        <PackageManagement
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "discount-type":
      return (
        <DiscountTypeName
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "supplement":
      return (
        <Supplement
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "banner":
      return (
        <Banner
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "delivery-status":
      return (
        <DeliveryStatus
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "banner-type":
      return (
        <BannerType
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "meal-ingredient":
      return (
        <MealIngredient
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "recipe-ingredient":
      return (
        <Ingredient
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "dietitian":
      return (
        <Dietician
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "delivery-man":
      return (
        <Deliveryman
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "add-meal":
      return (
        <AddMeal
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "vehicle-category":
      return (
        <VehicleCategory
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "medical-record":
      return (
        <MedicalRecord
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "add-variant":
      return (
        <AddVariant
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "appointment":
      return (
        <Appointment
          key={key}
          addPrivilege={addPrivilege}
          delPrivilege={delPrivilege}
          updatePrivilege={updatePrivilege}
        />
      );
    case "order-list":
      return (
        <OrderList
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
