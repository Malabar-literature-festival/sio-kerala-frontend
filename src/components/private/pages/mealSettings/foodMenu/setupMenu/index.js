import React, { useEffect, useState } from "react";
import { GetIcon } from "../../../../../../icons";
import { getData } from "../../../../../../backend/api";
import { NoData } from "../../../../../elements/list/styles";
import { ColumnContainer, RowContainer } from "../../../../../styles/containers/styles";
import Search from "../../../../../elements/search";
import { TabContainer, TabButton, Table, TableHeader, TableBody, TableRow, MealCategoryCell, Div, TableCell, FoodButton, TabData, TabDataItem, MealItem, Title, Variants, Variant } from "./styles"; // Import styles from styles.js
const SetupMenu = ({ openData, themeColors }) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [menuId] = useState(openData.data._id);
  const [menuData, setMenuData] = useState(null);
  const [meals, setMeals] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState("meals");
  const [searchValue, setSearchValue] = useState("");
  const searchChange = (item) => {
    setSearchValue(item.target.value);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    getData({}, tab === "meals" ? "food-group" : "recipe/search").then((result) => {
      tab === "meals" ? setMeals(result.data.response) : setRecipes(result.data.response);
      console.log("meals", meals, "recipes", recipes);
    });
  };
  const handleAddFood = (mealTimeCategoryId, dayIndex) => {
    // Handle adding food to the selected cell
    console.log(`Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`);
    alert(`Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`);
  };

  useEffect(() => {
    getData({ menuId: openData.data._id }, "food-menu/get-a-menu").then((response) => {
      setMenuData(response.data);
      console.log(response);
    });
  }, [openData.data._id]);

  return menuData ? (
    <ColumnContainer style={{marginBottom:'30px'}}>
      <RowContainer>
        <Table>
          <thead>
            <tr>
              <MealCategoryCell></MealCategoryCell>
              {daysOfWeek.map((day, index) => (
                <TableHeader key={index}>{day}</TableHeader>
              ))}
            </tr>
          </thead>
          <TableBody>
            {menuData.mealTimeCategories.map((mealTimeCategory, categoryIndex) => (
              <TableRow key={mealTimeCategory._id}>
                <MealCategoryCell>{mealTimeCategory.mealtimeCategoriesName}</MealCategoryCell>
                {daysOfWeek.map((day, dayIndex) => (
                  <TableCell className={dayIndex === 0 ? "first" : ""} key={dayIndex}>
                    <Div>
                      <FoodButton onClick={() => handleAddFood(mealTimeCategory._id, dayIndex)}>
                        <GetIcon icon={"add"}></GetIcon>
                      </FoodButton>
                    </Div>
                  </TableCell>
                ))}
                <MealCategoryCell></MealCategoryCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </RowContainer>
      <RowContainer className="mealSelection">
        <TabContainer>
          <TabButton active={activeTab === "meals"} onClick={() => handleTabClick("meals")}>
            Meals
          </TabButton>
          <TabButton active={activeTab === "recipes"} onClick={() => handleTabClick("recipes")}>
            Recipes
          </TabButton>
        </TabContainer>

        <TabData>
          <Search title={"Search"} theme={themeColors} placeholder="Search" value={searchValue} onChange={searchChange} />
          {activeTab === "meals" && meals && (
            <TabDataItem>
              {meals.map((meal) => (
                <MealItem key={meal._id}>
                  <div>{meal.packageName ?? "Title not found!"}</div>
                </MealItem>
              ))}
            </TabDataItem>
          )}
          {activeTab === "recipes" && recipes && (
            <TabDataItem>
              {recipes.map((recipe) => (
                <MealItem key={recipe._id}>
                  <Title>{recipe.title ?? "Title not found!"}</Title>
                  <Variants>
                    {recipe.recipeVariants.map((variant) => {
                      return (
                        <Variant>
                          <span>
                            <span>BHD</span>
                            <span className="price">{variant.price}</span>
                            <span className="offer">{variant.price}</span>{" "}
                          </span>
                          <span className="variant">{variant.variant} </span>
                        </Variant>
                      );
                    })}
                  </Variants>
                </MealItem>
              ))}
            </TabDataItem>
          )}
        </TabData>
      </RowContainer>
    </ColumnContainer>
  ) : (
    <NoData>Loading</NoData>
  );
};

export default SetupMenu;
